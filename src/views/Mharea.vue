<template>
 <div>
   <div class="harea">
     <p>高风险地区</p>
      <ul>
      <li  v-for='item in riskArea.high' :key='item.id'>{{item}}</li>
      </ul>
   </div>
   <div class="marea">
     <p>中风险地区</p>
      <ul>
      <li class="harea" v-for='item in riskArea.mid' :key='item.id'>{{item}}</li>
      </ul>
   </div>


  

  </div>
</template>

<script>
export default {
  name:'Mharea',
  data(){
    return {
      riskArea:{},
      count:0
    }
  },
  methods: {
    load(){
      this.count +=2;
    }
  },
  created(){
    this.$api
      .getDataInfo({
        key: "0b2292c01bf100466bc2336564f17674",
      })
      .then((res) => {
        
        // console.log(res);
        this.riskArea = {
          high: res.newslist[0].riskarea.high,
          mid: res.newslist[0].riskarea.mid,
        };
        console.log(this.riskArea);
      });
  }
}
</script>

<style>
.harea p{
  background-color:rgb(245,108,108);
  text-align:center;
  color:rgb(255,255,255);
  font-size:20px;
}
.marea p{
  background-color:rgb(230,162,60);
  text-align:center;
  color:rgb(255,255,255);
  font-size:20px;
}
li{
  
  text-align:center;
  line-height: 20px;
  font-size:13px;
}
</style>
