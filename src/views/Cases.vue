<template>
  <div class="row center">
    <div class="col m6 offset-m3 s12">
      <table>
        <tr>
          <td>
            <h5>Отзывы</h5>
          </td>
          <td>
            <button @click="addOtziv" class="btn right orange accent-4">
              Добавить свой
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div class="row" v-if="addForm">
    <div class="col s12 m6 offset-m3 center">
      <table class="striped">
        <tr>
          <td>Название:</td>
          <td>
            <input type="text" v-model="nazvanie" />
          </td>
        </tr>
        <tr>
          <td>Описание:</td>
          <td>
            <textarea
              class="materialize-textarea"
              v-model="opisanie"
            ></textarea>
          </td>
        </tr>
      </table>
      <div class="row">
        <div class="file-field input-field">
          <div class="btn orange accent-4">
            <span>Фото подарка</span>
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
      </div>
      <div class="">
        <button @click="OtpravitOtziv" class="btn orange accent-4">
          Добавить
        </button>
      </div>
      <div class="section" v-text="spasiboZaOtziv"></div>
    </div>
  </div>
  <div class="row">
    <div class="col center m6 offset-m3">
      <div v-for="num of cases" :key="num" class="card">
        <div class="card-image">
          <img :src="num.imageUrl" />
          <span class="card-title orange accent-4">{{ num.nazvanie }}</span>
        </div>
        <div class="card-content">
          <p>
            {{ num.opisanie }}
          </p>
        </div>
        <!-- <div class="card-action">
          <a href="#">Читать подробнее</a>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import firebase from "firebase/app";
import "firebase/storage";
export default {
  data() {
    return {
      tabs: null,
      addForm: false,
      spasiboZaOtziv: "",
      nazvanie: "",
      opisanie: "",
      cases: [],
    };
  },
  async mounted() {
    this.tabs = M.Tabs.init(this.$refs.tabs);
    this.cases = await this.$store.dispatch("fetchCases");
  },
  methods: {
    ...mapActions(["updateInfo"]),
    addOtziv() {
      this.addForm = true;
    },
    async OtpravitOtziv() {
      this.spasiboZaOtziv = "Ваш отзыв успешно добавлен!";

      const uid = await this.$store.dispatch("getUid");
      const idCase = new Date();
      const metaData = {
        contentType: "image/png",
      };
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(
        `images/${uid}/cases/${this.imageData.name}`
      );
      await imageRef.put(this.imageData, metaData);
      const downloadUrl = await imageRef.getDownloadURL();
      // add case
      await firebase.database().ref(`/cases/${idCase}`).set({
        imageUrl: downloadUrl,
        nazvanie: this.nazvanie,
        opisanie: this.opisanie,
        author: uid,
      });
      window.location.reload();
    },
    previewImage(event) {
      this.imageData = event.target.files[0];
    },
  },
  computed: {
    ...mapGetters(["info"]),
  },
};
</script>
