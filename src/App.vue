<template>
  <div id="app" class="container-fluid">
    <tool-bar/>
    <router-view/>
  </div>
</template>
<script>
import toolBar from '@/components/tool-bar/toolBar.vue'

export default {
 components: {
    toolBar
  } 
}
</script>

<style>

</style>
