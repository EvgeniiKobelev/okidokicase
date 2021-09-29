<template>
  <div class="row">
    <div class="col s12 m6 offset-m3">
      <form class="card" @submit.prevent="registerHandler">
        <div class="card-content">
          <span class="card-title center">Регистрация</span>
          <div class="input-field">
            <input id="email" type="email" class="validate" v-model="email" />
            <label for="email">Email</label>
            <small
              class="helper-text"
              data-error="Не бывает такого"
              data-success="Успех!"
              >Введите ваш e-mail</small
            >
          </div>
          <div class="input-field">
            <input
              id="password"
              type="password"
              class="validate"
              v-model="password"
            />
            <label for="password">Пароль</label>
            <small class="helper-text" data-error="Не бывает такого"
              >Введите пароль</small
            >
          </div>
          <div class="input-field">
            <input id="name" type="text" class="validate" v-model="name" />
            <label for="name">Имя</label>
            <small
              class="helper-text"
              data-error="Не бывает такого"
              data-success="Успех!"
              >Введите ваше имя</small
            >
          </div>
          <div class="input-field">
            <input id="pochtindex" type="text" v-model="pochtindex" />
            <label for="pochtindex">Почтовый индекс</label>
            <small
              class="helper-text"
              data-error="Не бывает такого"
              data-success="Успех!"
              >Введите почтовый индекс</small
            >
          </div>
          <div class="input-field">
            <input id="regage" type="number" v-model.number="regage" />
            <label for="regage">Введите возраст</label>
            <small
              class="helper-text"
              data-error="Не бывает такого"
              data-success="Успех!"
              >Ваш возраст</small
            >
          </div>
          <div class="input-field">
            <select v-model="reggender" ref="reggender">
              <option value="0" disabled selected>Пол</option>
              <option value="Неопределенный">Неопределенный</option>
              <option value="Муж">Мужской</option>
              <option value="Жен">Женский</option>
            </select>
            <label>Пол</label>
          </div>
          <div class="input-field">
            <select v-model="country" ref="selectcountry">
              <option value="none" disabled selected>Выберите страну</option>
              <option value="RU">Россия</option>
              <option value="UK">Украина</option>
            </select>
            <label>Выберите страну</label>
          </div>

          <div class="input-field">
            <input
              id="favorites"
              type="text"
              class="validate"
              v-model="myfavorites"
            />
            <label for="favorites">Предпочтения</label>
            <small
              class="helper-text"
              data-error="Не бывает такого"
              data-success="Успех!"
              >Например, "Люблю красный цвет"</small
            >
          </div>
          <div class="file-field input-field">
            <div class="btn orange accent-4">
              <span>Загрузить аватар</span>
              <input
                id="file"
                type="file"
                @change="previewImage"
                accept="image/*"
              />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>
          <p>
            <label>
              <input type="checkbox" v-model="agree" />
              <span
                >С правилами
                <router-link to="/rules">согласен</router-link></span
              >
            </label>
          </p>
        </div>
        <div class="card-action">
          <div>
            <button
              class="btn waves-effect waves-light auth-submit orange accent-4"
              type="submit"
            >
              Зарегистрироваться
              <i class="material-icons right">send</i>
            </button>
          </div>

          <p class="center">
            Уже есть аккаунт?
            <router-link to="/login">Войти!</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      pochtindex: "",
      country: "",
      myfavorites: "",
      agree: false,
      reggender: "",
      regage: null,
    };
  },
  mounted() {
    M.FormSelect.init(this.$refs.selectcountry);
    M.FormSelect.init(this.$refs.reggender);
  },
  methods: {
    previewImage(event) {
      this.imageData = event.target.files[0];
    },
    async registerHandler() {
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        date: new Date().setHours(23, 59, 59, 999),
        imageData: this.imageData,
        sendPage: false,
        activeProject: false,
        tracking: false,
        pochtindex: this.pochtindex,
        country: this.country,
        myfavorites: this.myfavorites,
        reggender: this.reggender,
        regage: this.regage,
      };
      try {
        await this.$store.dispatch("register", formData);
        this.$router.push("/login");
      } catch (error) {}
    },
  },
};
</script>
