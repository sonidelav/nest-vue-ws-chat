<template>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '@/router';

@Component({
  mounted() {
    router.replace({name: 'sign-up'})
  }
})
export default class App extends Vue {}
</script>
