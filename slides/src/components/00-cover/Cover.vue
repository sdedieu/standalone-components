<script setup lang="ts">
</script>

<template>
  <section id="cover">
    <div class="slide-cover">
      <div class="slide-title mt-6">
        <h2>Standalone Components - A world without ngModules</h2>
      </div>
      <div class="slide-body flex items-center">
        <img
          class="kaizen-logo"
          src="/src/assets/Logo-Kaizen-couleurs.png"
          alt="Logo Kaizen Blanc"
        />
      </div>
    </div>
  </section>
</template>

<style>
#cover div img.kaizen-logo {
  @apply m-auto w-72;
}

#cover div.qr-code {
  @apply absolute bottom-0 right-0 m-16 w-16 m-6 md:w-44;
}
</style>
