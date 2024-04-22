<script setup lang="ts">
const text = ref('');

function send() {
  postContactForm(text.value);
  alert('(多分)送信しました');
  text.value = '';
}
</script>

<template>
  <UTextarea v-model="text" class="mx-4 my-2" />
  <UButton :disabled="text.length == 0" v-on:click="send" class="m-4"
    >送信</UButton
  >
</template>
