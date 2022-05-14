<script>
export default {
    name: "SharedUiButtonVue"
};
</script>

<template>
  <div class="slide-cover">
    <div class="slide-title mt-6">
      <h2>Shared UI in VueJS</h2>
    </div>
    <div class="slide-body code-col-grid mb-8">
      <div class="code-col">
        <h4 class="m-0">UI Component</h4>
        <div class="text-base self-start"># MyButton.vue</div>
        <pre>
        <code class="js max-h-40">
&lt;script&gt;
export default {
  name: "MyButton",
  props: {
    title: String,
    mood: String
  }
};
&lt;/script&gt;

&lt;template&gt;
  &lt;button class="my-button" :class="mood"&gt;
    &#123;&#123; title &#125;&#125;
  &lt;/button&gt;
&lt;/template&gt;

&lt;style&gt;
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
  background-color: rgb(74 222 128);
}
&lt;/style&gt;
        </code>
        </pre>
      </div>
      <div class="code-col justify-self-center">
        <h4>Feature Component</h4>
        <div class="text-base self-start"># App.vue</div>
        <pre>
        <code class="js">
&lt;script&gt;
import MyButton from './shared/ui/MyButton.vue';
export default {
  name: "App",
};
&lt;/script&gt;

&lt;template&gt;
  &lt;div id="app"&gt;
   &lt;MyButton title="Click me" mood="success" /&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
        </pre>
        <h4>Result</h4>
              <img src="/src/assets/my-button.png" class="m0 w-24" />
      </div>
    </div>
  </div>
</template>

<style>
</style>