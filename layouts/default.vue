<template>
  <div>
    <nuxt/>
    <Menu :texts="texts" />
    <footer id="page-footer">
      <p>Tema personalizado pola empresa Opsou e finalizado pola comunidade de CoruñaTech.</p>
      <a :href="texts.globals.home_url" class="claim dark">
        Feito con moito cariño en
        <strong>{{ texts.globals.city }}</strong>
      </a>
      <br>
      <button v-if="showButtonRemoveCookies" @click="removeCookie">Eliminar Cookie de navegador</button>
    </footer>

    <vue-cookie-accept-decline
      ref="cookieBanner"
      :disable-decline="false"
      :transition-name="'slideFromBottom'"
      :show-postpone-button="true"
      :debug="false"
      position="bottom-left"
      type="floating"
      element-id="cookie-banner"
      @status="onCookieStatus"
      @clicked-accept="onCookieClickedAccept"
      @removed-cookie="onCookieRemovedCookie"
      @clicked-postpone="onCookieClickedPostpone"
      @clicked-decline="onCookieClickedDecline"
    >
      <!-- Optional -->
      <div slot="postponeContent">&times;</div>

      <!-- Optional -->
      <div slot="message">
        Empregamos cookies propias e de terceiros para mellorar a experiencia de usuario.
        <router-link to="/post/legal">Saber máis</router-link>
      </div>

      <!-- Optional -->
      <div slot="declineContent">Non acepto</div>

      <!-- Optional -->
      <div slot="acceptContent">Ok, adiante</div>
    </vue-cookie-accept-decline>
  </div>
</template>

<script>
const Config = require("../static/custom/config");
const Texts = require(`../static/communities/${Config.city}.json`);
import Menu from "~/components/Menu";
export default {
  components: {
    Menu
  },
  data() {
    return {
      showButtonRemoveCookies: true
    };
  },
  computed: {
    texts() {
      return Texts;
    }
  },
  methods: {
    onCookieStatus(status) {
      this.$store.commit("setCookieStatus", status);
      if (status !== null) {
        this.showButtonRemoveCookies = true;
      } else {
        this.showButtonRemoveCookies = false;
      }
      if (status == "accept") {
        this.mostrarBoton = true;
        this.$ga.enable();
        this.$ga.page(this.$router);
      }
    },
    removeCookie() {
      this.showButtonRemoveCookies = false;
      this.$store.commit("setCookieStatus", status);
      //remove key in localStorage
      this.$refs.cookieBanner.removeCookie();
    },
    onCookieRemovedCookie() {
      this.showButtonRemoveCookies = false;
      //Evaluates the cookie status and shows the panel if proper conditions are met
      this.$refs.cookieBanner.init();
      this.$store.commit("setCookieStatus", status);
    },
    onCookieClickedAccept() {
      this.showButtonRemoveCookies = true;
      this.$store.commit("setCookieStatus", status);
    },
    onCookieClickedPostpone() {
      this.showButtonRemoveCookies = true;
    },
    onCookieClickedDecline() {
      this.showButtonRemoveCookies = true;
    }
  }
};
</script>
