<template>
  <div class="container">
    <transition name="bounce">
      <Login :user="user" v-on:toSignup="change(false)" v-if="isLogin" key=1 />
      <sign-up :user="user" v-on:toLogin="change(true)" v-else key=2 />
    </transition>
  </div>
</template>

<script lang="ts">
import Login from '@/components/forms/Login.vue'
import SignUp from '~/components/forms/SignUp.vue'
import { User } from '@/assets/models/user.model'
export default {
  name: 'Sessions',
  middleware: [],
  data: () => {
    return {
      isLogin: true,
      user: new User(),
    }
  },
  components: {
    Login,
    SignUp,
  },
  methods: {
    change: function(islogin:boolean) {
      this.isLogin = islogin;
      this.$route.query.login = islogin + "";
    }
  },
  created: function () {
    let login: string | (string | null)[] = this.$route.query.login
    if (login != null) {
      switch (login) {
        case 'true':
          this.isLogin = true
          break
        case 'false':
          this.isLogin = false
          break
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
    margin-bottom: 10%;
}
</style>