<template>
  <div class="container">
    <form @submit.prevent="signup()" class="black-bg">
      <div class="has-text-centered">
        <img
          src="../../assets/imgs/icons/password.svg"
          alt="Otends"
          width="20%"
        />
        <h1 class="cursiv-title p-0 m-0 has-text-white">Otends</h1>
      </div>

      <steps :stepIndex="stepIndex" v-on:changeStep="changeStep" />

      <transition name="bounce">
        <div id="profile" v-if="stepIndex == 0" key="1">
          <b-field label="Correo electrónico" custom-class="has-text-white">
            <b-input
              type="email"
              v-model="user.email"
              placeholder="Ingrese correo electrónico"
              custom-class="placeholder"
            ></b-input>
          </b-field>

          <div class="row">
            <div class="columns">
              <div class="column">
                <b-field label="Nombre" custom-class="has-text-white">
                  <b-input
                    type="text"
                    placeholder="Ingrese nombre"
                    v-model="name"
                    expanded
                  ></b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Apellido" custom-class="has-text-white">
                  <b-input
                    type="text"
                    placeholder="Ingrese apellido"
                    v-model="lastname"
                    expanded
                  ></b-input>
                </b-field>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="columns">
              <div class="column">
                <b-field label="Compañia" custom-class="has-text-white">
                  <b-input
                    type="text"
                    v-model="user.nameCompany"
                    placeholder="Ingrese nombre de compañia"
                  ></b-input>
                </b-field>
              </div>
              <div class="column is-one-quarter">
                <b-field label="Tipo" custom-class="has-text-white">
                  <b-select placeholder="Selecciona uno" expanded>
                    <option value="f">Moda</option>
                    <option value="f">Electronica</option>
                    <option value="f">Papeleria</option>
                  </b-select>
                </b-field>
              </div>
            </div>
          </div>

          <b-field label="Contraseña" custom-class="has-text-white mt-2">
            <b-input
              type="password"
              placeholder="Ingrese contraseña"
              v-model="user.password"
              expanded
            ></b-input>
          </b-field>
          <b-field label="Repite contraseña" custom-class="has-text-white mt-2">
            <b-input
              type="password"
              placeholder="Repite contraseña"
              expanded
            ></b-input>
          </b-field>
        </div>

        <div class="othreads" v-else-if="stepIndex == 1" key="2">
          <o-thread-step-form :withLogo="false" :othread="othread" />
        </div>

        <div class="othreads" v-else-if="stepIndex == 2" key="3"></div>

        <div class="othreads" v-else-if="stepIndex == 3" key="4">
          <div class="has-text-white my-3">
            <label><b>Términos y condiciones de uso</b></label>
          </div>
          <textarea cols="30" rows="10" class="p-3" disabled></textarea>

          <div class="has-text-white mt-3">
            <b-field>
              <b-checkbox :value="true" type="is-warning">
                Acepto los terminos y condiciones de uso
              </b-checkbox>
            </b-field>
            <b-field>
              <b-checkbox :value="true" type="is-warning">
                Acepto el uso compartidos de los datos con Otends
              </b-checkbox>
            </b-field>
          </div>
        </div>
      </transition>

      <button
        type="submit"
        class="button is-warning is-fullwidth mt-4"
        v-if="stepIndex == 3"
      >
      <ficon icon="address-card" class="mr-4" />
      Registrarme
      </button>
      <b-button
        type="is-black"
        :class="{ 'mt-1': stepIndex == 3, 'mt-4': stepIndex != 3 }"
        @click="$emit('toLogin')"
        expanded
        >
          <ficon icon="lock" class="mr-4 float-left" />
          Iniciar sesión
        </b-button
      >
    </form>
  </div>
</template>

<script lang="ts">
import { AuthService } from '@/services/auth.service';
import Steps from '@/components/forms/Steps.vue'
import OThreadStepForm from './OThreadStepForm.vue';
import { OThread } from '~/assets/models/othread.model';
export default {
  name: 'Signup',
  data: () => {
    return {
      stepIndex: 0,
      name: '',
      lastname: '',
      rpassword: '',
      othread: new OThread(),

      authService: new AuthService()
    }
  },
  props: ['user'],
  components: {
    OThreadStepForm,
    Steps,
  },
  methods: {
    changeStep: function (index: number) {
      this.stepIndex = index
    },
    signup: function() {
      this.user.name = this.name + ' ' + this.lastname;
      this.authService.signup(this.user);
    }
  },
}
</script>

<style lang="scss" scoped>
form {
  width: 60%;
  padding: 10px 5% 3% 5%;
  border-radius: 10px;
  margin: 10% auto 0px auto;
  .checkbox:hover {
    color: #fff !important;
  }

  textarea {
    width: 100%;
    border: none;
    resize: none;
    outline: none;
    border-radius: 10px;
  }
}

.border {
  border-radius: 10px;
  padding: 15px;
  border: rgb(160, 160, 160) solid 1px;
}
</style>