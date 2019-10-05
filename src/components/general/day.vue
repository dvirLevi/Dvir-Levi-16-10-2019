<template>
  <div>
      <div class="w-100 center-all box p-3">
        <h3 class="w-100 text-center">{{correntDay}}</h3>
        <img class="w-50" :src="icon" :title="day.Day.IconPhrase" alt="">
        <p class="w-100 text-center">{{day.Temperature.Minimum.Value}}°{{day.Temperature.Minimum.Unit}} - {{day.Temperature.Maximum.Value}}°{{day.Temperature.Maximum.Unit}}</p>
      </div>
  </div>
</template>

<script>
  // import 'vue-select/dist/vue-select.css';

  export default {
    name: 'day',
    props: {
      day: Object,
    },
    data() {
      return {
       days : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      }
    },
    computed: {
    correntDay(){
      let date = new Date(this.day.Date);
      return this.days[date.getDay()] 
    },
    icon(){
      if(this.day.Day.Icon.toString().length === 1){
        return `https://developer.accuweather.com/sites/default/files/0${this.day.Day.Icon}-s.png`
      }
      return `https://developer.accuweather.com/sites/default/files/${this.day.Day.Icon}-s.png`
    }
    },
    methods: {
   
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
      box-shadow: 1px 1px 2px 0px #d2d2d2;
}

   @media (max-width: 767.98px) {
 
   }
</style>