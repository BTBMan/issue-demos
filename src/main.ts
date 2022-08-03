import { createApp, type App as VueApp } from 'vue';
// import 'element-plus/dist/index.css';
import { qiankunWindow, renderWithQiankun, type QiankunProps } from 'vite-plugin-qiankun/es/helper';
// import App from './App';
import App from './App.vue';
import { MyDirective } from './my-directive';

// import('element-plus');

let root: VueApp;
function render(props?: QiankunProps) {
  root = createApp(App);

  root.directive('my-directive', MyDirective);

  root.mount('#app');
}

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {
    //
  },
  unmount() {
    root.unmount();
  },
  update() {
    //
  },
});

if (import.meta.env.DEV) {
  import('element-plus/dist/index.css');
  import('element-plus');

  render();
}
