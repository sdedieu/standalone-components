<script>
import "reveal.js/plugin/highlight/monokai.css";
import MyButton from "./components/03-reason/MyButton.vue";
import History from "./components/04-history/History.vue";

export default {
    name: "App",
    components: { MyButton, History }
};
</script>

<template>
  <div id="app">
    <div class="reveal">
      <div class="slides relative bg-background bg-cover">
        <img
          class="absolute bottom-0 left-4 w-16 z-50"
          src="/src/assets/Logo-Kaizen-couleurs-blanc.png"
          alt="Kaizen Logo Blanc"
        />
        <Cover />
        <Bio />
        <Agenda />
        <Reason />
        <History />
      </div>
    </div>
  </div>
</template>

<style>
#app,
section {
  @apply w-full h-full;
}
</style>
