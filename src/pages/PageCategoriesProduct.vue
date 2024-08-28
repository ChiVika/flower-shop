<template>
    <div class="main">
        <Cards2/>
    </div>
    <PageFooter/>

</template>

<script>
import Cards2 from '@/components/Cards2.vue';
import PageFooter from '@/components/PageFooter.vue';
import { useBasketStore } from '@/stores/BasketStore';
import { useSaleCard } from '@/stores/SaleStore';
import { computed, ref} from 'vue';
import { RouterLink, useRoute } from 'vue-router';
export default{
    components:{
        Cards2,
        PageFooter
    },
    
    
}
</script>

<style>

</style>