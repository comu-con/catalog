import type { Puter } from '~~/interfaces/Puter';

declare global {
  interface Window { puter?: Puter }
}

export default defineNuxtPlugin(() => {
  let initPuter: (value: Puter) => void;
  let rejectPuter: (reason: unknown) => void;
  const puterInstance: Promise<Puter> = new Promise((resolve, reject) => {
    initPuter = resolve;
    rejectPuter = reject;
  });

  useHead({
    script: [
      {
        key: 'Puter',
        src: 'https://js.puter.com/v2/',
        defer: true,
        onload: () => {
          if (window.puter) initPuter(window.puter);
          else rejectPuter('No Puter instance found. Maybe try to instatiate it again.');
        },
      },
    ],
  });

  return { provide: { puter: () => puterInstance } };
});
