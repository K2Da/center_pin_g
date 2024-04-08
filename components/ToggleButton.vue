<script setup lang="ts">
type Props = { id: string; value: boolean; };
type Emits = { (e: 'toggle', value: boolean): void };

const { id, value } = defineProps<Props>();
const emits = defineEmits<Emits>();

const buttonValue = ref(value);

const toggle = () => {
  emits('toggle', buttonValue.value);
};
</script>

<template>
  <div class="toggle">
    <input :id="id" v-model="buttonValue" type='checkbox' @change="toggle" />
    <label :for="id"/>
  </div>
</template>
