<template>
  <div id="hello" class="hello">
    <p>Hello World 1</p>
    <p>Hello World 2</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted(){
    let d3=require("d3");      //一、引入
    let p = d3.select("#hello")//二、基本用法：是选择所有指定元素的第一个
          .selectAll("p")      //是选择指定元素的全部-------select和selectAll这两个函数返回的结果称为选择集。
          .text("test");       //d3.select().selectAll().text()链式语法
 
                               //修改段落的颜色和字体大小
        p.style("color","red")
        .style("font-size","72px");
                               //三、D3 有一个很独特的功能：能将数据绑定到 DOM 上，也就是绑定到文档上。
        /**@augments
         * 
         * D3 中是通过以下两个函数来绑定数据的：
              datum()：绑定一个数据到选择集上
              data()：绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定
         */
  }
}
</script>

<style scoped>
 
</style>
