<script setup>
</script>

<template>
  <div class="slide-cover">
    <div class="slide-title mt-6">
      <h2>We forget about ngModules</h2>
    </div>
    <div class="slide-body code-col-grid mb-8">
      <div class="code-col">
        <h4 class="m-0">UI Shared Module</h4>
        <div class="text-base self-start"># shared-ui.module.ts</div>
        <pre>
        <code class="js max-h-40">
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyButtonComponent
  ],
  exports: [MyButtonComponent]
})
export class SharedUiModule { }
        </code>
        </pre>
      </div>
      <div class="code-col">
        <h4>Feature Module</h4>
        <div class="text-base self-start"># app.module.ts</div>
        <pre>
        <code class="js">
@NgModule({
  imports: [
    BrowserModule,
    SharedUiModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
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