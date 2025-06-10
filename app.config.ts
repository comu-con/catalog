export default defineAppConfig({
  siteTitle: 'ComuCon - Comunidade Conectada',

  ui: {
    colors: {
      primary: 'blue',
      secondary: 'orange',
      neutral: 'coal',
      info: 'sky',
    },
    card: {
      slots: {
        root: 'rounded-xs',
      },
    },
    formField: {
      slots: {
        container: 'flex flex-col [&>.inline-flex]:flex',
      },
    },
  },
});
