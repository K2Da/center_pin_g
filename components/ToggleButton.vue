<script setup lang="ts">
type Props = { value: boolean };
type Emits = { (e: 'toggle', value: boolean): void };

const { value } = defineProps<Props>();
const emits = defineEmits<Emits>();

const buttonValue = ref(value);

const toggle = (v: boolean) => {
  buttonValue.value = v;
  emits('toggle', v);
};
</script>

<template>
  <UToggle @update:model-value="toggle" :model-value="buttonValue" size="sm" />
</template>
