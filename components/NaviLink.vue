<script setup lang="ts"></script>
<template>
  <nav class="p-1 text-base">
    <NuxtLink :to="{ name: 'index' }">CP(g)</NuxtLink> |
    <NuxtLink :to="{ name: 'topics' }">Topic</NuxtLink> |
    <NuxtLink :to="{ name: 'calendar' }">Cal</NuxtLink> |
    <NuxtLink :to="{ name: 'tournaments' }">Tourney</NuxtLink> |
    <NuxtLink :to="{ name: 'players' }">Player</NuxtLink> |
    <NuxtLink :to="{ name: 'teams' }">Team</NuxtLink> |
    <NuxtLink :to="{ name: 'about' }">？</NuxtLink>
  </nav>
</template>
