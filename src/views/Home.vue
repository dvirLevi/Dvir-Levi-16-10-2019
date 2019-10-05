<template>
  <div class="row">
    <div class="col">
      <select-city-row />
      <!-- <addCityToStorage /> -->
      <show-days />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import selectCityRow from '@/components/home/selectCityRow.vue'
  import showDays from '@/components/home/showDays.vue'
  // import addCityToStorage from '@/components/home/addCityToStorage.vue'

  export default {
    name: 'home',
    components: {
      selectCityRow,
      showDays,
      // addCityToStorage
    }
  }
</script>