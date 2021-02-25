<template>
    <div class="v-main-wrapper">
        <v-catalog />
        <v-cart 
            v-if="CART.length"
            v-bind:cart_data = "CART"
        />
    </div>
</template>

<script>
    import vCatalog from './v-catalog';
    import vCart from './v-cart';
    import {mapGetters} from 'vuex';

    export default {
        name: 'v-main-wrapper',
        components: {
            vCatalog,
            vCart
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        }
    }
</script>

<style>
    .v-main-wrapper {
        max-width: 1200px;
        padding: 0 10px;
        margin: 0 auto;
    }
</style>