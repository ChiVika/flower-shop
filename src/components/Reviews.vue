<template>
    <h3 class="rew__title" v-if="!isREviewsPage">Отзывы</h3>
    <h3 class="rew__title1" v-if="isREviewsPage">Отзывы</h3>
    <div class="rew__block">
        <div class="rew__content">
            <div class="rew__items" v-for="item in items" :key="item.id">
                <h3 class="rew__item-username">{{ item.username }}</h3>
                <div class="rew__item-container-stars" >
                    <Star v-for="i in CountStars(item.stars)" :key="i"/>
                </div>
                <p class="rew__item-text">
                    {{ item.review }}
                </p>
                <div class="rew__answer" v-if="item.answer">
                    <h3 class="rew__answer-title">Ответ от MagicFlo</h3>
                    <p class="rew__item-answer">{{ item.textAnswer }}</p>
                </div>
                
            </div>
        </div>
        <button class="rew__more" @click="ShowMore" v-if="allReviewsLength > items.length">
            <RouterLink class="rew__more" to="review">Смотреть больше</RouterLink>
        </button>
    </div>
</template>

<script>
import Star from "@/assets/svg/Star.vue";
import {useReviewsStore} from "@/stores/ReviewsStore";
import { computed,ref } from "vue";
import {useRoute } from 'vue-router';
export default{
    components:{
        Star,

    },
    data(){
        return{
            
        }
    },
    props:{
        AllReviews: {
            type: Boolean,
            default: false
        }
    },

    setup(props){
        const rew = useReviewsStore();
        let showCount = ref(5);
        const items = computed(() =>{
            if (props.AllReviews){
                return rew.getShow.slice(0,showCount.value);
            }
            else{
                return rew.getTwoReviews;
            }
        });
        const isREviewsPage = computed(() => {
            const route = useRoute();
            console.log("Работает", route.path);
            return route.path === '/review';
        });
        function ShowMore(){
            showCount.value += 5;
            console.log(showCount.value);
            return showCount.value;

        };
        const allReviewsLength = computed(() => {
            return rew.getAllReviews.length;
        });
        return{
            items,
            isREviewsPage,
            ShowMore,
            allReviewsLength
        };
    },
    methods:{
        CountStars(number){
           return number;
        },
    },
    computed:{

    }
}
</script>

<style lang="scss"> 
.rew{
    &__title{
        @include title;
    }
    &__answer{
        width: 998px;
        background-color: #fff;
        height: auto;
    }
    &__answer-title{
        color: $malina;
        font-size: 20px;
    }
    &__item-answer{
        padding-bottom: 20px;
        font-size: 20px;
        color: $brown;
    }
    &__title1{
        @include title1;
    }
    &__block{
        margin-bottom: 100px;
    }
    &__item-username{
        font-size: 20px;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 15px;
    }
    &__item-text{
        font-size: 20px;
        color: $brown;
        line-height: 150%;
        margin-bottom: 35px;
    }
    &__item-container-stars{
        margin-bottom: 17px;
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
        text-decoration: none;

    }
}

</style>