<script setup>
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  to: { type: String, default: '' },
  variant: { type: String, default: 'primary' }, // primary | secondary | ghost | light
  size: { type: String, default: 'md' }, // sm | md | lg
  arrow: { type: Boolean, default: false },
})

const variants = {
  primary: 'bg-ink-900 text-paper hover:bg-ink-800 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_1px_2px_rgba(11,24,19,0.2)]',
  secondary: 'bg-white text-ink-900 ring-1 ring-ink-200 hover:ring-ink-300 hover:bg-ink-50',
  ghost: 'text-ink-700 hover:text-ink-900 hover:bg-ink-100',
  light: 'bg-paper text-ink-900 hover:bg-white',
}
const sizes = { sm: 'h-9 px-3.5 text-sm', md: 'h-11 px-5 text-[0.95rem]', lg: 'h-12 px-6 text-base' }

const classes = computed(() => [
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grove-500',
  variants[props.variant],
  sizes[props.size],
])
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="classes">
    <slot />
    <AppIcon v-if="arrow" name="arrow-right" :size="16" class="transition-transform group-hover:translate-x-0.5" />
  </RouterLink>
  <button v-else type="button" :class="classes">
    <slot />
    <AppIcon v-if="arrow" name="arrow-right" :size="16" class="transition-transform group-hover:translate-x-0.5" />
  </button>
</template>
