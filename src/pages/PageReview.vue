<template>
    <div>
      <div class="main">
        <Reviews :AllReviews = "true"/>
      </div>
      <PageFooter/>
    </div>
    

</template>

<script>
import Reviews from '@/components/Reviews.vue';
import PageFooter from '@/components/PageFooter.vue';
export default {
    name: 'PageReview',
    components:{
      Reviews,
      PageFooter,
    }
  }
</script>

<style>
</style>