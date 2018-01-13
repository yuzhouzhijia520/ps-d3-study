<template>
  <div  class="hello">
    <Row>
        <Col span="8">
            <Menu @on-select="handleSelect">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        D3练习
                    </template>
                    <MenuItem name="1-1">test</MenuItem>
                    <MenuItem name="1-2">test</MenuItem>
                    <MenuItem name="1-3">test</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        D3项目练习
                    </template>
                    <MenuItem  name="clusterDiagram">集群图</MenuItem>
                    <MenuItem  name="Sankey">桑基图</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        Canvas项目练习
                    </template>
                    <MenuItem  name="quadraticCurveTo">二阶贝塞尔曲线</MenuItem>
                    <MenuItem  name="bezierCurveTo">三阶贝塞尔曲线</MenuItem>
                </Submenu>
            </Menu>
        </Col>
    </Row>
    <div id="hello">
      <p>Hello World 1</p>
      <p>Hello World 2</p>
    </div>
    
    <div id="datums">
      <p>Apple</p>
      <p>Pear</p>
      <p>Banana</p>
    </div>
    <div id="datas">
      <p>Apple</p>
      <p>Pear</p>
      <p>Banana</p>
    </div>
  </div>
</template>

<script>
const d3=require("d3");      //一、引入
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    handleSelect: function(name) {
        this.$router.push(name);
    },
    hello(){
      let p = d3.select("#hello")//二、基本用法：是选择所有指定元素的第一个
            .selectAll("p")      //是选择指定元素的全部-------select和selectAll这两个函数返回的结果称为选择集。
            .text("test");       //d3.select().selectAll().text()链式语法
  
                                 //修改段落的颜色和字体大小
          p.style("color","red")
          .style("font-size","72px");
    },
    datums(){
                                //三、D3 有一个很独特的功能：能将数据绑定到 DOM 上，也就是绑定到文档上。
        /**@augments
         * 
         * D3 中是通过以下两个函数来绑定数据的：
              datum()：绑定一个数据到选择集上
              data()：绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定
         */
        let str="china";
        let datums=d3.select('#datums')
        let p=datums.selectAll("p")
        p.datum(str)
        p.text((d, i)=>{
            return "第 "+ i + " 个元素绑定的数据是 " + d;
        });
    },
    datas(){
        let dataset = ["I like dogs","I like cats","I like snakes"];
        let datas=d3.select('#datas')
        let p=datas.selectAll("p")
            p.data(dataset)
             .text(function(d, i){
                return d;
             });
    }
  },
  mounted(){
   let _this=this;
    _this.hello();//基础练习
    _this.datums();//数据绑定练习
    _this.datas();//数据绑定练习
     
  }
}
</script>

<style scoped>
 
</style>
