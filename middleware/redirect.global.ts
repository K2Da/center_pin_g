export default defineNuxtRouteMiddleware((to) => {
  if (['/player', '/player/'].includes(to.path)) return navigateTo('/players');
  if (['/team', '/team/'].includes(to.path)) return navigateTo('/teams');
  if (['/tournament', '/tournament/'].includes(to.path))
    return navigateTo('/tournaments');
});
