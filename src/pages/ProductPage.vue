<script setup>
import c from '@/content/product.json'
import PageHero from '@/components/PageHero.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import AppIcon from '@/components/AppIcon.vue'
import CtaBand from '@/components/CtaBand.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <PageHero v-bind="c.hero">
    <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
      <BaseButton to="/pricing#demo" size="lg" arrow>Book a demo</BaseButton>
      <BaseButton to="/pricing" variant="secondary" size="lg">View pricing</BaseButton>
    </div>
  </PageHero>

  <section class="container-page space-y-28 py-24 md:py-32">
    <div
      v-for="(m, i) in c.modules"
      :key="m.title"
      class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
    >
      <div :class="i % 2 ? 'lg:order-2' : ''">
        <SectionHeader :eyebrow="m.eyebrow" :title="m.title" :lead="m.body" />
        <ul class="mt-8 space-y-3.5">
          <li v-for="p in m.points" :key="p" class="flex gap-3 text-ink-700">
            <AppIcon name="check" :size="18" class="mt-0.5 shrink-0 text-grove-500" />{{ p }}
          </li>
        </ul>
      </div>

      <!-- Illustrative panels -->
      <div class="rounded-2xl bg-ink-100/70 p-5 ring-1 ring-ink-200/70 sm:p-8" :class="i % 2 ? 'lg:order-1' : ''">
        <div v-if="m.panel === 'sync'" class="space-y-3">
          <div v-for="(f, k) in [['src/locales/en.json', '+48  ~12', 'Detected'], ['src/locales/de.json', '+48  ~12', 'Translated'], ['src/locales/ja.json', '+48  ~12', 'In review']]" :key="k" class="flex items-center justify-between rounded-xl bg-white px-4 py-3.5 shadow-sm ring-1 ring-ink-200/60">
            <div class="flex items-center gap-3 min-w-0">
              <AppIcon name="branch" :size="16" class="shrink-0 text-ink-400" />
              <span class="truncate font-mono text-[0.8rem] text-ink-800">{{ f[0] }}</span>
            </div>
            <div class="flex shrink-0 items-center gap-3">
              <span class="hidden font-mono text-[0.72rem] text-grove-600 sm:inline">{{ f[1] }}</span>
              <span class="rounded-full px-2 py-0.5 text-[0.68rem] font-medium" :class="k === 2 ? 'bg-clay-100 text-clay-500' : 'bg-grove-100 text-grove-700'">{{ f[2] }}</span>
            </div>
          </div>
          <div class="rounded-xl bg-ink-900 px-4 py-3.5 font-mono text-[0.75rem] leading-relaxed text-ink-300">
            <span class="text-grove-400">lingrove</span> opened pull request <span class="text-paper">#482</span><br />
            <span class="text-ink-500">→</span> feat(i18n): translations for release 4.12
          </div>
        </div>

        <div v-else-if="m.panel === 'memory'" class="space-y-3">
          <div class="rounded-xl bg-white p-5 shadow-sm ring-1 ring-ink-200/60">
            <p class="text-[0.72rem] uppercase tracking-wider text-ink-400">Source</p>
            <p class="mt-1.5 text-ink-900">Your workspace has been archived.</p>
          </div>
          <div v-for="(t, k) in [['98%', 'Ihr Workspace wurde archiviert.', 'Release 4.9'], ['84%', 'Ihr Projekt wurde archiviert.', 'Release 3.2']]" :key="k" class="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-ink-200/60">
            <span class="rounded-md px-2 py-1 text-xs font-semibold tabular-nums" :class="k === 0 ? 'bg-grove-100 text-grove-700' : 'bg-ink-100 text-ink-600'">{{ t[0] }}</span>
            <div class="min-w-0">
              <p class="text-ink-900">{{ t[1] }}</p>
              <p class="mt-1 text-xs text-ink-500">Translation memory · {{ t[2] }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 rounded-xl bg-grove-50 px-4 py-3 text-sm text-grove-700 ring-1 ring-grove-100">
            <AppIcon name="book" :size="16" /> Glossary: “workspace” stays untranslated in de-DE
          </div>
        </div>

        <div v-else class="space-y-3">
          <div v-for="(q, k) in [['Missing placeholder', '{amount} is not present in the translation', 'clay'], ['Too long for button', '31 / 24 characters (design limit)', 'clay'], ['Plural forms', 'All 6 Arabic plural categories provided', 'grove']]" :key="k" class="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-ink-200/60">
            <span class="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full" :class="q[2] === 'grove' ? 'bg-grove-100 text-grove-700' : 'bg-clay-100 text-clay-500'">
              <AppIcon :name="q[2] === 'grove' ? 'check' : 'close'" :size="13" :stroke-width="2.5" />
            </span>
            <div>
              <p class="font-medium text-ink-900">{{ q[0] }}</p>
              <p class="mt-0.5 text-sm text-ink-500">{{ q[1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="integrations" class="border-y border-ink-200/70 bg-white">
    <div class="container-page py-24 md:py-28">
      <SectionHeader :eyebrow="c.integrations.eyebrow" :title="c.integrations.title" align="center" />
      <ul class="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="it in c.integrations.items" :key="it.name" class="flex items-center gap-4 rounded-xl p-4 ring-1 ring-ink-200 transition hover:ring-ink-300">
          <span class="flex size-10 items-center justify-center rounded-lg bg-ink-100 text-sm font-semibold text-ink-700">{{ it.name.slice(0, 2) }}</span>
          <span>
            <span class="block font-medium text-ink-900">{{ it.name }}</span>
            <span class="block text-sm text-ink-500">{{ it.kind }}</span>
          </span>
        </li>
      </ul>
    </div>
  </section>

  <section id="security" class="container-page py-24 md:py-28">
    <SectionHeader :eyebrow="c.security.eyebrow" :title="c.security.title" />
    <div class="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="s in c.security.items" :key="s.title">
        <AppIcon :name="s.icon" :size="22" class="text-grove-600" />
        <h3 class="mt-4 font-semibold tracking-tight">{{ s.title }}</h3>
        <p class="mt-2 text-[0.95rem] leading-relaxed text-ink-600">{{ s.body }}</p>
      </div>
    </div>
  </section>

  <CtaBand />
</template>
