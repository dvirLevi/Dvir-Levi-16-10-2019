<template>
  <div class="row center-all-between part-shulders mt-3" v-if="cityCompleteObj && !ifShowOptions">
    <div class="col-md-2 m-2">
      <favorites-city :city="cityCompleteObj" />
    </div>
    <div class="col-md-4 m-2">
      <div class="w-100 center-all">
        <div class="center-all box p-2" @click="addToLocalStorage" v-if="!ifCityInStorage">
          <i class="fas fa-heart"></i>
          <p class="m-2">Add city to favorites</p>
        </div>
        <div class="center-all box p-2" @click="deleteFormLocalStorage" v-else>
          <i class="fas fa-times"></i>
          <p class="m-2">Delete city from favorites</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swal from 'sweetalert2'
  import favoritesCity from '@/components/favorites/favoritesCity.vue'


  export default {
    name: 'addCityToStorage',
    components: {
      favoritesCity
    },
    props: {
      ifShowOptions: Boolean
    },
    data() {
      return {

      }
    },
    mounted() {
      this.$store.commit('addToLocalStorage', null);
    },
    computed: {
      cityComplete() {
        return this.$store.state.cityComplete;
      },
      cityCompleteObj() {
        let obj = this.$store.state.cityComplete
        return obj[0];
      },
      cityFromStorage() {
        return this.$store.state.cityFromStorage;
      },
      ifCityInStorage() {
        let test = false;
        if (this.cityFromStorage) {
          for (let x in this.cityFromStorage) {
            if (this.cityFromStorage[x].Key === this.cityCompleteObj.Key) {
              test = true
            }
          }
        }
        return test
      }
    },
    methods: {
      addToLocalStorage() {
        this.$store.commit('addToLocalStorage', this.cityCompleteObj);
        Swal.fire({
          type: 'success',
          text: 'Add to favourites!',
          timer: 1500
        });
      },
      deleteFormLocalStorage() {
        this.$store.commit('deleteFormLocalStorage', this.cityCompleteObj);
        Swal.fire({
          type: 'success',
          text: 'delete form favourites!',
          timer: 1500
        });
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    background-color: #ebebeb;
    width: fit-content;
    cursor: pointer;
    position: relative;
    z-index: 1;

  }

  .svg-inline--fa {
    font-size: 30px;
    color: #ff6e6e;
  }

  @media (max-width: 767.98px) {}
</style>