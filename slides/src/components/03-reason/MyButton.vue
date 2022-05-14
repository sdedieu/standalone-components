<script>

export default {
  name: "MyButton",
  props: {
    title: String,
    mood: String
  }
};
</script>

<template>
  <button class="my-button" :class="mood">
    {{ title }}
  </button>
</template>

<style>
.my-button {
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
  border-radius: 9999px;
  color: white;
}

.my-button.danger {
  background-color: firebrick;
}

.my-button.success {
  background-color:  rgb(74 222 128);
}
</style>