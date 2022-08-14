<template>
    <div>
        <highcharts :options="chartOptions" class="px-3"></highcharts>
    </div>
</template>

<script lang="ts">
import { Chart } from 'highcharts-vue'
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    components: {
        highcharts: Chart
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    marginTop: 20
                },
                title: {
                    text: ''
                },
                xAxis: {
                    title: {
                        text: "人口数"
                    },
                    categories: [
                        1960,
                        1970,
                        1980,
                        1990,
                        2000,
                        2010,
                        2020,
                        2030,
                        2040,
                    ]
                },
                yAxis: {
                    title: {
                        text: "年度",
                        align: 'high',
                        rotation: 0,
                        x: -5,
                        y: -10, 
                        offset: 10
                    },
                },
                series: [],
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top'
                },
                 accessibility: {
                    enabled: false
                },
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                } 
            }, 
        }
    },
    computed: {
        datalist() {
            return this.$store.getters.clickitem
        }
    }, 
    watch: {
        datalist(newval) {
            this.chartOptions.series = newval
        }
    }
});
</script>