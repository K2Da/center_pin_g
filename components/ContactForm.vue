<script setup lang="ts">
const text = ref('');

function send() {
  postContactForm(text.value);
  alert('(多分)送信しました');
  text.value = '';
}
</script>

<template>
  <textarea v-model="text" />
  <button :disabled="text.length == 0" v-on:click="send">送信</button>
</template>

<style>
button {
  padding: 5px 10px 5px 10px;
}
</style>
