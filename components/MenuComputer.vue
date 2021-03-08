<template>
  <div class="content">
    <nav class="p-0 m-0 mt-5">
      <ul class="p-0 m-0">
        <li
          @click="
            index = -1
            $emit('change', 'create')
          "
          :class="{ 'has-background-warning': index == -1 }"
        >
          <div class="flex-box">
            <div class="flex-item">
              <p
                :class="{
                  'has-text-white': index != -1,
                  'has-text-dark': index == -1,
                }"
              >
                <ficon icon="plus" />
              </p>
            </div>
            <div class="flex-item">
              <p
                class="name"
                :class="{
                  'has-text-white': index != -1,
                  'has-text-dark': index == -1,
                }"
              >
                <small>Crear</small>
              </p>
            </div>
          </div>
        </li>
        <li
          v-for="(othread, i) in othreads"
          v-bind:key="othread.name"
          @click="
            index = i
            $emit('change', `${i}`)
          "
          :class="{ 'has-background-warning': index == i }"
        >
          <div class="flex-box">
            <div class="flex-item icon-box">
              <ficon
                icon="brain"
                class="icon-size"
                :class="{
                  'has-text-info': index != i,
                  'has-text-dark': index == i,
                }"
              />
              <ficon
                :icon="(othread.owner.id === AuthService.user.id) ? 'fingerprint' : 'globe-americas'"
                class="ml-2 icon-size"
                :class="{
                  'has-text-success': index != i,
                  'has-text-dark': index == i,
                }"
              />
              <ficon
                :icon="(othread.cfg.isClassificator) ? 'chart-pie' : 'chart-line'"
                class="ml-2 icon-size"
                :class="{
                  'has-text-danger': index != i,
                  'has-text-dark': index == i,
                }"
              />
              <ficon
                :icon="(othread.cfg.isPublic) ? 'unlock' : 'lock'"
                class="ml-2 icon-size"
                :class="{
                  'has-text-warning': index != i,
                  'has-text-dark': index == i,
                }"
              />
            </div>
            <div class="flex-item">
              <p
                class="name"
                :class="{
                  'has-text-white': index != i,
                  'has-text-dark': index == i,
                }"
              >
                <small>{{ othread.name }}</small>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { AuthService } from '@/services/auth.service';
import { OThreadService } from '@/services/othread.service'
export default {
  name: 'MenuComputer',
  data: () => {
    return {
      index: -1,
      AuthService: AuthService,
      othreadService: new OThreadService(),
    }
  },
  props: ['othreads'],
}
</script>

<style lang="scss" scoped>
nav {
  margin: 0px;
  padding: 0px;
  ul {
    list-style: none;
    li {
      display: flex;
      margin: 0px;
      cursor: pointer;
      flex-direction: column;
      transition: ease-in-out 300ms;

      .icon-box {
        width: 130px;
      } .icon-size {
        font-size: 14px;
      }

      .flex {
        &-box {
          display: flex;
          width: 90%;
          margin: auto;
        }
        &-item {
          padding: 5px 15px 5px 15px;
        }
      }
      .name {
        font-size: 16px;
        margin: 0px 0px 0px 0px;
      }
    }
    li:hover {
      background-color: #141414;
    }
  }
}
</style>