<template>
    <div class="v-main-wrapper">
        <v-header />
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import vHeader from './layouts/v-header';

    export default {
        name: 'v-main-wrapper',
        components: {
            vHeader
        }
    }
</script>

<style>
    .v-main-wrapper {
        position: relative;
        max-width: 1200px;
        padding: 0 10px;
        margin: 0 auto;
    }
</style>
