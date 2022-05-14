<script setup>
/*export default {
    name: "SharedUiButtonAngular",
    mounted() {
        document.addEventListener("keypress", toggleVideo);
        function toggleVideo(e) {
          if (e.key === "Enter") {
             var ssu = new SpeechSynthesisUtterance("Hello, I'm a Vue.js developer");
             speechSynthesis.speak(ssu);
          }
        }
    },
    beforeDestroy() {
        document.removeEventListener("keypress", toggleVideo);
    },
};*/
</script>

<template>
  <div class="slide-cover">
    <div class="slide-title mt-6">
      <h2>Shared UI in Angular</h2>
    </div>
    <div class="slide-body code-col-grid mb-8">
      <div class="code-col">
        <h4 class="m-0">UI Component</h4>
        <div class="text-base self-start"># my-button.component.ts</div>
        <pre>
        <code class="js max-h-40">
@Component({
  selector: 'my-button',
  template: `
    &lt;button class="my-button" [class]="mood"&gt;
      &#123;&#123; title &#125;&#125;
    &lt;/button&gt;
  `,
  styles: [...]
})
export class MyButtonComponent {
  @Input() title: string;
  @Input() mood: string;
}
        </code>
        </pre>
      </div>
      <div class="code-col">
        <h4>Feature Component</h4>
        <div class="text-base self-start"># app.component.ts</div>
        <pre>
        <code class="js">
import { MyButtonComponent } from './shared/ui/my-button.component';
@Component({
  selector: 'app',
  template: `
    &lt;my-button mood="success" title="Click me" /&gt;
  `,
  styles: [...]
})
export class AppComponent {}
        </code>
        </pre>
        <h4>Result</h4>
              <img src="/src/assets/angular-component-error.png" class="m0 w-full opacity-0" />
      </div>
    </div>
  </div>
</template>

<style>
</style>