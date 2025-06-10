<script setup lang="ts">
const appConfig = useAppConfig();

useHead({
  titleTemplate(title) {
    return title ? `${title} | ${appConfig.siteTitle}` : appConfig.siteTitle;
  },
  htmlAttrs: {
    lang: 'en',
    class: 'scroll-smooth',
  },
  bodyAttrs: {
    class: 'antialiased',
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon.ico',
    },
  ],
});
</script>

<template>
  <UApp :tooltip="{ delayDuration: 0 }">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <UCard :ui="{ root: 'absolute inset-0 flex flex-col min-h-96 overflow-auto', body: 'flex-1 overflow-auto bg-gradient-to-b from-primary/5 via-muted/50 to-primary/5' }">
        <template #header>
          <SiteHeader />
        </template>
        <UContainer>
          <div class="flex gap-4 items-center mb-4">
            <h2 class="flex-1">
              {{ $route.meta.title }}
            </h2>
            <UInput
              icon="i-lucide-search"
              placeholder="O que você procura?"
            />
          </div>
          <NuxtPage />
        </UContainer>
        <template #footer>
          <SiteFooter />
        </template>
      </UCard>
    </NuxtLayout>
  </UApp>
</template>
