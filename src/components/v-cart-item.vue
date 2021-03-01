<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" v-bind:src="require('../assets/images/' + cart_item_data.image)" alt="">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">
            <p>Qty</p>
            {{cart_item_data.quantity}}
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
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
        methods: {
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
    }
</style>
