<template>
  <div class="wrap-all" @click="$emit('openClose')" >
    <div class="center-all wrap">
      <categories v-for="item in categories" :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script>
  import categories from '@/components/tool-bar/categories.vue'

  export default {
    name: 'allMenu',
    components: {
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
  .wrap-all {}

  .wrap {}

  @media (max-width: 767.98px) {
    .wrap-all {
      position: fixed;
      width: 100%;
      z-index: 2;
      background: #3333338c;
      right: 0;
      top: 0;
      height: 100%;
    }

    .wrap {
      position: absolute;
      right: 0;
      width: 45%;
      height: 100%;
      background-color: #ffffff;
      flex-direction: column;
    }
  }
</style>