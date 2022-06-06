<template>
  <q-page class="q-pa-md">
    <div class="row col-12">
      <div class="col-3 q-pr-md row">
        <q-card class="q-pa-md row full-width justify-center card-item">
          <q-circular-progress
            :value="value"
            size="300px"
            :thickness="0.1"
            color="blue-grey-9"
            track-color="grey-3"
            class="q-ma-md"
            show-value
          >
            <span class="text-blue-grey-9 text-h3">{{ value }}%</span>
          </q-circular-progress>
          <div class="text-subtitle1 text-bold">Overall Visitors</div>
        </q-card>
      </div>
      <div class="col-9">
        <q-card class="row full-width card-item">
          <ECharts
            class="q-pt-md"
            :option="smoothedLineChartOptions"
            :resizable="true"
          />
        </q-card>
      </div>
    </div>
    <div class="row col-12 q-mt-md">
      <div class="col-3 q-pr-md row">
        <q-card class="q-pa-md full-width card-item-2">
          <div class="text-h6 row full-width">Visitors</div>
          <div class="text-h6 row full-width">This Month</div>
          <div class="row full-width q-mt-md text-h2 text-bold">6,013</div>
          <div class="row "></div>
        </q-card>
      </div>
      <div class="col-9">
        <q-card class="row full-width card-item">
          <ECharts class="q-pt-md" :option="barChartOption" :resizable="true" />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import ECharts from "vue-echarts";
import "echarts";

export default defineComponent({
  name: "StatisticsPage",

  components: {
    ECharts,
  },

  setup() {
    return {
      value: ref(77),
      barChartOption: ref({
        grid: {
          bottom: "25%",
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "2021", "2022"],
          source: [
            { product: "Matcha Latte", 2021: 43.3, 2022: 85.8, 2017: 93.7 },
            { product: "Milk Tea", 2021: 83.1, 2022: 73.4, 2017: 55.1 },
            { product: "Cheese Cocoa", 2021: 86.4, 2022: 65.2, 2017: 82.5 },
            { product: "Walnut Brownie", 2021: 72.4, 2022: 53.9, 2017: 39.1 },
          ],
        },
        xAxis: {
          type: "category",
          axisLabel: {
            rotate: 45,
          },
        },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: "bar",
          },
          {
            type: "bar",
          },
        ],
      }),
      smoothedLineChartOptions: ref({
        tooltip: {
          trigger: "item",
        },
        title: {
          left: "center",
          text: "Visitors this month",
        },
        xAxis: {
          data: ["2017", "2018", "2019", "2020", "2021", "2022"],
        },
        yAxis: {},
        series: [
          {
            data: [50, 200, 50, 200, 50, 200],
            type: "line",
            smooth: true,
            color: ["#FA6C0E"],
          },
          {
            data: [200, 50, 200, 50, 200, 50],
            type: "line",
            smooth: true,
            color: ["#2e65db"],
          },
        ],
      }),
    };
  },
});
</script>

<style scoped>
.custom-btn {
  border-radius: 5px;
  background: linear-gradient(145deg, rgb(255, 171, 103) 2%, rgb(250, 108, 14));
  color: white;
}

.card-item {
  height: 24.5rem !important;
  border-radius: 5px;
}

.card-item-2 {
  height: 24.5rem !important;
  border-radius: 5px;
  background: linear-gradient(
    145deg,
    rgb(252, 189, 138) 10%,
    rgb(255, 146, 73)
  );
}
</style>
