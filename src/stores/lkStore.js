import { defineStore } from "pinia";
export const useLkStore = defineStore("lk",{
    state: () => ({
        image: null,
        lastname: "Фамилия",
        name: "Имя",
        tel: "Телефон",
        backup: null,
    }),
    actions:{
        updateItem(item) {
            this.image = item.image;
            this.lastname = item.lastname;
            this.name = item.name;
            this.tel = item.tel;
        },
        deliteimages(){
            this.image = null;
        }
    }
})