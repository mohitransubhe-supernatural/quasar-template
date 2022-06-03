<template>
  <q-page class="q-pa-md" :class="$q.dark.isActive ? '' : 'bg-grey-1'">
    <div class="row col-12">
      <div class="col-8">
        <div class="row">
          <div class="col-3 q-pr-sm">
            <q-card class="q-pa-md">
              <div class="row q-py-md full-width items-center justify-center">
                <div class="total-sales-box justify-center items-center">
                  <q-icon
                    class="items-center full-height full-width vertical-middle"
                    name="trending_up"
                    size="md"
                    color="white"
                  />
                </div>
              </div>
              <div class="row text-bold text-lg full-width justify-center">
                Total Sales
              </div>
              <div class="row text-gray-500 full-width justify-center">
                +70% Income
              </div>
              <div class="row text-bold text-2xl full-width justify-center">
                $777m
              </div>
            </q-card>
          </div>
          <div class="col-3 q-px-sm">
            <q-card class="q-pa-md">
              <div class="row q-py-md full-width items-center justify-center">
                <div class="avg-sales-box justify-center items-center">
                  <q-icon
                    class="items-center full-height full-width vertical-middle"
                    name="percent"
                    size="md"
                    color="white"
                  />
                </div>
              </div>
              <div class="row text-bold text-lg full-width justify-center">
                Avg Sales
              </div>
              <div class="row text-gray-500 full-width justify-center">
                +22% Sales
              </div>
              <div class="row text-bold text-2xl full-width justify-center">
                $543k
              </div>
            </q-card>
          </div>
          <div class="col-3 q-px-sm">
            <q-card class="q-pa-md">
              <div class="row q-py-md full-width items-center justify-center">
                <div class="users-box justify-center items-center">
                  <q-icon
                    class="items-center full-height full-width vertical-middle"
                    name="people_alt"
                    size="md"
                    color="white"
                  />
                </div>
              </div>
              <div class="row text-bold text-lg full-width justify-center">
                Users
              </div>
              <div class="row text-gray-500 full-width justify-center">
                +79% New User
              </div>
              <div class="row text-bold text-2xl full-width justify-center">
                9998
              </div>
            </q-card>
          </div>
          <div class="col-3 q-pl-sm">
            <q-card class="q-pa-md">
              <div class="row q-py-md full-width items-center justify-center">
                <div class="profit-gain-box justify-center items-center">
                  <q-icon
                    class="items-center full-height full-width vertical-middle"
                    name="currency_exchange"
                    size="md"
                    color="white"
                  />
                </div>
              </div>
              <div class="row text-bold text-lg full-width justify-center">
                Profit Gain
              </div>
              <div class="row text-gray-500 full-width justify-center">
                +66% Income
              </div>
              <div class="row text-bold text-2xl full-width justify-center">
                $799m
              </div>
            </q-card>
          </div>
        </div>
        <div>
          <q-card class="row q-mt-md float-right full-width card-item">
            <ECharts
              class="q-pt-md"
              :option="smoothedLineChartOptions"
              :resizable="true"
            />
          </q-card>
          <q-card
            class="row q-mt-md float-right full-width card-item-2"
            :class="$q.dark.isActive ? 'text-white' : ''"
          >
            <ECharts
              class="q-pt-md"
              :option="barChartOption"
              :resizable="true"
            />
          </q-card>
        </div>
      </div>
      <div class="col-4 q-pl-md">
        <q-card
          class="q-pa-md float-right full-width right-card-item text-white"
        >
          <div class="row full-width">
            <div class="row full-width text-h4 text-weight-bold">$ 4,999</div>
            <div class="text-subtitle1">Active Balance</div>
          </div>
          <div class="row full-width q-mt-lg">
            <div class="row full-width items-center">
              <div class="col-6">
                <q-icon
                  size="sm"
                  name="arrow_upward"
                  color="green bg-white"
                  style="border-radius: 5px"
                />
                <span class="q-ml-md text-bold">Income</span>
              </div>
              <div class="col-6">
                <span class="text-bold float-right text-h6">$ 1699.0</span>
              </div>
            </div>
          </div>
          <div class="row full-width q-mt-md">
            <div class="row full-width items-center">
              <div class="col-6">
                <q-icon
                  size="sm"
                  name="arrow_downward"
                  color="red bg-white"
                  style="border-radius: 5px"
                />
                <span class="q-ml-md text-bold">Expenses</span>
              </div>
              <div class="col-6">
                <span class="text-bold float-right text-h6">$ -799.0</span>
              </div>
            </div>
          </div>
          <div class="row full-width q-mt-md">
            <div class="row full-width items-center">
              <div class="col-6">
                <q-icon
                  size="sm"
                  name="arrow_downward"
                  color="red bg-white"
                  style="border-radius: 5px"
                />
                <span class="q-ml-md text-bold">Taxes</span>
              </div>
              <div class="col-6">
                <span class="text-bold float-right text-h6">$ -199.0</span>
              </div>
            </div>
          </div>
          <div class="row full-width q-mt-lg">
            <q-btn
              label="Add Credit Card"
              class="full-width bg-white text-lg text-bold rounded-md"
              icon-right="arrow_right"
              style="color: rgb(250, 108, 14)"
              no-caps
            />
          </div>
        </q-card>
        <q-card
          class="q-pa-md q-mt-md float-right full-width right-card-item-2 text-white"
        >
          <div class="row col-12 full-width items-center">
            <div class="col-5">
              <q-avatar size="80px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </div>
            <div class="col-7 text-xl text-bold">Universal Pay</div>
          </div>
          <div class="row col-12 q-mt-lg text-bold">Name : Jane Doe</div>
          <div class="row col-12 q-mt-xs text-bold">
            Card No : XXXX XXXX XXXX XXXX
          </div>
          <div class="row col-12 q-mt-xs text-bold">
            <span class="col-6">Start : XX/XX</span>
            <span class="col-6">End : XX/XX</span>
          </div>
        </q-card>
        <q-card
          class="q-pb-none q-mt-md float-right full-width right-card-item-3"
        >
          <ECharts
            class="q-pt-md"
            :option="pieChartOptions"
            :resizable="true"
          />
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
  name: "DashBoard",

  components: {
    ECharts,
  },

  setup() {
    return {
      barChartOption: ref({
        grid: {
          bottom: "25%",
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "2019", "2020", "2021"],
          source: [
            { product: "Matcha Latte", 2019: 43.3, 2020: 85.8, 2021: 93.7 },
            { product: "Milk Tea", 2019: 83.1, 2020: 73.4, 2021: 55.1 },
            { product: "Cheese Cocoa", 2019: 86.4, 2020: 65.2, 2021: 82.5 },
            { product: "Walnut Brownie", 2019: 72.4, 2020: 53.9, 2021: 39.1 },
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
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      }),
      smoothedLineChartOptions: ref({
        tooltip: {
          trigger: "item",
        },
        title: {
          left: "center",
          text: "Total Sales",
        },
        xAxis: {
          data: ["A", "B", "C", "D", "E", "F"],
        },
        yAxis: {},
        series: [
          {
            data: [10, 50, 280, 130, 170, 455],
            type: "line",
            smooth: true,
            color: ["#FA6C0E"],
          },
        ],
      }),
      pieChartOptions: ref({
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      }),
    };
  },
});
</script>

<style>
.card-item {
  height: 20rem;
  border-radius: 5px;
}

.card-item-2 {
  height: 25rem;
  border-radius: 5px;
}

.right-card-item {
  height: 20rem;
  border-radius: 5px;
  background: linear-gradient(
    145deg,
    rgb(252, 189, 138) 10%,
    rgb(250, 108, 14)
  );
}

.right-card-item-2 {
  height: 13rem;
  border-radius: 5px;
  background: linear-gradient(145deg, rgb(138, 149, 252) 10%, rgb(65, 66, 143));
}

.right-card-item-3 {
  height: 25rem;
  border-radius: 5px;
}

.total-sales-box {
  height: 4rem;
  width: 4rem;
  background-color: rgb(250, 108, 14);
  border-radius: 50%;
  box-shadow: 0 0 60px 0 rgba(235, 101, 11, 0.37);
}

.avg-sales-box {
  height: 4rem;
  width: 4rem;
  background-color: rgb(37, 139, 170);
  border-radius: 50%;
  box-shadow: 0 0 60px 0 rgba(23, 78, 95, 0.37);
}

.users-box {
  height: 4rem;
  width: 4rem;
  background-color: rgb(70, 177, 60);
  border-radius: 50%;
  box-shadow: 0 0 60px 0 rgba(12, 97, 16, 0.37);
}

.profit-gain-box {
  height: 4rem;
  width: 4rem;
  background-color: rgb(17, 48, 85);
  border-radius: 50%;
  box-shadow: 0 0 60px 0 rgba(16, 61, 119, 0.37);
}
</style>
