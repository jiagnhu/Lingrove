<script setup>
import BaseButton from './BaseButton.vue'
defineProps({
  title: { type: String, default: 'See your next release in every language.' },
  lead: { type: String, default: 'A 30-minute walkthrough with a localization engineer, using your own repository structure.' },
})
</script>

<template>
  <section class="container-page py-24">
    <div class="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-16 text-center md:px-16 md:py-20">
      <div class="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-grove-500/25 blur-3xl" />
      <h2 class="relative mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-[-0.025em] text-paper md:text-[2.6rem] md:leading-[1.1]">
        {{ title }}
      </h2>
      <p class="relative mx-auto mt-5 max-w-xl text-lg text-ink-300">{{ lead }}</p>
      <div class="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <BaseButton to="/pricing#demo" variant="light" size="lg" arrow>Book a demo</BaseButton>
        <BaseButton to="/pricing" size="lg" class="!bg-white/10 !text-paper ring-1 ring-white/15 hover:!bg-white/15">View pricing</BaseButton>
      </div>
    </div>
  </section>
</template>
