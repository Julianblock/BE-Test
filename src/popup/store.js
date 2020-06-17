import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
       loggedIn: false,
       phone: false,
       calendar: false,
       comms: false,
       email: false,
    },
    mutations: {
      set(state, data) {
        Object.entries(data).forEach(([key, value]) => {
          state[key] = value;
        });
      },
    },
});
