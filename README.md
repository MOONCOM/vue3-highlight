# vue3-highlight

### 功能介绍
> 实现了一个句子根据查询字词进行高亮显示的功能，查询的字词的输入格式为数组（为了
> 兼容分词查询功能），根据字词数组的内容进行多个词的高亮展示。使用模板差值 {{ }} 和
> v-text，而不是v-html进行高亮字词的展示，减少XSS攻击的风险

### 下载插件
```
npm install vue3-highlight
```

### 在线演示
> [示例](https://mooncom.github.io/vue3-highlight/dist/)

### init (当组件注册时配置)
> ### class
> * 类型：String 字符串
> * 默认值： ' ' 空字符串
> * 作用：配置组件的默认类名，多个类名使用空格分隔
> ### style
> * 类型：Object 对象
> * 默认值： { } 空对象
> * 作用：配置组件的默认样式
> ### selectedClass
> * 类型：String 字符串
> * 默认值： 'highlight'
> * 作用：匹配字符的类名，多个类名使用空格分隔

### props
> #### search
> * 类型：Array 数组
> * 默认值： [ ] 空数组
> * 作用：要进行查询的字词数组
> * 备注：当不进行字词查询时可以不传或者设为空数组
> #### message
> * 类型：String 字符串 
> * 默认值： ' ' 空字符串
> * 作用：要进行高亮查询匹配的内容
> #### tag
> * 类型：String 字符串 
> * 默认值： 'div' div标签
> * 作用：查询内容的包裹标签，默认使用div标签包裹，可根据实际需求使用span或者p标签进行包裹

### 使用
下载成功后在main.js中插入如下代码
```
import { createApp } from 'vue';
// 引入插件
import highlight from 'vue3-highlight';
// 组件注册
const app = createApp(App);
app.use(highlight);
// 配置组件的默认类名和样式
// app.use(highlight,{class:'MOONCOM zhangsan',style:{color:'#ff0'}});
```
在需要查询字词高亮展示的页面组件中使用
```
<template>
    ...
    <v-highlight :message='message' :search='search'/>
    ...
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            message:'这是一个句子，要进行高亮匹配',
            search: ['句子','高亮'],
        };
    },
});
</script>
```

### 兼容性
> 这是基于vue3.0.0+typescript开发的功能组件

### github地址
> [vue3-highlight](https://github.com/MOONCOM/vue3-highlight)

### 版本支持
> 基于vue2的高亮组件开发，请点击 [v-highlight-component](https://github.com/MOONCOM/v-highlight-component) 进行跳转
