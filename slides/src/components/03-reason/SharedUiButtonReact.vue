<script>
export default {
  name: "SharedUiButtonReact",
};
</script>

<template>
  <div class="slide-cover">
    <div class="slide-title mt-6">
      <h2>Shared UI in React</h2>
    </div>
    <div class="slide-body code-col-grid mb-8">
      <div class="code-col">
        <h4 class="m-0">UI Component</h4>
        <div class="text-base self-start"># MyButton.ts</div>
        <pre>
        <code class="js max-h-40">
class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let className = 'my-button';
    if (this.props.mood) {
      className += ' ' + this.props.mood;
    }

    return (
      &lt;button className={className}&gt;
        {this.props.title}
      &lt;/button&gt;
    );
  }
}
        </code>
        </pre>
      </div>
      <div class="code-col">
        <h4>Feature Component</h4>
        <div class="text-base self-start"># App.tsx</div>
        <pre>
        <code class="js">
import MyButton from './shared/ui/MyButton.vue';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      &lt;MyButton title="Click me" mood="success" /&gt;
    );
  }
}
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