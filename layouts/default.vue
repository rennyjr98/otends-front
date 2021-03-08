<template>
    <div class="content full-w full-h">
        <Header :showSessionMenu="showSessionMenu" />
        <Nuxt />
    </div>
</template>

<script lang="ts">
import { AuthService } from '@/services/auth.service';
import Header from '@/components/Header.vue';
export default {
    name: 'LayoutDefault',
    components: {
        Header
    },
    computed: {
        showSessionMenu: function() {
            return AuthService.user == null;
        }
    },
    created: function() {
        AuthService.load();
    }
}
</script>