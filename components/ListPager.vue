<script setup lang="ts">
type Props = { pageNo: number; maxPage: number };
const { pageNo, maxPage } = defineProps<Props>();
type Emits = { (e: 'change', id: number): void };
const emit = defineEmits<Emits>();

const setNo = (v: number) => {
  emit('change', v);
};
</script>

<style>
button {
  padding: 1px 20px;
  margin: 6px;
}
</style>

<template>
  <div class="text-center">
    <button :disabled="pageNo <= 1" v-on:click="setNo(1)">
      <i class="fas fa-fast-backward"></i>
    </button>
    <button :disabled="pageNo <= 1" v-on:click="setNo(pageNo - 1)">
      <i class="fas fa-step-backward"></i>
    </button>
    {{ pageNo }} / {{ maxPage }}
    <button :disabled="pageNo >= maxPage" v-on:click="setNo(pageNo + 1)">
      <i class="fas fa-step-forward"></i>
    </button>
    <button :disabled="pageNo >= maxPage" v-on:click="setNo(maxPage)">
      <i class="fas fa-fast-forward"></i>
    </button>
  </div>
</template>
