<script lang="ts" setup>
const { user, signIn, signOut } = usePuter();

const items = computed(() => !user.value ? [{ label: 'Entrar', icon: 'i-lucide-log-in', onSelect: signIn }] : [{ label: 'Sair', icon: 'i-lucide-log-out', onSelect: signOut }]);
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton
      icon="i-lucide-user"
      label="Minha conta"
      variant="soft"
    />
  </UDropdownMenu>
</template>
