<template>
    <div class="blocks">
        <div class="blocks__container">
            <div class="blocks__info">
                <h2 class="blocks__title">Изучение препроцессинга</h2>
                <p class="blocks__desc">Описание</p>
                <button class="blocks__btn">Изучить быстрее</button>
                <button class="blocks__btn1">Изучить быстрее</button>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
.blocks{
    width: 100%;
    margin-top: 97px;
    margin-bottom: 100px;
    &__title{
        font-size: 65px;
        color: $brown;
        margin-top: 194px;
        font-weight: 500;
        margin-bottom: 35px;
    }
    &__desc{
        font-size: 30px;
        color: $brown;
        max-width: 469px;
    }
    &__btn{
        @include btn;
    }
    &__btn1{
        @include btn1(#006400,#90EE90);
    }
}
</style>

