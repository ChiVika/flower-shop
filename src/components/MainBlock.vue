<template>
    <div class="main-block">
        <div class="main-block__container">
                <div class="main-block__info">
                    <h2 class="main-block__title">MagicFlo</h2>
                    <p class="main-block__desc">Пусть каждый день приносит радость</p>
                    <RouterLink to="/shop">
                        <button class="main-block__btn">Перейти к каталогу</button>
                    </RouterLink>
                </div>
                <div class="main-block__picture">
                    <img class="main-block__fon" src="@/assets/svg/fon.svg" alt="main-fon"/>
                    <img src="@/assets/svg/women.svg" alt="women" class="main-block__img">
                </div>
        </div>
        
    </div>

</template>

<script>


</script>

<style lang="scss">
.main-block{
    width: 100%;
    margin-top: 97px;
    &__container{
        display: flex;
        position: relative;
    }
    &__title{
        font-size: 65px;
        color: #6F5252;
        margin-top: 194px;
        font-weight: 500;
        margin-bottom: 35px;
    }
    &__desc{
        font-size: 30px;
        color: #6F5252;
        max-width: 469px;
    }
    &__btn{
        background-color: #FF4085;
        padding: 15px 35px;
        font-size: 16px;
        border: none;
        border-radius: 25px;
        color: #fff;
        margin-left: 220px;
        cursor: pointer;
        transition: background-color 0.4s;
        &:hover{
            @media (hover: hover) {
                background-color: $hover-malina;
                color: white;
            }
        }
    }
    &__picture{
        max-width: 461px;
        margin-left: auto;
        z-index: 1;
    }
    &__img{
        position: absolute;
        right: 100px;
        top: 110px;
    }
}


</style>