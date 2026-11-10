<script setup>
const locales = [
  { code: 'de-DE', name: 'German', pct: 100 },
  { code: 'fr-FR', name: 'French', pct: 100 },
  { code: 'ja-JP', name: 'Japanese', pct: 94, active: true },
  { code: 'pt-BR', name: 'Portuguese', pct: 88 },
  { code: 'ko-KR', name: 'Korean', pct: 76 },
  { code: 'ar-SA', name: 'Arabic', pct: 61 },
]
const rows = [
  { key: 'checkout.summary.title', src: 'Review your order', tgt: 'ご注文内容の確認', status: 'approved' },
  { key: 'checkout.shipping.eta', src: 'Arrives in {days} business days', tgt: '{days}営業日以内にお届け', status: 'approved' },
  { key: 'checkout.promo.invalid', src: 'This code has expired.', tgt: 'このコードは有効期限が切れています。', status: 'review' },
  { key: 'checkout.tax.notice', src: 'Taxes calculated at the next step', tgt: '税額は次のステップで計算されます', status: 'machine' },
  { key: 'checkout.cta.pay', src: 'Pay {amount}', tgt: '', status: 'new' },
]
const pill = {
  approved: ['Approved', 'bg-grove-100 text-grove-700'],
  review: ['In review', 'bg-clay-100 text-clay-500'],
  machine: ['MT · 98%', 'bg-ink-100 text-ink-600'],
  new: ['New', 'bg-white text-ink-500 ring-1 ring-ink-200'],
}
</script>

<template>
  <div class="relative">
    <div class="overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(11,24,19,0.25),0_0_0_1px_rgba(11,24,19,0.07)]">
      <!-- window bar -->
      <div class="flex items-center gap-3 border-b border-ink-100 bg-ink-50/70 px-4 py-3">
        <div class="flex gap-1.5">
          <span class="size-2.5 rounded-full bg-ink-200" /><span class="size-2.5 rounded-full bg-ink-200" /><span class="size-2.5 rounded-full bg-ink-200" />
        </div>
        <p class="truncate text-xs text-ink-500">
          <span class="text-ink-700">checkout-web</span> / release 4.12 / <span class="font-medium text-ink-900">ja-JP</span>
        </p>
        <span class="ml-auto hidden items-center gap-1.5 rounded-full bg-grove-50 px-2.5 py-1 text-[0.7rem] font-medium text-grove-700 sm:inline-flex">
          <span class="size-1.5 rounded-full bg-grove-500" /> Synced with main · 2m ago
        </span>
      </div>

      <div class="grid md:grid-cols-[13rem_1fr]">
        <!-- locales -->
        <aside class="hidden border-r border-ink-100 p-3 md:block">
          <p class="px-2 pb-2 text-[0.68rem] font-medium uppercase tracking-wider text-ink-400">Locales</p>
          <ul class="space-y-0.5">
            <li
              v-for="l in locales"
              :key="l.code"
              class="rounded-lg px-2 py-2"
              :class="l.active ? 'bg-ink-100' : ''"
            >
              <div class="flex items-center justify-between text-[0.78rem]">
                <span :class="l.active ? 'font-medium text-ink-900' : 'text-ink-700'">{{ l.name }}</span>
                <span class="tabular-nums text-ink-500">{{ l.pct }}%</span>
              </div>
              <div class="mt-1.5 h-1 rounded-full bg-ink-100">
                <div class="h-1 rounded-full" :class="l.pct === 100 ? 'bg-grove-500' : 'bg-grove-400/70'" :style="{ width: l.pct + '%' }" />
              </div>
            </li>
          </ul>
        </aside>

        <!-- strings -->
        <div class="min-w-0">
          <div class="flex items-center justify-between border-b border-ink-100 px-4 py-2.5">
            <p class="text-[0.78rem] text-ink-500"><span class="font-medium text-ink-900">1,284</span> strings · 62 need attention</p>
            <div class="flex gap-1.5 text-[0.7rem]">
              <span class="rounded-md bg-ink-900 px-2 py-1 text-paper">All</span>
              <span class="rounded-md px-2 py-1 text-ink-500">Untranslated</span>
              <span class="hidden rounded-md px-2 py-1 text-ink-500 sm:inline">In review</span>
            </div>
          </div>
          <ul>
            <li
              v-for="(r, i) in rows"
              :key="r.key"
              class="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b border-ink-100 px-4 py-3 last:border-0"
              :class="i === 2 ? 'bg-grove-50/60' : ''"
            >
              <p class="truncate font-mono text-[0.68rem] text-ink-400">{{ r.key }}</p>
              <span class="row-span-3 self-center rounded-full px-2 py-0.5 text-[0.66rem] font-medium whitespace-nowrap" :class="pill[r.status][1]">{{ pill[r.status][0] }}</span>
              <p class="truncate text-[0.82rem] text-ink-600">{{ r.src }}</p>
              <p class="truncate text-[0.82rem]" :class="r.tgt ? 'text-ink-900' : 'italic text-ink-300'">{{ r.tgt || 'Awaiting translation…' }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- floating PR card -->
    <div class="absolute -bottom-6 -left-3 hidden w-64 rounded-xl bg-white p-4 shadow-[0_20px_50px_-15px_rgba(11,24,19,0.3),0_0_0_1px_rgba(11,24,19,0.07)] sm:block md:-left-8">
      <div class="flex items-center gap-2 text-[0.72rem] text-ink-500">
        <span class="flex size-5 items-center justify-center rounded-full bg-grove-100 text-grove-700">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M6 9v6" /><circle cx="18" cy="18" r="3" /><path d="M18 15V9a3 3 0 0 0-3-3h-3" /></svg>
        </span>
        Pull request opened
      </div>
      <p class="mt-2 text-[0.85rem] font-medium text-ink-900">#482 · Translations for 4.12</p>
      <p class="mt-0.5 text-[0.72rem] text-ink-500">6 locales · 1,222 strings · checks passing</p>
    </div>

    <!-- floating TM card -->
    <div class="absolute top-28 -right-3 hidden rounded-xl bg-ink-900 px-4 py-3 text-paper shadow-xl lg:block xl:-right-10">
      <p class="text-[0.68rem] text-ink-400">Translation memory reuse</p>
      <p class="mt-0.5 text-lg font-semibold tabular-nums">71%<span class="ml-1.5 text-[0.7rem] font-normal text-grove-400">↑ 9 pts</span></p>
    </div>
  </div>
</template>
