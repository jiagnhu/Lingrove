<script setup>
defineProps({ inverted: { type: Boolean, default: false } })
</script>

<template>
  <span class="inline-flex items-center gap-2.5">
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="8" :fill="inverted ? '#fbfaf7' : '#12241d'" />
      <path d="M16 7c-4.4 3.2-6.5 6.6-6.5 10.2A6.5 6.5 0 0 0 16 23.7a6.5 6.5 0 0 0 6.5-6.5C22.5 13.6 20.4 10.2 16 7Z" fill="#4fa77f" />
      <path d="M16 12v14" :stroke="inverted ? '#12241d' : '#fbfaf7'" stroke-width="1.8" stroke-linecap="round" />
    </svg>
    <span class="text-[1.15rem] font-semibold tracking-tight" :class="inverted ? 'text-paper' : 'text-ink-900'">Lingrove</span>
  </span>
</template>
