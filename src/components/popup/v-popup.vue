<template>
    <div class="v-popup" ref="popup">
        <div class="v-popup__heading">
            <span>{{popupTitle}}</span>
            <span>
                <i class="material-icons" @click="closePopup">close</i>
            </span>
        </div>
        <div class="v-popup__content">
            <slot></slot>
        </div>
        <div class="v-popup__footer">
            <button class="v-popup__add-to-cart btn" @click="addBtnAction">{{addBtnTitle}}</button>
            <button class="v-popup__close" @click="closePopup">Close modal</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-popup',
    methods: {
        addBtnAction() {
            this.$emit('addBtnAction')
        },
        closePopup() {
            this.$emit('closePopup');
        }
    },
    props: {
        popupTitle: {
            type: String,
            default() {
                return '';
            }
        },
        addBtnTitle: {
            type: String,
            default() {
                return '';
            }
        }
    },
    mounted() {
        document.addEventListener('click', (item) => {
            if (!item.composedPath().includes(this.$refs['popup'])) {
                this.closePopup();
            }
        }, {capture:true});
    }
}
</script>

<style lang="scss">
    .v-popup {
        position: fixed;
        z-index: 3;
        top: 50px;
        left: 0;
        right: 0;
        width: 400px;
        margin: 0 auto;
        padding: 16px;
        box-shadow: 0 0 17px 0 #e7e7e7;
        background-color: #fff;

        &__heading {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__content {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
