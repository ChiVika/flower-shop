<template>
    <h3 class="story__title">История заказов</h3>
    <div class="story__block">
        <div class="story__items" v-for="item in items">
            <div class="story__data">{{ item.data }}</div>
            <div class="story__content">{{ item.order }}</div>
            <div class="story__price">{{ item.price }}</div>
        </div>
    </div>

</template>
<script>
import  {useStoryStore} from "@/stores/StoryStore";
import { computed,ref } from "vue";
export default{
    components: {

    },
    setup(){
        const Stor = useStoryStore();
        const items = computed(()=>{
            return Stor.getAllStory;
        });
        return{
            Stor,
            items,
        }

    }
}

</script>


<style lang="scss">
    .story{
        &__title{
            @include title;
            font-size: 20px;
            text-align: left;
            margin-top: 30px;
        }
        &__items{
            width: 860px;
            display: flex;
            margin-bottom: 64px;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                display: block;
                width: 860px;
                height: 1px;
                background-color: #AE7F7F;
                bottom: 0;
            }
        }
        &__block{
            margin-bottom: 100px;
        }
        &__data{
            margin-right: 85px;
            font-size: 20px;
            color: $brown;
        }
        &__content{
            font-size: 20px;
            color: $brown;
        }
        &__price{
            display: flex;
            margin-left: auto;
            font-size: 20px;
            color: $brown;

        }
    
    }
</style>