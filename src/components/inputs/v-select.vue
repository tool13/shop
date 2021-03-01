<template>
    <div class="v-select">
        <p class="v-select__title"
           @click="areOptionsVisible = !areOptionsVisible"
        >{{ selected }}
        </p>
        <div class="v-select__options"
             v-if="areOptionsVisible || isExpanded"
        >
            <p class="v-select__option"
                v-for="option in options"
                :key="option.value"
               @click="selectOption(option)"
            >
                {{option.name}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'v-select',
        props: {
            options: {
                type: Array,
                default() {
                    return [];
                }
            },
            selected: {
                type: String,
                default() {
                    return '';
                }
            },
            isExpanded: {
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
        data() {
            return {
                areOptionsVisible: false
            }
        },
        methods: {
            selectOption(option) {
                this.$emit('select', option)
            },
            hideSelect() {
                this.areOptionsVisible = false;
            }
        },
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true);
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hideSelect.bind(this), true);
        }
    }
</script>

<style lang="scss">
    .v-select {
        position: relative;
        width: 225px;

        &__title {
            padding: 5px 10px;
            border: 1px solid sandybrown;
            cursor: pointer;
        }

        &__options {
            position: absolute;
            top: 30px;
            left: 0;
            box-sizing: border-box;
            width: 100%;
            border: 1px solid sandybrown;
            background-color: #fff;
        }

        &__option {
            margin: 0;
            padding:  5px 10px;
            cursor: pointer;

            &:hover {
                background-color: lightgray;
            }
        }
    }
</style>
