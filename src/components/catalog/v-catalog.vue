<template>
    <div class="v-catalog">
        <h1 class="v-catalog__title">{{title}}</h1>
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <span class="v-catalog__link-to-cart">Cart: {{CART.length}}</span>
        </router-link>
        <div class="v-catalog__filters">
            <v-select
                v-bind:options="filters"
                v-bind:selected="selected"
                @select="sortByFilter"
                v-bind:isExpanded="IS_DESKTOP"
            />
            <div class="range-slider">
                <input
                    type="range"
                    min="0"
                    max="10000"
                    step="10"
                    v-model.number="minPrice"
                    @change="setRangeSliders"
                >
                <input
                    type="range"
                    min="0"
                    max="10000"
                    step="10"
                    v-model.number="maxPrice"
                    @change="setRangeSliders"
                >
            </div>
            <div class="range-values">
                <p>min: {{minPrice}}</p>
                <p>max: {{maxPrice}}</p>
            </div>
        </div>
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
                'CART',
                'IS_MOBILE',
                'IS_DESKTOP'
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
                selected: 'Все',
                sortedProducts: [],
                minPrice: 0,
                maxPrice: 10000
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
                let vm = this;
                this.sortedProducts = [...this.PRODUCTS];
                this.sortedProducts = this.sortedProducts.filter(item => {
                    return item.price >= vm.minPrice && item.price <= vm.maxPrice;
                });
                if (option) {
                    this.selected = option.name;
                    this.sortedProducts = this.sortedProducts.filter(item => {
                        return item.category === option.name;
                    });
                }
            },
            setRangeSliders() {
                if (this.minPrice > this.maxPrice) {
                    let tmp = this.maxPrice;
                    this.maxPrice = this.minPrice;
                    this.minPrice = tmp;
                }
                this.sortByFilter();
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API();
            this.sortByFilter();
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

        &__filters {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .range-slider {
        position: relative;
        width: 200px;
        margin: auto 16px;
        text-align: center;

        & input {
            position: absolute;
            bottom: 0;
            left: 0;

            &::-webkit-slider-thumb {
                position: relative;
                z-index: 2;
                top: 2px;
                margin-top: -5px;
            }
        }
    }

</style>
