<template>
    <div class="v-header">
        <router-link v-bind:to="{name: 'mainPage'}">
            <img class="v-header__logo" v-bind:src="require('../../assets/images/logo.jpg')" width="80" height="80" alt="">
        </router-link>
        <div class="v-header__search">
            <input
                type="text"
                class="v-header__search-field"
                v-model="searchValue"
            >
            <button class="v-header__search-btn" @click="search(searchValue)">
                <i class="material-icons">search</i>
            </button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'v-header',
    data() {
        return {
            searchValue: ''
        };
    },
    methods: {
        ...mapActions([
            'GET_SEARCH_VALUE'
        ]),
        search(value) {
            this.GET_SEARCH_VALUE(value);
            this.$router.push('/catalog');
        }
    },
    computed: {
        ...mapGetters([
            'SEARCH_VALUE'
        ])
    }
}
</script>

<style lang="scss">
    .v-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;

        &__search {
            display: flex;
        }

        &__search-field {
            margin-right: 10px;
            padding: 5px 10px;
            border: none;
            color: #fff;
            border-radius: 8px;
            background-color: sandybrown;
        }

        &__search-btn {
            border: none;
            border-radius: 8px;
            background-color: sandybrown;
        }
    }
</style>
