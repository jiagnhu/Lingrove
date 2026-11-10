<script setup>
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
    <p class="font-mono text-sm text-grove-600">404</p>
    <h1 class="mt-4 text-4xl font-semibold tracking-tight">This page hasn't been translated into existence.</h1>
    <p class="mt-4 text-lg text-ink-600">The link may be old, or the page may have moved.</p>
    <BaseButton to="/" class="mt-8" arrow>Back to home</BaseButton>
  </section>
</template>
