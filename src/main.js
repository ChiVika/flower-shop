
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from "./router";
// import { createPinia } from 'pinia';


// const app = createApp(App);
// app.use(router);
// app.use()

// router.isReady().then(() => app.mount("#app"));


// import { createApp } from "vue";
// import { createPinia } from "pinia";


// import App from "./App.vue";
// import router from "./router";

// const app = createApp(App);
// app.use(createPinia()).use(router);

// router.isReady().then(() => app.mount("#app"));

import { createApp } from "vue";
import { createPinia } from "pinia";
import VueTheMask from 'vue-the-mask'
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Подключаем vue-the-mask
app.use(VueTheMask);

app.use(createPinia()).use(router);

router.isReady().then(() => app.mount("#app"));
