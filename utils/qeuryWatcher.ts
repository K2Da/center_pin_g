export const loadOnQueryChanged = (load: () => Promise<void>) => {
  const route = useRoute();

  watch(
    () => route.query,
    async () => {
      await load();
    },
  );
};
