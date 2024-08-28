<template>
    <div class="main">
      <BasketProduct/>
    </div>
    <PageFooter/>
  

</template>

<script>
import BasketProduct from "@/components/BasketProduct.vue";
import PageFooter from '@/components/PageFooter.vue';
export default {
    name: 'PageBasket',
    components:{
      BasketProduct,
      PageFooter,
      
    },



}
</script>

<style lang="scss">


</style>