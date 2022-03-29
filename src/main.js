import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './services/axios'

createApp(App).use(store).use(router).mount("#app");
