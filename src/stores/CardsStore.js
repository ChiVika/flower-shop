import { defineStore } from "pinia";
export const useCardCard = defineStore("CardStore", {
    state: () => ({
        
        Card: [
          {
            id: 1,
            title: 'Товар 1',
            price: 1000,
            image: 'src/assets/svg/buket1.svg',
            basket: false,
            categoria: 1
          },
          {
            id: 2,
            title: 'Товар 2',
            price: 1500,
            image: 'src/assets/svg/buket1.svg',
            basket: false,
            categoria: 1
          },
          {
            id: 3,
            title: 'Товар 3',
            price: 2000,
            image: 'src/assets/svg/buket1.svg',
            basket: false,
            categoria: 2
          },
          {
            id: 4,
            title: 'Товар 4',
            price: 2500,
            image: 'src/assets/svg/buket1.svg',
            basket: false,
            categoria: 1
          },
          {
            id: 5,
            title: 'Товар 1',
            price: 1000,
            image: 'src/assets/svg/buket1.svg',
            basket: false,
            categoria: 3
          },
          {
            id: 6,
            title: 'Товар 2',
            price: 1500,
            image: 'src/assets/svg/buket1.svg',
            basket: false,
            categoria: 4
          },
          {
            id: 7,
            title: 'Товар 3',
            price: 2000,
            image: 'src/assets/svg/buket1.svg',
            basket: false,
            categoria: 2
          },
          {
            id: 8,
            title: 'Товар 4',
            price: 2500,
            image: 'src/assets/svg/buket1.svg',
            basket: false,
            categoria: 2
          },
          {
            id: 9,
            title: 'Товар 4',
            price: 2500,
            image: 'src/assets/svg/buket1.svg',
            basket: false,
            categoria: 3
          },
        ],
      }),
      getters: {
        getAllCard: (state) => {
          return state.sales.categoria;
        },

      },
})