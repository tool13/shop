<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item__image" v-bind:src="require('../assets/images/' + product_data.image)" alt="">
        <h3 class="v-catalog-item__name">{{product_data.name}}</h3>
        <p class="v-catalog-item__price">Price: <b>{{product_data.price}}</b> P</p>
        <button class="v-catalog-item__add btn" @click="sendDataToParent">add to card</button>
    </div>
</template>

<script>
    export default { 
        name: 'v-catalog-item',
        props: {
            product_data: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        methods: {
            sendDataToParent() {
                this.$emit('sendArticle', this.product_data.article);
            }
        }
    }
</script>

<style lang="scss">
    .v-catalog-item {
        padding: 25px 15px;
        border-radius: 8px;
        box-shadow: 0 0 10px 0 rgba(61, 61, 61, 0.65);

        &__image {
            max-height: 200px;
        }

        &__name {
            margin: 20px 0 0;
            color: tomato;
        }

        &__price {
            margin: 10px 0 0;
        }

        &__add {
            margin-top: 30px;
        }
    }
</style>