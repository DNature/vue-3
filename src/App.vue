<template>
  <div id="app">
    <img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
    <OpenProject class=" w-3/4 mx-auto" />
    <Images msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Images from '@/components/Images.vue';
import OpenProject from '@/components/OpenProject.vue';
import gql from 'graphql-tag';

const CWD = gql`
  {
    cwd
  }
`;

export default {
  name: 'App',
  apollo: {
    cwd: {
      query: CWD
    }
  },
  components: {
    Images,
    OpenProject
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
