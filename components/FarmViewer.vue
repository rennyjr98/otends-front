<template>
    <div class="container">
        <div class="container" v-if="farm != null">
            <h3 class="has-text-white cursiv-title mt-6">
                Farm #{{index+1}}
            </h3>
            <div class="wrapper-left">
                <table class="has-text-white">
                    <tr>
                        <td>
                            <span>Limite de Farmers : {{farm.FARMER_LIMIT}}</span>
                        </td>
                        <td>
                            <span>Limite de espera : {{farm.ON_HOLD_OTHREADS_LIMIT}}</span>
                        </td>
                        <td>
                            <span>Limite de managers : {{farm.MANAGER_LIMIT}}</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="container" v-else>
            <h3 class="has-text-white cursiv-title">Farms inactivas</h3>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'FarmViewer',
    props: ['farm', 'index']
}
</script>

<style lang="scss" scoped>
.wrapper-left {
    width: 60%;
}

h3 {
    font-size: 40px;
}
</style>