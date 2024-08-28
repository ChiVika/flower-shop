<template>
    <div class="PP" v-if="active">
        <div class="PP__container">
            <div class="PP__block1">
                <div class="PP__block2">
                    <button class="PP__close" @click="close">
                        <img src="@/assets/svg/Close.svg" alt="close" class="PP__img-close">
                    </button>
                    <div class="PP1__picture">
                        <img v-if="product" :src="product.image" alt="product" class="PP1__img">
                    </div>
                    <div class="PP1__title" v-if="product">{{ product.title }}</div>
                    <div class="PP1__descr" v-if="product">{{ product.descr }}</div>
                    <div class="PP1__old" v-if="product?.old">{{ product.old }} р</div>
                    <div class="PP1__forUser">
                        <div class="PP1__price" v-if="product">{{ product.price }} р</div>
                        <button class="PP1__btn" @click="addToBasket(product)">В корзину</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { useSaleCard } from '@/stores/SaleStore';
import { computed } from 'vue';
import { useBasketStore } from '@/stores/BasketStore';
export default{
    data() {
        return {
        };
    },
    props: {
        active: {
            type: Boolean,
            default: false
        },
        productId: {
            type: Number,
            required: true
        }
    },
    setup(props){
        const useSale = useSaleCard();
        const product = computed(() => {
            console.log(props.productId);
            return useSale.sales.find(sale => sale.id === props.productId);
        });
        return{
            product,
        }
    },
    methods:{
        close() {
			this.$emit('close');
		},
        addToBasket(product) {
            const basketStore = useBasketStore();
            basketStore.addItem(product);
            this.close();

            console.log("Все окей");
            console.log(basketStore.items);
        },
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

        
        &__container{
            position: relative;
            display: flex;
            justify-content: center;

        }
        &__block1{
            position: absolute;
            display: flex;
            flex-direction: column;

            width: 521px;
            height: auto;
            background-color: #fff;
            top: 50px;   
            background-color: $light-pink; 
       
        }
        &__block2{
            display: flex;
            flex-direction: column;
            width: 456px;
            height: 100%;
            margin: 20px auto 0;
            
        }
        &__close{
            display: flex;
            margin-bottom: 20px;
            margin-left: auto;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }
    .PP1{
        &__picture{
            margin: 0 auto 16px;
            height: 202px;
        }
        &__img{
            height: 202px;
        }
        &__title{
            font-size: 35px;
            color:$brown;
            margin-bottom: 5px;
        }
        &__descr{
            font-size: 20px;
            margin-bottom: 100px;
        }
        &__btn{
            @include btn;
        }
        &__forUser{
            display: flex;
            margin-bottom: 10px;
        }
        &__old{
            font-size: 25px;
            margin-bottom: 25px;
            text-decoration: line-through;
            color: $brown;
        }
        &__price{
            font-size: 30px;
            margin-bottom: 25px;
            color: $brown;
        }
        &__btn{
            margin-left: auto;
            width: 198px;
            height: 44px;
            font-size: 20px;
            cursor: pointer;
        }
        
    }
</style>