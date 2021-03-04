<template>
    <div class="v-main-page">
        <h1 class="v-main-page__title">Online-shop</h1>
        <p>
            <router-link v-bind:to="{name: 'catalog'}">to catalog</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'v-main-page'
}
</script>

<style lang="scss">
    .v-main-page {
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
    }
</style>
