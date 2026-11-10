<script setup>
defineProps({ label: { type: String, default: '' } })
const logos = [
  { name: 'Corvane', cls: 'font-semibold tracking-tight' },
  { name: 'helio/pay', cls: 'font-mono font-medium' },
  { name: 'Brightwell', cls: 'font-serif text-[1.45rem] italic' },
  { name: 'TESSELLA', cls: 'font-semibold tracking-[0.2em] text-[0.95rem]' },
  { name: 'Ostra Cloud', cls: 'font-medium' },
  { name: 'meridian', cls: 'font-bold tracking-tight lowercase' },
]
</script>

<template>
  <div>
    <p v-if="label" class="text-center text-sm text-ink-500">{{ label }}</p>
    <ul class="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
      <li v-for="l in logos" :key="l.name" class="text-center text-xl text-ink-400" :class="l.cls">{{ l.name }}</li>
    </ul>
  </div>
</template>
