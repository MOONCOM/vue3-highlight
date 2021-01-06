import { initData } from '@/ts/highlight';
import highlight from './components/highlight.vue';
import { setInit } from './init-data';

export default function (Vue: any, options: initData) {
  // 设置初始值
  setInit(options);
  Vue.component('v-highlight', highlight);
}
