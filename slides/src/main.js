import { createApp } from 'vue'
import App from './App.vue'
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import './index.css'

createApp(App).mount('#app')

Reveal.initialize({
    history: true,
    width: "100%",
    height: "80%",
    margin: 0,
    plugins: [RevealHighlight, RevealMarkdown],
  });