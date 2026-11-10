<script setup>
import { ref } from 'vue'
import c from '@/content/pricing.json'
import PageHero from '@/components/PageHero.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import AppIcon from '@/components/AppIcon.vue'
import BaseButton from '@/components/BaseButton.vue'

const annual = ref(true)
const fmt = (n) => '$' + n.toLocaleString('en-US')
const sent = ref(false)
</script>

<template>
  <PageHero v-bind="c.hero">
    <div class="mt-9 inline-flex rounded-full bg-white p-1 ring-1 ring-ink-200" role="group" aria-label="Billing period">
      <button
        v-for="opt in [{ v: false, l: 'Monthly' }, { v: true, l: 'Annual · save 17%' }]"
        :key="opt.l"
        type="button"
        class="rounded-full px-4 py-2 text-sm transition-colors"
        :class="annual === opt.v ? 'bg-ink-900 text-paper' : 'text-ink-600 hover:text-ink-900'"
        :aria-pressed="annual === opt.v"
        @click="annual = opt.v"
      >
        {{ opt.l }}
      </button>
    </div>
  </PageHero>

  <section class="container-page -mt-px py-20">
    <div class="grid gap-5 lg:grid-cols-3">
      <article
        v-for="p in c.plans"
        :key="p.name"
        class="relative flex flex-col rounded-2xl p-8"
        :class="p.featured ? 'bg-ink-900 text-paper shadow-2xl shadow-ink-900/20' : 'bg-white ring-1 ring-ink-200'"
      >
        <span v-if="p.featured" class="absolute top-8 right-8 rounded-full bg-grove-500/20 px-2.5 py-1 text-xs font-medium text-grove-200">Most popular</span>
        <h2 class="text-lg font-semibold">{{ p.name }}</h2>
        <p class="mt-2 text-[0.95rem]" :class="p.featured ? 'text-ink-300' : 'text-ink-600'">{{ p.blurb }}</p>
        <p class="mt-8 flex items-baseline gap-1.5">
          <span class="text-[2.75rem] font-semibold tracking-tight tabular-nums">{{ p.custom ? 'Custom' : fmt(annual ? p.annual : p.monthly) }}</span>
          <span v-if="!p.custom" class="text-sm" :class="p.featured ? 'text-ink-400' : 'text-ink-500'">/ month</span>
        </p>
        <p class="mt-1 h-5 text-sm" :class="p.featured ? 'text-ink-400' : 'text-ink-500'">
          <template v-if="!p.custom">{{ annual ? 'billed annually' : 'billed monthly' }}</template>
          <template v-else>annual agreement</template>
        </p>
        <BaseButton
          to="/pricing#demo"
          :variant="p.featured ? 'light' : 'primary'"
          class="mt-8 w-full"
        >
          {{ p.cta }}
        </BaseButton>
        <ul class="mt-8 space-y-3 border-t pt-8 text-[0.95rem]" :class="p.featured ? 'border-white/10' : 'border-ink-100'">
          <li v-for="f in p.features" :key="f" class="flex gap-3">
            <AppIcon name="check" :size="18" class="mt-0.5 shrink-0" :class="p.featured ? 'text-grove-400' : 'text-grove-500'" />{{ f }}
          </li>
        </ul>
      </article>
    </div>
  </section>

  <section class="border-t border-ink-200/70 bg-white">
    <div class="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.6fr]">
      <SectionHeader eyebrow="FAQ" title="Questions procurement usually asks." />
      <div class="divide-y divide-ink-200 border-y border-ink-200">
        <details v-for="f in c.faq" :key="f.q" class="group py-5">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.05rem] font-medium text-ink-900">
            {{ f.q }}
            <AppIcon name="chevron" :size="18" class="shrink-0 text-ink-400 transition-transform group-open:rotate-180" />
          </summary>
          <p class="mt-3 max-w-2xl leading-relaxed text-ink-600">{{ f.a }}</p>
        </details>
      </div>
    </div>
  </section>

  <section id="demo" class="container-page py-24">
    <div class="grid gap-12 rounded-3xl bg-ink-100/70 p-8 ring-1 ring-ink-200/70 md:p-14 lg:grid-cols-2">
      <div>
        <SectionHeader eyebrow="Book a demo" title="See Lingrove with your own repository." lead="A 30-minute call with a localization engineer. We'll map your current workflow and show what it looks like connected." />
        <ul class="mt-8 space-y-3 text-ink-700">
          <li class="flex gap-3"><AppIcon name="check" :size="18" class="mt-0.5 text-grove-500" />No slides, a working walkthrough</li>
          <li class="flex gap-3"><AppIcon name="check" :size="18" class="mt-0.5 text-grove-500" />Migration plan for your existing memories</li>
          <li class="flex gap-3"><AppIcon name="check" :size="18" class="mt-0.5 text-grove-500" />Security documentation on request</li>
        </ul>
      </div>
      <form class="space-y-4 rounded-2xl bg-white p-6 ring-1 ring-ink-200 md:p-8" @submit.prevent="sent = true">
        <template v-if="!sent">
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="block text-sm font-medium text-ink-800">First name
              <input required class="mt-1.5 w-full rounded-lg border-0 px-3.5 py-2.5 ring-1 ring-ink-200 focus:ring-2 focus:ring-grove-500 focus:outline-none" />
            </label>
            <label class="block text-sm font-medium text-ink-800">Last name
              <input required class="mt-1.5 w-full rounded-lg border-0 px-3.5 py-2.5 ring-1 ring-ink-200 focus:ring-2 focus:ring-grove-500 focus:outline-none" />
            </label>
          </div>
          <label class="block text-sm font-medium text-ink-800">Work email
            <input type="email" required class="mt-1.5 w-full rounded-lg border-0 px-3.5 py-2.5 ring-1 ring-ink-200 focus:ring-2 focus:ring-grove-500 focus:outline-none" />
          </label>
          <label class="block text-sm font-medium text-ink-800">Locales you ship today
            <select class="mt-1.5 w-full rounded-lg border-0 bg-white px-3.5 py-2.5 ring-1 ring-ink-200 focus:ring-2 focus:ring-grove-500 focus:outline-none">
              <option>1–5</option><option>6–15</option><option>16–30</option><option>30+</option>
            </select>
          </label>
          <button type="submit" class="mt-2 h-11 w-full rounded-full bg-ink-900 font-medium text-paper transition hover:bg-ink-800">Request a demo</button>
          <p class="text-center text-xs text-ink-500">Demo form for this concept site. Nothing is sent.</p>
        </template>
        <div v-else class="flex h-full flex-col items-center justify-center py-10 text-center">
          <span class="flex size-12 items-center justify-center rounded-full bg-grove-100 text-grove-700"><AppIcon name="check" :size="22" /></span>
          <p class="mt-5 text-lg font-semibold">Thanks, request received.</p>
          <p class="mt-1 text-ink-600">This is a concept site, so nothing was sent.</p>
        </div>
      </form>
    </div>
  </section>
</template>
