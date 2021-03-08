<template>
  <div>
    <div class="has-text-centered" v-if="withLogo">
      <img
        src="../../assets/imgs/icons/password.svg"
        alt="Otends"
        width="15%"
      />
      <h1 class="cursiv-title p-0 m-0 has-text-white">Otends</h1>
    </div>

    <b-field label="Nombre del proyecto" custom-class="has-text-white">
      <b-input
        type="text"
        v-model="othread.name"
        placeholder="Ingrese nombre del proyecto"
        custom-class="placeholder"
      ></b-input>
    </b-field>

    <div class="container">
      <div class="row">
        <div class="columns">
          <div class="column">
            <b-field label="Sistema" custom-class="has-text-white">
              <b-select v-model="isAuto" expanded>
                <option value="0">Automatico</option>
                <option value="1">Manual</option>
              </b-select>
            </b-field>
          </div>
          <div class="column">
              <b-field label="Acceso" custom-class="has-text-white">
                <b-select v-model="othread.cfg.isPublic" expanded>
                  <option value="true">Pública</option>
                  <option value="false">Privada</option>
                </b-select>
              </b-field>
          </div>
          <div class="column">
            <b-field label="Predicciones" custom-class="has-text-white">
              <b-select v-model="othread.cfg.isClassificator" expanded>
                <option value="true">Clasificador</option>
                <option value="false">Historial</option>
              </b-select>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <div class="row border" v-show="isAuto == 0">
      <div class="columns">
        <div class="column">
          <b-field label="API URL" custom-class="has-text-white">
            <b-input
              type="url"
              v-model="othread.cfg.apiURL"
              placeholder="http://example.com"
              expanded
            ></b-input>
          </b-field>
        </div>
        <div class="column is-one-quarter">
          <b-field label="Tipo" custom-class="has-text-white">
            <b-select value="0" expanded>
              <option value="0">Moda</option>
              <option value="1">Electronica</option>
            </b-select>
          </b-field>
        </div>
      </div>
    </div>

    <div class="content my-5">
      <b-field
        :label="`Datos de entrada (${othread.cfg.inputRows})`"
        custom-class="has-text-white"
      >
        <b-slider
          type="is-warning"
          v-model="othread.cfg.inputRows"
          :min="2"
          :max="12"
        ></b-slider>
      </b-field>
      <b-field
        :label="`Datos de salida (${othread.cfg.outputRows})`"
        custom-class="has-text-white"
      >
        <b-slider
          type="is-warning"
          v-model="othread.cfg.outputRows"
          :min="1"
          :max="12"
        ></b-slider>
      </b-field>
      <div class="blacker-bg p-3">
        <h3 class="has-text-white">Etiquetas de entrada</h3>
        <div v-for="(_, i) in othread.cfg.inputRows" class="full-w" v-bind:key="i">
          <b-input
            type="text"
            v-model="othread.cfg.inputLabels[i]"
            placeholder="Ingrese nombre de etiqueta"
            class="my-3"
          ></b-input>
        </div>
      </div>
      <div class="blacker-bg mt-2 p-3">
        <h3 class="has-text-white">Etiquetas de salida</h3>
        <div v-for="(_, i) in othread.cfg.outputRows" class="full-w" v-bind:key="i">
          <b-input
            type="text"
            v-model="othread.cfg.outputLabels[i]"
            placeholder="Ingrese nombre de etiqueta"
            class="my-3"
          ></b-input>
        </div>
      </div>
    </div>

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
</template>

<script lang="ts">
export default {
  name: 'OThreadStepForm',
  data: () => {
    return {
      isAuto: 0,
      datasett: [],
    }
  },
  props: ['withLogo', 'othread'],
}
</script>

<style lang="scss" scoped>
h3 {
  font-size: 16px;
}

.checkbox:hover {
  color: #fff !important;
}
.blacker-bg {
  border-radius: 10px;
}
</style>