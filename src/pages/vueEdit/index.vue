<template>
  <el-card>
    <div slot="header">
      文本编辑
    </div>
    <div class="edit_container">
      <quill-editor v-model="content"
            ref="myQuillEditor"
            class="editer"
            :options="editorOption"
            @ready="onEditorReady($event)">
      </quill-editor>
    </div>
    <div class="submit_btn">
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
  </el-card>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  name: "",
  components: {
    quillEditor
  },
  data() {
    return {
      content: "文本编辑",
      editorOption: {}
    };
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
    submit() {
      console.log(this.content);
      this.$message.success("提交成功！");
    }
  }
};
</script>

<style lang='less' rel='stylesheet/less' scoped>
.edit_container {
  padding: 40px;
  margin-bottom: 40px;
}
.editer {
  height: 350px;
}
.submit_btn {
  text-align: center;
}
</style>
