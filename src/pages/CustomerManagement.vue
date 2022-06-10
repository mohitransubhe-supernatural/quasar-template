<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-table
        title="Manage Customers"
        :rows="data"
        :hide-header="mode === 'grid'"
        :columns="columns"
        row-key="name"
        :grid="mode == 'grid'"
        :filter="filter"
        v-model:pagination="pagination"
      >
        <template v-slot:top-right="props">
          <q-btn
            @click="new_customer = true"
            flat
            size="lg"
            color="primary"
            icon="add_circle"
            class="q-mr-xs q-pa-none"
          />

          <q-input
            dense
            borderless
            v-model="filter"
            placeholder="Search"
            class="custom-input bg-gray-100"
            style="border-radius: 10px"
          >
            <template v-slot:append>
              <q-icon class="q-pr-sm" color="grey" name="search" />
            </template>
          </q-input>

          <q-btn
            flat
            round
            dense
            class="q-ml-xs"
            :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="props.toggleFullscreen"
            v-if="mode === 'list'"
          >
            <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
              >{{
                props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"
              }}
            </q-tooltip>
          </q-btn>

          <q-btn
            flat
            round
            dense
            :icon="mode === 'grid' ? 'list' : 'grid_on'"
            @click="
              mode = mode === 'grid' ? 'list' : 'grid';
              separator = mode === 'grid' ? 'none' : 'horizontal';
            "
            v-if="!props.inFullscreen"
          >
            <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
              >{{ mode === "grid" ? "List" : "Grid" }}
            </q-tooltip>
          </q-btn>

          <!-- <q-btn
            color="primary"
            icon-right="archive"
            label="Export to csv"
            no-caps
            @click="exportTable"
          /> -->
        </template>
      </q-table>
    </q-card>
    <q-dialog v-model="new_customer">
      <q-card style="width: 600px; max-width: 60vw">
        <q-card-section>
          <div class="text-h6">
            Add new customer
            <q-btn
              round
              flat
              dense
              icon="close"
              class="float-right"
              color="grey-8"
              v-close-popup
            ></q-btn>
          </div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Customer Name</q-item-label>
                  <q-input
                    dense
                    outlined
                    v-model="customer.name"
                    label="Customer Name"
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">City</q-item-label>
                  <q-input
                    dense
                    outlined
                    v-model="customer.city"
                    label="City"
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">State</q-item-label>
                  <q-input
                    dense
                    outlined
                    v-model="customer.state"
                    label="State"
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Last Call</q-item-label>
                  <q-input
                    dense
                    outlined
                    v-model="customer.joiningDate"
                    mask="date"
                    label="Last Call"
                  >
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy
                          ref="lastCallProxy"
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-date
                            v-model="customer.joiningDate"
                            @input="() => $refs.lastCallProxy.hide()"
                          />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-item-section>
              </q-item>
            </q-list>
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-teal">
          <q-btn label="Save" type="submit" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

import { exportFile } from "quasar";
function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}

export default defineComponent({
  name: "CustomerManagement",

  setup() {
    return {
      filter: ref(""),
      customer: ref({}),
      new_customer: ref(false),
      mode: ref("list"),
      columns: ref([
        {
          name: "name",
          required: true,
          label: "Customer Name",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "city",
          align: "left",
          label: "City",
          field: "city",
          sortable: true,
        },
        {
          name: "state",
          align: "left",
          label: "State",
          field: "state",
          sortable: true,
        },
        {
          name: "joiningDate",
          align: "left",
          label: "Last Call",
          field: "joiningDate",
          sortable: true,
        },
      ]),
      data: ref([
        {
          name: "John Doe",
          city: "Houston",
          state: "Texas",
          joiningDate: "12-09-2019",
        },
        {
          name: "John Wick",
          city: "Austin",
          state: "Texas",
          joiningDate: "09-02-2019",
        },
        {
          name: "John Carter",
          city: "Dallas",
          state: "Texas",
          joiningDate: "03-25-2019",
        },
        {
          name: "Chandler Binge",
          city: "San Antonio",
          state: "Texas",
          joiningDate: "03-18-2019",
        },
        {
          name: "Jordan Mathew",
          city: "Texas City",
          state: "Texas",
          joiningDate: "04-09-2019",
        },
        {
          name: "Tom Belfort",
          city: "El Paso",
          state: "AZ",
          joiningDate: "09-03-2019",
        },
        {
          name: "Sam Carter",
          city: "Fort Worth",
          state: "Texas",
          joiningDate: "01-12-2019",
        },
        {
          name: "Tony Stark",
          city: "Arlington",
          state: "Texas",
          joiningDate: "04-15-2019",
        },
        {
          name: "Miguel Stark",
          city: "Lubbock",
          state: "Texas",
          joiningDate: "11-09-2019",
        },
        {
          name: "Reese Vandygriff",
          city: "Waco",
          state: "Texas",
          joiningDate: "01-01-2019",
        },
        {
          name: "Griffin Troglen",
          city: "Plano",
          state: "Texas",
          joiningDate: "04-12-2019",
        },
        {
          name: "Zachary Wehrley",
          city: "Killen",
          state: "Texas",
          joiningDate: "10-09-2019",
        },
        {
          name: "Kyle Wahlert",
          city: "Katy",
          state: "Texas",
          joiningDate: "01-02-2019",
        },
      ]),
      pagination: ref({
        rowsPerPage: 10,
      }),
    };
  },
  methods: {
    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          this.data.map((row) =>
            this.columns
              .map((col) =>
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
      const status = exportFile("customer-management.csv", content, "text/csv");
      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning",
        });
      }
    },
  },
});
</script>

<style scoped>
.custom-input input {
  background-color: rgba(243, 244, 246);
  border-radius: 10px;
}
</style>
