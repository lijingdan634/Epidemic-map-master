<template>
    <div>
        <p class="title">
            <i></i> 疫情地图
            
        </p>
        <div id="chinaMap"></div>
    </div>
</template>

<script src="https://www.echartsjs.com/examples/vendors/jquery/jquery.js"></script>
<script>
export default {
    name: "Map",
    data() {
        return {
            cityMapData: []
        };
    },
    mounted() {
        this.$charts.chinaMap("chinaMap")
        let component = this;
        var newArr = [];
        this.$.ajax({
            url: "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5",
            dataType: "jsonp",
            success: function (data) {
                //console.log(data.data)
                var res = data.data || "";
                res = JSON.parse(res);
                //console.log(res)
                if (res) {
                    var province = res.areaTree[0].children;
                    for (var i = 0; i < province.length; i++) {
                        var json = {
                            name: province[i].name,
                            value: province[i].total.nowConfirm
                        }   
                    newArr.push(json) 
                    }   
                }
                // console.log(newArr)
                // console.log(JSON.stringify(newArr))
                for (var i = 0; i < newArr.length; i++) {
                    var temp = {
                        name: newArr[i].name,
                        value: newArr[i].value,
                        itemStyle: {
                            normal: {
                                areaColor: component.setColor(
                                    newArr[i].value
                                )
                            }
                        }
                    };
                    component.cityMapData.push(temp);
                }
                // console.log(component.cityMapData)
                component.$charts.chinaMap("chinaMap", component.cityMapData);
            }
        })
        
        // this.$api.getCaseNum({
        //         key: "d7c335f2e7856ec48c1962a99fcc6f98"
        //     })
        //     .then(res => {
        //         for (var i = 0; i < res.newslist.length; i++) {
        //             var temp = {
        //                 name: res.newslist[i].provinceShortName,
        //                 value: res.newslist[i].currentConfirmedCount,
        //                 itemStyle: {
        //                     normal: {
        //                         areaColor: this.setColor(
        //                             res.newslist[i].currentConfirmedCount
        //                         )
        //                     }
        //                 }
        //             };
        //             this.cityMapData.push(temp);
        //         }
        //         this.$charts.chinaMap("chinaMap", this.cityMapData);
        //     });
    },
    methods: {
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
};
</script>

<style scoped>
#chinaMap {
    width: 100%;
    height: 400px;
}
.title {
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
}
.title::before{
    content:"";
    width: 5px;
    height: 20px;
    background: #8ac2c1;
    margin-right: 10px;
}
</style>