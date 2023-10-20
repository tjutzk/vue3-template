import { createApp } from 'vue';
import router from '@/router/index';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/style/reset.scss';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const app = createApp(App);
app.use(router);
app.use(ElementPlus, {
  size: 'large',
  locale: zhCn
});
app.mount('#app');
