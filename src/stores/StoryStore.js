import { defineStore } from "pinia";

export const useStoryStore = defineStore("story", {
    state: () => ({
        storis: [
            {
                data: "14.02.2024",
                order: "Роза “Готча”, Корзина впечатление",
                price: 4250
            },
            {
                data: "14.02.2024",
                order: "Роза “Готча”, Корзина впечатление",
                price: 4250
            },
        ]

    }),
    getters:{
        getAllStory: (state) => {
            return state.storis;
        }
    }
})