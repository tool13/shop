<template>
    <div class="v-catalog">
        <h1 class="v-catalog__title">{{title}}</h1>
        <ul class="v-catalog__list">
            <v-catalog-item
                v-for="product in PRODUCTS"
                :key="product.article"
                v-bind:product_data="product"
                @addToCart="addToCart"
            />
        </ul>
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'v-catalog',
        components: {
            vCatalogItem
        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
            ])
        },
        data() {
            return {
                title: 'catalog'
            };
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data);
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API().then((response) => {
                if (response.data) {
                    console.log('data arrived');
                }
            })
        }
    }
</script>

<style lang="scss">
    .v-catalog {
        &__title {
            position: relative;
            width: fit-content;
            margin: 0 auto;
            padding-bottom: 3px;
            font-size: 24px;
            text-transform: uppercase;
            letter-spacing: 3px;

            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 10%;
                width: 80%;
                height: 1px;
                background-color:sandybrown;
            }
        }
        &__list {
            display: grid;
            grid-gap: 35px;
            grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
            margin-top: 35px;
            padding: 0;
        }
    }
</style>
