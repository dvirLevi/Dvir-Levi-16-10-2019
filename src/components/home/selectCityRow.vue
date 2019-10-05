<template>
  <div class="row">
    <div class="col">
      <!-- <v-select :options="cityComplete" label="LocalizedName" :clearable="false" v-model="city" :value="city"></v-select> -->
      <div class="center-all w-100">
        <i class="fas fa-search"></i>
        <div class="wrap-input">
          <input class="w-100 p-1" type="text" v-model="city.name" @input="autoComplete"
            placeholder="Search for a city">
          <div class="w-100 wrap-options" v-if="ifShowOptions && city.name.length">
            <p class="p-2" v-for="item in cityComplete" @click="selectCity(item)" :key="item.Key">{{item.LocalizedName}}
            </p>
          </div>
        </div>
      </div>
      <add-city-to-storage :ifShowOptions="ifShowOptions" />
    </div>
  </div>
</template>

<script>
  // import 'vue-select/dist/vue-select.css';
  import addCityToStorage from '@/components/home/addCityToStorage.vue'

  export default {
    name: 'selectCityRow',
    components: {
      addCityToStorage
    },
    props: {},
    data() {
      return {
        // city: "",
        ifShowOptions: false,
      }
    },
     mounted() {
      // let city = await this.$store.dispatch('getAutoComplete', this.city.name);
      // this.$store.dispatch('getDaysOfDaily', city[0].Key);
       this.$store.dispatch('initalCity', this.city.name);
    },
    computed: {
      city() {
        return this.$store.state.city;
      },
      cityComplete() {
        return this.$store.state.cityComplete;
      },
      cityCompleteObj() {
        let obj = this.$store.state.cityComplete
        return obj[0];
      },
    },
    methods: {
      selectCity(item) {
        // this.city.name = item.LocalizedName;
        this.ifShowOptions = false;
        // this.$store.dispatch('getAutoComplete', this.city.name);
        // this.$store.dispatch('getDaysOfDaily', item.Key);
        this.$store.dispatch('initalCity', item.LocalizedName);
      },
      autoComplete() {
        console.log(this.city.name)
        this.ifShowOptions = true;
        this.$store.dispatch('getAutoComplete', this.city.name);
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row {
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
    background-color: #ffffff;
    position: absolute;
    z-index: 5;
  }

  .wrap-options p {
    border-bottom: solid var(--border-color) 1px
  }

  @media (max-width: 767.98px) {
    .wrap-input {
      width: 90%;
    }
  }
</style>