<template>
  <div class="container px-12 mx-auto">
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
    </div>
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import OPEN_PROJECT from '@/graphql/project/openProject.gql';

export default {
  data() {
    return {
      path: '',
      editor: ClassicEditor,
      editorData: `<h1>Hello world</h1>
      <img src="https://ckeditor.com/assets/images/header/ckeditor-4-0da1800a0c.png" />
      `,
      editorConfig: {
        // extraPlugins: [upload.MyCustomUploadAdapterPlugin],
      }
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
      this.editorData = data.openProject.allDocsData[3].content;
    }
  }
};
</script>
