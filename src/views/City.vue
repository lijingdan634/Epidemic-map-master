<template>
<div>
  <div id='city'>
    
  </div>
</div>
  
</template>

<script src="https://www.echartsjs.com/examples/vendors/jquery/jquery.js"></script>

<script>


export default {
  name:'City',
  data(){
    return {
      cityData:[]
    }
  },
  mounted(){
    const currentProvince = this.$route.params.id; //内蒙古
    // console.log(this.$route.params);
    var that = this;
    // var newArr = []
    
    this.$.ajax({

            url: "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5",
            dataType: "jsonp",
            success: function (data) {
                
                var res = data.data || "";
                res = JSON.parse(res);
                
                if(res){
                  var province = res.areaTree[0].children;
                  // console.log(province[18].children[1]); //陕西 西安
                  for (var i=0;i<province.length;i++){
                    if(currentProvince === province[i].name ){
                      for(var j=0;j< province[i].children.length;j++){
                        console.log(province[i].children[j].name);
                        
                        // console.log(/[\u4E00-\u9FA5]+\u5e02$/.test(currentProvince.children[j].name));
                        // if(/[\u4E00-\u9FA5]+\u5e02$/.test(currentProvince.children[j].name)){
                          var temp = {
                            name:province[i].children[j].name+'市',
                            value: province[i].children[j].total.confirm,
                            itemStyle: {
                              normal: {
                                  areaColor: that.setColor(
                                      province[i].children[j].total.confirm
                                  )
                              }
                          }
                          }
                        that.cityData.push(temp);
                      }
                    }
                  }
                
                }
                that.$charts.provinceCity("city", currentProvince,that.cityData);
            }  
    })

  },
  methods:{
    setColor(value) {
            let currentColor = "";
            switch (true) {
                case value == 0:
                    currentColor = "#fff";
                    break;
                case value > 0 && value < 10:
                    currentColor = "#FDFDCF";
                    break;
                case value >= 10 && value < 100:
                    currentColor = "#FE9E83";
                    break;
                case value >= 100 && value < 500:
                    currentColor = "#E55A4E";
                    break;
                case value >= 500 && value < 10000:
                    currentColor = "#4F070D";
                    break;
            }
            return currentColor;
        }
  }
}
</script>

<style scoped>
  #city{
    width: 100%;
    height: 400px;
  }
</style>