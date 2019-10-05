import Vue from 'vue'
import Vuex from 'vuex'
import callServer from '@/services/callServer.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: {
      name: "Tel Aviv"
    },
    cityComplete: [],
    DaysOfDaily: {},
    cityFromStorage: []
  },
  mutations: {
    pushCity(state, city) {
      state.cityComplete = city;
    },
    pushDays(state, DaysOfDaily) {
      state.DaysOfDaily = DaysOfDaily;
    },
    addToLocalStorage(state, city) {
      let arr = [];
      if (localStorage.getItem("WeatherFavoritesCity")) {
        arr = JSON.parse(localStorage.getItem("WeatherFavoritesCity"))
      }
      if (city) {
        arr.push(city);
      }
      state.cityFromStorage = arr;
      localStorage.removeItem("WeatherFavoritesCity");
      localStorage.setItem("WeatherFavoritesCity", JSON.stringify(arr));
    },
    deleteFormLocalStorage(state, city) {
      let arr = [];
      arr = JSON.parse(localStorage.getItem("WeatherFavoritesCity"))
      let index = arr.findIndex((val) => {
        return val.Key === city.Key
      });
      arr.splice(index, 1)
      state.cityFromStorage = arr;
      localStorage.removeItem("WeatherFavoritesCity");
      localStorage.setItem("WeatherFavoritesCity", JSON.stringify(arr));
    },
    pushCityName(state, city) {
      state.city.name = city;
    },
  },
  actions: {
    async initalCity(store, city) {
      store.commit('pushCityName', city)
      let item = await store.dispatch('getAutoComplete', city);
      store.dispatch('getDaysOfDaily', item[0].Key);
    },
    async getAutoComplete(store, cityName) {
      return new Promise(async (resolve, reject) => {
      try {
        let city = await callServer.getAutoComplete(cityName);
        store.commit('pushCity', city);
        resolve(city)
      } catch (err) {
        reject(err)
        console.log(err)
      }
    })
    },
    async getDaysOfDaily(store, citykey) {
      try {
        let DaysOfDaily = await callServer.getDaysOfDaily(citykey);
        store.commit('pushDays', DaysOfDaily)
      } catch (err) {
        console.log(err)
      }
    },
    async getCurrent(store, citykey) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await callServer.getCurrent(citykey);
          resolve(res)
        } catch (err) {
          reject(err)
          console.log(err)
        }
      })
    },
  }
})