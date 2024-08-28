<template>
    <main class="main">
        <MainBlock/>
        <Cards/>
        <Catalog/>
        <Reviews/>
    </main>
    <PageFooter/>
</template>

<script>
import PageFooter from '@/components/PageFooter.vue';
import MainBlock from '@/components/MainBlock.vue';
import Cards from '@/components/Cards.vue';
import Catalog from "@/components/Catalog.vue";
import Reviews from "@/components/Reviews.vue";


export default{
    components:{
        MainBlock,
        Cards,
        Catalog,
        Reviews,
        PageFooter,

    },

}
</script>

<style lang="scss">
*{
    // outline: 1px solid green !important;
}
.main{
    @include container;
}
</style>