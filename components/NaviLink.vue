<script setup lang="ts"></script>
<template>
  <NuxtLink :to="{ name: 'index' }" no-prefetch>CP(g)</NuxtLink> |
  <NuxtLink :to="{ name: 'topics' }" no-prefetch>Topic</NuxtLink> |
  <NuxtLink :to="{ name: 'calendar' }" no-prefetch>Cal</NuxtLink> |
  <NuxtLink :to="{ name: 'tournaments' }" no-prefetch>Tourney</NuxtLink> |
  <NuxtLink :to="{ name: 'players' }" no-prefetch>Player</NuxtLink> |
  <NuxtLink :to="{ name: 'teams' }" no-prefetch>Team</NuxtLink> |
  <NuxtLink :to="{ name: 'about' }" no-prefetch>？</NuxtLink>
</template>
