<template>
    <div class="saq-map-xsk">
        <div id="saq-echartMapContainer" style="width:100%;height:100%;"></div>
    </div>
</template>
<script lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';
import svg from '/@/../assets/svg/Beef_cuts_France.svg';
import axios from 'axios';
export default {
    setup() {
        var option = {};
        axios.get(svg).then(res => {
            // console.log("svg=\n" + res.data)
            echarts.registerMap('Beef_cuts_France', { svg: res.data });
            option = {
                tooltip: {},
                visualMap: {
                    left: 'center',
                    bottom: '10%',
                    min: 5,
                    max: 100,
                    orient: 'horizontal',
                    text: ['', 'Price'],
                    realtime: true,
                    calculable: true,
                    inRange: {
                        color: ['#dbac00', '#db6e00', '#cf0000']
                    }
                },
                series: [
                    {
                        name: 'French Beef Cuts',
                        type: 'map',
                        map: 'Beef_cuts_France',
                        roam: true,
                        emphasis: {
                            label: {
                                show: false
                            }
                        },
                        selectedMode: false,
                        data: [
                            { name: 'Queue', value: 15 },
                            { name: 'Langue', value: 35 },
                            { name: 'Plat de joue', value: 15 },
                            { name: 'Gros bout de poitrine', value: 25 },
                            { name: 'Jumeau à pot-au-feu', value: 45 },
                            { name: 'Onglet', value: 85 },
                            { name: 'Plat de tranche', value: 25 },
                            { name: 'Araignée', value: 15 },
                            { name: 'Gîte à la noix', value: 55 },
                            { name: "Bavette d'aloyau", value: 25 },
                            { name: 'Tende de tranche', value: 65 },
                            { name: 'Rond de gîte', value: 45 },
                            { name: 'Bavettede de flanchet', value: 85 },
                            { name: 'Flanchet', value: 35 },
                            { name: 'Hampe', value: 75 },
                            { name: 'Plat de côtes', value: 65 },
                            { name: 'Tendron Milieu de poitrine', value: 65 },
                            { name: 'Macreuse à pot-au-feu', value: 85 },
                            { name: 'Rumsteck', value: 75 },
                            { name: 'Faux-filet', value: 65 },
                            { name: 'Côtes Entrecôtes', value: 55 },
                            { name: 'Basses côtes', value: 45 },
                            { name: 'Collier', value: 85 },
                            { name: 'Jumeau à biftek', value: 15 },
                            { name: 'Paleron', value: 65 },
                            { name: 'Macreuse à bifteck', value: 45 },
                            { name: 'Gîte', value: 85 },
                            { name: 'Aiguillette baronne', value: 65 },
                            { name: 'Filet', value: 95 }
                        ]
                    }
                ]
            }
        })
        onMounted(() => {
            var chartDom = document.getElementById('saq-echartMapContainer')!;
            var myChart = chartDom && echarts.init(chartDom);
            //axios.get方法异步，延时加载
            setTimeout(() => {
                console.log("1=" + option)
                option && myChart.setOption(option);
            }, 1000)
        })
    }

}
</script>
<style lang="less">
@import './../layouts/layout.less';

.saq-map-xsk {
    width: 48%;
    height: 52%;
    position: fixed;
    top: 9%;
    right: 26%;
    // background-color: wheat;
}
</style>
  