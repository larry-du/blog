<script setup>
import { toRefs, computed } from "vue";

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

const { placeHolder, modelValue, labelStyle, label } = toRefs(props);

const updateText = computed({
  get() {
    return modelValue.value;
  },
  set(newData) {
    emit("update:modelValue", newData);
  },
});
</script>

<template>
  <label class="title" :class="[labelStyle]"
    >{{ label }}
    <div>
      <input
        class="input-demo"
        v-model="updateText"
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
