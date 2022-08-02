import { createApp } from 'vue';
// import 'element-plus/dist/index.css';
import App from './App';
import { MyDirective } from './my-directive';

// import('element-plus');

// @ts-ignore
if (window.a) {
  import('element-plus/dist/index.css');
}

const app = createApp(App);

app.directive('my-directive', MyDirective);

app.mount('#app');
