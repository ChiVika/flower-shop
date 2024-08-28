<template>
    <div class="basket__mains">
        <h3 class="basket__title" v-if="LeightCard > 0 & isBasketPage">Корзина</h3>
        <h3 class="basket__title" v-if="LeightCard > 0 & !isBasketPage">Оформление заказа</h3>
        <div class="basket__container">
            <div class="basket__empty" v-if="LeightCard <= 0">Корзина пуста</div>
            <div class="baket__items">
                <div class="basket__item" v-for="(item, index) in basketItem" :key="index">
                    <div class="basket-item__picture">
                        <img :src="item.image" alt="img" class="basket-item__img">
                    </div>
                    <div class="basket__data">
                    <div class="basket-item__close">
                        <button class="basket-item__btn" @click="deliteCard(index)">
                        <Close/>
                    </button>
                    </div>
                    <h3 class="basket-item__title">{{ item.title }}</h3>
                    <p class="basket-item__price" >{{ item.price }} р</p>
                    </div>
                </div>
                </div>
                <div class="basket__total-info basket__total-info--sticky" v-if="LeightCard > 0">
                    <div class="basket__total1">
                        <div class="basket__total-cnt">Количество товара</div>
                        <div class="basket__cnt-data">{{ LeightCard }} шт</div>
                    </div>
                    <div class="basket__total2">
                        <div class="basket__total-cnt2">Итого</div>
                        <div class="basket__cnt-data2">{{ TotalPrice }} р</div>
                    </div>
                    <button class="basket__create-order" v-if="isBasketPage">
                      <RouterLink to="/order" class="basket__btn">Перейти к оформлению заказа</RouterLink>
                    </button>
                </div>
            </div>
            
        </div>


</template>

<script>
import { useBasketStore } from '@/stores/BasketStore';
import { computed } from 'vue';
import Close from "@/assets/svg/Close.vue";
import { RouterLink, useRoute } from 'vue-router';
import PageFooter from './PageFooter.vue';


export default {
    name: 'PageBasket',
    components:{
      Close,
      PageFooter
    },
    setup(){
      const BasketStore = useBasketStore();
      const basketItem = computed(() => {
        return BasketStore.getAllItems;
      })
      const deliteCard = (index) => {
        BasketStore.deliteItem(index);
        console.log("удаление:", index);
      };
      const isBasketPage = computed(() => {
            const route = useRoute();
            console.log("Работает", route.path);
            return route.path === '/basket';
            
      });
      return{
        basketItem,
        deliteCard,
        isBasketPage
      }
  },
  methods:{
  },
  computed:{
    TotalPrice(){
        let result = 0;
        this.basketItem.forEach(item => {
            result += item.price;
        })
        return result;
    },
    LeightCard(){
        return this.basketItem.length;
    }

  }

}
</script>

<style lang="scss">
  .basket{
    &__mains{
      margin-bottom: 130px;
    }
    &__container{
      @include container;
      position: relative;
      display: flex;
      
    }
    &__empty{
        margin-top: 400px;
        margin-left: auto;
        margin-right: auto;
        font-size: 45px;
        color: $brown;
        position: sticky;
        margin-bottom: 300px;
    }
    &__title{
      @include title1;
      text-align: start;
    }
    &__item{
      display: flex;
      background-color: $hover-pink;
      margin-bottom: 13px;
      min-height: 140px;
      width: 535px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    }
    &__items{
        display: block;
    }
    &__data{
      width: 275px;
    }
    &__total-info{
        width: 342px;
        height: 110px;
        background-color: white;
        margin-left: auto;
        &--sticky{
            position: sticky;
            top: 300px;
        }
    }
    &__total1{
        display: flex;
        font-size: 16px;
        color: $brown;
        font-weight: 600;
        margin-top: 15px;
        margin-left: 9px;
    }
    &__total2{
        display: flex;
        font-size: 25px;
        color: $brown;
        margin-top: 28px;
        margin-left: 9px;
        margin-bottom: 16px;
    }
    &__create-order{
        @include btn;
        width: 352px;
        margin-top: 30px;
    
    }
    &__cnt-data{
        margin-left: auto;
        margin-right: 17px;
    }
    &__cnt-data2{
        margin-left: auto;
        margin-right: 17px;
        color: $malina;
    }
    &__btn{
        text-decoration: none;
        color: white;
    }
  }
  .basket-item{
    &__picture{
      display: flex;
      width: 234px;
      height: 140px;
      align-items: center;
    }
    &__img{
      width: 103px;
      height: 103px;
      margin-left: 33px;
    }
    &__title{
      font-size: 20px;
      color: $brown;
      margin-top: 11px;
      margin-bottom: 25px;
      font-weight: 400;
      // &::after{
      //   content: "";
      //   display: block;
      //   width: 275px;
      //   height: 1px;
      //   background-color: #AE7F7F;
      // }
    }
    &__btn{
      background-color: transparent;
      border: none;
      margin-top: 14px;
      cursor: pointer;
      padding: 0;
      
    }
    &__close{
      text-align: end;
    }
    &__price{
        display: flex;
        justify-content: end;
        font-size: 14px;
        font-weight: 600;
        color: $brown;
    }
    
  }

</style>