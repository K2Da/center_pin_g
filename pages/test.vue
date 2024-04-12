<script setup lang="ts"></script>

<template>
  <p class="text-sm font-extrabold dark:text-white">Test</p>
  <UAlert
    icon="i-heroicons-command-line"
    color="primary"
    variant="solid"
    title="Heads up!"
    description="You can add components to your app using the cli."
  />
  <template>
    <UAccordion
      color="primary"
      variant="soft"
      size="sm"
      :items="[
        {
          label: '1. What is Nuxt UI?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: '2. Getting Started',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: '3. Theming',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          label: '4. Components',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
      ]"
    />
  </template>
</template>
