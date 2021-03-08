<template>
  <div class="container">
    <notifications group="foo" />
    <form @submit.prevent="login()" class="black-bg">
      <div class="has-text-centered">
        <img
          src="../../assets/imgs/icons/password.svg"
          alt="Otends"
          width="20%"
        />
        <h1 class="cursiv-title p-0 m-0 has-text-white">Otends</h1>
      </div>
      <b-field label="Correo electrónico" custom-class="has-text-white">
        <b-input
          type="email"
          v-model="user.email"
          placeholder="Ingrese correo electrónico"
          custom-class="placeholder"
        ></b-input>
      </b-field>
      <b-field label="Contraseña" custom-class="has-text-white">
        <b-input
          type="password"
          v-model="user.password"
          placeholder="Ingrese contraseña"
          custom-class="placeholder"
        ></b-input>
      </b-field>
      <b-field>
        <b-checkbox
          type="is-warning"
          :value="rememberme"
          class="has-text-white"
        >
          Recordar inicio de sesión
        </b-checkbox>
      </b-field>

      <div class="has-text-centered mb-2">
        <a href="#" class="has-text-white">¿Se le olvidó su contraseña?</a>
      </div>

      <button
        type="submit"
        class="button is-warning is-fullwidth"
        @mouseenter="lock = 'lock-open'"
        @mouseleave="lock = 'lock'"
      >
        <div class="anim-icon has-text-centered">
          <transition name="bounce">
            <div key="1" v-if="lock == 'lock'">
              <ficon :icon="lock" class="mr-4 float-left" />
              <span>Iniciar sesión</span>
            </div>
            <div key="2" v-else>
              <ficon :icon="lock" class="mr-4 float-left" />
              <span>Iniciar sesión</span>
            </div>
          </transition>
        </div>
      </button>

      <b-button
        type="is-black"
        class="mt-2"
        @click="$emit('toSignup')"
        expanded
      >
        <ficon icon="address-card" class="mr-4" />
        Registrarme
      </b-button>
    </form>
  </div>
</template>

<script lang="ts">
import { AuthService } from '@/services/auth.service'
export default {
  name: 'Login',
  data: function () {
    return {
      lock: 'lock',
      rememberme: true,
      authService: new AuthService(),
    }
  },
  props: ['user'],
  methods: {
    login: async function () {
      await this.authService.login(this.user)
      console.log(AuthService.user)
      if (AuthService.user != null) {
        if (this.rememberme) {
          localStorage.setItem('otend_user', JSON.stringify(AuthService.user))
        } else {
          sessionStorage.setItem('otend_user', JSON.stringify(AuthService.user))
        }
        this.$router.push('/panel')
      } else {
        this.loginFailed()
      }
    },
    loginFailed: function () {
      this.$notify({
        group: 'foo',
        type: 'error',
        title: 'No se pudo iniciar sesion',
        text: 'Correo y/o contraseña incorrectos',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  width: 50%;
  padding: 10px 5% 3% 5%;
  border-radius: 10px;
  margin: 10% auto 0px auto;
}

.button {
  transition: ease-in-out 200ms;
}

div {
  display: block !important;
}
button:hover .anim-icon {
  transform: scaleZ(300) !important;
}
</style>