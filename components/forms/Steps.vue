<template>
  <div class="container my-6">
    <div class="row">
      <div class="columns">
        <div
          class="column has-text-white has-text-centered"
          :class="{ 'clicked-effect': stepIndex == 0 }"
          @click="changeStep(0)"
        >
          <ficon icon="user-circle" class="icon" />
          <p>
            <small><b>Perfil</b></small>
          </p>
        </div>
        <div
          class="column has-text-white has-text-centered"
          :class="{ 'clicked-effect': stepIndex == 1 }"
          @click="changeStep(1)"
        >
          <ficon icon="project-diagram" class="icon" />
          <p>
            <small><b>OThreads</b></small>
          </p>
        </div>
        <div
          class="column has-text-white has-text-centered"
          :class="{ 'clicked-effect': stepIndex == 2 }"
          @click="changeStep(2)"
        >
          <ficon icon="fingerprint" class="icon" />
          <p>
            <small><b>Seguir</b></small>
          </p>
        </div>
        <div
          class="column has-text-white has-text-centered"
          :class="{ 'clicked-effect': stepIndex == 3 }"
          @click="changeStep(3)"
        >
          <ficon icon="check-circle" class="icon" />
          <p>
            <small><b>Finalizar</b></small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Steps',
  data: () => {
    return {}
  },
  props: ['step', 'stepIndex'],
  methods: {
    changeStep: function (index: number) {
      this.$emit('changeStep', index);
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 10%;
  border-radius: 10px;
  background-color: rgb(22, 22, 22);
  .column {
    cursor: pointer;
    transition: ease-in-out 300ms;
    p,
    span,
    small,
    b,
    .icon {
      transition: ease-in-out 300ms;
    }
  }
  .column:hover {
    border-radius: 10px;
    background-color: rgb(14, 14, 14);
    p,
    span,
    small,
    b,
    .icon {
      color: rgb(235, 224, 73);
    }
  }
}

.clicked-effect {
  border-radius: 10px;
  background-color: rgb(14, 14, 14);
  p,
  span,
  small,
  b,
  .icon {
      color: rgb(235, 224, 73);
  }
}
</style>