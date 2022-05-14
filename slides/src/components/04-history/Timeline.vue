<script setup>
</script>

<template>
  <div class="slide-content">
    <div class="slide-title">
      <h5>Importing file</h5>
    </div>
    <div class="slide-body">
      <div class="whitespace-nowrap overflow-x-hidden">
        <ol class="transition-all duration-1000 w-screen py-48">
          <li>
            <div>
              <time>1934</time> At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium
            </div>
          </li>
          <li>
            <div>
              <time>1937</time> Proin quam velit, efficitur vel neque vitae,
              rhoncus commodo mi. Suspendisse finibus mauris et bibendum
              molestie. Aenean ex augue, varius et pulvinar in, pretium non
              nisi.
            </div>
          </li>
          <li>
            <div>
              <time>1940</time> Proin iaculis, nibh eget efficitur varius,
              libero tellus porta dolor, at pulvinar tortor ex eget ligula.
              Integer eu dapibus arcu, sit amet sollicitudin eros.
            </div>
          </li>
          <li>
            <div>
              <time>1943</time> In mattis elit vitae odio posuere, nec maximus
              massa varius. Suspendisse varius volutpat mattis. Vestibulum id
              magna est.
            </div>
          </li>
          <li>
            <div>
              <time>1946</time> In mattis elit vitae odio posuere, nec maximus
              massa varius. Suspendisse varius volutpat mattis. Vestibulum id
              magna est.
            </div>
          </li>
          <li>
            <div>
              <time>1956</time> In mattis elit vitae odio posuere, nec maximus
              massa varius. Suspendisse varius volutpat mattis. Vestibulum id
              magna est.
            </div>
          </li>
          <li>
            <div>
              <time>1957</time> In mattis elit vitae odio posuere, nec maximus
              massa varius. Suspendisse varius volutpat mattis. Vestibulum id
              magna est.
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
</style>