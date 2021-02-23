<template>
    <div class="v-catalog">
        <p>{{title}}</p>
        <v-catalog-item></v-catalog-item>
        <v-catalog-item></v-catalog-item>
        <v-catalog-item></v-catalog-item>
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item'

    export default {
        name: 'v-catalog',
        components: {
            vCatalogItem
        },
        props: {},
        data() {
            return {
                title: 'catalog'
            };
        },
        computed: {}
    }
</script>

<style>

</style>