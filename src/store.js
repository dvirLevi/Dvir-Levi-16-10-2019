import Vue from 'vue'
import Vuex from 'vuex'
import callServer from '@/services/callServer.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityComplete: [],
  },
  mutations: {
    pushCity(state, city) {
      state.cityComplete = city;
    }

  },
  actions: {
    async getAutoComplete(store, cityName) {
      try {
        let city = await callServer.getAutoComplete(cityName);
        console.log(city)
        store.commit('pushCity', city)
      } catch (err) {
        console.log(err)
      }
    },
  }
})