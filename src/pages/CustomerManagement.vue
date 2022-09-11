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
            @click="addCustomer()"
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
            class="custom-border bg-grey-3 q-pl-sm"
            style="border-radius: 10px"
          >
            <template v-slot:append>
              <q-icon class="q-pr-sm" color="grey-8" name="search" />
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

          <q-toggle
            v-model="viewToggle"
            @click="
              mode = mode === 'grid' ? 'list' : 'grid';
              separator = mode === 'grid' ? 'none' : 'horizontal';"
            v-if="!props.inFullscreen"
          >
            <q-tooltip :disable="$q.platform.is.mobile" v-close-popup
              >{{ mode === "grid" ? "List View" : "Grid View" }}
            </q-tooltip>
          </q-toggle>

          <!-- <q-btn
            color="primary"
            icon-right="archive"
            label="Export to csv"
            no-caps
            @click="exportTable"
          /> -->
        </template>

        <template v-slot:body-cell-level="props">
          <q-td :props="props">
            <q-chip
              :color="(props.row.level == 'Senior') ? 'green' : (props.row.level == 'Junior' ? 'orange' : 'secondary')"
              text-color="white"
              dense
              class="q-px-md"
              square
              style="width: 85px"
            >{{props.row.level}}
            </q-chip>
          </q-td>
        </template>

        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <div class="q-gutter-sm">
              <q-btn dense outline size="sm" color="primary" icon="edit" @click="editRow(props.row)" />
              <q-btn dense outline size="sm" color="primary" icon="visibility" @click="openModal(props.row)" />
              <q-btn dense outline size="sm" color="red" icon="delete" />
            </div>
          </q-td>
        </template>
      </q-table>
    </q-card>
    <q-dialog v-model="addEditCustomer" :maximized="$q.platform.is.mobile">
      <q-card :style="$q.platform.is.desktop ? {'width': '500px', 'max-width': '50vw'} : {}">
        <q-card-section>
          <div class="text-h6 q-px-md">
            {{ addFlag ? 'Add customer' : 'Edit customer' }}
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
        <q-separator class="q-px-md" inset></q-separator>
        <q-card-section class="q-pt-md">
          <q-form class="q-gutter-md">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Customer Name</q-item-label>
                  <q-input
                    dense
                    outlined
                    v-model="customer.name"
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
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Joining Date</q-item-label>
                  <q-input
                    dense
                    outlined
                    v-model="customer.joiningDate"
                    mask="date"
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
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Band</q-item-label>
                  <q-input
                    dense
                    outlined
                    v-model="customer.band"
                  />
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Level</q-item-label>
                  <q-input
                    dense
                    outlined
                    v-model="customer.level"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-form>
          <div class="q-px-md q-pt-sm">
          <q-btn class="full-width" label="Save" type="submit" color="primary" v-close-popup />
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-teal">
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="viewCustomer">
      <q-card class="q-pa-md" :style="$q.platform.is.desktop ? {'width': '600px', 'max-width': '60vw'} : {'width': '100%'}">
        <div class="row full-width">
          <div class="full-height self-center q-mr-md" :style="$q.platform.is.mobile ? {'width': '100%', 'text-align': 'center', 'margin-bottom': '20%'} : {}">
            <q-avatar :size="$q.platform.is.desktop ? '150px' : '200px'">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </div>

        <q-separator :vertical="$q.platform.is.desktop" />

        <div class="q-ml-md q-gutter-md">
          <div class="row">
            <span class="text-weight-bold">Customer Name:</span> <span class="text-grey-8 q-ml-sm"> {{selectedCustomer.name}}</span>
          </div>
          <div class="row">
            <span class="text-weight-bold">State:</span> <span class="text-grey-8 q-ml-sm"> {{selectedCustomer.state}}</span>
          </div>
          <div class="row">
            <span class="text-weight-bold">City:</span> <span class="text-grey-8 q-ml-sm"> {{selectedCustomer.city}}</span>
          </div>
          <div class="row">
            <span class="text-weight-bold">Joining Date:</span> <span class="text-grey-8 q-ml-sm"> {{selectedCustomer.joiningDate}}</span>
          </div>
          <div class="row">
            <span class="text-weight-bold">Band:</span> <span class="text-grey-8 q-ml-sm"> {{selectedCustomer.band}}</span>
          </div>
          <div class="row">
            <span class="text-weight-bold">Level:</span> <span class="text-grey-8 q-ml-sm"> {{selectedCustomer.level}}</span>
          </div>
        </div>
        </div>
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
      viewToggle: ref(false),
      filter: ref(""),
      customer: ref({}),
      addEditCustomer: ref(false),
      addFlag: ref(true),
      viewCustomer: ref(false),
      selectedCustomer: ref({}),
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
          label: "Joining Date",
          field: "joiningDate",
          sortable: true,
        },
        {
          name: "band",
          align: "left",
          label: "Band",
          field: "band",
          sortable: true,
        },
        {
          name: "level",
          align: "left",
          label: "Level",
          field: "level",
          sortable: true,
        },
        {
          name: "action",
          align: "left",
          label: "Action",
          field: "action",
          sortable: true
        }
      ]),
      data: ref([
        {
          name: "Chandler Binge",
          city: "Houston",
          state: "Texas",
          joiningDate: "12-09-2019",
          band: "A1",
          level: "Manager"
        },
        {
          name: "John Wick",
          city: "Austin",
          state: "Texas",
          joiningDate: "09-02-2019",
          band: "A1",
          level: "Senior"
        },
        {
          name: "John Doe",
          city: "Dallas",
          state: "Texas",
          joiningDate: "03-25-2019",
          band: "A2",
          level: "Senior"
        },
        {
          name: "John Carter",
          city: "San Antonio",
          state: "Texas",
          joiningDate: "03-18-2019",
          band: "A3",
          level: "Senior"
        },
        {
          name: "Jordan Mathew",
          city: "Texas City",
          state: "Texas",
          joiningDate: "04-09-2019",
          band: "A4",
          level: "Senior"
        },
        {
          name: "Tom Belfort",
          city: "El Paso",
          state: "Texas",
          joiningDate: "09-03-2019",
          band: "B1",
          level: "Junior"
        },
        {
          name: "Sam Carter",
          city: "Fort Worth",
          state: "Texas",
          joiningDate: "01-12-2019",
          band: "B2",
          level: "Junior"
        },
        {
          name: "Tony Stark",
          city: "Arlington",
          state: "Texas",
          joiningDate: "04-15-2019",
          band: "B3",
          level: "Junior"
        },
        {
          name: "Miguel Stark",
          city: "Lubbock",
          state: "Texas",
          joiningDate: "11-09-2019",
          band: "B4",
          level: "Junior"
        },
        {
          name: "Reese Vandygriff",
          city: "Waco",
          state: "Texas",
          joiningDate: "01-01-2019",
          band: "C1",
          level: "Intern"
        },
        {
          name: "Griffin Troglen",
          city: "Plano",
          state: "Texas",
          joiningDate: "04-12-2019",
          band: "C2",
          level: "Intern"
        },
        {
          name: "Zachary Wehrley",
          city: "Killen",
          state: "Texas",
          joiningDate: "10-09-2019",
          band: "C3",
          level: "Intern"
        },
        {
          name: "Kyle Wahlert",
          city: "Katy",
          state: "Texas",
          joiningDate: "01-02-2019",
          band: "C4",
          level: "Intern"
        },
      ]),
      pagination: ref({
        rowsPerPage: 10,
      }),
    };
  },
  methods: {
    openModal(val) {
      let self = this;
      self.selectedCustomer = val;
      self.viewCustomer = true;
    },
    addCustomer() {
      let self = this;
      self.customer = {};
      self.addFlag = true;
      self.addEditCustomer = true;
    },
    editRow(val) {
      let self = this;
      self.customer = val;
      self.addFlag = false;
      self.addEditCustomer = true;
    },
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
.custom-border {
  border-radius: 5px;
}
</style>
