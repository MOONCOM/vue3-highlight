/*
* 每组的数据格式
* */
export interface group{
  word: string,
  message: string,
}

/*
* 组件初始化配置的数据结构
* */
export interface initData{
  /*
  * 作用：组件的自定义类名
  * 类型：数组或者字符串
  * */
  class: string | undefined,
  /*
  * 作用：组件的自定义样式
  * 类型：对象
  * */
  style: object | undefined,
  /*
  * 作用：匹配字符的类名
  * 类型：字符串
  * 默认值：highlight
  * */
  selectedClass: string,
}
