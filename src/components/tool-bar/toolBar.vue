<template>
  <div class="row">
    <div class="col">
      <div class="center-all-between">
        <div class="center-all">
          <img alt="logo" src="@/assets/logo.png">
          <h1>Weather app</h1>
        </div>
        <div class="center-all">
        <categories v-for="item in categories" :item="item" :key="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categories from '@/components/tool-bar/categories.vue'

  export default {
    name: 'toolBar',
    components:{
      categories
    },
    props: {

    },
    data() {
      return {
        categories: [{
            text: 'Home',
            link: "/",
            id: 1
          },
          {
            text: 'Favorites',
            link: "/favorites",
            id: 2
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-family: 'Assistant';
    font-weight: 200
  }
</style>