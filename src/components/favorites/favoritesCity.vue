<template>
  <div>
    <div class="w-100 center-all box p-3" v-if="byCity" @click="openFavoritInMaim">
      <h3 class="w-100 text-center">{{city.LocalizedName}}</h3>
      <img class="w-50" :src="icon" :title="byCity.WeatherText" alt="">
      <p class="w-100 text-center">{{byCity.Temperature.Metric.Value}}°{{byCity.Temperature.Metric.Unit}}</p>
      <p class="w-100 text-center">{{byCity.WeatherText}}</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'favoritesCity',
    props: {
      city: Object,
    },
    data() {
      return {
        byCity: null
      }
    },

    mounted() {
      this.getCurrent()
    },
    computed: {
    
      icon() {
        if (this.byCity.WeatherIcon.toString().length === 1) {
          return `https://developer.accuweather.com/sites/default/files/0${this.byCity.WeatherIcon}-s.png`
        }
        return `https://developer.accuweather.com/sites/default/files/${this.byCity.WeatherIcon}-s.png`
      }
    },
    methods: {
      async getCurrent() {
        let byCity = await this.$store.dispatch('getCurrent', this.city.Key);
        this.byCity = byCity[0];
      },
      openFavoritInMaim(){
        this.$store.dispatch('initalCity', this.city.LocalizedName);   
        this.$router.push('/');

      }
    },
    watch: {
      city: function () {
        this.getCurrent()
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    box-shadow: 1px 1px 2px 0px #d2d2d2;
  }

  @media (max-width: 767.98px) {}
</style>