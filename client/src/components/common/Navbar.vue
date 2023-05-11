<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Speeches of Presidents</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              ><router-link to="/">Home</router-link>
            </a>
          </li>
          <span>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/analysis">Analysis</router-link>
              </a>
            </li>
          </span>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/about">About</router-link>
            </a>
          </li>
          <!-- <span v-if="!loginFlag">
            <li class="nav-item">
              <a class="nav-link">
                <router-link v-if="!loginFlag" to="/login">Login</router-link>
              </a>
            </li>
          </span>
          <span v-if="!loginFlag">
            <li class="nav-item">
              <a class="nav-link">
                <router-link v-if="!loginFlag" to="/sign_up"
                  >Sign up</router-link
                >
              </a>
            </li>
          </span> -->
          <span v-if="loginFlag">
            <li class="nav-item">
              <a class="nav-link">
                <router-link
                  @click.native="logout"
                  class="fontColor font"
                  to="/login"
                  >Log Out</router-link
                >
              </a>
            </li>
          </span>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";
export default {
  name: "navbar",
  // data() {
  //   return {
  //     showNav: false,
  //   };
  // },
  // computed: {
  //   ...mapGetters("common", ["loginFlag"]),
  // },
  // methods: {
  //   ...mapActions(["common/logout"]),
  //   logout: function () {
  //     this.$store.dispatch("common/logout");
  //   },
  // },
};
</script>

<style scoped>
</style>