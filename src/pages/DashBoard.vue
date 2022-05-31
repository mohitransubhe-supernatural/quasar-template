<template>
  <q-page class="q-px-md q-pb-md">
    <div class="row col-12">
      <div class="col-8">
        <q-card class="float-right full-width card-item"> jdlkj </q-card>
      </div>
      <div class="col-4 q-pl-md">
        <q-card
          class="q-pa-md float-right full-width right-card-item text-white"
        >
          <div class="row full-width">
            <div class="row full-width text-h4 text-weight-bold">$ 4999</div>
            <div class="text-subtitle1">Active Balance</div>
          </div>
          <div class="row full-width">
            <div class="row full-width">
              <div class="col-6">Incomes</div>
              <div class="col-6">Incomes</div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashBoard",
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
  background: linear-gradient(145deg, rgb(202, 149, 202) 10%, #a32e4b);
}
</style>
