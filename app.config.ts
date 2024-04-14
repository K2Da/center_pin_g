export default defineAppConfig({
  ui: {
    primary: 'teal',
    gray: 'neutral',

    pagination: {
      rounded: 'first:rounded-s-md last:rounded-e-md',
      default: {
        size: 'xs',
        activeButton: {
          color: 'primary',
          variant: 'outline',
        },
        inactiveButton: {
          color: 'primary',
          variant: 'link',
        },
      },
    },
  },
});
