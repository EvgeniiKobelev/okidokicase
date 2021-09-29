<template>
  <div class="row center">
    <div class="col s12 m6 offset-m3">
      <div class="container1">
        <img
          class="responsive-img"
          src="../assets/bgempty.jpg"
          alt="Фон главной страницы"
        />
        <div class="rowbtn center">
          <router-link
            to="/register"
            class="waves-effect waves-light btn orange accent-4"
            ><i class="material-icons left">person_add</i
            >Регистрация</router-link
          >
        </div>
      </div>
      <div class="center">
        <h4 class="orange-text text-accent-4">Как это работает?</h4>
      </div>
      <div class="row olspisok">
        <div class="col m6 s12">
          <ul>
            <li><h5>1. Зарегистрируйте и заполните свои данные</h5></li>
            <li><h5>2. Участвуйте в обмене подарками</h5></li>
            <li><h5>3. Получите адрес получателя</h5></li>
          </ul>
        </div>
        <div class="col m6 s12">
          <ul>
            <li><h5>4. Соберите и отправьте подарок</h5></li>
            <li><h5>5. Получите подарок в ответ</h5></li>
            <li><h5>6. Делитесь своими эмоциями</h5></li>
          </ul>
        </div>
      </div>
      <div class="orange accent-4 white-text">
        <div class="row stats">
          <div class="col m6 s12">
            <div class="row valign-wrapper">
              <div class="col offset-m1 m3">
                <img src="../assets/img/doc22.png" width="120" />
              </div>
              <div class="col m8">
                <span class="white-text">
                  <h2>1 112</h2>
                  <p style="font-size: 22px">Пользователей</p>
                </span>
              </div>
            </div>
          </div>
          <div class="col m6 s12">
            <div class="row valign-wrapper">
              <div class="col m3">
                <img src="../assets/img/oki_1934.png" width="120" />
              </div>
              <div class="col m9">
                <span class="white-text">
                  <h2>589</h2>
                  <p style="font-size: 22px">Полученных подарков</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="center">
    <h3 class="orange-text text-accent-4">Отзывы</h3>
  </div> -->
      <div class="divider"></div>
      <div class="center terms" id="rules">
        <h3 class="orange-text text-accent-4">Правила и соглашения</h3>
        <div class="row left-align">
          <div class="col m6 valign-wrapper">
            <img src="../assets/img/doc11.png" width="80" />
            <router-link to="/polozhenie"><h5>Положения</h5></router-link>
          </div>
          <div class="col m6 valign-wrapper">
            <img src="../assets/img/doc11.png" width="80" />
            <router-link to="/politicconf">
              <h5>Политика конфиденциальности</h5></router-link
            >
          </div>
        </div>
        <div class="row left-align">
          <div class="col m6 valign-wrapper">
            <img src="../assets/img/doc11.png" width="80" />
            <router-link to="/rules"
              ><h5>Пользовательское соглашение</h5></router-link
            >
          </div>
          <div class="col m6 valign-wrapper">
            <img src="../assets/img/doc11.png" width="80" />
            <router-link to="/rulesforuser"><h5>Инструкция</h5></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
};
</script>
<style scoped>
#rules a {
  color: black;
}
.terms img {
  margin: 10px 30px 10px 10px;
}
.container1 {
  padding: 0;
  margin: 0;
}
.rowbtn {
  position: relative;
  top: -65px;
}
.olspisok {
  font-size: 22px;
  line-height: 2em;
  padding: 25px 0px 25px 25px;
}
ul {
  margin: 0px 0px;
}
.stats {
  padding: 20px 0px;
}
.row {
  margin: 0px;
}
.col {
  margin: 0px;
}
</style>
