<script setup lang="ts">
type Props = {
  title: string;
};
const { title } = defineProps<Props>();
const fullTitle = `CP(g): ${title}`;

if (process.client) gaView(title);
</script>
<template>
  <Head>
    <Title>{{ fullTitle }}</Title>
  </Head>
</template>
