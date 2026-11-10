<script setup>
import AppIcon from './AppIcon.vue'
defineProps({ icon: String, title: String, body: String })
</script>

<template>
  <div class="group">
    <div class="flex size-10 items-center justify-center rounded-xl bg-grove-50 text-grove-600 ring-1 ring-grove-100">
      <AppIcon :name="icon" :size="20" />
    </div>
    <h3 class="mt-5 text-[1.05rem] font-semibold tracking-tight text-ink-900">{{ title }}</h3>
    <p class="mt-2 leading-relaxed text-ink-600">{{ body }}</p>
  </div>
</template>
