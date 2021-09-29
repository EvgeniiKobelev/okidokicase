<template>
  <div class="row">
    <div class="col s12 m6 offset-m3">
      <button
        class="btn orange accent-4"
        @click.prevent="$router.push('/profile#pol')"
      >
        Назад
      </button>
      <div class="card white">
        <div class="card-content left-align">
          <span class="card-title">Отправление №: {{ id }}</span>
          <small>отправлено</small>

          <div class="section">
            История отправления <br />
            Отправлен <strong>{{ datePolycheniaPodarka }}</strong> <br />
          </div>
          <div v-if="disabled">
            Получен
            <strong>{{ datePolychenia }}</strong>
            <div class="right-align">
              <button
                class="btn orange accent-4"
                @click="YaPolychilPodarok"
                :disabled="disabled"
                v-text="YaPolychilPodarokText"
              ></button>
            </div>
          </div>
          <div v-else>
            <div class="right-align">
              <button class="btn orange accent-4" @click="YaPolychilPodarok">
                Я получил подарок
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="section">Карта трек-номера</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import firebase from "firebase/app";
export default {
  props: ["id"],
  data() {
    return {
      datePolycheniaPodarka: null,
      disabled: false,
      YaPolychilPodarokText: "Получил",
      datePolychenia: "__.__.____",
      options: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    };
  },
  methods: {
    ...mapActions(["updateInfo"]),
    async YaPolychilPodarok() {
      this.disabled = true;
      this.YaPolychilPodarokText = "Подарок получен";
      this.datePolychenia = new Date().toLocaleString("ru", this.options);
      await this.updateInfo({
        disabled: this.disabled,
        YaPolychilPodarokText: this.YaPolychilPodarokText,
        datePolychenia: new Date().setHours(23, 59, 59, 999),
        sending: false,
      });
      const infoOtkogoPodarok = (
        await firebase
          .database()
          .ref(`/users/${this.info.otKogo}/info`)
          .once("value")
      ).val();
      const otpravkaOtveta = {
        podarokDostavlen: true,
        datePolychenia: this.datePolychenia,
      };
      const updateOtKogoPodarok = { ...infoOtkogoPodarok, ...otpravkaOtveta };
      await firebase
        .database()
        .ref(`/users/${this.info.otKogo}/info`)
        .update(updateOtKogoPodarok);
    },
  },
  computed: {
    ...mapGetters(["info"]),
  },
  mounted() {
    this.datePolycheniaPodarka = new Date(
      this.info.sendingDateOtpr
    ).toLocaleString("ru", this.options);

    this.disabled = this.info.disabled;
    this.YaPolychilPodarokText = this.info.YaPolychilPodarokText;
    this.datePolychenia = new Date(this.info.datePolychenia).toLocaleString(
      "ru",
      this.options
    );
  },
};
</script>
