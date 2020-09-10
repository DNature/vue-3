<template>
  <div class="container px-12 mx-auto">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: `<h1>Hello world</h1>
      <img src="https://ckeditor.com/assets/images/header/ckeditor-4-0da1800a0c.png" />
      `,
      editorConfig: {
        // extraPlugins: [upload.MyCustomUploadAdapterPlugin],
      }
    };
  }
};
</script>
