import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./routers";
import "./styles/global.less";

const store = createPinia();
const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
