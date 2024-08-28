<template>
    <div class="main"  v-if="LeightCard > 0">
        <BasketProduct/>
        <Order/>
    </div>
    <div class="main-empty" v-else>
        <p>Корзина пуста, вернитесь назад и добавьте товары</p>
    </div>
    <PageFooter/>
</template>

<script>
import BasketProduct from "@/components/BasketProduct.vue";
import Order from "@/components/DataOfOrser.vue";
import PageFooter from "@/components/PageFooter.vue";
import { useBasketStore } from "@/stores/BasketStore";
import { computed } from "vue";

export default {
  components: {
    BasketProduct,
    Order,
    PageFooter,
  },
  setup() {
    const BasketStore = useBasketStore();

    const LeightCard = computed(() => {
      return BasketStore.getAllItems.length;
    });

    return {
      LeightCard,
    };
  },
};
</script>

<style lang="scss">
.main-empty {
  text-align: center;
  padding: 20px;
  margin-top:300px;
  margin-bottom: 300px;
  font-size: 40px;
  color: $brown;
}
</style>