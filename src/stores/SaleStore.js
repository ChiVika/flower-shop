import { defineStore } from "pinia";

export const useSaleCard = defineStore("SaleStore", {
    state: () => ({
        sales: [
          {
            id: 1,
            title: 'Букет "Вкусняшка"',
            price: 5700,
            image: '/src/assets/jpg/cat1.svg',
            descr: "Букет из 15 прекрасных белых и красных роз скрасит любой праздник",
            old: 6400,
            basket: false,
            categories: 1
          },
          {
            id: 2,
            title: 'Букет "Розовый праздник"',
            price: 7999,
            image: '/src/assets/jpg/buket-cat1.svg',
            descr: "Букет из 21 розовой розы",
            old: 10999,
            basket: false,
            categories: 1
          },
          {
            id: 3,
            title: 'Нежность',
            price: 5499,
            image: '/src/assets/jpg/buket1-cat1.svg',
            descr: "Букет из 8 белых роз и 3 орхидей, придающих акцент этому букету",
            old: null,
            basket: false,
            categories: 1
          },
          {
            id: 4,
            title: 'Аврора',
            price: 2500,
            image: '/src/assets/jpg/buket3-cat1.svg',
            descr: "Гортензия белая - 2 шт.; Роза одиночная - 5 шт.; Гвоздика одиночная - 4 шт.; Астильба - 2 шт.; Бруния; Эвкалипт - 3 шт.; Снежноягодник - 2 шт.; Самшит - 2 шт.; Упаковка 2;",
            old: 5000,
            basket: false,
            categories: 1
          },
          {
            id: 5,
            title: ' Букет "Счастливая пара"',
            price: 7800,
            image: '/src/assets/jpg/buket-cat2.svg',
            descr: " Большой, красивый, нежный сборный букет из роз, гербер, кустовых хризантем, гиперикума, трахелиума, зелени",
            old: 9800,
            basket: false,
            categories: 2
          },
          {
            id: 6,
            title: 'Букет "Калейдоскоп"',
            price: 6500,
            image: '/src/assets/jpg/buket1-cat2.png',
            descr: "Букет из множеста ярких, красивых хризантем",
            old: null,
            basket: false,
            categories: 2
          },
          {
            id: 7,
            title: 'Букет "Радость"',
            price: 8700,
            image: '/src/assets/jpg/buket3-cat2.png',
            descr: "Букет из множеста ярких, красивых хризантем",
            old: null,
            basket: false,
            categories: 2
          },
          {
            id: 8,
            title: 'Букет "Сеньора"',
            price: 4600,
            image: '/src/assets/jpg/cat3.svg',
            descr: "Большой яркий букет из 21 тюльпана",
            old: 5000,
            basket: false,
            categories: 3
          },
          {
            id: 9,
            title: 'Букет "8 марта"',
            price: 1000,
            image: '/src/assets/jpg/buket1-cat3.png',
            descr: "Гортензия белая - 2 шт.; Роза одиночная - 5 шт.; Гвоздика одиночная - 4 шт.; Астильба - 2 шт.; Бруния; Эвкалипт - 3 шт.; Снежноягодник - 2 шт.; Самшит - 2 шт.; Упаковка 2;",
            old: null,
            basket: false,
            categories: 3
          },
          {
            id: 10,
            title: 'Товар 4',
            price: 4500,
            image: '/src/assets/jpg/buket3-cat3.png',
            descr: "Гортензия белая - 2 шт.; Роза одиночная - 5 шт.; Гвоздика одиночная - 4 шт.; Астильба - 2 шт.; Бруния; Эвкалипт - 3 шт.; Снежноягодник - 2 шт.; Самшит - 2 шт.; Упаковка 2;",
            old: 6000,
            basket: false,
            categories: 3
          },
          {
            id: 11,
            title: 'Товар 4',
            price: 1000,
            image: '/src/assets/jpg/buket-cat4.png',
            descr: "Гортензия белая - 2 шт.; Роза одиночная - 5 шт.; Гвоздика одиночная - 4 шт.; Астильба - 2 шт.; Бруния; Эвкалипт - 3 шт.; Снежноягодник - 2 шт.; Самшит - 2 шт.; Упаковка 2;",
            old: 2000,
            basket: false,
            categories: 4
          },
          {
            id: 12,
            title: 'Букет "Колыбельная"',
            price: 9500,
            image: '/src/assets/jpg/buket2-cat4.png',
            descr: null,
            old: null,
            basket: false,
            categories: 4
          },
          {
            id: 13,
            title: 'Букет "Анаболь"',
            price: 6500,
            image: '/src/assets/jpg/buket1-cat5.png',
            descr: "свадебный букет из 13 белых лилий",
            old: null,
            basket: false,
            categories: 4
          },
          {
            id: 14,
            title: 'Товар 4',
            price: 2500,
            image: '/src/assets/jpg/buket1-cat5.png',
            descr: "Бкет из 15 орхидей",
            old: null,
            basket: false,
            categories: 5
          },
          {
            id: 15,
            title: 'Букет сказка',
            price: 2500,
            image: '/src/assets/jpg/buket-cat5.png',
            descr: "Гортензия белая - 2 шт.; Роза одиночная - 5 шт.; Гвоздика одиночная - 4 шт.; Астильба - 2 шт.; Бруния; Эвкалипт - 3 шт.; Снежноягодник - 2 шт.; Самшит - 2 шт.; Упаковка 2;",
            old: null,
            basket: false,
            categories: 5
          },
          {
            id: 16,
            title: 'Товар 4',
            price: 2500,
            image: '/src/assets/jpg/buket-cat5.png',
            descr: "Гортензия белая - 2 шт.; Роза одиночная - 5 шт.; Гвоздика одиночная - 4 шт.; Астильба - 2 шт.; Бруния; Эвкалипт - 3 шт.; Снежноягодник - 2 шт.; Самшит - 2 шт.; Упаковка 2;",
            old: null,
            basket: false,
            categories: 5
          },
          {
            id: 17,
            title: 'Роза "Готча"',
            price: 200,
            image: '/src/assets/jpg/buket1-cat6.png',
            descr: "Роза 'Готча' 70см",
            old: 250,
            basket: false,
            categories: 6
          },
          {
            id: 18,
            title: "Роза 'Хермоса'",
            price: 2500,
            image: '/src/assets/jpg/cat6.svg',
            descr: "Роза Хермоса 70см",
            basket: false,
            categories: 6
          },
          {
            id: 19,
            title: 'Хризантема "Мона-Лиза"',
            price: 200,
            image: '/src/assets/jpg/buket1-cat7.png',
            descr: "Хризантема 'Мона-Лиза' в ассортименте",
            old: 250,
            basket: false,
            categories: 7
          },
          {
            id: 20,
            title: 'Хризантема "Бакарди"',
            price: 270,
            image: '/src/assets/jpg/buket2-cat7.png',
            descr: "Хризантема 'Бакарди' в ассортименте",
            old: null,
            basket: false,
            categories: 7
          },
          {
            id: 21,
            title: 'Хризантема "Калейдоскоп"',
            price: 270,
            image: '/src/assets/svg/buket1.svg',
            descr: "Хризантема 'Калейдоскоп' в ассортименте",
            old: null,
            basket: false,
            categories: 7
          },
          {
            id: 22,
            title: 'Букет "Лилия"',
            price: 4990,
            image: '/src/assets/jpg/buket1-cat8.png',
            descr: "7 лилий, 5 рускуса (зелень) перевязанных лентой",
            old: null,
            basket: false,
            categories: 8
          },
          {
            id: 23,
            title: 'Букет "Обычный"',
            price: 3990,
            image: '/src/assets/jpg/buket-cat4.png',
            descr: "7 лилий, 5 рускуса (зелень) перевязанных лентой",
            old: null,
            basket: false,
            categories: 8
          },
          {
            id: 24,
            title: 'Букет "Обычный"',
            price: 250,
            image: '/src/assets/jpg/buket3-cat8.png',
            descr: "Лилия восточная - белого цвета",
            old: 400,
            basket: false,
            categories: 8
          },
          {
            id: 25,
            title: 'Орхидея "Монтро"',
            price: 500,
            image: '/src/assets/jpg/buket1-cat9.png',
            descr: "Орхидея Монтро 70 см",
            old: null,
            basket: false,
            categories: 9
          },
          {
            id: 25,
            title: 'Букет "Волнение"',
            price: 5050,
            image: '/src/assets/jpg/cat10.svg',
            descr: "Прекрасный букет из 9 ярких орхидей",
            old: null,
            basket: false,
            categories: 9
          },
          {
            id: 26,
            title: 'Букет в форме сердца №1',
            price: 9000,
            image: '/src/assets/jpg/buket1-cat10.png',
            descr: "Прекрасная композиция, идеально подходящая под день святого Валентина. Состоящая из 15 розовых роз окруженных 10 красными",
            old: null,
            basket: false,
            categories: 10
          },
          {
            id: 27,
            title: 'Букет в форме сердца №2',
            price: 7000,
            image: '/src/assets/jpg/buket2-cat10.png',
            descr: "Прекрасная композиция, идеально подходящая под день святого Валентина. Состоящая из 23 розовых роз ",
            old: null,
            basket: false,
            categories: 10
          },
          {
            id: 28,
            title: 'Букет в форме сердца №3',
            price: 7500,
            image: '/src/assets/jpg/cat11.svg',
            descr: "Прекрасная композиция, идеально подходящая под день святого Валентина. Состоящая из 23 алых роз ",
            old: 8000,
            basket: false,
            categories: 10
          },
          {
            id: 29,
            title: 'Корзинка с розами №1',
            price: 10000,
            image: '/src/assets/jpg/buket1-cat11.png',
            descr: "Прекрасная композиция, идеально подходящая под день святого Валентина. Корзинка с розами",
            old: null,
            basket: false,
            categories: 11
          },
          {
            id: 30,
            title: 'Корзинка с розами №2',
            price: 11000,
            image: '/src/assets/jpg/cat12.svg',
            descr: "Прекрасная композиция, идеально подходящая под день святого Валентина. Корзинка с розами и дополнительным декором",
            old: null,
            basket: false,
            categories: 11
          },
          {
            id: 31,
            title: 'Корзинка с цветами №3',
            price: 9000,
            image: '/src/assets/jpg/buket3-cat11.png',
            descr: "Прекрасная композиция, идеально подходящая под день святого Валентина. Корзинка с розами и дополнительным декором",
            old: null,
            basket: false,
            categories: 11
          },
          {
            id: 32,
            title: 'Шляпная коробка №1',
            price: 1000,
            image: '/src/assets/jpg/cat13.svg',
            descr: "Шляпная коробка подойдет для упоковки ваших подарков близким",
            old: null,
            basket: false,
            categories: 12
          },
          {
            id: 33,
            title: ' Искусственные цветы "Красно-оранжевые розы"',
            price: 1200,
            image: '/src/assets/jpg/cat14.svg',
            descr: null,
            old: 2000,
            basket: false,
            categories: 13
          },
          {
            id: 34,
            title: 'Искусстветнные цветы "Оранж"',
            price: 1200,
            image: '/src/assets/jpg/buket2-cat13.png',
            descr: null,
            old: null,
            basket: false,
            categories: 13
          },
          {
            id: 35,
            title: 'Искусстветнные цветы "Престиж"',
            price: 1700,
            image: '/src/assets/jpg/buket3-cat13.png',
            descr: "Корзинка из искусственных уветов для интерьера вашего дома",
            old: null,
            basket: false,
            categories: 13
          },
          {
            id: 36,
            title: 'Искусстветнные цветы "Картина"',
            price: 1700,
            image: '/src/assets/jpg/buket4-cat13.png',
            descr: "Корзинка из искусственных уветов для интерьера вашего дома",
            old: null,
            basket: false,
            categories: 13
          },
          {
            id: 37,
            title: 'Плюшевый мишка',
            price: 1020,
            image: '/src/assets/jpg/mishka.png',
            descr: "Мальнький коричневый плюшевый мишка идеально дополнт любой подарок",
            old: null,
            basket: false,
            categories: 14
          },
          {
            id: 38,
            title: 'Плюшевый мишка',
            price: 1020,
            image: '/src/assets/jpg/mishka2.png',
            descr: "Мальнький бежевый плюшевый мишка идеально дополнт любой подарок",
            old: null,
            basket: false,
            categories: 14
          },
          {
            id: 39,
            title: 'Праздничный набор',
            price: 3000,
            image: '/src/assets/jpg/cat15.svg',
            descr: "Шампанское, конфеты, зефир, цветы искусственные",
            old: null,
            basket: false,
            categories: 14
          },
          
        ],
      }),
      getters: {
        getFilterCategory: (state) => (cat) => {
          return state.sales.filter(sale => sale.categories === cat);
        },
        getAllSales: (state) => {
          return state.sales.filter(sale => sale.old !== null);
        },
        getSalesEight: (state) => {
            return state.sales.filter(sale => sale.old !== null).slice(0,8);
        },
      },
      actions:{
      }
})