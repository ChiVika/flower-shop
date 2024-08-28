<template>
    <div class="main">
        <h3 class="order__title">Данные по заказу</h3>
        <div class="order__content">
            <div class="order__block1">
            <div class="order__content1">
                <input type="text" class="order__input" placeholder="Адрес">
            </div>
        </div>
        <div class="order__block2">
            <div class="order__content2">
                <input type="text" class="order__input2" placeholder="Подъезд">
            </div>
            <div class="order__content2">
                <input type="text" class="order__input2" placeholder="Квартира">
            </div>
        </div>
        <div class="order__block2">
            <div class="order__content2">
                <input type="text" class="order__input2" placeholder="Этаж">
            </div>
            <div class="order__content2">
                <input type="text" class="order__input2" placeholder="Домофон">
            </div>
        </div>
        <div class="order__block1 order__block1--el2">
            <div class="order__content1 order__content1--el2">
                <select class="order__input2 order__spisok">
                    <option value="">Выберите вариант</option>
                    <option value="option1">Наличными</option>
                    <option value="option2">Картой онлайн</option>
                    <option value="option3">Картой курьеру</option>
                </select>
            </div>
        </div>
        <button class="order__btn"> Оформить заказ</button>
        </div>
    </div>

</template>

<script>

</script>

<style lang="scss">
    .order{
        &__title{
            @include title;
            text-align: start;
        }
        &__btn{
            @include btn;
            display: flex;
            margin-left: 124px;
            width: 352px;
            text-align: center;
            justify-content: center;
        }
        &__block1{
            display: flex;
            &--el2{
                width: 601px;
                justify-content: center;
            }
        }
        &__content1{
            width: 601px;
            margin-bottom: 20px;
            border: 2px solid $brown;
            height: 53px;
            border-radius: 20px;
            &--el2{
                width: 313px;
            }
            
        }
        &__spisok{
            
        }
        &__content{
            margin-bottom: 100px;
        }
        &__input{
            display: flex;
            width: 580px;
            border: none;
            height: 39px;
            align-items: center;
            margin: 5px auto 0;
            border-radius: 20px;
            background-color: transparent;
            font-size: 16px;
            color: $brown;
            &--el2{
                width: 560px;
            }
            &:focus {
                outline: none;
            }
        }
        &__block2{
            display: flex;
            flex-direction: row;
            gap: 65px;
        }
        &__content2{
            width: 268px;
            margin-bottom: 20px;
            border: 2px solid $brown;
            height: 53px;
            border-radius: 20px;
        }
        &__input2{
            display: flex;
            width: 248px;
            border: none;
            height: 39px;
            align-items: center;
            margin: 5px auto 0;
            border-radius: 20px;
            background-color: transparent;
            font-size: 16px;
            color: $brown;
            &:focus {
                outline: none;
            }
        }
    }

</style>