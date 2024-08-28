<template>
    <div class="main">
        <!-- <Cards2/> -->
        <h1 class="card2__title" style="margin-top: 200px;">{{ id }}</h1>
        <div class="card2__container">
            <div class="card2__item" v-for="product in products" :key="product.id" >
                <div class="card2__content" @click="clickEnter(product.id)">
                    <div class="card2-item__picture">
                        <img :src="product.image" alt="dd" class="card-item__img">
                    </div>
                    <h3 class="card2-item__title">{{ product.title }}</h3>
                    <!-- <button class="card-item__more" >Читать подробнее</button> -->
                    <p class="card-item__old" v-if="product.old !== null">{{ product.old }} р</p>
                    
                </div>
                <div class="card2-item__forUser" v-if="product.old !== null">
                        <p class="card2-item__price">{{ product.price }} р</p>
                        <button class="card-item__btn" @click="addToBasket(product)">В корзину</button>
                    </div>
                <div class="card2-item__forUser card-item__forUser--mt30" v-if="product.old === null">
                    <p class="card2-item__price">{{ product.price }} р</p>
                    <button class="card2-item__btn" @click="addToBasket(product)">В корзину</button>
                </div>
            </div>
        </div>
        <button class="card2__go-to">
            <RouterLink to="/shop" class="card__button-catalog">Перейти к каталогу</RouterLink>
        </button>
    </div>
    <PP v-if="active" @close="closeModal" :active="active" :product-id="productId"/>
    
</template>

<script>
import PP from "@/components/PP-more-info.vue";
import { useBasketStore } from '@/stores/BasketStore';
import { useSaleCard } from '@/stores/SaleStore';
import { computed, ref} from 'vue';
import { RouterLink, useRoute } from 'vue-router';
export default{
    components:{
        PP,
    },
    data(){
        return{
            active: false,
            productId: 0,
        }
    },

    setup() {
        const route = useRoute();
        const id = route.params.id;
        const id2 = route.params.id2;
        const id2Num = Number(id2);

        const saleStore = useSaleCard();
        const products = computed(() => {
            if (id2) {
                console.log(id2);
                
                console.log(id2Num);
                return saleStore.getFilterCategory(id2Num);
            } else {
                console.log("Неудача");
                return [];
            }
        });

        return{
            id,
            id2,
            id2Num,
            products,
            saleStore
        }
    },
    methods: {
        addToBasket(product) {
            const basketStore = useBasketStore();
            basketStore.addItem(product);

            console.log("Все окей");
            console.log(basketStore.items);
        },
        clickEnter(id){
            this.productId = id;
            this.active = true;
        },
        closeModal() {
			this.active = false;
		},
  },
    
}
</script>

<style lang="scss">
.card2{
    &__container{
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
    }
    &__item{
        background-color: $light-pink;
        min-width: 238px;
        margin-bottom: 20px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        &:hover{
            background-color: $hover-pink;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.50);
        }
        &:active{
            background-color: $hover-pink;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.50);
        }
    }
    &__title{
        @include title;
    }
    &__title1{
        @include title1;
    }
    &__button-catalog{
        color: white;
        text-decoration: none;
    }
    &__go-to{
        @include btn;
        display: flex;
        margin: 45px auto 100px;
        width: 228px;
        justify-content: center;
    }

    &__more{
        display: flex;
        margin-left: auto;
        border: none;
        background-color: transparent;
        color: $brown;
        font-family: $font;
        font-size: 20px;
        margin-top: 48px;
        cursor: pointer;
    }
}
.card2-item{

    &__img{
        margin: 0 auto;
        max-width: 160px;
        
    }
    &__picture{
        display: flex;
        height: 138px;
        margin-top: 5px;
    }
    &__title{
        font-size: 16px;
        color: $brown;
        margin-top: 14px;
        margin-bottom: 7px;
        margin-left: 10px;
        max-width: 230px;
    }
    &__more{
        margin-left: 10px;
        color: $malina;
        text-decoration: none;
        font-size: 16px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    &__forUser{
        display: flex;
        &--mt30{
            margin-top: 50px;
        }
    }
    &__old{
        margin-top: 30px;
        margin-left: 27px;
        font-size: 14px;
        font-family: $font;
        margin-bottom: 0;
        text-decoration: line-through;
        color: $brown;
        font-weight: 400;
    }
    &__price{
        margin-top: 5px;
        font-size: 16px;
        color: $red;
        font-weight: 700;
        width: 65px;
        text-align: end;
        font-family: $font;

    }
    &__btn{
        max-width: 117px;
        width: 100%;
        height: 31px;
        border: none;
        font-size: 12px;
        border-radius: 25px;
        background-color: $malina;
        color: #ffffff;
        cursor: pointer;
        margin-left: auto;
        margin-right: 15px;
        margin-bottom: 18px;
        &:hover{
            @media (hover: hover) {
                background-color: $hover-malina;
                color: white;
            }
        }
        &:active{
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.25); /* Меняем тень при нажатии */
            transform: translateY(5px);
        }
    }
    

}
</style>