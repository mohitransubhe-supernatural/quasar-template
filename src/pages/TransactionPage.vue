<template>
  <q-page class="q-pa-md">
    <div class="row full-width text-h3 text-weight-bold">
      Personal Cards
    </div>
    <div class="row col-12 q-mt-md">
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pr-lg-md q-pr-md-md row">
        <q-card class="row full-width card-item" :class="$q.dark.isActive ? 'custom-border' : ''">
          <q-card-section class="q-pa-md row full-width">
            <div class="row full-width justify-between items-center">
              <div>
                <img
                  v-if="!$q.dark.isActive"
                  alt=""
                  src="~assets/chip-icon.png"
                >
                <img
                  v-if="$q.dark.isActive"
                  alt=""
                  src="~assets/chip-icon-gold.png"
                  style="height: 70px; width: 60px; margin-left: -5px; margin-top: -7px"
                >
              </div>
              <div>
                <q-icon name="rss_feed" size="lg" style="transform: rotate(45deg)" />
              </div>
            </div>
            <div class="row full-width justify-between items-center q-mt-md">
              <div class="col-6">
                <div class="row full-width text-weight-bold">
                  NAME
                </div>
                <div class="row full-width">
                  John Doe
                </div>
              </div>
              <div class="col-6">
                <div class="row full-width text-weight-bold justify-end">
                  CARD NUMBER
                </div>
                <div class="row full-width justify-end">
                  XXXX XXXX XXXX XXXX
                </div>
              </div>
            </div>
          </q-card-section>

          <q-separator class="full-width" />

          <q-card-section>
            <div class="text-h5 text-weight-bold">
              BANK OF MULTIVERSE
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 q-pr-lg-md q-pr-md-md q-mt-lg-none q-mt-md-none q-mt-sm-md q-mt-xs-md row">
        <q-card class="row full-width card-item" :class="$q.dark.isActive ? 'custom-border' : ''">
          <q-card-section class="q-pa-md row full-width">
            <div class="row full-width justify-between items-center">
              <div>
                <img
                  v-if="!$q.dark.isActive"
                  alt=""
                  src="~assets/chip-icon.png"
                >
                <img
                  v-if="$q.dark.isActive"
                  alt=""
                  src="~assets/chip-icon-gold.png"
                  style="height: 70px; width: 60px; margin-left: -5px; margin-top: -7px"
                >
              </div>
              <div>
                <q-icon name="rss_feed" size="lg" style="transform: rotate(45deg)" />
              </div>
            </div>
            <div class="row full-width justify-between items-center q-mt-md">
              <div class="col-6">
                <div class="row full-width text-weight-bold">
                  NAME
                </div>
                <div class="row full-width">
                  John Doe
                </div>
              </div>
              <div class="col-6">
                <div class="row full-width text-weight-bold justify-end">
                  CARD NUMBER
                </div>
                <div class="row full-width justify-end">
                  XXXX XXXX XXXX XXXX
                </div>
              </div>
            </div>
          </q-card-section>

          <q-separator class="full-width" />

          <q-card-section>
            <div class="text-h5 text-weight-bold">
              BANK OF MULTIVERSE
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-table
      title="Recent Transactions"
      class="q-mt-md"
      :class="$q.dark.isActive ? 'custom-border' : ''"
      :rows="data"
      hide-header
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
    >
      <template v-slot:body-cell-amount="props">
        <q-td :props="props">
          <div :class="props.row.paymentType == 'Credited' ? 'custom-green' : 'custom-red'">
            {{props.row.amount}}
          </div>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TransactionPage",

  setup() {
    return {
      columns: ref([
        {
          name: "details",
          required: true,
          label: "Details",
          align: "left",
          field: "details",
          sortable: true,
        },
        {
          name: "transactionId",
          required: true,
          label: "Transaction Id",
          align: "left",
          field: "transactionId",
          sortable: true,
        },
        {
          name: "paymentType",
          align: "left",
          label: "Payment Type",
          field: "paymentType",
          sortable: true,
        },
        {
          name: "date",
          align: "left",
          label: "Joining Date",
          field: "date",
          sortable: true,
        },
        {
          name: "amount",
          align: "left",
          label: "Amount",
          field: "amount",
          sortable: true,
        }
      ]),
      data: ref([
        {
          details: "New Credit Card Purchase",
          transactionId: "#TRANS72430979707297IJ",
          paymentType: "Debited",
          date: "12-05-2022",
          amount: "-$140",
        },
        {
          details: "Refund Credited",
          transactionId: "#TRANS72430979707297IJ",
          paymentType: "Credited",
          date: "09-05-2022",
          amount: "+$39,000",
        },
        {
          details: "Real Estate Broker",
          transactionId: "#TRANS72430979707297IJ",
          paymentType: "Debited",
          date: "03-06-2022",
          amount: "-$1,10,003",
        }
      ]),
      pagination: ref({
        rowsPerPage: 10,
      }),
    };
  },

  methods: {
  }
});
</script>

<style scoped>

.custom-green {
  color: green;
  font-weight: bold;
}

.custom-red {
  color: red;
  font-weight: bold;
}

.custom-border {
  border: 1px solid grey;
}

.card-item {
  height: 15rem !important;
  border-radius: 10px;
}

.card-item:hover {
  box-shadow: 0 0 11px rgba(53,53,53,33);
}
</style>
