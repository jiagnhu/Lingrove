<script setup>
import c from '@/content/home.json'
import BaseButton from '@/components/BaseButton.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import ProductMock from '@/components/ProductMock.vue'
import LogoCloud from '@/components/LogoCloud.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import CtaBand from '@/components/CtaBand.vue'
import AppIcon from '@/components/AppIcon.vue'
</script>

<template>
  <!-- Hero -->
  <section class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(60%_60%_at_50%_0%,var(--color-grove-100),transparent_70%)]" />
    <div class="container-page relative pt-14 pb-24 md:pt-24">
      <div class="mx-auto max-w-3xl text-center">
        <RouterLink to="/product" class="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[0.8rem] text-ink-700 ring-1 ring-ink-200 transition hover:ring-ink-300">
          <span class="size-1.5 rounded-full bg-grove-500" />{{ c.hero.badge }}
          <AppIcon name="arrow-right" :size="13" class="text-ink-400" />
        </RouterLink>
        <h1 class="mt-7 text-balance text-[2.6rem] leading-[1.04] font-semibold tracking-[-0.035em] text-ink-900 sm:text-6xl md:text-[4.4rem]">
          {{ c.hero.titleStart }}
          <span class="font-serif font-normal italic tracking-[-0.01em] text-grove-600">{{ c.hero.titleAccent }}</span>
          {{ c.hero.titleEnd }}
        </h1>
        <p class="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-600 md:text-xl">{{ c.hero.lead }}</p>
        <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <BaseButton to="/pricing#demo" size="lg" arrow>Book a demo</BaseButton>
          <BaseButton to="/product" variant="secondary" size="lg">See how it works</BaseButton>
        </div>
        <ul class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-500">
          <li v-for="t in c.hero.trust" :key="t" class="inline-flex items-center gap-1.5">
            <AppIcon name="check" :size="15" class="text-grove-500" />{{ t }}
          </li>
        </ul>
      </div>
      <div class="mx-auto mt-16 max-w-5xl md:mt-20">
        <ProductMock />
      </div>
    </div>
  </section>

  <!-- Logos -->
  <section class="container-page pb-20">
    <LogoCloud :label="c.logosLabel" />
  </section>

  <!-- Features -->
  <section class="border-t border-ink-200/70 bg-white">
    <div class="container-page py-24 md:py-28">
      <SectionHeader :eyebrow="c.problem.eyebrow" :title="c.problem.title" :lead="c.problem.lead" />
      <div class="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard v-for="f in c.features" :key="f.title" v-bind="f" />
      </div>
    </div>
  </section>

  <!-- Workflow -->
  <section class="container-page py-24 md:py-28">
    <SectionHeader :eyebrow="c.workflow.eyebrow" :title="c.workflow.title" align="center" />
    <ol class="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ink-200 ring-1 ring-ink-200 md:grid-cols-4">
      <li v-for="s in c.workflow.steps" :key="s.n" class="bg-paper p-7">
        <p class="font-mono text-sm text-grove-600">{{ s.n }}</p>
        <h3 class="mt-6 text-xl font-semibold tracking-tight">{{ s.title }}</h3>
        <p class="mt-2.5 leading-relaxed text-ink-600">{{ s.body }}</p>
      </li>
    </ol>
  </section>

  <!-- Stats + testimonial -->
  <section class="bg-ink-900 text-paper">
    <div class="container-page py-24 md:py-28">
      <dl class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="s in c.stats" :key="s.label" class="border-l border-white/15 pl-6">
          <dt class="sr-only">{{ s.label }}</dt>
          <dd class="text-4xl font-semibold tracking-tight tabular-nums md:text-5xl">{{ s.value }}</dd>
          <dd class="mt-3 text-sm leading-relaxed text-ink-300">{{ s.label }}</dd>
        </div>
      </dl>
      <figure class="mx-auto mt-24 max-w-3xl text-center">
        <blockquote class="font-serif text-[1.75rem] leading-snug text-paper md:text-[2.25rem]">
          “{{ c.testimonial.quote }}”
        </blockquote>
        <figcaption class="mt-8 flex items-center justify-center gap-3">
          <span class="flex size-10 items-center justify-center rounded-full bg-grove-600 text-sm font-semibold">ML</span>
          <span class="text-left text-sm">
            <span class="block font-medium">{{ c.testimonial.name }}</span>
            <span class="block text-ink-400">{{ c.testimonial.role }}</span>
          </span>
        </figcaption>
      </figure>
    </div>
  </section>

  <!-- Security -->
  <section class="container-page grid items-start gap-14 py-24 md:py-28 lg:grid-cols-2">
    <SectionHeader :eyebrow="c.security.eyebrow" :title="c.security.title" :lead="c.security.lead" />
    <ul class="grid gap-3 sm:grid-cols-2">
      <li v-for="item in c.security.items" :key="item" class="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-ink-200/80">
        <span class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-grove-100 text-grove-700">
          <AppIcon name="check" :size="12" :stroke-width="2.5" />
        </span>
        <span class="text-[0.95rem] text-ink-800">{{ item }}</span>
      </li>
    </ul>
  </section>

  <CtaBand />
</template>
