<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  align: { type: String, default: 'left' }, // left | center
})
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <p v-if="eyebrow" class="mb-4 text-sm font-medium text-grove-600">{{ eyebrow }}</p>
    <h2 class="text-balance text-3xl font-semibold tracking-[-0.025em] text-ink-900 md:text-[2.6rem] md:leading-[1.1]">
      {{ title }}
    </h2>
    <p v-if="lead" class="mt-5 text-lg leading-relaxed text-ink-600">{{ lead }}</p>
  </div>
</template>
