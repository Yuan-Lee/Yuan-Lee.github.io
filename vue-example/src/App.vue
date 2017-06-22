<template>
  <div id="app">
    <v-topbar></v-topbar>
    <div class="main-container" id="main-container">
      <v-sidebar></v-sidebar>
      <div class="main-content"></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import topbar from '@/components/topbar/topbar';
  import sidebar from '@/components/sidebar/sidebar';

  /* eslint-disable no-new */
  Vue.component('v-topbar', topbar);
  Vue.component('v-sidebar', sidebar);

  export default {
    name: 'app',
  };

</script>

<style>
#app {

}
</style>
