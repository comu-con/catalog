import { defineTransformer } from '@nuxt/content';

export default defineTransformer({
  name: 'geo-point',
  extensions: ['.json'],
  transform(content) {
    if (content.geo && typeof content.geo === 'object' && !Array.isArray(content.geo) && 'latitude' in content.geo && 'longitude' in content.geo) {
      const latitude = Number(content.geo.latitude);
      const longitude = Number(content.geo.longitude);

      const point = latitude > longitude ? latitude / longitude : longitude / latitude;

      return { ...content, latitude, longitude, point };
    }

    return content;
  },
});
