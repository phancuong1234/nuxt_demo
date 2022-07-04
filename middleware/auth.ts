export default defineNuxtRouteMiddleware((to, from) => {
  console.log("object");
  //   if (to.params.id === "1") {
  //     return abortNavigation();
  //   }
  return true;
});
