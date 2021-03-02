<template>
    <div class="v-catalog-item">
        <v-popup
            v-if="isInfoPopupVisible"
            addBtnTitle="Add to cart"
            v-bind:popupTitle="product_data.name"
            @closePopup="closeInfoPopup"
            @addBtnAction="addToCart"
        >
            <img class="v-catalog-item__image" v-bind:src="require('../../assets/images/' + product_data.image)" alt="">
            <div>
                <p class="v-catalog-item__price">Price: <b>{{product_data.price}}</b> P</p>
                <p class="v-catalog-item__price">{{product_data.category}}</p>
            </div>
        </v-popup>
        <img class="v-catalog-item__image" v-bind:src="require('../../assets/images/' + product_data.image)" alt="">
        <h3 class="v-catalog-item__name">{{product_data.name}}</h3>
        <p class="v-catalog-item__price">Price: <b>{{product_data.price}}</b> P</p>
        <button type="button" class="v-catalog-item__show btn" @click="showPopupInfo">show info</button>
        <button type="button" class="v-catalog-item__add btn" @click="addToCart">add to card</button>
    </div>
</template>

<script>
    import vPopup from '../popup/v-popup'

    export default {
        name: 'v-catalog-item',
        components: {
            vPopup
        },
        props: {
            product_data: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                isInfoPopupVisible: false
            }
        },
        methods: {
            showPopupInfo() {
                this.isInfoPopupVisible = true;
            },
            closeInfoPopup() {
                this.isInfoPopupVisible = false;
            },
            addToCart() {
                this.$emit('addToCart', this.product_data);
            }
        },
        mounted() {
            this.$set(this.product_data, 'quantity', 1);
        }
    }
</script>

<style lang="scss">
    .v-catalog-item {
        padding: 25px 15px;
        border-radius: 8px;
        box-shadow: 0 0 10px 0 rgba(61, 61, 61, 0.65);

        &__image {
            max-height: 150px;
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
