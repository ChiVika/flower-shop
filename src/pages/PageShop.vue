<template>
  <main class="main">
    <Categories/>
  </main>
  <PageFooter/>

</template>

<script>
import Categories from "@/components/Categories.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {
    name: 'PageShop',
    components:{
      Categories,
      PageFooter
    }
  }
</script>

<style>
</style>