<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" v-bind:src="require('../../assets/images/' + cart_item_data.image)" alt="">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price | toFix | formatPrice}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">
            <p>Qty</p>
            <p>
                <button class="v-cart-item__quantity-btn" type="bitton" @click="decrementItem">-</button>
                <span>{{cart_item_data.quantity}}</span>
                <button class="v-cart-item__quantity-btn" type="bitton" @click="incrementItem">+</button>
            </p>
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
    import toFix from '../filters/toFix';
    import formatPrice from '../filters/priceFormat';

    export default {
        name: 'v-cart-item',
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return [];
                }
            }
        },
        filters: {
            toFix,
            formatPrice
        },
        methods: {
            decrementItem() {
                if (this.cart_item_data.quantity > 1) {
                    this.cart_item_data.quantity--;
                }
            },
            incrementItem() {
                this.cart_item_data.quantity++;
            },
            deleteFromCart() {
                this.$emit('deleteFromCart');
            }
        },
    }
</script>

<style lang="scss">
    .v-cart-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        padding: 15px;
        box-shadow: 0 0 10px 0 rgba(61, 61, 61, 0.65);

        &__image {
            max-height: 100px;
        }

        &__quantity-btn {
            margin: 0 5px;
            padding: 0 5px;
        }
    }
</style>
