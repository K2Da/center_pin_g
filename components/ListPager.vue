<script setup lang="ts">
type Props = { pageNo: number; maxPage: number };
const { pageNo, maxPage } = defineProps<Props>();
type Emits = { (e: 'change', id: number): void };
const emit = defineEmits<Emits>();

const setNo = (v: number) => {
  console.log('setNo', v);
  emit('change', v);
};
</script>

<template>
  <div class="flex justify-center my-2 pager">
    <UPagination
      @update:model-value="setNo"
      :model-value="pageNo"
      :page-count="1"
      :total="maxPage"
      show-last
      show-first
      class="text-black"
    />
  </div>
</template>
