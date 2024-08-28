<template>
  <div class="main">
    <Cards :AllSales ="true" />
  </div>
  <PageFooter/>
</template>

  
<script>

import Cards from '@/components/Cards.vue';
import PageFooter from '@/components/PageFooter.vue';
export default {
  name: 'PageSales',
  components:{
    Cards,
    PageFooter,
  },
  

  
}
</script>
  
<style>
  
</style>