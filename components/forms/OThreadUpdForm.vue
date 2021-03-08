<template>
  <div class="content m-6" v-show="othread.cfg.isAuto">
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
</template>

<script lang="ts">
export default {
  name: 'OThreadForm',
  data: () => {
    return {
      datasett: [],
    }
  },
  props: ['withLogo', 'othread'],
  created: function () {
    this.isAuto = this.othread.cfg.apiURL != null ? 0 : 1
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 45px;
}
.checkbox:hover {
  color: #fff !important;
}

.content {
  width: 95%;
  margin: auto;
}
</style>