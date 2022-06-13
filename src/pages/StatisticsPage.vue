<template>
  <q-page class="q-pa-md">
    <div class="row col-12">
      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pr-lg-md q-pr-md-md row">
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
      <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 q-mt-lg-none q-mt-md-none q-mt-sm-md q-mt-xs-md">
        <q-card class="row full-width card-item">
          <ECharts
            class="q-pt-md"
            :option="getSmoothedLineChartOptions()"
            :resizable="true"
          />
        </q-card>
      </div>
    </div>
    <div class="row col-12">
      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pr-lg-md q-pr-md-md q-mt-lg-none q-mt-md-none q-mt-sm-md q-pt-xs-md row">
        <q-card class="q-pa-md full-width card-item-2">
          <div class="text-h6 row full-width">Visitors</div>
          <div class="text-h6 row full-width">This Month</div>
          <div class="row full-width q-mt-md text-h2 text-bold">6,013</div>
          <div class="row q-mt-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            voluptates nulla eos maiores labore, cum quibusdam earum eligendi
            beatae, repellendus corrupti nesciunt, quod fuga quaerat dolorum
            doloremque numquam vel? Eius!
          </div>
        </q-card>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 q-mt-lg-none q-mt-md-none q-mt-sm-md q-pt-xs-md">
        <q-card class="row full-width card-item">
          <ECharts class="q-pt-md" :option="getBarChartOptions()" :resizable="true" />
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
    };
  },

  methods: {
    getBarChartOptions() {
      return {
        grid: {
          bottom: "25%",
        },
        legend: {
          textStyle: {
            color: this.$q.dark.isActive ? "white" : "black",
          },
        },
        dataset: {
          dimensions: ["product", "2021", "2022"],
          source: [
            { product: "Views", 2021: 43.3, 2022: 90.8, 2017: 93.7 },
            { product: "Likes", 2021: 83.1, 2022: 90.4, 2017: 55.1 },
            { product: "Shares", 2021: 76.4, 2022: 90.2, 2017: 82.5 },
            { product: "Subscribers", 2021: 72.4, 2022: 85.9, 2017: 39.1 },
          ],
        },
        xAxis: {
          type: "category",
          axisLabel: {
            rotate: 45,
            color: this.$q.dark.isActive ? "white" : "black",
          },
        },
        yAxis: {
          axisLabel: {
            color: this.$q.dark.isActive ? "white" : "black",
          },
        },
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
      }
    },
    getSmoothedLineChartOptions() {
      return {
        tooltip: {
          trigger: "item",
        },
        title: {
          left: "center",
          text: "Visitors this month",
          textStyle: {
            color: this.$q.dark.isActive ? "white" : "black",
          },
        },
        xAxis: {
          data: ["2017", "2018", "2019", "2020", "2021", "2022"],
          axisLabel: {
            color: this.$q.dark.isActive ? "white" : "black",
          },
        },
        yAxis: {
          axisLabel: {
            color: this.$q.dark.isActive ? "white" : "black",
          },
        },
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
      }
    }
  }
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
