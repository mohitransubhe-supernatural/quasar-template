<template>
  <q-layout view="LHh lpR fFf">
    <q-header
      :class="$q.dark.isActive ? 'header_dark' : 'header_normal'"
      class="text-grey-2 q-py-md"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          color="black"
          class="bg-grey-3 custom-border"
          @click="toggleLeftDrawer"
          v-if="$q.platform.is.mobile"
        />
        <q-toolbar-title class="q-ml-sm">
          <div v-if="$q.platform.is.desktop">
            <q-input
              v-model="search"
              placeholder="Search"
              class="custom-border bg-grey-3 q-pl-sm"
              style="width: 50%; border-radius: 10px"
              borderless
              dense
            >
              <template v-slot:append>
                <q-icon class="q-pr-sm" color="grey-8" name="search" />
              </template>
            </q-input>
          </div>
        </q-toolbar-title>

        <div>
          <q-btn
            class="q-mr-xs bg-grey-3 q-py-xs q-px-sm custom-border"
            flat
            @click="$q.dark.toggle()"
            color="black"
            :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
          />
        </div>

        <div>
          <q-btn
            class="q-ml-xs bg-grey-3 q-py-xs q-px-sm custom-border"
            flat
          >
            <a
              href="https://github.com/sponsors/mohitransubhe-supernatural"
              target="_blank"
              title="Donate"
              style="text-decoration: none"
              >
              <q-icon
                name="favorite"
                style="color: #eb5daa"
              />
              </a>
              </q-btn>
        </div>

        <div class="q-mx-sm">
          <q-btn
            class="q-mr-xs bg-grey-3 q-py-xs q-px-sm custom-border"
            flat
            color="black"
            icon="notifications"
          />
        </div>

        <div class="q-mr-xs">
          <q-btn no-caps flat class="bg-grey-3 custom-border" to="/">
            <q-icon size="xs" style="color: rgb(250, 108, 14)" name="logout" />
            <span class="text-black q-ml-sm">Log Out</span>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :width="270"
      :mini="miniState"
      show-if-above
    >
      <div
        :class="$q.dark.isActive ? 'drawer_dark' : 'drawer_normal'"
        class="full-height q-px-sm"
      >
        <q-toolbar class="q-px-md q-py-md">
            <q-avatar class="q-pt-xs">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>

            <q-toolbar-title class="q-pt-sm">Mohit Ransubhe</q-toolbar-title>
        </q-toolbar>
        <hr />
        <q-list class="q-mt-sm q-pt-xs q-gutter-sm">
          <!-- <q-item>
            <q-item-section>
              <q-item-label class="text-weight-bolder"> Menu </q-item-label>
            </q-item-section>
          </q-item> -->
          <q-item
            active-class="tab-active"
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
            to="/analytics"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="insights" />
            </q-item-section>

            <q-item-section v-if="!miniState"> Analytics </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/statistics"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="analytics" />
            </q-item-section>

            <q-item-section v-if="!miniState"> Statistics </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/customer_management"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="manage_accounts" />
            </q-item-section>

            <q-item-section v-if="!miniState">
              Customer Management
            </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/transactions"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="paid" />
            </q-item-section>

            <q-item-section v-if="!miniState"> Transactions </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/sales_invoices"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="receipt" />
            </q-item-section>

            <q-item-section v-if="!miniState"> Sales Invoices </q-item-section>
          </q-item>

          <q-item
            active-class="tab-active"
            to="/my_profile"
            class="navigation-item"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="person_pin" />
            </q-item-section>

            <q-item-section v-if="!miniState"> My Profile </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container :class="$q.dark.isActive ? '' : 'bg-grey-1'">
      <q-banner inline-actions rounded class="z-max custom-banner shadow-10 q-ma-md absolute absolute-bottom text-white">
        Looking for beautiful premium Quasar template for Vue 3? Please drop me an email. Buy only at <b>$49</b>!
        <template v-slot:action>
          <q-btn type="a" href="mailto:ransubhemohit31@gmail.com" flat style="background-color: rgb(70, 177, 60)" class="text-capitalize" label="Email me"></q-btn>
        </template>
      </q-banner>
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
      search: ref(""),
    };
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
});
</script>

<style>
.custom-banner {
  position: fixed;
  background: linear-gradient(145deg, rgb(65, 66, 143) 10%, rgb(138, 149, 252));
}

.drawer_normal {
  background: #2e3d57;
  color: white;
}

.drawer_dark {
  background: linear-gradient(145deg, #2e3d57 15%, rgb(7, 18, 34) 70%);
  /* background: #2e3d57; */
  color: white;
}

.header_normal {
  background: white;
}

.header_dark {
  background: linear-gradient(145deg, #2e3d57 15%, rgb(7, 18, 34) 70%);
  /* background: black; */
}

.navigation-item {
  border-radius: 5px;
}

.tab-active {
  /* background: linear-gradient(to right, white, #a32e4b); */
  /* background: rgba(255, 255, 255, 0.05); */
  background: rgba(122, 146, 177, 0.986);
  /* box-shadow: 0 8px 32px 0 rgba(184, 186, 204, 0.37); */
  /* backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px); */
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.custom-border {
  border-radius: 5px;
}
</style>
