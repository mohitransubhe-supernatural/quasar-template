<template>
  <q-page class="q-pa-md">
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
        <div class="q-mt-md">
          <q-card class="row float-right full-width card-item">
            <ECharts :option="barChartOption" :resizable="true" />
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
          dimensions: ["product", "2015", "2016", "2017"],
          source: [
            { product: "Matcha Latte", 2015: 43.3, 2016: 85.8, 2017: 93.7 },
            { product: "Milk Tea", 2015: 83.1, 2016: 73.4, 2017: 55.1 },
            { product: "Cheese Cocoa", 2015: 86.4, 2016: 65.2, 2017: 82.5 },
            { product: "Walnut Brownie", 2015: 72.4, 2016: 53.9, 2017: 39.1 },
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
    };
  },
});
</script>

<style>
.card-item {
  height: 20rem;
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
