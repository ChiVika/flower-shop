<template>
    <div class="PP" v-if="active" @click.self="close">
        <div class="PP__container">
            <div class="PP__block1">
                <div class="PP__block2">
                    <button class="PP__close" @click="close">
                        <img src="@/assets/svg/Close.svg" alt="close" class="PP__img-close">
                    </button>
                    <div class="PP__title">Вход</div>
                    <div class="PP__item" v-if="!SendCode">
                        <input type="tel" class="PP__tel" v-model="phoneNumber" v-mask="'+7 (###) ###-##-##'">
                    </div>
                    <div class="PP__item2" v-if="SendCode">
                        <div class="PP__rects">
                            <input type="text" class="PP__code">
                        </div>
                        <div class="PP__rects">
                            <input type="text" class="PP__code">
                        </div>
                        <div class="PP__rects">
                            <input type="text" class="PP__code">
                        </div>
                        <div class="PP__rects">
                            <input type="text" class="PP__code">
                        </div>
                    </div>
                    <button class="PP__btn" @click="SendCodes" v-if="!SendCode">Отправить код</button>
                    <button class="PP__btn" v-if="SendCode">Войти</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default{
    data() {
        return {
            SendCode: false,
        };
    },
    props: {
        active: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        close() {
			this.$emit('close');
		},
        SendCodes(){
            this.SendCode = true;
        }
    }

}

</script>

<style lang="scss">
    .PP{   
        position: fixed;
        top: 0px;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.5);
        overflow-y: scroll;
        
        &__container{
            position: relative;
            display: flex;
            justify-content: center;

        }
        &__block1{
            position: absolute;
            display: flex;
            // justify-content: center;
            flex-direction: column;

            width: 521px;
            height: 637px;
            background-color: #fff;
            top: 50px;            
        }
        &__block2{
            width: 365px;
            height: 100%;
            margin: 45px auto 0;
            
        }
        &__close{
            display: flex;
            margin-bottom: 69px;
            margin-left: auto;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
        &__title{
            @include title;
            font-size: 25px;
            margin-top: 0;
            margin-bottom: 99px;
        }
        &__item{
            margin-top: 0px;
            margin-bottom: 53px;
            font-weight: 400;
            &::after{
                content: "";
                display: block;
                width: 100%;
                height: 1px;
                background-color: #AE7F7F;
            }
        }
        &__tel{
            width: 100%;
            font-size: 20px;
            color: $brown;
            border: none;
            background-color: transparent;
            outline: none;
        }
        &__btn{
            @include btn;
            display: flex;
            margin: 0 auto;
            justify-content: center;
            width: 187px;
        }
        &__item2{
            display: flex;
            justify-content: center;
            gap:34px;
            margin-bottom: 54px;
        }
        &__rects{
            width: 50px;
            height: 50px;
            // border: 1px solid $brown;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);

        }
        &__code{
            width: 50px;
            height: 50px;
            padding: 0;
            text-align: center;
            border: none;
            outline: none;
            
        }
    }
</style>