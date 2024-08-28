<template>
    <div class="Modal" v-if="shows" >
        <p class="Modal__text" > {{ message }}</p>
        <button class="Modal__button" @click="hide">Закрыть</button>
    </div>
</template>

<script>
    export default{
        data() {
            return {
            message: '',
            shows: false,
        }
    },
    methods: {
        shows(message) {
            this.message = message
            this.shows = true
        },
        hide() {
            this.shows = false
        },
    },
}
</script>

<style lang="scss">

</style>