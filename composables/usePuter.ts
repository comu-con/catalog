import type { Puter, PuterUser } from '~/interfaces/Puter';

export const usePuter = () => {
  let $puter: Puter | undefined;

  useNuxtApp().$puter().then((puterInstance) => {
    if (puterInstance.auth.isSignedIn())
      puterInstance.auth.getUser().then((res) => { user.value = res; });
    $puter = puterInstance;
  });

  const user = useState<PuterUser | null>('user', () => null);

  return {
    user,
    signIn: async () => {
      await $puter?.auth.signIn();
      if ($puter) user.value = await $puter.auth.getUser();
    },
    signOut: () => {
      $puter?.auth.signOut();
      user.value = null;
    },
  };
};
