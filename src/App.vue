<template>
  <div class="app">
    <PageHeader/>
    <RouterView/>
  </div>
</template>


<script>
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
export default{
  components:{
      PageHeader,

  },
  methods: {
  }

}
</script>


<style lang="scss">
  *{
    font-family: $font;
  }
  body{
    margin: 0 0;
    background-color: $pink-fon;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .app{
  }

</style>
