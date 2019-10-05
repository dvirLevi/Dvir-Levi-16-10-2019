<template>
  <div class="row center-all-between mt-5 part-shulders">
    <div class="col-md-2 m-2" v-for="day in DaysOfDaily" :key="day.EpochDate">
      <day :day="day" />
    </div>
  </div>
</template>

<script>
  // import 'vue-select/dist/vue-select.css';
  import day from '@/components/general/day.vue'

  export default {
    name: 'showDays',
    components:{
      day
    },
    props: {},
    data() {
      return {
       
      }
    },
    computed: {
      DaysOfDaily() {
        return this.$store.state.DaysOfDaily.DailyForecasts;
      }
    },
    methods: {
   
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


   @media (max-width: 767.98px) {
 
   }
</style>