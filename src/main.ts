import { createApp } from 'vue';
import App from './App';

const app = createApp(App);

app.directive('my-directive', {
  mounted() {
    console.log('my-directive');
  },
});

app.mount('#app');
