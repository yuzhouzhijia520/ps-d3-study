

<template>
  <div class="quadraticCurveTo">
      <canvas id="CurveTo"></canvas>
  </div>
</template>

<script>
/**二阶曲线
 */
export default {
  name: 'quadraticCurveTo',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted(){
    let c=document.getElementById("CurveTo");
    let ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20,20);//启始坐标
    ctx.quadraticCurveTo(20,100,200,20);//分别指：控制点，结束坐标
    ctx.stroke();//stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
  }
}
</script>

<style scoped>
 
</style>
