<template>
  <div class="form-input">
    <label class="form-lable">
      {{ title }} <span> {{ required ? '*' : '' }}</span>
      <input :value="modelValue" @input="$emit('custumChange', $event.target.value)" class="custom-input" type="text"
        :placeholder="placeholder" />
    </label>
  </div>
</template>
<script>
export default {
  name: "CustomFormInput",
  components: {},
  props: ["placeholder", "title", "required", 'modelValue'],
  emits: ["custumChange"]
};
</script>
<style scoped>
label span {
  color: var(--accent-blue)
}
</style>