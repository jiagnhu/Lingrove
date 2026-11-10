<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import site from '@/content/site.json'
import LogoMark from './LogoMark.vue'
import BaseButton from './BaseButton.vue'
import AppIcon from './AppIcon.vue'

const open = ref(false)
const scrolled = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => { open.value = false })

const onScroll = () => { scrolled.value = window.scrollY > 8 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-[background-color,box-shadow] duration-200"
    :class="scrolled || open ? 'bg-paper/85 shadow-[0_1px_0_var(--color-ink-200)] backdrop-blur-md' : 'bg-transparent'"
  >
    <div class="container-page flex h-16 items-center justify-between gap-6">
      <RouterLink to="/" aria-label="Lingrove home"><LogoMark /></RouterLink>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
        <RouterLink
          v-for="item in site.nav"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-3.5 py-2 text-[0.92rem] text-ink-600 transition-colors hover:text-ink-900"
          active-class="!text-ink-900 font-medium"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <BaseButton variant="ghost" size="sm">Sign in</BaseButton>
        <BaseButton to="/pricing#demo" size="sm">Book a demo</BaseButton>
      </div>

      <button
        type="button"
        class="-mr-2 rounded-lg p-2 text-ink-800 md:hidden"
        :aria-expanded="open"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <AppIcon :name="open ? 'close' : 'menu'" :size="22" />
      </button>
    </div>

    <div v-if="open" class="border-t border-ink-200 md:hidden">
      <nav class="container-page flex flex-col py-3" aria-label="Mobile">
        <RouterLink
          v-for="item in site.nav"
          :key="item.to"
          :to="item.to"
          class="border-b border-ink-100 py-3.5 text-base text-ink-800"
        >
          {{ item.label }}
        </RouterLink>
        <div class="flex gap-3 py-4">
          <BaseButton variant="secondary" size="md" class="flex-1">Sign in</BaseButton>
          <BaseButton to="/pricing#demo" size="md" class="flex-1">Book a demo</BaseButton>
        </div>
      </nav>
    </div>
  </header>
</template>
