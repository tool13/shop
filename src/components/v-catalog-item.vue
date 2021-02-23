<template>
    <div class="v-catalog-item">
        <p>{{title}}</p>
        <p>Price: 100</p>
        <button>add to card</button>
    </div>
</template>

<script>
    export default {
        name: 'v-catalog-item',
        components: {},
        props: {},
        data() {
            return {
                title: 'catalog-item'
            };
        },
        computed: {}
    }
</script>

<style>

</style>