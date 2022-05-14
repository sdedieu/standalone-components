<script>
import SharedUiButtonVue from "./SharedUiButtonVue.vue";
export default {
  name: "Reason",
  components: { SharedUiButtonVue },
};
</script>

<template>
  <section id="reason">
    <section id="reason-cover">
      <ReasonCover />
    </section>
    <section id="shared-ui-vue">
      <SharedUiButtonVue />
    </section>
    <section id="shared-ui-react">
      <SharedUiButtonReact />
    </section>
    <section data-auto-animate id="shared-ui-angular-nope-1">
      <SharedUiButtonAngularNope1 />
    </section>
    <section data-auto-animate id="shared-ui-angular-nope-2">
      <SharedUiButtonAngularNope2 />
    </section>
    <section data-auto-animate id="shared-ui-angular-nope-3">
      <SharedUiButtonAngularNope3 />
    </section>
    <section id="shared-ui-angular-modules">
      <SharedUiButtonAngularModules />
    </section>
    <section id="state-of-js-survey">
      <StateOfJSSurvey />
    </section>
  </section>
</template>

<style>
</style>