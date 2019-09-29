<template>
  <div class="row">
    <div class="col">
      <select-city-row />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import selectCityRow from '@/components/home/selectCityRow.vue'

  export default {
    name: 'home',
    components: {
      selectCityRow
    }
  }
</script>