<script lang="ts" setup>
import type { CollectionItemBase, SitesCollectionItem } from '@nuxt/content';

const state = reactive({
  name: '',
  subdomain: '',
  email: '',
  telephone: '',
  keywords: '',
  logo: '',
  photo: '',
  openingHours: '',
  acceptedPaymentMethod: '',
  geo: {
    address: '',
    latitude: '',
    longitude: '',
    postalCode: '',
  },
  sameAs: [],
  type: '',
} satisfies Omit<SitesCollectionItem, keyof CollectionItemBase>);

const { data } = await useAsyncData('types', () => queryCollection('types').all());

definePageMeta({
  title: 'Cadastrar meu negócio',
});
</script>

<template>
  <UForm
    :state="state"
    class="flex flex-wrap -mx-2 [&>*]:!px-2 gap-y-4"
  >
    <UFormField
      name="name"
      label="Nome"
      class="w-1/2"
    >
      <UInput
        v-model="state.name"
        size="lg"
        placeholder="O nome do seu negócio"
      />
    </UFormField>
    <UFormField
      name="type"
      label="Ramo"
      class="w-1/2"
    >
      <USelectMenu
        v-if="data"
        placeholder="O ramo do seu negócio"
        :items="data"
        value-key="id"
        size="lg"
      />
    </UFormField>
    <UFormField
      name="email"
      label="E-mail"
      class="w-1/2"
    >
      <UInput
        v-model="state.email"
        size="lg"
        placeholder="contato@seu-negócio.com"
      />
    </UFormField>
    <UFormField
      name="telephone"
      label="Telefone"
      class="w-1/2"
    >
      <UInput
        v-model="state.telephone"
        size="lg"
        placeholder="+55 51 9999-9999"
      />
    </UFormField>
    <UFormField
      name="keywords"
      label="Palavras-chaves"
      class="w-full"
      help="Separe as palavras-chaves com vírgula"
    >
      <UInput
        v-model="state.keywords"
        size="lg"
        placeholder="roupas,roupas esportivas,artigos de esporte"
      />
    </UFormField>
  </UForm>
</template>
