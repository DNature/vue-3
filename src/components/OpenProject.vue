<template>
  <div class="my-12">
    <form class="flex w-full">
      <input
        type="text"
        name="path"
        id="path"
        placeholder="Input path to folder"
        class="w-full p-3 rounded focus:shadow-outline outline-none bg-gray-15 focus:bg-white border border-solid border-gray-25"
        v-model="path"
      />
      <button
        @click="onOpen"
        type="submit"
        class="bg-blue-400 ml-4 text-white focus:shadow-outline hover:bg-blue-500 focus:outline-none outline-none border-none rounded font-semibold px-4 py-2"
      >
        Open
      </button>
    </form>
    <div class="mt-6" v-if="this.$data.openProject.allDocsData">
      <div v-html="this.$data.openProject.allDocsData[3].content" />
    </div>
  </div>
</template>

<script>
import OPEN_PROJECT from '@/graphql/project/openProject.gql';
export default {
  name: 'Open_Project',
  data() {
    return {
      openProject: {},
      path: ''
    };
  },
  methods: {
    onOpen: async function(e) {
      e.preventDefault();
      const { data } = await this.$apollo.mutate({
        mutation: OPEN_PROJECT,
        variables: {
          path: this.path
        }
      });
      this.openProject = data.openProject;
      console.log({ data: this.$data.openProject.allDocsData[3].content });
    }
  }
};
</script>
