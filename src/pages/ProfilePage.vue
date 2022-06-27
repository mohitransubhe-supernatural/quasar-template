<template>
  <q-page class="q-pa-md">
    <div class="row full-width text-h3 text-bold">Profile</div>
    <div class="row col-12 q-mt-md">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pr-lg-md q-pr-md-md q-pr-sm-none q-pr-xs-none">
        <q-card class="q-pa-md card-item flex flex-center">
          <div class="row full-width justify-center">
            <q-avatar size="150px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </div>

          <q-separator />

          <div class="row q-my-md full-width justify-center">
            <div class="text-h5 row justify-center full-width text-bold">
              Mohit Ransubhe
            </div>
            <div class="text-subtitle1 row justify-center full-width">
              Full Stack Developer
            </div>
            <div class="row justify-center text-center full-width text-caption text-grey">
              Hi! I am self-taught Web Developer here to help people by designing awesome quasar templates for their business.
            </div>
          </div>
        </q-card>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <div class="row full-width q-pl-lg-xs q-pl-md-xs q-mt-lg-none q-mt-md-none q-mt-sm-md q-mt-xs-md">
          <q-card class="q-pa-xs full-width">
            <q-card-section>
              <q-form class="q-mb-xs">
                <div class="row">
                  <div class="row col-12">
                    <label class="text-bold">First Name</label>
                    <q-input
                      class="q-mt-sm full-width"
                      :class="
                        $q.dark.isActive ? 'input-custom-dark' : 'input-custom'
                      "
                      borderless
                      v-model="user.first_name"
                    />
                  </div>
                  <div class="row col-12 q-mt-md">
                    <label class="text-bold">Last Name</label>
                    <q-input
                      class="q-mt-sm full-width"
                      :class="
                        $q.dark.isActive ? 'input-custom-dark' : 'input-custom'
                      "
                      borderless
                      v-model="user.last_name"
                    />
                  </div>
                </div>
                <div class="row q-mt-md">
                  <div class="row col-12">
                    <label class="text-bold">Mobile No.</label>
                    <q-input
                      class="q-mt-sm full-width"
                      :class="
                        $q.dark.isActive ? 'input-custom-dark' : 'input-custom'
                      "
                      borderless
                      v-model="user.phone"
                    />
                  </div>
                  <div class="row col-12 q-mt-md">
                    <label class="text-bold">Email</label>
                    <q-input
                      class="q-mt-sm full-width"
                      :class="
                        $q.dark.isActive ? 'input-custom-dark' : 'input-custom'
                      "
                      borderless
                      v-model="user.email"
                    />
                  </div>
                </div>
                <div class="row q-mt-md">
                  <q-btn
                    label="Update"
                    class="q-mt-md q-px-lg"
                    :class="
                      !$q.dark.isActive ? 'custom-btn' : 'custom-btn-dark'
                    "
                  >
                  </q-btn>
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProfilePage",

  setup() {
    return {
      user: ref({
        first_name: "Mohit",
        last_name: "Ransubhe",
        email: "r*********@****.com",
        phone: "8*********8",
        city: "Pune",
        country: "India",
      }),
    };
  },
});
</script>

<style>
.card-item {
  height: 500px !important;
  border-radius: 5px;
}

.input-custom input {
  background-color: rgba(243, 244, 246);
  padding: 10px;
  border-radius: 5px;
}

.input-custom-dark input {
  background-color: rgb(0, 0, 0);
  padding: 10px;
  border-radius: 5px;
}

.custom-btn {
  border-radius: 5px;
  background: linear-gradient(145deg, rgb(255, 171, 103) 2%, rgb(250, 108, 14));
  color: white;
}

.custom-btn-dark {
  border-radius: 5px;
  background: linear-gradient(145deg, rgb(209, 125, 56) 2%, rgb(184, 79, 9));
  color: white;
}
</style>
