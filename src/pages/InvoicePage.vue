<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-table
        title="Invoices"
        :rows="data"
        :columns="columns"
        row-key="name"
        v-model:pagination="pagination"
      >
        <template v-slot:top-right>
          <q-btn
            @click="invoiceDialog=true"
            flat
            size="lg"
            icon="add_circle"
            class="q-mr-xs q-pt-sm q-px-none q-pb-sm"
          />

          <q-icon
            name="archive"
            size="md"
            class="cursor-pointer"
            @click="exportTable"
          >
            <q-tooltip>
              Export to CSV
            </q-tooltip>
          </q-icon>
        </template>
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <div
              :class="(props.row.status == 'Paid') ? 'custom-green' : 'custom-red'"
              dense
              class="text-weight-bolder"
            >{{props.row.status}}
            </div>
          </q-td>
        </template>
      </q-table>
    </q-card>
        <q-dialog v-model="invoiceDialog">
      <q-card style="width: 500px; max-width: 50vw;">
        <q-card-section>
          <div class="text-h6">
            Add new invoice
            <q-btn round flat dense icon="close" class="float-right" color="grey-8" v-close-popup></q-btn>
          </div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section class="q-pt-md">
          <q-form class="q-gutter-md">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Account</q-item-label>
                  <q-input dense outlined v-model="invoice.account" label="Account"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Amount</q-item-label>
                  <q-input dense outlined v-model="invoice.amount" label="Amount"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Invoice Date</q-item-label>
                  <q-input
                    dense
                    outlined
                    v-model="invoice.invoiceDate"
                    mask="date"
                    label="Invoice Date"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="invoiceDateProxy"
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            v-model="invoice.invoiceDate"
                            @input="() => $refs.invoiceDateProxy.hide()"
                          />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Due Date</q-item-label>
                  <q-input dense outlined v-model="invoice.dueDate" mask="date" label="Due Date">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="dueDateProxy"
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            v-model="invoice.dueDate"
                            @input="() => $refs.dueDateProxy.hide()"
                          />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Invoice Type</q-item-label>
                  <q-input dense outlined v-model="invoice.invoiceType" label="Invoice Type"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Status</q-item-label>
                  <q-input dense outlined v-model="invoice.status" label="Status"/>
                </q-item-section>
              </q-item>
            </q-list>
          </q-form>
          <div class="q-mx-md q-mt-md">
            <q-btn label="Save" class="full-width" type="submit" color="primary" v-close-popup/>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import {exportFile} from "quasar";

function wrapCsvValue(val, formatFn) {
    let formatted = formatFn !== void 0 ? formatFn(val) : val;
    formatted =
        formatted === void 0 || formatted === null ? "" : String(formatted);
    formatted = formatted.split('"').join('""');
    return `"${formatted}"`;
}

export default defineComponent({
  name: "InvoicePage",

  setup() {
    return {
      invoice: ref({}),
      invoiceDialog: ref(false),
      columns: ref([
        {
          name: "invoiceId",
          align: "left",
          label: "Invoice No.",
          field: "invoiceId",
          sortable: true
        },
        {
          name: "account",
          required: true,
          label: "Account",
          align: "left",
          field: "account",
          sortable: true
        },
        {
          name: "amount",
          align: "left",
          label: "Amount",
          field: "amount",
          sortable: true
        },
        {
          name: "invoiceDate",
          align: "left",
          label: "Invoice Date",
          field: "invoiceDate",
          sortable: true
        },
        {
          name: "dueDate",
          align: "left",
          label: "Due Date",
          field: "dueDate",
          sortable: true
        },
        {
          name: "invoiceType",
          align: "left",
          label: "Invoice Type",
          field: "invoiceType",
          sortable: true
        },
        {
          name: "status",
          align: "left",
          label: "Status",
          field: "status",
          sortable: true
        }
      ]),
      data: ref([
        {
          invoiceId: "INV 002",
          account: "Chandler Binge",
          amount: "$ 1900",
          invoiceType: "Commercial",
          status: "Paid",
          invoiceDate: "09-02-2021",
          dueDate: "10-02-2021"
        },
        {
          invoiceId: "INV 003",
          account: "John Wick",
          amount: "$ 1200",
          invoiceType: "Mixed",
          status: "Paid",
          invoiceDate: "03-25-2021",
          dueDate: "04-25-2021"
        },
        {
          invoiceId: "INV 004",
          account: "John Doe",
          amount: "$ 1550",
          invoiceType: "Commercial",
          status: "Paid",
          invoiceDate: "03-18-2021",
          dueDate: "04-18-2021"
        },
        {
          invoiceId: "INV 005",
          account: "Miguel Diaz",
          amount: "$ 1800",
          invoiceType: "Mixed",
          status: "Unpaid",
          invoiceDate: "04-09-2021",
          dueDate: "05-09-2021"
        },
        {
          invoiceId: "INV 006",
          account: "Jordan Mathew",
          amount: "$ 1000",
          invoiceType: "Commercial",
          status: "Paid",
          invoiceDate: "09-03-2021",
          dueDate: "10-03-2021"
        },
        {
          invoiceId: "INV 007",
          account: "Kaiden Rozelle",
          amount: "$ 1200",
          invoiceType: "Mixed",
          status: "Paid",
          invoiceDate: "01-12-2021",
          dueDate: "02-12-2021"
        },
        {
          invoiceId: "INV 008",
          account: "Tom Belfort",
          amount: "$ 1500",
          invoiceType: "Commercial",
          status: "Paid",
          invoiceDate: "04-15-2021",
          dueDate: "05-15-2021"
        },
        {
          invoiceId: "INV 009",
          account: "Tony Stark",
          amount: "$ 2000",
          invoiceType: "Mixed",
          status: "Paid",
          invoiceDate: "11-09-2021",
          dueDate: "12-09-2021"
        },
        {
          invoiceId: "INV 010",
          account: "Sam Carter",
          amount: "$ 1450",
          invoiceType: "Commercial",
          status: "Unpaid",
          invoiceDate: "01-01-2021",
          dueDate: "02-01-2021"
        },
        {
          invoiceId: "INV 011",
          account: "John Carter",
          amount: "$ 1200",
          invoiceType: "Mixed",
          status: "Paid",
          invoiceDate: "04-12-2021",
          dueDate: "06-12-2021"
        }
      ]),
      pagination: ref({
        rowsPerPage: 10,
      }),
    };
  },

  methods: {
    exportTable() {
      const content = [this.columns.map(col => wrapCsvValue(col.label))]
        .concat(
          this.data.map(row =>
            this.columns
              .map(col =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");
      const status = exportFile("invoices.csv", content, "text/csv");
      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning"
        });
      }
    }
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
