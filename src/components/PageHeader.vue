<template>
  <header class="page-header">
  <div class="page-header__container">
    <a class="page-header__logo">
      <RouterLink to='/'>
        <img src="@/assets/svg/logo.svg" alt="logo">
      </RouterLink>
    </a>
    <nav class="page-header__nav">
      <RouterLink to="/sales" class="page-header__nav-link">Акции</RouterLink>
      <RouterLink to="/shop" class="page-header__nav-link">Каталог</RouterLink>
      <RouterLink to="/review" class="page-header__nav-link">Отзывы</RouterLink>

    </nav>
    <nav class="page-header__user-nav">
      <RouterLink class="page-header__basket" to="/basket">
        <SvgBasket/>
      </RouterLink>
      <RouterLink class="page-header__lk" to="/persanalCabinet">
        <img src="@/assets/svg/user.svg" alt="user">
      </RouterLink>
    </nav>

  </div>

</header>
</template>

<script>
import SvgBasket from '@/assets/svg/SvgBasket.vue';
export default{
  name: 'PageHeader',
  components:{
    SvgBasket,
  }
}

</script>

<style lang="scss">
.page-header{
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 97px;
  background-color: $hover-pink;
  z-index: 100;
  &__container{
    @include container;
    align-items: center;
    display: flex;
    z-index: 1;
  }
  &__nav{
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    
  }
  &__nav-link{
    color: $brown;
    font-weight: 400;
    font-size: 20px;
    text-decoration: none;
    margin-left: 0;
    margin-right: 93px;
    font-family: $font;
    &:first-child{
      margin-left: 88px;
    }
  }
  &__user-nav{
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  &__lk{
    margin-left: 30px;
  }
}
</style>