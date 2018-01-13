<template>
  <div  class="clusterDiagram">
<div>{{num}}</div>
    <div id="clusterDiagram">
        <svg width="960" height="2000"></svg>
    </div>
  </div>
</template>

<script>
const d3=require("d3");      //一、引入
export default {
  name: 'clusterDiagram',
  data () {
    return {
      num:""
    }
  },
  methods: {
    hello(){
            let svg = d3.select("#clusterDiagram")
                        .selectAll("svg"),
            width = +svg.attr("width"),
            height = +svg.attr("height"),
            g = svg.append("g").attr("transform", "translate(40,0)");

            let tree = d3.tree()
                .size([height, width - 160]);

            let stratify = d3.stratify()
                .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

            d3.csv("../../../../static/csv/city.csv", function(error, data) {
              if (error) throw error;

              let root = stratify(data)
                  .sort(function(a, b) { return (a.height - b.height) || a.id.localeCompare(b.id); });

              let link = g.selectAll(".link")
                  .data(tree(root).links())
                  .enter().append("path")
                  .attr("class", "link")
                  .attr("d", d3.linkHorizontal()
                      .x(function(d) { return d.y; })
                      .y(function(d) { return d.x; }));

              let node = g.selectAll(".node")
                  .data(root.descendants())
                  .enter().append("g")
                  .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
                  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

              node.append("circle")
                  .attr("r", 2.5);

              node.append("text")
                  .attr("dy", 3)
                  .attr("x", function(d) { return d.children ? -8 : 8; })
                  .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
                  .text(function(d) { return d.id.substring(d.id.lastIndexOf(".") + 1); });
            });
    }
  },
  mounted(){
   let _this=this;
    _this.hello();//基础练习
    _this.num=0.2+0.1;
     
  }
}
</script>

<style scoped lang="css">
/**
@date 2018-1-8
@author cosmos
父组件添加scoped之后子组件无效处理方案：
无效e.g.：.node circle {
  fill: #999;
}
方案一生效e.g.：.node >>> circle {
  fill: #999;
}
方案二生效e.g.：.node /deep/ circle {
  fill: #999;
}
*/

 .node >>> circle {
  fill: #999;
}

.node >>> text {
  font: 10px sans-serif;
}

.node--internal >>> circle {
  fill: #555;
}

.node--internal >>> text {
  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
}

.clusterDiagram >>> .link {
  fill: none;
  stroke: #555;
  stroke-opacity: 0.4;
  stroke-width: 1.5px;
}
</style>
