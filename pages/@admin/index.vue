<template>
  <div class="container">
    <div class="wrapper p-4 black-bg">
      <div class="rows my-5">
        <div class="columns">
          <div class="column has-text-centered b-r">
            <img
              src="../../assets/imgs/robot-main.png"
              alt="welcom"
              width="60%"
            />
          </div>
          <div class="column px-5">
            <form>
                <h1 class="has-text-white cursiv-title mb-6">Login</h1>
              <b-field label="Correo electronico" custom-class="has-text-white">
                <b-input
                  type="text"
                  placeholder="Ingrese email"
                  expanded
                ></b-input>
              </b-field>
              <b-field label="Contraseña" custom-class="has-text-white">
                <b-input
                  type="password"
                  placeholder="Ingrese contraseña"
                  expanded
                ></b-input>
              </b-field>

              <div class="has-text-centered mb-4">
                <a href="#" class="has-text-white">¿Olviaste tu contraseña?</a>
              </div>
              <input
                type="submit"
                class="button is-warning full-w"
                value="Iniciar Sesión"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AdminApp',
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10%;
  border-radius: 10px;
}
.b-r {
  border-right: 1px solid rgb(66, 66, 66);
}
</style>