<template>
  <div v-if="loading">
    <div v-if="tracking" class="row center">
      <div class="col m6 offset-m3">
        <h4>Вы успешно подтвердили трек-номер!</h4>
        Отследить заказ можно
        <router-link to="/profile#otpr">здесь</router-link>
      </div>
    </div>
    <div v-else-if="sendPage" class="row center">
      <div class="col m6 offset-m3">
        <h1>Поздравляю!</h1>
        <div class="section">
          <p>
            {{ info.persona.info.name }} уже ждет ваш подарок. Отправляйтесь на
            почту и отправьте подарок по этому адресу
            {{ info.persona.info.pochtindex }}
          </p>
          <p>
            У вас есть <strong>30 дней</strong>, для того чтобы отправить
            подарок
          </p>
        </div>

        <div class="section">
          <input
            type="text"
            placeholder="Ввести трек-номер"
            v-model="trackNumber"
          />
        </div>
        <div class="section">
          <button
            class="btn waves-effect waves-light orange accent-4"
            @click.prevent="trackingActive"
          >
            Подтвердить трек-номер
          </button>
        </div>
      </div>
    </div>
    <div v-else-if="activeProject" class="row center">
      <div class="col m6 offset-m3">
        <h5>
          <strong>{{ name }}</strong> , для того, чтобы получить подарок, вам
          необходимо сначала выбрать человека и отправить подарок
        </h5>
        <form @submit.prevent="selectPeople">
          <div class="row center">
            <p>Пол:</p>
            <div class="row center">
              <select class="browser-default" v-model="gender">
                <option value="0" disabled selected>Выберите пол</option>
                <option value="Муж">Мужской</option>
                <option value="Жен">Женский</option>
                <option value="Неопределенный">Неопределенный</option>
              </select>
            </div>
          </div>

          <div class="row center" v-show="step2">
            <p>Страна:</p>
            <div class="row center">
              <select class="browser-default" v-model="selected">
                <option value="none" disabled selected>Выберите страну</option>
                <option value="RU">Россия</option>
                <option value="UK">Украина</option>
              </select>
            </div>
          </div>
          <div class="row center" v-show="step3">
            <p>Возраст:</p>
            <div class="row center">
              <select class="browser-default" v-model="age">
                <option value="0" disabled selected>Выберите возраст</option>
                <option value="1">Младше 14</option>
                <option value="2">15-18 лет</option>
                <option value="3">19-25</option>
                <option value="4">26-35</option>
                <option value="5">36-45</option>
                <option value="6">46-55</option>
                <option value="7">56-65</option>
                <option value="8">66 и старше</option>
              </select>
            </div>
            <button
              class="btn waves-effect waves-light orange accent-4"
              type="submit"
            >
              Выбрать человека
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div v-else class="row center">
      <div class="col m6 offset-m3">
        <h5>Добро пожаловать, {{ name }}!</h5>
        <p>
          С нами уже <strong>1320</strong> человек из <strong>13</strong> стран
        </p>
        <div class="section">
          Стать участником проекта Получи подарок и получить свой подарок очень
          легко. Пройди регистрацию – это займёт 5 минут, получи адрес для
          отправки подарка другому пользователю, отправь подарок и напиши
          администрации сайта трек посылки, в ответ тебе вышлют трек посылки для
          тебя и… ВУАЛЯ... ты получаешь подарок!
        </div>

        <p>
          <label>
            <input type="checkbox" v-model="agree" />
            <span
              >С правилами <router-link to="/rules">согласен</router-link></span
            >
          </label>
        </p>
        <button
          class="btn waves-effect waves-light orange accent-4"
          type="submit"
          @click.prevent="stepUno"
        >
          Участвовать в проекте
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
    <div v-if="selectedPeople" class="row center">
      <div class="col m6 offset-m3">
        <img class="circle" :src="persona.info.avatarImg" alt="" width="180" />
        <h3>{{ persona.info.name }}</h3>
        <p>Почтовый адрес: {{ persona.info.pochtindex }}</p>
        <p>Страна: {{ persona.info.country }}</p>
        <p>Предпочтения: {{ persona.info.myfavorites }}</p>
        <button
          class="btn waves-effect waves-light orange accent-4"
          @click.prevent="sendPageActive"
        >
          Перейти на страницу отправки
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import messages from "../utils/messages";
import { mapGetters, mapActions } from "vuex";
import firebase from "firebase/app";
export default {
  data() {
    return {
      name: "",
      activeProject: false,
      gender: null,
      step2: false,
      step3: false,
      selected: "0",
      selectedPeople: false,
      sendPage: false,
      backTime: null,
      tracking: false,
      agree: false,
      age: null,
      trackNumber: null,
      users: {},
      loading: false,
      persona: {
        info: {
          avatarImg: "noavatar.png",
          name: "no name",
          pochtindex: "000000",
          country: "Russia",
          myfavorites: "no",
        },
        id: "000000",
      },
    };
  },
  async mounted() {
    this.users = await this.$store.dispatch("fetchUsers");
    setInterval(() => {
      this.loading = true;
    }, 10);

    this.persona = await this.info.persona;

    this.tracking = await this.info.tracking;
    this.sendPage = await this.info.sendPage;
    this.name = await this.info.name;
    this.activeProject = await this.info.activeProject;
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  methods: {
    ...mapActions(["updateInfo"]),
    selectPeople() {
      for (let p in this.users) {
        if (
          this.users[p].info.reggender == this.gender &&
          this.users[p].info.country == this.selected
        ) {
          this.persona = this.users[p];
        }
      }
      if (this.persona.info.name == "no name") {
        this.$message(
          "Такой человек еще не зарегистрирован в системе. Попробуйте другие параметры"
        );
      }
      // this.persona = this.users.find(
      //   (item) => item.info.reggender == this.gender
      // );
      this.selectedPeople = true;
    },
    async trackingActive() {
      try {
        this.tracking = true;
        await this.updateInfo({
          tracking: this.tracking,
          trackNumber: this.trackNumber,
          dateOtpr: new Date().setHours(23, 59, 59, 999),
          OtpravilPodarok: true,
        });
        const infoPersona = (
          await firebase
            .database()
            .ref(`/users/${this.persona.id}/info`)
            .once("value")
        ).val();
        const otKogo = firebase.auth().currentUser;
        const sendingPersona = {
          sending: true,
          sendingTrackNumber: this.trackNumber,
          sendingDateOtpr: new Date().setHours(23, 59, 59, 999),
          otKogo: otKogo.uid,
        };
        const updatePersona = { ...infoPersona, ...sendingPersona };
        await firebase
          .database()
          .ref(`/users/${this.persona.id}/info`)
          .update(updatePersona);
      } catch (error) {
        throw error;
      }
    },
    async stepUno() {
      try {
        this.activeProject = true;
        await this.updateInfo({
          activeProject: this.activeProject,
        });
      } catch (error) {
        throw error;
      }
    },
    async sendPageActive() {
      try {
        this.selectedPeople = false;
        this.sendPage = true;
        await this.updateInfo({
          sendPage: this.sendPage,
          persona: this.persona,
        });
      } catch (error) {
        throw error;
      }
    },
  },
  watch: {
    gender: function (val) {
      if (val !== null) {
        this.step2 = true;
      }
    },

    selected: function (value) {
      if (value !== "none") {
        this.step3 = true;
      }
    },
  },
  computed: {
    ...mapGetters(["info"]),
  },
};
</script>
