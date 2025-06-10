<script lang="ts" setup>
// import type { SitesCollectionItem } from '@nuxt/content';
// import { useGeolocation } from '@vueuse/core';

const { query } = useRoute();
const currentPage = ref(Number(query.page) || 1);
const { data: total } = await useAsyncData('sites', () => queryCollection('sites').count());

// const { coords } = useGeolocation();

const key = computed(() => `sites/page/${currentPage.value}/${total.value ? Math.ceil(total.value / 18) : 0}`);
const { data } = await useAsyncData(key, () => {
  // if (coords.value.accuracy === 0)
  return queryCollection('sites')
    .skip(18 * (currentPage.value - 1))
    .limit(18)
    .all();
  // return Promise.all([
  //   queryCollection('sites')
  //     .andWhere((query) => query.where('point', '<', coords.value.latitude).where('longitude', '<', coords.value.longitude))
  //     .order('point', 'ASC')
  //     .skip(9 * (currentPage.value - 1))
  //     .limit(9)
  //     .all(),
  //   queryCollection('sites')
  //     .andWhere((query) => query.where('latitude', '>', coords.value.latitude).where('longitude', '>', coords.value.longitude))
  //     .order('point', 'DESC')
  //     .skip(9 * (currentPage.value - 1))
  //     .limit(9)
  //     .all(),
  // ]);
}, { transform: (arg) => arg.flat().toSorted((a, b) => Number(a.point) - Number(b.point)) });

const labels = reactive<Record<string, string>>({});
const getTypeLabel = (name: string) => {
  if (!labels[name])
    queryCollection('types').where('path', 'LIKE', `%${name}`).first().then((type) => {
      labels[name] = type?.label || '';
    });

  return labels[name];
};

definePageMeta({
  title: 'Catálogo digital',
});
</script>

<template>
  <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3">
    <UCard
      v-for="site in data"
      :key="site.id"
      class="sm:flex sm:flex-col"
      :ui="{ header: 'flex', body: 'flex-1', footer: 'flex items-center justify-between' }"
    >
      <template #header>
        <div class="flex-1">
          <h3 class="h4">
            {{ site.name }}
          </h3>
          <p class="h6">
            {{ getTypeLabel(site.type) || site.type }}
          </p>
        </div>
        <UAvatar
          :src="site.logo"
          size="xl"
        />
      </template>
      <address class="h5">
        {{ site.geo.address }}
      </address>
      <template #footer>
        <UButtonGroup>
          <UBadge
            v-for="(keyword, index) in site.keywords.replace(/^\s*((?:\w|,\s?){1,15}(?:\w|(?<=\w)[^,\w](?=\w))*).*/, '$1').split(',')"
            :key="index"
            :variant="index % 2 !== 0 ? 'outline' : 'subtle'"
          >
            <span class="text-secondary">#</span>{{ keyword.trim() }}
          </UBadge>
        </UButtonGroup>
        <UButtonGroup>
          <UButton
            v-for="(external, index) in site.sameAs"
            :key="index"
            icon="i-lucide-link"
            :variant="index % 2 === 0 ? 'outline' : 'subtle'"
            color="secondary"
            :to="external"
            external
          />
        </UButtonGroup>
      </template>
    </UCard>
    <UPagination
      v-model:page="currentPage"
      class="col-start-1 -col-end-1 mt-4 sm:mt-6 lg:mt-8"
      :ui="{ list: 'justify-center' }"
      :total="total || 0"
      :items-per-page="18"
      :to="(page) => ({ query: { page } })"
    />
  </div>
</template>
