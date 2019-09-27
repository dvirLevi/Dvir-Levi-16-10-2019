<template>
    <router-link class="" tag="div" :to="item.link" router-link-active>
      {{item.text}}
    </router-link>
</template>

<script>
  export default {
    name: 'categories',
    props: {
      item: Object
    },
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>