<template>
  <div class="container">
    <div class="content mx-6">
      <div class="row">
        <div class="columns">
          <div class="column">
            <h1 class="has-text-white cursiv-title title is-1">
              <abbr title="Configuración" class="cursiv-title">Config. </abbr>
              {{ othread.name }}
            </h1>
          </div>
          <div class="column is-one-quarter">
            <b-field label="Predicciones" custom-class="has-text-white">
              <b-select v-model="isClassificator" expanded>
                <option :value="true">Clasificador</option>
                <option :value="false">Historial</option>
              </b-select>
            </b-field>
          </div>
        </div>
      </div>
    </div>

    <div class="content mx-6" v-show="othread.cfg.isAuto">
      <h1 class="has-text-white cursiv-title">{{ othread.name }}</h1>
      <div class="row border">
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
    </div>

    <div class="content mx-6">
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
        <div
          v-for="(_, i) in othread.cfg.inputRows"
          class="full-w"
          v-bind:key="i"
        >
          <b-input
            type="text"
            v-model="othread.cfg.inputLabels[i]"
            placeholder="Ingrese nombre de etiqueta"
            :disabled="i == 0 && !isClassificator"
            class="my-3"
          ></b-input>
        </div>
      </div>
      <div class="blacker-bg mt-2 p-3">
        <h3 class="has-text-white">Etiquetas de salida</h3>
        <div
          v-for="(_, i) in othread.cfg.outputRows"
          class="full-w"
          v-bind:key="i"
        >
          <b-input
            type="text"
            v-model="othread.cfg.outputLabels[i]"
            placeholder="Ingrese nombre de etiqueta"
            class="my-3"
          ></b-input>
        </div>
      </div>

      <b-button type="is-warning" class="mt-4" @click="addOthread()" expanded>
        Crear
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { OThreadService } from '@/services/othread.service'
export default {
  name: 'OThreadAddForm',
  data: function () {
    return {
      isClassificator: true,
      othreadService: new OThreadService(),
    }
  },
  props: ['othread'],
  methods: {
    addOthread: async function () {
      this.othread.cfg.rows = this.othread.inputs
      await this.othreadService.add(this.othread)
    },
  },
  watch: {
    isClassificator: function () {
      this.othread.cfg.isClassificator = this.isClassificator
      if (!this.isClassificator) {
        this.othread.cfg.inputLabels[0] = 'date'
      } else {
        this.othread.cfg.inputLabels[0] = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
h3 {
  font-size: 16px;
}

abbr {
  border-bottom: none;
  text-decoration: none;
}

.checkbox:hover {
  color: #fff !important;
}
.blacker-bg {
  border-radius: 10px;
}
</style>