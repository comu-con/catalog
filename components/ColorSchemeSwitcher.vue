<script lang="ts" setup>
const mode = useColorMode();

const icon = computed(() => {
  return mode.value === 'dark' || mode.unknown ? 'i-lucide-lightbulb-off' : 'i-lucide-lightbulb';
});

const toggleTheme = () => {
  if (mode.preference === 'system') mode.preference = mode.value === 'dark' ? 'light' : 'dark';
  else mode.preference = 'system';
};
</script>

<template>
  <UButton
    :icon="icon"
    @click="toggleTheme"
  />
</template>

<style scoped></style>
