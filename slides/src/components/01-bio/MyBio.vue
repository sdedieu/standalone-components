<script>

export default {
  name: "MyBio",
};
</script>

<template>
    <div class="slide-content">
      <div class="slide-title">
        <h5>YOUR HOST</h5>
      </div>
      <div class="slide-body grid grid-cols-4 md:col-span-1 gap-2 pb-24 mx-4">
        <div class="md:col-span-1 col-span-4 flex flex-col justify-center items-center">
          <div class="centered-column">
            <div class="card">
              <img src="/src/assets/me.png" class="profil-img" />
              <div class="text-lg font-bold text-black text-center">
                SYLVAIN DEDIEU
              </div>
            </div>
            <div class="md:mt-4 text-base font-bold text-black text-center">
              Domains of expertise
            </div>
            <p class="text-sm my-0 md:px-4">
              Angular - Vue - AnularJS - Ionic - Flutter - Firebase - Node -
              React
            </p>
          </div>
        </div>
        <div class="col-span-4 md:col-span-3 flex flex-col justify-evenly items-start">
          <a
            class="flex flex-row items-center mx-auto md:mx-0"
            href="https://twitter.com/DedieuS"
          >
            <img src="/src/assets/twitter.png" class="m0 w-8 md:w-16" />
            <div class="ml-8 text-sky-500 text-xl md:text-4xl font-bold">@DedieuS</div>
          </a>
          <a
            class="flex flex-row items-center mx-auto md:mx-0"
            href="https://github.com/sdedieu"
          >
            <img src="/src/assets/github.png" class="m0 w-8 md:w-16" />
            <div class="ml-8 text-black text-xl md:text-4xl font-bold">
              https://github.com/sdedieu
            </div>
          </a>
          <a
            class="flex flex-row items-center mx-auto md:mx-0"
            href="mailto:sylvain.dedieu@kaizen-solutions.net"
          >
            <img src="/src/assets/Logo-Kaizen-black.png" class="m0 w-8 md:w-16" />
            <div class="ml-8 text-kzn-teal text-xl md:text-4xl font-bold">
              sylvain.dedieu@kaizen-solutions.net
            </div>
          </a>
        </div>
      </div>
    </div>
</template>

<style scoped>
div.centered-column {
  @apply w-1/2;
}

div.card {
  @apply w-full shadow-lg px-4 py-6;
}

img.profil-img {
  @apply w-full m-0 !important;
}
</style>