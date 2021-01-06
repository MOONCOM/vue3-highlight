<!--
  @name: 根据查询的字段使句子高亮显示
  @description:
  @author: MOONCOM
  @time: 2021/01/05
-->
<template>
  <component :class="['highlight-content', init.class]" :is="tag" :style="init.style">
    <template v-for="(item,index) of operateMessage" :key="index">{{item.message}}<span :class="['highlight', init.selectedClass]">{{item.word}}</span></template>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { group } from '../ts/highlight';
import { init } from '../init-data';

export default defineComponent({
  name: 'vue3-highlight',
  props: {
    // 要高亮的关键字数组
    search: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    // 要展示的信息
    message: {
      type: String,
      default: '',
    },
    // 定义最外层的标签，默认为div
    tag: {
      type: String,
      default: 'div',
    },
  },
  computed: {
    // 将要展示的信息按照关键字截取
    operateMessage(): Array<group> {
      let resultArray: Array<group> = [{ word: '', message: this.message }];
      this.search.forEach((selectedWord: string) => {
        const store: Array<group> = [];
        resultArray.forEach(({ word, message }) => {
          const result = this.splitMessage(message, selectedWord);
          if (result.length > 0) {
            // 分割信息被分割词匹配分割
            store.push(...result);
            store.push({ word, message: '' });
          } else {
            // 分割信息中没有分割词
            store.push({ word, message });
          }
        });
        resultArray = store;
      });
      return resultArray.filter(({ word, message }) => (word !== '' || message !== ''));
    },
  },
  data() {
    return {
      // 初始化配置
      init,
    };
  },
  methods: {
    // 使用分隔词对分割信息进行切割
    splitMessage(message: string, word: string) {
      const result: Array<group> = [];
      // 第一次截取的结果
      const splitArray = message.split(word);
      splitArray.forEach((value) => {
        result.push({ message: value, word });
      });

      // 将最后一个分割信息的分隔词删掉
      const { length } = result;
      if (length > 0) {
        result[length - 1].word = '';
      }

      return result;
    },
  },
});
</script>

<style>
  .highlight-content .highlight{
    color:red;
  }
</style>
