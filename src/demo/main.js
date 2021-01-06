import { createApp } from 'vue';
import DemoComponent from './demo.vue';
import highlight from '../index';

const app = createApp(DemoComponent);
// 注册组件
app.use(highlight, { class: 'MOONCOM', style: { color: '#333' }, selectedClass: '' });
app.mount('#app');
