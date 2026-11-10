<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
})
</script>

<template>
  <section class="relative overflow-hidden border-b border-ink-200/70">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(50%_70%_at_50%_0%,var(--color-grove-100),transparent_70%)]" />
    <div class="container-page relative pt-16 pb-20 text-center md:pt-24 md:pb-24">
      <p v-if="eyebrow" class="text-sm font-medium text-grove-600">{{ eyebrow }}</p>
      <h1 class="mx-auto mt-5 max-w-3xl text-balance text-4xl leading-[1.06] font-semibold tracking-[-0.03em] text-ink-900 md:text-[3.6rem]">{{ title }}</h1>
      <p v-if="lead" class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">{{ lead }}</p>
      <slot />
    </div>
  </section>
</template>
