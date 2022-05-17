<script setup>
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>Modules timeline</h5>
    </div>
    <div class="slide-body">
      <div class="whitespace-nowrap overflow-x-hidden">
        <ol class="transition-all duration-1000 w-screen py-48">
          <li>
            <div>
              <time>1996</time>
              <img src="/src/assets/javascript-logo.png" class="logo w-24" />
            </div>
          </li>
          <li>
            <div>
              <time>2009</time>
              CommonJS
              <p class="m0 py-2 text-xs">
                "What I’m describing here is not a technical problem. It’s a
                matter of people getting together and making a decision to step
                forward and start building up something bigger and cooler
                together." <br />
                <br />
                — Kevin Dangoor
              </p>
            </div>
          </li>
          <li>
            <div>
              <time>2009</time> 
              <img src="/src/assets/nodejs-logo.png" class="logo w-32" />
            </div>
          </li>
          <li>
            <div>
              <time>2010</time> 
              <img src="/src/assets/angularjs-logo.png" class="logo w-32" />
              v0.9.0
            </div>
          </li>
          <li>
            <div class="hidden">
            </div>
          </li>
          <li>
            <div class="hidden">
            </div>
          </li>
          <li>
            <div class="hidden">
            </div>
          </li>
          <li></li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
ol li {
  @apply relative inline-block bg-kzn-apple h-2 w-32;
}

ol li:not(:first-child) {
  @apply ml-3.5;
}

ol li:not(:last-child)::after {
  @apply absolute content-[''] top-1/2 left-full bottom-0 w-3.5 h-3.5 -translate-y-1/2 rounded-full bg-kzn-cyan;
}

ol li:last-child {
  @apply w-full;
}

ol li div {
  @apply absolute left-full w-64 p-1 whitespace-normal text-base ml-2;
}

ol li div::before {
  @apply absolute content-[''] top-full left-0 w-0 h-0 border-solid;
}

ol li:nth-child(odd) div {
  @apply -top-4 -translate-y-full bg-gray-100 rounded-sm;
}

ol li:nth-child(odd) div::before {
  @apply top-full border-transparent border-t-gray-100 border-t-8 border-r-8 border-b-0 border-l-0;
}

ol li:nth-child(even) div {
  @apply top-full bg-gray-100 rounded-sm;
  top: calc(100% + 16px);
}

ol li:nth-child(even) div::before {
  @apply -top-2 border-transparent border-l-gray-100 border-t-8 border-r-0 border-b-0 border-l-8;
}

time {
  @apply block text-lg font-bold mb-2;
}

.logo {
  @apply my-3 ml-16;
}

p.m0 {
  @apply m-0;
}
</style>