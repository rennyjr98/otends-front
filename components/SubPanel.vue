<template>
  <div class="container">
    <div class="othread-info wrapper mt-6" v-if="othread != null">
      <b-field label="Nombre del proyecto" custom-class="has-text-white">
        <b-input
          type="text"
          v-model="othread.name"
          placeholder="Ingrese nombre del proyecto"
          custom-class="placeholder"
        ></b-input>
      </b-field>

      <b-field label="Sistema" custom-class="has-text-white">
        <b-select v-model="othread.cfg.isAuto" :value="true" expanded>
          <option :value="true">Automatico</option>
          <option :value="false">Manual</option>
        </b-select>
      </b-field>

      <b-field label="Acceso" custom-class="has-text-white">
        <b-select v-model="othread.cfg.isPublic" expanded>
          <option :value="true">Pública</option>
          <option :value="false">Privada</option>
        </b-select>
      </b-field>

      <div class="datasett has-text-white mt-5">
        <div class="my-4">
          <label><b>Configuración de datos</b></label>
        </div>
        <b-checkbox
          v-model="othread.cfg.isBinary"
          native-value="binary"
          type="is-success"
        >
          Estandar binario
        </b-checkbox>
        <b-checkbox
          v-model="othread.cfg.isInvert"
          native-value="invert"
          type="is-success"
        >
          Eliminar ruido
        </b-checkbox>
      </div>
    </div>

    <div class="list-othread"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SubPanel',
  data: function () {
    return {
      isAuto: 1,
    }
  },
  props: ['othread', 'list-othread']
}
</script>

<style lang="scss" scoped>
</style>