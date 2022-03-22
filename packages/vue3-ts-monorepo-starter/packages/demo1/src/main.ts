import 'shared/styles/base.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import OIcon from 'shared/components/OIcon.vue';

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.component('OIcon', OIcon);

app.mount('#app');
