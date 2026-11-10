<script setup>
import site from '@/content/site.json'
import LogoMark from './LogoMark.vue'
</script>

<template>
  <footer class="bg-ink-950 text-ink-300">
    <div class="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
      <div class="max-w-xs">
        <LogoMark inverted />
        <p class="mt-5 text-sm leading-relaxed text-ink-400">{{ site.footer.tagline }}</p>
      </div>
      <div v-for="col in site.footer.columns" :key="col.title">
        <h3 class="text-sm font-medium text-paper">{{ col.title }}</h3>
        <ul class="mt-4 space-y-3">
          <li v-for="link in col.links" :key="link.label">
            <RouterLink :to="link.to" class="text-sm text-ink-400 transition-colors hover:text-paper">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="container-page flex flex-col gap-3 py-6 text-xs text-ink-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Lingrove. All rights reserved.</p>
        <p class="max-w-xl md:text-right">{{ site.footer.disclaimer }}</p>
      </div>
    </div>
  </footer>
</template>
