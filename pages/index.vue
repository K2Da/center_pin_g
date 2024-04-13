<script setup lang="ts">
const route = useRoute();
setPage(route.path, 'Center Pin(g)', 'Pokémon UNITE大会結果収集サイト', 'site');

const mounted = ref(false);
onMounted(async () => {
  mounted.value = true;
});
</script>
<template>
  <h1>Center Pin(g)</h1>
  <div class="flex flex-col lg:flex-row-reverse pt-1">
    <div class="md:w-[600px] md:pt-2">
      <template v-if="!mounted">
        <div class="p-2">
          <USkeleton class="h-6 w-[120px] mb-1 border-bottom" />
          <USkeleton
            class="h-[1px] w-full mb-2"
            :ui="{ background: 'bg-cyan-600' }"
          />
          <USkeleton class="h-5 w-[80px] mb-1 border-bottom" />
          <USkeleton
            class="h-[1px] w-full mb-2"
            :ui="{ background: 'bg-cyan-600' }"
          />
          <div class="flex items-center space-x-4 mb-1">
            <USkeleton class="h-4 w-[80px]" />
            <USkeleton class="h-4 w-[200px]" />
          </div>
          <div class="flex items-center space-x-4">
            <USkeleton class="h-4 w-[80px]" />
            <USkeleton class="h-4 w-[300px]" />
          </div>
        </div>
      </template>
      <CalendarList :prev="3" :next="7" />
    </div>
    <div class="lg:flex-grow">
      <TopicLatest />
      <p class="more">
        トピック最新更新5件表示中 [<NuxtLink :to="{ name: 'topics' }"
          >+ more</NuxtLink
        >]
      </p>
    </div>
  </div>
</template>
