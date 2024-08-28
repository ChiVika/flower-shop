<template>
    <footer class="page-footer">
        <div class="page-footer__container">
            <div class="page-footer__block1">
            <p class="page-footer__contact-info">Контактная информация</p>
            <a  href="tel:/+79528867911/" class="page-footer__phone">+7(952)-886-79-11</a>
            <a href="mailto:animevita03@mail.ru" class="page-footer__mail">animevita03@mail.ru</a>
        </div>
        <div class="page-footer__block2">
            <RouterLink to="/sales" class="page-footer__link">Акции</RouterLink>
            <RouterLink to="/shop" class="page-footer__link">Каталог</RouterLink>
            <RouterLink to="/review" class="page-footer__link">Отзывы</RouterLink>
            <div class="page-footer__network">
                <a href="#" target="_blank" class="page-footer__net1">
                    <Vk/>
                </a>
                <a href="#" target="_blank" class="page-footer__net2">
                    <Instagram/>
                </a>
            </div>
            
        </div>
        </div>
        
    </footer>

</template>

<script>
import Instagram from "@/assets/svg/insta.vue";
import Vk from "@/assets/svg/Vk.vue";
export default{
    components:{
        Instagram,
        Vk,
    }
}
</script>

<style lang="scss">
    .page-footer{
        width: 100%;
        height: 149px;
        background-color: $hover-pink;
        &__container{
            @include container;
        }
        &__block1{
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            
        }
        &__contact-info{
            margin-top: 25px;
            margin-bottom: 40px;
            font-weight: 400;
            color: $brown;
        }
        &__phone{
            margin-top: 25px;
            margin-bottom: 40px;
            color: $brown;
            text-decoration: none;
            
        }
        &__mail{
            margin-top: 25px;
            margin-bottom: 40px;
            color: $brown;
            text-decoration: none;
        }
        &__block2{
            display: flex;
            font-size: 20px;
            gap: 205px;
        }
        &__net1{
            margin-right: 20px;
        }
        &__network{
            margin-left: auto;
            margin-top: -25px;
        }
        &__link{
            color: $brown;
            text-decoration: none;
        }
    }
</style>