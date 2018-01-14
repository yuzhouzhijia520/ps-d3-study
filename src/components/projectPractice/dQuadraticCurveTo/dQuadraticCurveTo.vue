

<template>
  <div class="dQuadraticCurveTo">
      <canvas id="dCurveTo"></canvas>
  </div>
</template>

<script>
/**二阶曲线
 */
export default {
  name: 'dQuadraticCurveTo',
  data () {
    return {
    }
  },
  methods: {
       
  },
  mounted(){
      
      var c=document.getElementById("dCurveTo");
      var ctx=c.getContext("2d");
      var percent = 0;
      function  animate() {
                ctx.clearRect( 0, 0, 800, 800 );
                ctx.beginPath();
                drawCurvePath(ctx,[20,20],[200,20],0.2,percent);
                ctx.stroke();
                percent = ( percent + 1 ) % 100;
                requestAnimationFrame(animate );
      }     
      animate();
      function drawCurvePath( ctx, start, end, curveness, percent ) {
          var cp = [
              ( start[ 0 ] + end[ 0 ] ) / 2 - ( start[ 1 ] - end[ 1 ] ) * curveness,
              ( start[ 1 ] + end[ 1 ] ) / 2 - ( end[ 0 ] - start[ 0 ] ) * curveness
          ];
          var t = percent / 100;
          var p0 = start;
          var p1 = cp;
          var p2 = end;
          
          var v01 = [ p1[ 0 ] - p0[ 0 ], p1[ 1 ] - p0[ 1 ] ];     // 向量<p0, p1>
          var v12 = [ p2[ 0 ] - p1[ 0 ], p2[ 1 ] - p1[ 1 ] ];     // 向量<p1, p2>

          var q0 = [ p0[ 0 ] + v01[ 0 ] * t, p0[ 1 ] + v01[ 1 ] * t ];
          var q1 = [ p1[ 0 ] + v12[ 0 ] * t, p1[ 1 ] + v12[ 1 ] * t ];
          
          var v = [ q1[ 0 ] - q0[ 0 ], q1[ 1 ] - q0[ 1 ] ];       // 向量<q0, q1>

          var b = [ q0[ 0 ] + v[ 0 ] * t, q0[ 1 ] + v[ 1 ] * t ];
          
          ctx.moveTo( p0[ 0 ], p0[ 1 ] );

          ctx.quadraticCurveTo( 
              q0[ 0 ], q0[ 1 ],
              b[ 0 ], b[ 1 ]
          );
      }
  }
}
</script>

<style scoped>
 
</style>
