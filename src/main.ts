import { createApp } from 'vue';
import App from './App';
import { MyDirective } from './my-directive';

const app = createApp(App);

app.directive('my-directive', MyDirective);

app.mount('#app');
