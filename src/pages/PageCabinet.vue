<template>
    <div class="main">
        <div class="lk__block1">
            <div class="lk__container-photo">
                <label for="photo-input" class="lk__photo-label" v-if="ModeEdit && lkStore.image === null">
                    <input type="file" id="photo-input" class="lk__photo-input" @change="updateImage">
                </label>
                <img :src="lkStore.image" alt="Profile" class="lk__img"  v-if="lkStore.image !== null">
            </div>
            <div class="lk__block2">
                <div class="lk__personal-date">
                    <p class="lk__lastname" v-if="!ModeEdit">{{ lkStore.lastname }}</p>
                    <p class="lk__name"  v-if="!ModeEdit">{{ lkStore.name }}</p>
                    <p class="lk__tel"  v-if="!ModeEdit" >{{ lkStore.tel }}</p>

                    <input type="text" class="lk__lastname-edit" placeholder="Фамилия" v-if="ModeEdit" v-model="lkStore.lastname" required>
                    <input type="text" class="lk__name-edit" placeholder="Имя" v-if="ModeEdit" v-model="lkStore.name" required>
                    <input type="tel" class="lk__tel-edit"  placeholder="Телефон" v-if="ModeEdit" v-model="lkStore.tel" v-mask="'+7 (###) ###-##-##'" required>
                </div>
                <button class="lk__editor" @click="Editor" v-if="ModeBtnEdit">Редактировать</button>
                <div class="lk__bittons">
                    <button class="lk__save" v-if="!ModeBtnEdit" @click="SaveChange">Сохранить</button>
                    <button class="lk__cansel" v-if="!ModeBtnEdit" @click="CloseChange">Отмена</button>
                </div>
            </div>
        </div>
        <div class="lk__block3">
            <button class="lk__delite" @click="DeliteImages" v-if="ModeEdit">Удалить</button>
            <button class="lk__enter" @click="clickEnter">Выйти</button>
        </div>
        <Story/>
    </div>
    <PP v-if="active" @close="closeModal" :active="active"/>
    <PageFooter/>
</template>

<script>
import { useLkStore } from '@/stores/lkStore';
import Story from "@/components/Story.vue";
import PP from "@/components/PP-Enter.vue";
import PageFooter from '@/components/PageFooter.vue';
export default{
    components:{
        Story,
        PP,
        PageFooter,
    },
    data(){
        return{
            ModeEdit: false,
            ModeBtnEdit: true,
            active: false,
        }
    },
    setup() {
        const lkStore = useLkStore();

         const updateImage = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                lkStore.image = e.target.result;
            };
        };

        return {
            lkStore,
            updateImage
        };
    },
    methods:{
        Editor(){
            this.ModeEdit = true;
            this.ModeBtnEdit = false;

            this.lkStore.backup = {
                image: this.lkStore.image,
                lastname: this.lkStore.lastname,
                name: this.lkStore.name,
                tel: this.lkStore.tel
            };
        },
        SaveChange(){
            this.ModeEdit = false;
            this.ModeBtnEdit = true;

            const item = {
                image: this.lkStore.image,
                lastname: this.lkStore.lastname,
                name: this.lkStore.name,
                tel: this.lkStore.tel
            };
            console.log(item.image);
            console.log(item.lastname);

            this.lkStore.updateItem(item);
        },
        CloseChange(){
            this.ModeEdit = false;
            this.ModeBtnEdit = true;

            if (this.lkStore.backup) {
                this.lkStore.updateItem(this.lkStore.backup);
                this.lkStore.backup = null;
            }
        },
        DeliteImages(){
            this.lkStore.deliteimages();
        },
        clickEnter(){
            this.active = true;
        },
        closeModal() {
			this.active = false;
		},


    }
}

</script>

<style lang="scss">
    .lk{
        &__block1{
            display: flex;
            margin-top: 200px;
            gap: 27px;
        }
        &__container-photo{
            width: 215px;
            height: 188px;
            background-color: white;
            position: relative;
            overflow: hidden;
        }
        &__block2{
            display: block;
            background-color: $light-pink;
            width: 622px;
        }
        &__personal-date{
            display: flex;
            flex-direction: column;
            gap: 35px;
        }
        &__photo-input{
            width: 215px;
            height: 188px;
            display: none;
        }
        &__photo-label{
            position: absolute;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
        &__img{
            display: flex;
            margin: 0 auto;
            max-width: 100%;
            max-height: 100%;
        }
        &__block3{
            display: flex;
            max-width: 864px;
        }
        &__enter{
            margin-left: auto;
            margin-right: 18px;
            margin-top: 16px;
            background-color: transparent;
            color: $malina;
            border: none;
            font-size: 20px;
        }
        &__delite{
            margin-top: 16px;
            margin-left: 60px;
            background-color: transparent;
            color: $malina;
            border: none;
            font-size: 20px;

        }
        &__lastname,
        &__name,
        &__tel,
        &__lastname-edit,
        &__name-edit,
        &__tel-edit{
            font-size: 20px;
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 15px;
            color: $brown;
            
        }
        &__lastname-edit,
        &__name-edit,
        &__tel-edit{
            width: 250px;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid $brown;
            outline: none;
            
            
        }
        &__lastname{
            margin-top: 25px;
        }
        &__lastname-edit{
            margin-top: 25px;
        }
        &__editor{
            display: flex;
            margin-left: auto;
            margin-top: -24px;
            margin-bottom: 0;
            margin-right: 18px;
            background-color: transparent;
            color: $malina;
            border: none;
            font-size: 16px;
            padding: 0;
            text-align: end;
            cursor: pointer;
        }
        &__bittons{
            display: flex;
            flex-direction: column;
            width: 95px;
            margin-left: auto;
            margin-right: 18px;
            margin-top: -45px;
        }
        &__save{
            margin-bottom: 3px;
            background-color: transparent;
            color: $malina;
            border: none;
            font-size: 16px;
            padding: 0;
            text-align: end;
            cursor: pointer;

        }
        &__cansel{
            background-color: transparent;
            color: $malina;
            border: none;
            font-size: 16px;
            padding: 0;
            text-align: end;
            cursor: pointer;
        }

        
    }
</style>