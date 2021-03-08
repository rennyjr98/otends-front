<template>
  <div class="content">
    <div class="row">
      <div class="columns">
        <div class="column px-0 full-h is-2 b-r has-text-centered">
          <h2 class="has-text-white mt-5 cursiv-title">AdminPanel</h2>
          <input type="text" placeholder="Buscar..." class="mt-4 px-4 py-2" />

          <div class="has-text-left mt-6">
            <nav class="has-text-white">
              <button
                class="button is-warning full-w has-text-left"
                @click="activeFarms = !activeFarms"
              >
                <ficon icon="tractor" class="mr-3" />
                Farms ({{ farms.length }})
                <ficon
                  :icon="activeFarms ? 'caret-up' : 'caret-down'"
                  class="ml-3"
                />
              </button>
              <ul v-show="activeFarms">
                <li v-for="(v, i) in farms" v-bind:key="i">
                  <button class="bttn has-text-left has-text-white py-1 full-w">
                    <ficon icon="tractor" class="mr-2" />
                    Farm #{{ i + 1 }}
                  </button>
                  <ul>
                    <span class="has-text-white">Farmers</span>
                    <li v-for="(v, i) in farms.farmers" v-bind:key="i">
                      Farmer #{{ i + 1 }}
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="column is 10">
          <farm-viewer
            :farm="farms.length > 0 ? farms[index] : null"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FarmService } from '@/services/farm.service'
import FarmViewer from '~/components/FarmViewer.vue'
export default {
  components: { FarmViewer },
  name: 'AdminPanel',
  data: function () {
    return {
      farms: [],
      index: 0,
      activeFarms: false,
      farmService: new FarmService(),
    }
  },
  created: async function () {
    this.farms = await this.farmService.getAll()
    console.log(this.farms)
  },
}
</script>

<style lang="scss" scoped>
input[type='text'] {
  border: none;
  border-radius: 20px;
}

nav {
  ul {
    list-style: none;
  }
}

.bttn:hover {
  cursor: pointer;
  font-weight: bold;
  color: yellow !important;
}

.b-r {
  border-right: 1px solid rgb(75, 75, 75);
}
</style>