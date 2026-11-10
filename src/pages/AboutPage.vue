<script setup>
import c from '@/content/about.json'
import PageHero from '@/components/PageHero.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import AppIcon from '@/components/AppIcon.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <PageHero v-bind="c.hero" />

  <section class="container-page grid gap-14 py-24 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
    <h2 class="text-3xl font-semibold tracking-[-0.025em] md:text-[2.4rem]">{{ c.story.title }}</h2>
    <div class="space-y-6 text-lg leading-relaxed text-ink-700">
      <p v-for="(p, i) in c.story.paragraphs" :key="i">{{ p }}</p>
    </div>
  </section>

  <section class="container-page pb-24">
    <dl class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-200 ring-1 ring-ink-200 lg:grid-cols-4">
      <div v-for="n in c.numbers" :key="n.l" class="bg-white p-8">
        <dd class="text-4xl font-semibold tracking-tight tabular-nums">{{ n.v }}</dd>
        <dt class="mt-2 text-sm text-ink-500">{{ n.l }}</dt>
      </div>
    </dl>
  </section>

  <section class="border-y border-ink-200/70 bg-white">
    <div class="container-page py-24">
      <SectionHeader eyebrow="What we value" title="Three ideas behind every decision." />
      <div class="mt-14 grid gap-10 md:grid-cols-3">
        <div v-for="(v, i) in c.values" :key="v.title" class="border-t border-ink-900 pt-6">
          <p class="font-mono text-sm text-grove-600">0{{ i + 1 }}</p>
          <h3 class="mt-4 text-xl font-semibold tracking-tight">{{ v.title }}</h3>
          <p class="mt-3 leading-relaxed text-ink-600">{{ v.body }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="careers" class="container-page grid items-center gap-12 py-24 lg:grid-cols-2">
    <div>
      <SectionHeader eyebrow="Careers" title="Help software speak every language." lead="We hire across engineering, linguistics and customer success, remote-first within our three hubs." />
      <BaseButton to="/about#careers" class="mt-8" arrow>See open roles</BaseButton>
    </div>
    <ul class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
      <li v-for="o in c.offices" :key="o.city" class="flex items-center gap-4 rounded-xl bg-white p-5 ring-1 ring-ink-200">
        <span class="flex size-10 items-center justify-center rounded-lg bg-grove-50 text-grove-600"><AppIcon name="pin" :size="18" /></span>
        <span>
          <span class="block font-medium text-ink-900">{{ o.city }}</span>
          <span class="block text-sm text-ink-500">{{ o.note }}</span>
        </span>
      </li>
    </ul>
  </section>
</template>
