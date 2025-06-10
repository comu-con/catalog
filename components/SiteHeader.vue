<template>
  <UContainer class="flex flex-wrap items-center gap-4">
    <NuxtLink to="/">
      <h1 class="text-primary max-md:text-3xl">ComuCon<span class="text-secondary">.</span>com</h1>
      <h2 class="h5 text-secondary/75">Comunidade Conectada</h2>
    </NuxtLink>
    <UButtonGroup class="ml-auto">
      <AppMenu />
      <UserMenu />
      <ColorSchemeSwitcher />
    </UButtonGroup>
  </UContainer>
</template>
