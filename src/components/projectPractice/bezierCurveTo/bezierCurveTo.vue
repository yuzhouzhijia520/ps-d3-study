

<template>
  <div class="bezierCurveTo">
      <canvas id="myCanvas"></canvas>
  </div>
</template>

<script>
/**三阶曲线
 */
export default {
  name: 'bezierCurveTo',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted(){
    let c=document.getElementById("myCanvas");
    let ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20,20);//启始坐标
    ctx.bezierCurveTo(20,100,200,100,200,20);//分别指：控制点1，控制点2，结束坐标
    ctx.stroke();//stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
  }
}
</script>

<style scoped>
 
</style>
