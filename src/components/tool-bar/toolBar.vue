<template>
  <div class="row part-shulders">
    <div class="col">
      <div class="center-all-between">
        <div class="center-all">
          <img class="m-2" alt="logo" src="@/assets/logo.png">
          <h1>Weather app</h1>
        </div>
        <all-menu @openClose="ifMenu = !ifMenu" :class="{menusToolBar: !ifMenu}" />
        <Hamburger :ifMenu="ifMenu" @openClose="ifMenu = !ifMenu" />
      </div>
    </div>
  </div>
</template>

<script>
  import allMenu from '@/components/tool-bar/allMenu.vue'
  import Hamburger from '@/components/tool-bar/Hamburger.vue'

  export default {
    name: 'toolBar',
    components: {
      allMenu,
      Hamburger
    },
    props: {

    },
    data() {
      return {
        ifMenu: false,
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

  @media (max-width: 767.98px) {
    h1 {
      font-size: 30px;
    }

    img {
      width: 70px;
    }

    .menusToolBar {
    display: none;
  }
  }
</style>