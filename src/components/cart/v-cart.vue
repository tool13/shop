<template>
    <div class="v-cart">
        <h1 class="v-cart__title">Cart</h1>
        <router-link :to="{name: 'catalog'}">
            <span class="v-cart__link-to-catalog">Back to catalog</span>
        </router-link>
        <p v-if="!cart_data.length">There are no products</p>
        <v-cart-item
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
        />
        <div class="v-cart__total">
            <p>Total: <b>{{calcTotalCost}}</b> Р.</p>
        </div>
    </div>
</template>

<script>
    import vCartItem from './v-cart-item';
    import {mapActions} from 'vuex';

    export default {
        name: 'v-cart',
        components: {
            vCartItem
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        computed: {
            calcTotalCost() {
                let result = 0;
                this.cart_data.forEach(item => {
                    result = result + item.price * item.quantity;
                });
                return result;
            }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART'
            ]),
            deleteFromCart(index) {
                 this.DELETE_FROM_CART(index);
            }
        }
    }
</script>

<style lang="scss">
    .v-cart {
        display: grid;
        grid-gap: 15px;
        margin-top: 10px;
        margin-bottom: 110px;

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

        &__link-to-catalog {
             position: absolute;
             top: 0;
             right: 5px;
             color: #000;
             padding: 10px;
             border: 1px solid sandybrown;
         }

        &__total {
            position: fixed;
            bottom: 10px;
            right: 0;
            width: 100%;
            padding: 15px 10px;
            font-size: 20px;
            color: #fff;
            background-color: sandybrown;
        }
    }
</style>
