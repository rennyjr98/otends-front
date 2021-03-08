<template>
  <div class="content m-0 p-0">
    <div class="rows m-0 p-0">
      <div class="columns m-0 p-0">
        <div class="column panel full-h is-2 px-0">
          <h2 class="mt-4 cursiv-title has-text-white has-text-centered">
            Panel
          </h2>
          <div class="wrapper mt-4">
            <input
              type="text"
              placeholder="Buscar..."
              class="full-w has-background-dark has-text-white"
            />
            <div class="has-text-right mt-3">
              <b-dropdown aria-role="list" class="has-text-left">
                <template #trigger="{ active }">
                  <b-button
                    label="Filtros"
                    type="is-warning"
                    icon-left="filter"
                    :icon-right="active ? 'menu-up' : 'menu-down'"
                  />
                </template>

                <b-dropdown-item aria-role="listitem">
                  <ficon icon="globe-americas" class="mr-2" />
                  Global
                </b-dropdown-item>
                <b-dropdown-item aria-role="listitem">
                  <ficon icon="fingerprint" class="mr-2" />
                  Propios
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <menu-computer v-on:change="changeBody" :othreads="othreads" />
        </div>
        <div class="column sub-panel full-h is-2 black-bg">
          <h2 class="mt-4 cursiv-title has-text-white has-text-centered">
            Sub-Panel
          </h2>
          <sub-panel
            :othread="index != 'create' ? othreads[index] : othreadTmp"
            :list-othread="null"
          />
        </div>
        <div class="column is-8 px-6 pb-0 mb-0">
          <div class="main full-h">
            <div class="othread-form ma px-6 pt-6" v-if="index == 'create'">
              <o-thread-add-form :othread="othreadTmp" />
            </div>
            <div class="pt-4" v-else>
              <div class="wrapper"></div>
              <o-thread-upd-form :withLogo="true" :othread="othreads[index]" />
              <predict class="mt-5" :othread="othreads[index]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { OThread } from '@/assets/models/othread.model'
import { OThreadService } from '@/services/othread.service'
import MenuComputer from '@/components/MenuComputer.vue'
import OThreadAddForm from '~/components/forms/OThreadAddForm.vue'
import Predict from '~/components/forms/Predict.vue'
import SubPanel from '~/components/SubPanel.vue'
export default {
  name: 'Panel',
  middleware: ['authguard.middleware'],
  data: () => {
    return {
      index: 'create',
      active: false,
      othreadTmp: new OThread(),
      othreads: [],
      othreadService: new OThreadService(),
    }
  },
  components: {
    MenuComputer,
    OThreadAddForm,
    Predict,
    SubPanel,
  },
  methods: {
    changeBody: function (index: string) {
      this.index = index
    },
  },
  created: async function () {
    this.othreads = await this.othreadService.getByUser()
  },
}
</script>

<style lang="scss" scoped>
input[type='text'] {
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 10px 10px;
}

.main {
  overflow-y: scroll;
  scrollbar-width: none;
}

.icons {
  width: 40px;
}

.is-2 {
  z-index: 0;
  border-right: 2px solid #1f1f1f;
}

.blacker-bg {
  background-color: #181818;
}
.black-input {
  color: #fff !important;
  background-color: #181818 !important;
}

.othread-form {
  border-radius: 20px;
}
</style>