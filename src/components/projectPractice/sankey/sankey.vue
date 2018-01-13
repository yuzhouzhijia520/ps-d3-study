<template>
  <div class="example">
      <div id="chart"></div>
  </div>
</template>

<script>
// import d3 from '../../../../static/d3-sankey/d3.v3.min.js'
// const d3=require("d3");      //一、引入
// import '../../../../static/d3-sankey/d3-sankey.js'
// import "d3.chart"
// import 'd3.chart.sankey'

// const d3=require("d3");      //一、引入

export default {
  name: 'example',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted(){
      debugger
    //  d3.json("../../../../static/json/energy.json", function(error, json) {
    //      debugger
    //     var chart = d3.select("#chart").append("svg").chart('Sankey'),
    //         color = d3.scale.category20();
    //     chart
    //       .nodeWidth(15)
    //       .nodePadding(10)
    //       .colorNodes(function(name) { return color(name.replace(/ .*/, "")); })
    //       .draw(json);
    //   });
  }
}
</script>

<style scoped>
  body {
        width: 960px;
        margin: auto;
        font: 10px sans-serif;
      }
      #chart {
        width: 960px;
        height: 500px;
      }
      .node rect {
        fill-opacity: .9;
        shape-rendering: crispEdges;
      }
      .node text {
        pointer-events: none;
        text-shadow: 0 1px 0 #fff;
      }
      .link {
        fill: none;
        stroke: #000;
        stroke-opacity: .2;
      }
      .link:hover {
        stroke-opacity: .5;
      }
</style>
