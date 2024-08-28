import { defineStore } from "pinia";

export const useBasketStore = defineStore("basket", {
    state: () => ({
        items: []
    }),
    getters: {
        getAllItems: (state) => {
            return state.items;
        }
    },
    actions: {
        addItem(item) {
          this.items.push(item);
        },
        deliteItem(index){
            this.items.splice(index,1);
        }
    },
})