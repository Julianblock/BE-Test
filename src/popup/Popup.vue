<template>
<div>
  <div class="home" v-if="!loggedIn">
    <div style="display: flex;align-items: center;margin-bottom: 50px;width: 80%;justify-content: center;"><img alt="Focust Logo" src="@/assets/logo.png" class="home-img">
    <h1 style="font-family: unset;color: #767676;">Focust</h1>
    </div>
    <input type="email" placeholder="Email:" class="home__input">
    <input type="password" placeholder="Password:" class="home__input">
    <button class="home__btn-submit" @click="logIn">Submit</button>
  </div>
  <div v-else-if="loggedIn">
    <Menu />
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import Menu from './Menu/Menu.vue'

export default {
  name: 'Popup',
  components: {
    Menu,
  },
  computed: {
    ...mapState(['loggedIn']),
  },
  methods: {
    logIn() {
      this.$store.commit('set', {
         loggedIn: true,
      });
    }
  },
}
</script>

<style>
body {
    font-family: 'Nunito',sans-serif;
}
  .home {
    font-family: 'Nunito',sans-serif;
    background: white;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 350px;
    height: 470px;
  }
  .home__input {
    margin-top: 10px; 
    width: 90%; 
    height: 42px; 
    padding-left: 5px;
    font-size: 16px; 
    border-radius: 10px; 
    border: none; 
    margin-top: 20px;
    margin-bottom: 10px;
    box-shadow: dimgrey 0px 0px 2px; 
    cursor: auto;
  }
  .home-img {
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .home__btn-submit {
    margin-top: 100px;
    width: 65%;
    height: 45px;
    background: linear-gradient(75deg, #1d93c6, #0cd49a);
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #6b6b6b;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }
  .home__btn-submit:hover {
    box-shadow: 0px 5px 10px #6b6b6b;
  }
</style>
