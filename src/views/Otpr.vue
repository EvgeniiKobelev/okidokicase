<template>
  <div class="row">
    <div class="col s12 m6 offset-m3">
      <button
        class="btn orange accent-4"
        @click.prevent="$router.push('/profile#otpr')"
      >
        Назад
      </button>
      <div class="col s12">
        <div class="card white">
          <div class="card-content left-align">
            <span class="card-title">Отправление №: {{ id }}</span>
            <small>отправлено</small>
            <div class="section">
              История отправления: <br />
              Отправлен <strong>{{ date }}</strong> <br />
              <div v-if="this.info.podarokDostavlen">
                Получен <strong>{{ this.info.datePolychenia }}</strong>
              </div>
              <div v-else>
                <p>Подарок еще не получен</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section">Карта трек-номера</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      date: null,
      options: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    };
  },
  mounted() {
    this.date = new Date(this.info.dateOtpr).toLocaleString("ru", this.options);
  },
  computed: {
    ...mapGetters(["info"]),
  },
};
</script>
