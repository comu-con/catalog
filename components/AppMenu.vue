<template>
  <UDropdownMenu
    :items="[
      { label: 'Sou comerciante/empreendedor', icon: 'i-lucide-store' },
      { label: 'Quero desenvolver o projeto', icon: 'i-lucide-git-pull-request' },
    ]"
  >
    <UButton
      label="Participar"
      icon="i-lucide-circle-fading-plus"
      variant="ghost"
      color="secondary"
    />
  </UDropdownMenu>
</template>
