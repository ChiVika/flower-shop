<template>
    <div class="Categories">
        <div class="Categories__block-1" ref="flower1">
            <h3 class="Categories__title">Букеты</h3>
            <div class="Categories__items">
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Букеты с розами', id2: 1}}">
                    <div class="Categories__item-title">Букеты с розами</div>
                    <img src="@/assets/jpg/Cat1.svg" alt="Categories-section" class="Categories__img">
                </router-link>
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Букеты с хризантемами' , id2: 2} }">
                    <div class="Categories__item-title">Букеты с хризантемами</div>
                    <img src="@/assets/jpg/cat2.svg" alt="Categories-section" class="Categories__img">
                </router-link>
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Букеты с тюльпанами' , id2: 3} }">
                    <div class="Categories__item-title">Букеты с тюльпанами</div>
                    <img src="@/assets/jpg/cat3.svg" alt="Categories-section" class="Categories__img">
                </router-link>
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Букеты с лилиями' , id2: 4} }">
                    <div class="Categories__item-title">Букеты с лилиями</div>
                    <img src="@/assets/jpg/cat4.svg" alt="Categories-section" class="Categories__img">
                </router-link>
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Букеты с орхидеями' , id2: 5} }">
                    <div class="Categories__item-title">Букеты с орхидеями</div>
                    <img src="@/assets/jpg/cat5.svg" alt="Categories-section" class="Categories__img">
                </router-link>
            </div>
        </div>
        <div class="Categories__block-2">
            <h3 class="Categories__title" id="flower2">Цветы и монобукеты</h3>
            <div class="Categories__items">
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Розы' , id2: 6} }">
                    <div class="Categories__item-title">Розы</div>
                    <img src="@/assets/jpg/cat6.svg" alt="Categories-section" class="Categories__img">
                </router-link>
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Хризантемы' , id2: 7} }">
                    <div class="Categories__item-title">Хризантемы</div>
                    <img src="@/assets/jpg/cat7.svg" alt="Categories-section" class="Categories__img">
                </router-link>
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Лилии' , id2: 8} }">
                    <div class="Categories__item-title">Лилии</div>
                    <img src="@/assets/jpg/cat9.svg" alt="Categories-section" class="Categories__img">
                </router-link>
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Орхидеи' , id2: 9} }">
                    <div class="Categories__item-title">Орхидеи</div>
                    <img src="@/assets/jpg/cat10.svg" alt="Categories-section" class="Categories__img">
                </router-link>
            </div>
        </div>
        <div class="Categories__block-2">
            <h3 class="Categories__title" id="flower3">Композиции из цветов</h3>
            <div class="Categories__items">
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Сердца из цветов' , id2: 10} }">
                    <div class="Categories__item-title">Сердца из цветов</div>
                    <img src="@/assets/jpg/cat11.svg" alt="Categories-section" class="Categories__img">
                </router-link>
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Корзины с цветами' , id2: 11} }">
                    <div class="Categories__item-title">Корзины с цветами</div>
                    <img src="@/assets/jpg/cat12.svg" alt="Categories-section" class="Categories__img">
                </router-link>
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Шляпные коробки' , id2: 12} }">
                    <div class="Categories__item-title">Шляпные коробки</div>
                    <img src="@/assets/jpg/cat13.svg" alt="Categories-section" class="Categories__img">
                </router-link>
            </div>
        </div>
        <div class="Categories__block-2">
            <h3 class="Categories__title" id="flower4">Дополнения к цветам</h3>
            <div class="Categories__items">
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Искусственные цветы' , id2: 13} }">
                    <div class="Categories__item-title">Искусственные цветы</div>
                    <img src="@/assets/jpg/cat14.svg" alt="Categories-section" class="Categories__img">
                </router-link>
                <router-link class="Categories__section" :to="{ name: 'pages', params: { id: 'Подарки и сувениры' , id2: 14} }">
                    <div class="Categories__item-title">Подарки и сувениры</div>
                    <img src="@/assets/jpg/cat15.svg" alt="Categories-section" class="Categories__img">
                </router-link>
            </div>
        </div> 
        
    </div>
</template>

<script>
import { useSaleCard } from "@/stores/SaleStore";
import { computed, ref } from "vue";
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
        };
    },
  setup() {
    const route = useRoute();
    const saleStore = useSaleCard();
    const id = route.params.id;
    const id2 = route.params.id2;

    return {
        saleStore,
        id,
        id2
    };
  },
  methods: {

    },
};

</script>

<style lang="scss">
.Categories{
    &__block-1{
        margin-top: 200px;
        
    }
    &__block-2{
        margin-top: 100px;
        &:last-child{
            margin-bottom: 100px;
        }
    }
    &__title{
        @include title;
    }
    &__items{
        display: flex;
        @include link-catalog-block;
        
    }
    &__item-title{
        margin-top: 9px;
        margin-bottom: 7px;
        font-size: 16px;
        color: $brown;
        
        
        
    }
    &__section{
        @include link-catalog-item;
        justify-content: start;
        cursor: pointer;
        text-decoration: none;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
        &:hover{
            background-color: $hover-pink;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.50);
        }
    }
}
</style>