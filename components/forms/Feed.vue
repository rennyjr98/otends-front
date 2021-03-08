<template>
  <div class="container mt-6">
    <div class="container mb-6">
      <div class="row">
        <div class="columns">
          <div class="column">
            <b-field
              label="Alimentar por archivo"
              custom-class="has-text-white"
            >
              <b-upload
                type="is-warning"
                v-model="file"
                custom-class="has-text-white"
                drag-drop
                expanded
              >
                <section class="section">
                  <div class="content has-text-centered has-text-white">
                    <p>
                      <b-icon icon="upload" size="is-large"></b-icon>
                    </p>
                    <p>Arrastre o haga clic para subir un archivo</p>
                  </div>
                </section>
              </b-upload>
            </b-field>
            <b-button
              type="is-info"
              icon-left="upload"
              expanded
              @click="sendFoodFromFile()"
              >Subir</b-button
            >
          </div>
          <div class="column">
            <div class="relative pt-5">
              <h2 class="full-w has-text-centered has-text-white title is-1">
                {{ rows }}
              </h2>
              <b-field label="Agregar filas" custom-class="has-text-white">
                <b-numberinput
                  type="is-warning"
                  v-model="rows"
                  :editable="false"
                  min="1"
                  expanded
                ></b-numberinput>
              </b-field>
              <b-field class="bottom full-w" grouped>
                <b-field expanded>
                  <b-button type="is-warning" expanded @click="addRows()"
                    >Agregar</b-button
                  >
                </b-field>
                <b-field expanded>
                  <b-button type="is-danger" expanded @click="removeRows()">Remover</b-button>
                </b-field>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="manual pb-3">
      <table>
        <tr>
          <th v-for="(v, i) in getLabels" v-bind:key="i" class="has-text-white">
            {{ v }}
          </th>
        </tr>
        <tr v-for="(_, i) in cases" v-bind:key="i">
          <td v-for="(_, j) in getLabels" v-bind:key="j">
            <b-input
              type="text"
              v-model="cases[i][j]"
              placeholder="Ingrese valor"
              expanded
            ></b-input>
          </td>
        </tr>
      </table>
    </div>
    <b-button type="is-info" class="mt-3" expanded @click="sendFoodSet()">Alimentar</b-button>
  </div>
</template>

<script lang="ts">
import { OThreadService } from '@/services/othread.service'
export default {
  name: 'Feed',
  data: () => {
    return {
      rows: 1,
      file: {},
      jsonFileContent: '',
      cases: [[]],
      othreadService: new OThreadService(),
    }
  },
  props: ['othread'],
  computed: {
    getLabels: function () {
      let labels: string[] = []
      for (let i = 0; i < this.othread.cfg.inputRows; i++) {
        labels.push(this.othread.cfg.inputLabels[i])
      }
      for (let i = 0; i < this.othread.cfg.outputRows; i++) {
        labels.push(this.othread.cfg.outputLabels[i])
      }
      return labels
    },
  },
  methods: {
    addRows: function () {
      for (let i = 0; i < this.rows; i++) {
        this.cases.push([])
      }
      this.rows = 1
    },
    removeRows: function() {
      if(this.cases.length == 1) {

      } else if(this.cases.length < this.rows) {
        this.cases = [[]];
        this.rows = 1;
      } else {
        this.cases = this.cases.slice(0, -this.rows);
        this.rows = 1;
      }
    },
    sendFoodFromFile: function () {
      if (this.jsonFileContent != null) {
        if (this.jsonFileContent.length > 0) {
          this.othreadService.sendFood(
            JSON.parse(this.jsonFileContent),
            this.othread.id
          )
        }
      }
    },
    sendFoodSet: function () {
      if (this.cases[0][0] != null) {
        this.othreadService.sendFood(this.cases, this.othread.id)
      }
    },
  },
  watch: {
    file: function () {
      let reader = new FileReader()
      reader.onload = (e) => {
        let data = JSON.parse(e.target.result as string)
        this.jsonFileContent = JSON.stringify(data)
      }
      reader.readAsText(this.file)
    },
  },
}
</script>

<style lang="scss" scoped>
.manual {
  width: 100%;
  overflow-x: auto !important;
  table {
    width: 100%;
    th,
    td {
      min-width: 200px;
    }
  }
}

.relative {
  height: 100%;
  position: relative;
}

.bottom {
  position: absolute;
  bottom: 0;
}
</style>