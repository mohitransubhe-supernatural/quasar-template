<template>
  <q-page class="q-pa-md">
    <div class="row col-12 items-center">
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <div class="text-h3 text-weight-bold">Analytics</div>
        <q-separator
          style="width: 12rem; height: 5px; background-color: #2e3d57"
        />
        <div class="text-grey-8">Let's make some powerful insights</div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 row q-mt-lg-none q-mt-md-none q-mt-sm-md q-mt-xs-md">
        <div class="q-ml-lg-md q-ml-md-md">
          <q-btn label="Create" class="custom-btn q-px-xl q-mr-lg-none q-mr-md-none q-mr-sm-md q-mr-xs-md q shadow-lg"></q-btn>
          <q-btn
            label="Manage"
            class="custom-btn q-ml-sm q-px-xl shadow-lg"
          ></q-btn>
        </div>
      </div>
    </div>
    <div class="row col-12 q-mt-md">
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <q-card class="row full-width card-item">
          <ECharts
            class="q-pt-md"
            :option="getSmoothedLineChartOptions()"
            :resizable="true"
          />
        </q-card>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pl-lg-md q-pl-md-md q-mt-lg-none q-mt-md-none q-mt-sm-md q-mt-xs-md row">
        <q-card class="q-pa-md row full-width justify-center">
          <q-circular-progress
            :value="value"
            size="300px"
            :thickness="0.22"
            color="blue-grey-9"
            track-color="grey-3"
            class="q-ma-md"
            show-value
          >
            <span class="text-blue-grey-9">{{ value }}%</span>
          </q-circular-progress>
        </q-card>
      </div>
    </div>
    <div class="row col-12 q-mt-md">
      <div class="row col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pr-lg-lg q-pr-md-lg">
          <q-card class="q-pa-md card-item-2">
            <div class="row full-width text-lg q-pt-lg">Views</div>
            <div
              class="row full-width q-my-sm text-h2 text-bold justify-center"
            >
              17m
            </div>
            <div class="row full-width">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              totam beatae minus assumenda excepturi harum, nisi doloribus
              numquam modi?
            </div>
          </q-card>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mt-lg-none q-mt-md-none q-mt-sm-md q-mt-xs-md">
          <q-card class="q-pa-md card-item-3 shadow-4">
            <div class="row full-width text-lg">Active</div>
            <div class="row full-width text-lg">Subscribers</div>
            <div
              class="row full-width q-my-sm text-h2 text-bold justify-center"
            >
              19m
            </div>
            <div class="row full-width">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              totam beatae minus assumenda expedita dolore quis laudantium
              excepturi harum, nisi doloribus numquam modi?
            </div>
          </q-card>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pl-lg-lg q-pl-md-lg q-mt-lg-none q-mt-md-none q-mt-sm-md q-mt-xs-md">
          <q-card class="q-pa-md card-item-2">
            <div class="row full-width text-lg q-pt-lg">Subscribers</div>
            <div
              class="row full-width q-my-sm text-h2 text-bold justify-center"
            >
              999k
            </div>
            <div class="row full-width">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              totam beatae minus assumenda excepturi harum, nisi doloribus
              numquam modi?
            </div>
          </q-card>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pl-lg-md q-pl-md-md row q-mt-lg-none q-mt-md-none q-mt-sm-md q-mt-xs-md">
        <q-card class="row full-width card-item-2">
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
  name: "AnalyticsPage",

  components: {
    ECharts,
  },

  setup() {
    return {
      value: ref(0),
    };
  },

  methods: {
    getBarChartOptions() {
      return {
        grid: {
          bottom: "25%",
        },
        dataset: {
          dimensions: ["product", "2022", "2016", "2017"],
          source: [
            { product: "Views", 2022: 43.3, 2016: 85.8, 2017: 93.7 },
            { product: "Likes", 2022: 83.1, 2016: 73.4, 2017: 55.1 },
            { product: "Shares", 2022: 86.4, 2016: 65.2, 2017: 82.5 },
            { product: "Subscribers", 2022: 72.4, 2016: 53.9, 2017: 39.1 },
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
            color: ["#2e3d57"],
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
          data: ["A", "B", "C", "D", "E", "F"],
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
            data: [10, 50, 280, 130, 170, 455],
            type: "line",
            smooth: true,
            color: ["#FA6C0E"],
          },
          {
            data: [10, 40, 80, 160, 320, 555],
            type: "line",
            smooth: true,
            color: ["#2e65db"],
          },
          {
            data: [100, 20, 380, 190, 60, 455],
            type: "line",
            smooth: true,
          },
          {
            data: [80, 200, 320, 190, 160, 555],
            type: "line",
            smooth: true,
          },
        ],
      }
    }
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },

  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
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
  height: 22.8rem !important;
  border-radius: 5px;
}

.card-item-2 {
  height: 350px !important;
  border-radius: 5px;
}

.card-item-3 {
  height: 350px !important;
  border-radius: 5px;
  background: linear-gradient(
    145deg,
    rgb(252, 189, 138) 10%,
    rgb(255, 146, 73)
  );
}
</style>
