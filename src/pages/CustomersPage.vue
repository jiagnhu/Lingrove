<script setup>
import c from '@/content/customers.json'
import PageHero from '@/components/PageHero.vue'
import LogoCloud from '@/components/LogoCloud.vue'
import CtaBand from '@/components/CtaBand.vue'

const initials = (name) => name.split(' ').map((p) => p[0]).join('')
</script>

<template>
  <PageHero v-bind="c.hero" />

  <section class="container-page py-16">
    <LogoCloud />
  </section>

  <section class="container-page space-y-6 pb-24">
    <article
      v-for="(s, i) in c.featured"
      :key="s.company"
      class="grid overflow-hidden rounded-3xl ring-1 ring-ink-200 lg:grid-cols-[1.4fr_1fr]"
      :class="i === 0 ? 'bg-white' : 'bg-ink-50'"
    >
      <div class="p-8 md:p-12">
        <p class="text-sm text-ink-500"><span class="font-semibold text-ink-900">{{ s.company }}</span> · {{ s.industry }}</p>
        <h2 class="mt-6 text-balance text-2xl font-semibold tracking-[-0.02em] md:text-[2rem] md:leading-tight">{{ s.title }}</h2>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">{{ s.summary }}</p>
        <p class="mt-8 text-sm font-medium text-grove-600">Read the case study →</p>
      </div>
      <dl class="grid grid-cols-3 border-t border-ink-200 lg:grid-cols-1 lg:border-t-0 lg:border-l">
        <div v-for="m in s.metrics" :key="m.l" class="flex flex-col justify-center border-ink-200 p-6 not-last:border-r md:p-8 lg:not-last:border-r-0 lg:not-last:border-b">
          <dd class="text-3xl font-semibold tracking-tight tabular-nums md:text-4xl">{{ m.v }}</dd>
          <dt class="mt-1.5 text-sm text-ink-500">{{ m.l }}</dt>
        </div>
      </dl>
    </article>
  </section>

  <section class="border-t border-ink-200/70 bg-white">
    <div class="container-page grid gap-5 py-24 md:grid-cols-2">
      <figure v-for="q in c.quotes" :key="q.name" class="flex flex-col justify-between rounded-2xl bg-paper p-8 ring-1 ring-ink-200/70">
        <blockquote class="font-serif text-[1.45rem] leading-snug text-ink-900">“{{ q.quote }}”</blockquote>
        <figcaption class="mt-8 flex items-center gap-3">
          <span class="flex size-10 items-center justify-center rounded-full bg-grove-100 text-sm font-semibold text-grove-700">{{ initials(q.name) }}</span>
          <span class="text-sm">
            <span class="block font-medium text-ink-900">{{ q.name }}</span>
            <span class="block text-ink-500">{{ q.role }}</span>
          </span>
        </figcaption>
      </figure>
    </div>
  </section>

  <CtaBand title="Join the teams shipping every language on release day." />
</template>
