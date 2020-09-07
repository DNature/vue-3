<template>
  <div class="my-12">
    <div class="mt-6" v-if="this.$data.getImages.length">
      <div v-for="(image, i) in this.$data.getImages" :key="i">
        <img :src="`http://localhost:4001/${image}`" alt="" />
        <h1 class="text-lg">{{ image }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import GET_IMAGES from '@/graphql/project/getImages.gql';
export default {
  name: 'Open_Project',
  apollo: {
    getImages: {
      query: GET_IMAGES
    }
  }
};
</script>
