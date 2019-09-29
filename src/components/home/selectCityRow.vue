<template>
  <div class="row">
    <div class="col">
      <!-- <v-select :options="cityComplete" label="LocalizedName" :clearable="false" v-model="city" :value="city"></v-select> -->
      <div class="center-all w-100">
        <div class="wrap-input">
          <input class="w-100 p-1" type="text" v-model="city" @focus="ifShowOptions = true" placeholder="Search for a city">
          <div class="w-100 wrap-options" v-if="city.length && cityComplete.length > 1 && ifShowOptions">
            <p v-for="item in cityComplete" @click="selectCity(item)" :key="item.Key">{{item.LocalizedName}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import 'vue-select/dist/vue-select.css';

  export default {
    name: 'selectCityRow',
    props: {},
    data() {
      return {
        city: "",
        ifShowOptions: false,
      }
    },
    computed: {
      cityComplete() {
        return this.$store.state.cityComplete;
      }
    },
    methods: {
      selectCity(item) {
        this.city = item.LocalizedName;
        this.ifShowOptions = false;
      }
    },
    watch: {
      city: function () {
        if(this.city.length){
        this.$store.dispatch('getAutoComplete', this.city)          
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row  {
  --border-color: rgb(184, 184, 184);
 
}
  .wrap-input {
    width: 20%;
    position: relative;
  }

  input {
    border: none;
    border-bottom: solid var(--border-color) 1px;
    outline: none;
  }

  .wrap-options {
    position: absolute;

  }

  .wrap-options p {
    border-bottom: solid var(--border-color) 1px
  }
   @media (max-width: 767.98px) {
      .wrap-input {
    width: 50%;
  } 
   }
</style>