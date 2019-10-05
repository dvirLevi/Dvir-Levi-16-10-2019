<template>
  <div class="row center-all" v-if="cityFromStorage">
    <div class="col-md-2" v-for="city in cityFromStorage" :key="city.Key" >
      <favorites-city :city="city" />
    </div>
  </div>
</template>
<script>
  // import 'vue-select/dist/vue-select.css';
  import favoritesCity from '@/components/favorites/favoritesCity.vue'


  export default {
    name: 'Favorites',
    components: {
      favoritesCity
    },
    props: {},
    data() {
      return {

      }
    },
    mounted() {
      this.$store.commit('addToLocalStorage', null);
    },
    computed: {
      cityFromStorage() {
        return this.$store.state.cityFromStorage;
      }
    },
    methods: {

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (max-width: 767.98px) {}
</style>