import TelephoneMask from "./telephone-mask.directive";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("telephone-mask", TelephoneMask);
});
