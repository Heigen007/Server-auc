<template>
<q-layout view="lHh Lpr lFf">
  <q-page-container>
    <q-page style="display: flex; align-items: center; flex-direction: column">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Sign In" />
          <q-tab name="alarms" label="Sign Up" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="q-pa-md" style="width: 100vw">
              <q-form
              @submit="onSignIn"
              @reset="onReset"
              class="q-gutter-md"
              >
                <q-input
                  filled
                  v-model="name"
                  label="Your login *"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type your name']"
                />

                <q-input
                  filled
                  v-model="password"
                  label="Your password *"
                  lazy-rules
                  :rules="[ val => val && val.length > 5 || 'Your password should be longer than 5 symbols']"
                />

                <div>
                  <q-btn label="Submit" type="submit" color="primary"/>
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </q-form>
            </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="q-pa-md" style="width: 100vw">
              <q-form
              @submit="onSignUp"
              @reset="onReset"
              class="q-gutter-md"
              >
                <q-input
                  filled
                  v-model="name"
                  label="Your login *"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Please type your name']"
                />

                <q-input
                  filled
                  v-model="password"
                  label="Your password *"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Your password should be longer than 5 symbols']"
                />

                <q-input
                  filled
                  v-model="phoneNumber"
                  label="Your phone number *"
                  lazy-rules
                  :rules="[ val => val && val.length > 8 && val.length < 13 || 'Your password should be longer than 8 symbols and shorter than 15 symbols']"
                />

                <q-toggle v-model="accept" label="I accept the license and terms" />

                <div>
                  <q-btn label="Submit" type="submit" color="primary"/>
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </q-form>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-page>
  </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      name: null,
      password: null,
      phoneNumber: false,
      accept: false,
      tab: 'mails'
    }
  },

  methods: {
    onSignUp () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Success'
        })
      }
    },
    onSignIn () {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Success'
      })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>
