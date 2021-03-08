<template>
  <div class="content m-6">
    <div class="row">
      <div class="columns">
        <div class="column">
          <h3 class="has-text-white">Interacciones</h3>
        </div>
        <div class="column is-one-quarter">
          <b-select v-model="action" expanded>
            <option value="0">Predecir</option>
            <option value="1">Alimentar</option>
          </b-select>
        </div>
      </div>
    </div>

    <div class="content" v-show="action == 1">
      <feed :othread="othread" />
    </div>

    <div v-show="action == 0" class="content">
      <div v-for="(label, i) in othread.cfg.inputLabels" v-bind:key="i">
        <b-field :label="label" class="mt-4" custom-class="has-text-white">
          <b-input
            type="text"
            v-model="caseValues[i]"
            size="small"
            placeholder="Ingrese valor"
            expanded
            v-if="!(i == 0 && !othread.cfg.isClassificator)"
          ></b-input>

          <b-datepicker
            placeholder="Clic para ingresar fecha..."
            icon="calendar-today"
            locale="es-MX"
            v-model="dateCase"
            v-else
          >
          </b-datepicker>
        </b-field>
      </div>
      <table class="mt-5">
        <tr>
          <th
            v-for="(title, i) in othread.cfg.outputLabels"
            v-bind:key="i"
            class="has-text-white"
          >
            {{ title }}
          </th>
        </tr>
        <tr class="has-text-white" v-show="results.length > 0">
          <td v-for="(r, i) in results" v-bind:key="i" class="has-text-white">
            {{ numeral(r).format('0.00%') }}
            {{r}}
          </td>
        </tr>
        <tr v-show="results.length == 0">
          <td
            v-for="(_, i) in othread.cfg.outputLabels"
            v-bind:key="i"
            class="has-text-white"
          >
            Vacio
          </td>
        </tr>
      </table>
      <b-button type="is-warning" expanded class="mt-4" @click="predict()"
        >Predecir</b-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { OThreadService } from '@/services/othread.service'
import { PredictModel } from '@/assets/models/predict.model'
import Feed from './Feed.vue'
export default {
  name: 'Predict',
  data: function () {
    return {
      action: 0,
      caseValues: [],
      results: [],
      dateCase: new Date(),
      numeral: require('numeral'),
      othreadService: new OThreadService(),
    }
  },
  props: ['othread'],
  components: {
    Feed,
  },
  computed: {
    getYears: function () {
      let years: number[] = []
      let currentYear: number = new Date().getFullYear()
      for (let i: number = currentYear - 15; i <= currentYear; i++) {
        years.push(i)
      }
      return years
    },
  },
  methods: {
    predict: async function () {
      let pModel: PredictModel = new PredictModel()
      if (!this.othread.cfg.isClassificator) {
        this.caseValues[0] =
          this.dateCase.getFullYear() +
          '-' +
          (this.dateCase.getMonth() + 1) +
          '-' +
          this.dateCase.getDate()
      }
      pModel.othread = this.othread
      pModel.pCase = this.caseValues
      const resp = await this.othreadService.getPrediction(pModel)
      this.results = resp.results
    },
  },
  watch: {
    dateCase: function () {
      this.caseValues[0] = this.dateCase.getFullYear()
      this.caseValues[1] = this.dateCase.getMonth() + 1
    },
  },
}
</script>

<style lang="scss" scoped>
h6 {
  cursor: pointer;
  border-radius: 10px;
}
.content {
  width: 95%;
  margin: auto;
}
</style>