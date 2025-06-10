import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export const site = z.object({
  name: z.string(),
  subdomain: z.string(),
  email: z.string(),
  telephone: z.string(),
  keywords: z.string(),
  logo: z.string().url(),
  photo: z.string().url(),
  openingHours: z.string(),
  acceptedPaymentMethod: z.string(),
  geo: z.object({
    address: z.string(),
    latitude: z.string(),
    longitude: z.string(),
    postalCode: z.string(),
  }),
  sameAs: z.string().url().array(),
  type: z.string(),

  point: z.number().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

export const type = z.object({
  path: z.string(),
  label: z.string(),
  breadcrumbs: z.string().array(),
});

export default defineContentConfig({
  collections: {
    sites: defineCollection({
      type: 'data',
      source: 'sites/**/*.json',
      schema: site,
    }),
    types: defineCollection({
      type: 'data',
      source: 'static/BusinessTypes/**/*.json',
      schema: type,
    }),
  },
});
