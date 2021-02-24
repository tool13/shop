<template>
    <div class="v-catalog">
        <h1 class="v-catalog__title">{{title}}</h1>
        <ul class="v-catalog__list">
            <v-catalog-item 
                v-for="product in products"
                :key="product.article"
                v-bind:product_data="product"
                @sendArticle="showChildArticle"
            />
        </ul>
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
                title: 'catalog',
                products: [
                    {
                        image: "1.jpg",
                        name: "T-shirt 1",
                        price: 2100.234234234,
                        article: "T1",
                        available: true,
                        category: "Мужские"
                    },
                    {
                        image: "2.jpg",
                        name: "T-shirt 2",
                        price: 3150.12312412,
                        article: "T2",
                        available: true,
                        category: "Женские"
                    },
                ]
            };
        },
        methods: {
            showChildArticle(data) {
                console.log(data);
            }
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
            margin-top: 35px;
            display: grid;
            grid-gap: 35px; 
            grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
        }
    }
</style>