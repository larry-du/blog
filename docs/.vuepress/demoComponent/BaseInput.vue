<script setup>
import { toRefs } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  placeHolder: {
    type: String,
    default: "",
    required: true,
  },
  label: {
    type: String,
    default: "",
    required: true,
  },
  labelStyle: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});

const { placeHolder, modelValue, labelStyle, label, type } = toRefs(props);
</script>

<template>
  <label class="title" :class="[labelStyle]"
    >{{ label }}
    <div>
      <input
        class="input-demo"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :placeHolder="placeHolder"
        :type="type"
      />
    </div>
  </label>
</template>

<style lang="sass" scoped>
.title
    color: lightgreen
    display: block
    &.blue
        color: lightblue
.input-demo
  padding: 5px 10px
  margin-top: 5px
</style>
