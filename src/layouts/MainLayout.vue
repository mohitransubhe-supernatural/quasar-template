<template>
  <q-layout view="lHh lpR fFf">
    <q-header :class="$q.dark.isActive ? 'header_dark' : ''">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          :class="miniState ? '' : 'q-ml-sm'"
          v-if="$q.platform.is.mobile"
        />
        <q-toolbar-title class="q-ml-sm"> Quasar Template </q-toolbar-title>

        <div>
          <q-btn
            class="q-mr-xs"
            flat
            round
            @click="$q.dark.toggle()"
            :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
          />
        </div>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :breakpoint="500"
      :width="270"
      :mini="miniState"
      show-if-above
    >
      <div
        :class="$q.dark.isActive ? 'drawer_dark' : 'drawer_dark'"
        class="h-full q-px-sm"
      >
        <q-toolbar class="q-pa-md">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>

          <q-toolbar-title>Mohit Ransubhe</q-toolbar-title>
        </q-toolbar>
        <hr />
        <q-list class="q-mt-sm q-gutter-sm">
          <!-- <q-item>
            <q-item-section>
              <q-item-label class="text-weight-bolder"> Menu </q-item-label>
            </q-item-section>
          </q-item> -->
          <q-item
            active-class="bg-gray-600"
            to="/dashboard"
            exact
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section v-if="!miniState"> Dashboard </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/customer_management"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section v-if="!miniState">
              Customer Management
            </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/change_request"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section v-if="!miniState"> Change Request </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/sales_invoices"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="attach_money" />
            </q-item-section>

            <q-item-section v-if="!miniState"> Sales Invoices </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/quotes"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="money" />
            </q-item-section>

            <q-item-section v-if="!miniState"> Quotes </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/transactions"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>

            <q-item-section v-if="!miniState"> Transactions </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/employee_salary_list"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section v-if="!miniState">
              Employee Salary List
            </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/calendar"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="calendar_today" />
            </q-item-section>

            <q-item-section v-if="!miniState"> Calendar </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/department"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="business" />
            </q-item-section>

            <q-item-section v-if="!miniState"> Department </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/my_profile"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section v-if="!miniState"> My Profile </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {
      leftDrawerOpen: ref(false),
      miniState: ref(false),
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.miniState = !this.miniState;
    },
  },
});
</script>

<style>
/* .drawer_normal {
  background-color: rgba(1, 1, 1, 0.75);
} */

.drawer_dark {
  background: linear-gradient(145deg, rgb(61, 14, 42) 15%, rgb(14, 43, 78) 70%);
  color: white;
}

.header_dark {
  background: linear-gradient(145deg, rgb(61, 14, 42) 15%, rgb(14, 43, 78) 70%);
}

.navigation-item {
  border-radius: 5px;
}

.tab-active {
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
