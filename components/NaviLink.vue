<script setup lang="ts"></script>
<template>
  <NuxtLink :to="{ name: 'index' }">CP(g)</NuxtLink> |
  <NuxtLink :to="{ name: 'topic' }">Topic</NuxtLink> |
  <NuxtLink :to="{ name: 'calendar' }">Cal</NuxtLink> |
  <NuxtLink :to="{ name: 'tournament' }" no-prefetch>Tourney</NuxtLink> |
  <NuxtLink :to="{ name: 'player' }" no-prefetch>Player</NuxtLink> |
  <NuxtLink :to="{ name: 'team' }" no-prefetch>Team</NuxtLink> |
  <NuxtLink :to="{ name: 'about' }" no-prefetch>？</NuxtLink>
</template>
