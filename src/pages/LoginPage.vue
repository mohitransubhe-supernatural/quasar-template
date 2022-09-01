<template>
  <q-layout>
    <q-page>
      <div class="row" style="min-height: 100vh">
        <div class="col-lg-6 col-md-6 col-sm-0 col-xs-0 branding">
          <div class="full-height full-width">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" class="full-height full-width" style="opacity: 0.5">
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div v-if="!$q.platform.is.desktop" class="box">
          </div>
          <div class="text-h5 full-width text-weight-bold" :style="$q.platform.is.desktop ? 'padding-top: 4rem' : 'padding-top: 2rem'">
            <div class="full-width row justify-center">WELCOME</div>
          </div>
          <div class="q-px-lg-xl q-px-md-xl q-px-sm-lg q-px-xs-lg q-mx-lg-xl q-mx-md-xl" style="margin-top: 7rem">
            <label>Username or Email</label>
            <div class="row col-12">
              <q-input
                v-model="userName"
                class="full-width"
                dense
                lazy-rules
              />
            </div>
            <div class="row col-12 q-mt-md">
              <label>Password</label>
              <q-input
                type="password"
                class="full-width"
                dense
                v-model="password"
                lazy-rules
              />
            </div>
            <div>
              <div class="row q-pt-lg q-pa-none">
                <div class="col-12">
                  <q-btn
                    class="text-weight-bolder q-px-xl full-width custom-btn"
                    label="Log in"
                    type="button"
                    @click="$router.push('/')"
                  >
                  </q-btn>
                </div>
                <div class="q-mt-sm text-blue-10 row full-width justify-end cursor-pointer">
                  Forgot Password?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import {defineComponent, ref} from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: "LoginPage",

  setup() {
    const $q = useQuasar()
    return {
      userName: ref('admin'),
      password: ref('Quasar@Template'),
      $q,
    }
  },
})
</script>

<style>

.custom-btn {
  border-radius: 5px;
  background: linear-gradient(145deg, rgb(255, 171, 103) 2%, rgb(250, 108, 14));
  color: white;
}

.branding {
  background-color: #2e3d57;
}

.custom-input-box input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
.box {
  background: radial-gradient(200% 150px at 20% -30%, #2e3d57 -10%, transparent 120%);
  height: 4rem;
}
</style>
