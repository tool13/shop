<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'v-main-wrapper',
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
