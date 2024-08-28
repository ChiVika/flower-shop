<template>
    <h3 class="catalog__title">Каталог</h3>
    <div class="catalog__block">
        <RouterLink to="shop" class="catalog__item">
            <div class="catalog__item-title">Букеты</div>
            <img src="@/assets/svg/buket-link1.svg" alt="catalog-section" class="catalog__img">
        </RouterLink>
        <RouterLink  to="shop" class="catalog__item" >
            <div class="catalog__item-title">Цветы</div>
            <img src="@/assets/jpg/buket1-cat6.png" alt="catalog-section" class="catalog__img">
        </RouterLink>
        <RouterLink  to="shop" class="catalog__item" >
            <div class="catalog__item-title">Композиции из цветов</div>
            <img src="@/assets/jpg/buket2-cat10.png" alt="catalog-section" class="catalog__img">
        </RouterLink>
        <RouterLink  to="shop" class="catalog__item">
            <div class="catalog__item-title">Дополнения к цветам</div>
            <img src="@/assets/jpg/mishka2.png" alt="catalog-section" class="catalog__img">
        </RouterLink>
    </div>

</template>

<script>

export default{


}

</script>

<style lang="scss">
.catalog{
    &__title{
        @include title;
        
    }
    &__block{
        @include link-catalog-block;
    }
    &__item{
        @include link-catalog-item;
        text-decoration: none;
        cursor: pointer;
        &:nth-child(2n){
            margin-top: 90px;
        }
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
        &:hover{
            background-color: $hover-pink;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.50);
        }
        
    }
    &__item-title{
        margin-top: 9px;
        margin-bottom: 7px;
        font-size: 16px;
        text-decoration: none;
        color: $brown;
        
    }
    &__img{
        width: 170px;
        height: 170px;
    }
}

</style>
