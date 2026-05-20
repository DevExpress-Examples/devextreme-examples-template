import { createApp } from 'vue';
import config from 'devextreme/core/config';
import App from './App.vue';
import router from './router';
import { licenseKey } from './devextreme-license';

import './assets/main.css';

config({ licenseKey });

const app = createApp(App);

app.use(router);

app.mount('#app');
