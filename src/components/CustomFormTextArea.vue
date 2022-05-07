<template>
  <div class="form-input">
    <label class="form-lable">
      {{ title }} <span>{{required ? "*" : ""}}</span>
      <textarea
        rows="4"
        cols="50"
        class="custom-input"
        type="text"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>
<script>
export default {
  name: "CustomFormInput",
  components: {},
  props: ["placeholder", "title","required"],
};
</script>
<style scoped>
textarea {
  resize: none;
  height: 100px;
}
label span{
  color:var(--accent-blue)
}
</style>