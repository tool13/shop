<template>
    <div class="v-catalog">
        <h1 class="v-catalog__title">{{title}}</h1>
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <span class="v-catalog__link-to-cart">Cart: {{CART.length}}</span>
        </router-link>
        <v-select
            v-bind:options="filters"
            v-bind:selected="selected"
            @select="sortByFilter"
        />
        <ul class="v-catalog__list">
            <v-catalog-item
                v-for="product in filteredProducts"
                :key="product.article"
                v-bind:product_data="product"
                @addToCart="addToCart"
            />
        </ul>
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item';
    import vSelect from '../inputs/v-select';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'v-catalog',
        components: {
            vSelect,
            vCatalogItem
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
            filteredProducts() {
                if (this.sortedProducts.length) {
                    return this.sortedProducts;
                } else {
                    return this.PRODUCTS;
                }
            }
        },
        data() {
            return {
                title: 'catalog',
                filters: [
                    {name: 'Все', value: 'all'},
                    {name: 'Мужские', value: 'm'},
                    {name: 'Женские', value: 'w'}
                ],
                selected: 'all',
                sortedProducts: []
            };
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data);
            },
            sortByFilter(option) {
                this.sortedProducts = [];
                this.PRODUCTS.map(item => {
                    if (item.category === option.name) {
                        this.sortedProducts.push(item);
                    }
                });
                this.selected = option.name;
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();
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
                background-color: sandybrown;
            }
        }

        &__list {
            display: grid;
            grid-gap: 35px;
            grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
            margin-top: 35px;
            padding: 0;
        }

        &__link-to-cart {
            position: absolute;
            top: 0;
            right: 5px;
            color: #000;
            padding: 10px;
            border: 1px solid sandybrown;
        }
    }
</style>
