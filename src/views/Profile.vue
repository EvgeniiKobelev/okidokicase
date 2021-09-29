<template>
  <div class="row center" v-show="loading">
    <div class="col s12 m6 offset-m3">
      <img class="circle" :src="avatarImg" width="180" />
      <h4>{{ name }}</h4>

      <hr />
      <div class="row">
        <div class="col s12">
          <ul class="tabs" ref="tabs">
            <li class="tab col m4">
              <a class="active" href="#bio">Информация</a>
            </li>
            <li class="tab col m4">
              <a href="#otpr">Отправление</a>
            </li>
            <li class="tab col m4">
              <a href="#pol">Получение</a>
            </li>
          </ul>
        </div>
        <div id="bio" class="col s12">
          <div class="row">
            <div class="col s12">
              <div class="card white">
                <div class="card-content left-align">
                  <span class="card-title">Краткая информация</span>
                  <div class="section">
                    <strong>Рейтинг:</strong> {{ info.stars }}
                  </div>
                  <!-- <div class="section">
                    <label>
                      <input type="checkbox" />
                      <span>Участвовать в обмене подарками</span>
                    </label>
                  </div> -->
                  <div class="section">
                    <strong>Дата регистрации:</strong> {{ date }}
                  </div>

                  <div class="section">
                    <strong>Страна:</strong> {{ info.country }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col s12">
              <div class="card white">
                <div class="card-content left-align">
                  <span class="card-title">Информация о себе</span>
                  <div class="section">
                    <strong>Пол:</strong> {{ info.reggender }}
                  </div>

                  <div class="section">
                    <strong>Возраст:</strong> {{ info.regage }}
                  </div>

                  <div class="section">
                    <strong>Предпочтения:</strong> {{ info.myfavorites }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="otpr" class="col s12">
          <div class="row">
            <div class="col s12">
              <div class="card white">
                <div class="card-content left-align" v-if="OtpravilPodarok">
                  <span class="card-title">Отправил</span>
                  <div class="section">
                    <strong>№ отправления</strong>
                  </div>
                  <div class="section">
                    <table>
                      <tr
                        class="hoverable"
                        @click.prevent="
                          $router.push(`/profile/otpr-${info.trackNumber}`)
                        "
                      >
                        <td class="col m6">{{ info.trackNumber }}</td>
                        <td class="col m6 right-align">{{ date }}</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div v-else class="section">
                  <p>
                    Вы еще не отправили никому подарок <br />
                    <router-link to="/okidoki">Отправить подарок</router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="pol" class="col s12">
          <div class="row">
            <div class="col s12">
              <div class="card white">
                <div class="card-content left-align" v-if="PolychilPodarok">
                  <span class="card-title">Получил</span>
                  <div class="section">
                    <strong>№ отправления</strong>
                  </div>
                  <div class="section">
                    <table>
                      <tr
                        class="hoverable"
                        @click.prevent="
                          $router.push(
                            `/profile/pol-${info.sendingTrackNumber}`
                          )
                        "
                      >
                        <td class="col m6">{{ info.sendingTrackNumber }}</td>
                        <td class="col m6 right-align">
                          {{ datePolycheniaPodarka }}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div v-else class="section">
                  <p>Вам еще никто не отправил подарок</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      avatarImg: null,
      changeBio: false,
      name: "",
      date: null,
      OtpravilPodarok: false,
      PolychilPodarok: false,
      options: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      datePolycheniaPodarka: null,
      loading: true,
    };
  },
  methods: {
    ...mapActions(["updateInfo"]),
  },
  mounted() {
    this.avatarImg = this.info.avatarImg;
    this.name = this.info.name;

    this.OtpravilPodarok = this.info.OtpravilPodarok;
    this.PolychilPodarok = this.info.sending;
    this.date = new Date(this.info.date).toLocaleString("ru", this.options);
    this.datePolycheniaPodarka = new Date(
      this.info.sendingDateOtpr
    ).toLocaleString("ru", this.options);
    setTimeout(() => {
      M.Tabs.init(this.$refs.tabs);
    }, 0);
  },
  computed: {
    ...mapGetters(["info"]),
  },
};
</script>
