<script setup lang="ts">
type Props = { names: string[] };
const { names } = defineProps<Props>();
</script>

<template>
  <template v-for="(name, i) of names" v-bind:key="name">
    <PlayerName :name="name" />
    <template v-if="i !== names.length - 1">, </template>
  </template>
</template>
