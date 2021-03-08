<template>
  <header class="full-w has-background-warning">
    <div class="wrapper">
      <div class="rows">
        <div class="columns">
          <div class="column">
            <p></p>
          </div>
          <div class="column has-text-right">
            <nav>
              <ul>
                <li>
                  <a class="bttn">Documentación</a>
                </li>
                <li v-if="showSessionMenu">
                  <a href="/sessions?login=true" class="bttn">Acceder</a>
                </li>
                <li v-if="showSessionMenu">
                  <a href="/sessions?login=false" class="bttn">Registrarse</a>
                </li>
                <li style="float: right">
                  <b-dropdown aria-role="list" class="has-text-left">
                    <template #trigger="{ active }">
                      <b-button
                        class="mt-n"
                        type="is-warning"
                        :icon-right="active ? 'menu-up' : 'menu-down'">
                        <div class="mt-1"></div>
                        <ficon icon="bars" class="is-size-6" />
                      </b-button>
                    </template>

                    <b-dropdown-item aria-role="listitem">
                      <ficon icon="user" class="mr-4" />
                      Acceder
                    </b-dropdown-item>
                    <b-dropdown-item aria-role="listitem">
                      <ficon icon="signature" class="mr-3" />
                      Registrarse
                    </b-dropdown-item>
                    <b-dropdown-item aria-role="listitem" @click="logout()">
                      <hr class="m-2">
                      <ficon icon="sign-out-alt" class="mr-3" />
                      Desconectar
                    </b-dropdown-item>
                  </b-dropdown>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { AuthService } from '@/services/auth.service'
export default {
  name: 'Header',
  data: function () {
    return {
      active: false,
    }
  },
  props: ['showSessionMenu'],
  methods: {
    logout: function() {
      AuthService.logout();
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: relative;
  z-index: 1;
  height: 45px;
}

.wrap-content {
  display: inline-block;
  border-radius: 0px 0px 14px 14px;
}

.mt-n {
  margin-top: -7px !important;
}

button.bttn {
  font-size: 16px;
}

.column nav {
  padding: 0px;
  margin: 0px;
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    li {
      display: inline-block;
      padding: 0px;
      margin: 0px;
      a {
        display: block;
        cursor: pointer;
        padding: 3px 10px;
        color: rgb(58, 58, 58);
      }
      button {
        cursor: pointer;
        padding: 7px 10px;
        color: rgb(58, 58, 58);
      }
    }
  }
}
</style>