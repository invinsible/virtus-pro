<template>
  <div class="f">
    <button class="f__btn" type="button" @click="showForm = !showForm">
      <img :src="logo" alt="" v-if="logo">
      <span>{{buttonText}}</span>            
      <span class="filter-count" v-if="checkCounter > 1">+ {{checkCounter - 1}}</span>
    </button>

    <form class="f__form" action="#" v-if="showForm" @submit.prevent="applyFilter">
      <div class="f__option" 
        v-for="item in items"
        :key="item.id">
          <img 
            :src="item.img" 
            alt="" 
            v-if="item.img">
          <input
            class="f__input visually-hidden"
            :value="item.url" type="checkbox"
            :id="item.url"
            v-model="checkedItems">
          <label
            class="f__label"
            :class="item.img ? '' : 'f__label--text'"
            :for="item.url">
              {{item.name}}
            </label>
      </div>
      <button class="f__button f__button--submit" type="submit">Применить</button>
      <button class="f__button f__button--reset" type="reset" @click.prevent="reset">Сбросить</button>
    </form>            
  </div>
</template>

<script>

export default {
  props: {
    items: [Array, Object],
  },

  data() {
    return {
      defaultButtonText: 'Все новости',
      checkedItems: [],
      showForm: false,
    }
  },
  computed: {
    buttonText() {
      if(this.checkCounter == 0) {
        return this.defaultButtonText
      }
      
      return this.firstCheckedItem().name;
    },

    logo() {
      if(this.checkCounter == 0) {
        return null
      }

      return this.firstCheckedItem().img;
    },

    checkCounter() {
      return this.checkedItems.length;
    }
    
  }, 
  
  methods: {
   reset() {     
     this.checkedItems = [];
     this.applyFilter();
   },
   
   firstCheckedItem() {
     return this.items.find(item => item.url == this.checkedItems[0]);
   },

   applyFilter() {     
     this.$emit('apply-post-filter', this.checkedItems);
     this.showForm = false;
   }
  }  
}
</script>
<style scoped lang="scss">
.f {
  position: relative;
  margin-bottom: 30px;

  &__btn {
    padding: 4px 17px;
    min-height: 36px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    background-color: #fff;
    border: 0;
    outline: 0;
    cursor: pointer;
    clip-path: polygon(0 0, 96% 0, 100% 27%, 100% 100%, 5% 100%, 0 80%);

    img {
      margin-right: 10px;
    }

    &::after {
      content: '';
      margin-left: 15px;
      display: block;
      border-style: solid;
      border-width: 6px 4px 0 4px;
      border-color: #000 transparent transparent transparent;
    }
  }

  .filter-count {
    padding: 3px;    
    margin-left: 10px;
    color: #fff;
    background-color: #FC5000;

    i {
      font-style: normal;
    }
  }

  img {
    max-width: 24px;    
  }  

  &__form {
    position: absolute;
    top: 100%;    
    left: 20px;
    padding: 20px 0px 12px;
    margin-top: 4px;
    width: 270px;    
    background-color: #fff;
    text-align: center;
    z-index: 3;
    //clip-path: polygon(0 0, 96% 0, 100% 4%, 100% 100%, 5% 100%, 0 96%);  
    
    box-shadow: 2px 2px 10px 0px #9e9e9e;
  }

  &__option {
    padding-left: 40px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;

    img {
      max-width: 24px;
      margin-right: 5px;
    }

    &:last-of-type {
      margin-bottom: 20px;
    }
  } 

  &__label {
    position: relative;
    display: block;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    transition: color 0.25s;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      left: -53px;
      top: 2px;
      width: 16px;
      height: 15px;
      border: 1px solid #FC5000;      
    }

    &::after {
      content: '';
      position: absolute;
      left: -50px;
      top: 5px;
      width: 10px;
      height: 9px;
      background-color: #FC5000;
      transform: scale(0);
      transition: transform .18s;
    }

    &--text::before {
      left: -24px;
    }

    &--text::after {
      left: -21px;
    }

    &:hover {
      color: #FC5000;
    }
  }

  &__input:checked + label {
    color: #FC5000;
    &::after {
      transform: scale(1);
    }
  }

  &__button {
    margin: 0 auto 15px auto;
    display: block;
    color: #888888;
    font-size: 16px;
    outline: none;
    border: 0;
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.25s, opacity 0.2s;

    &:hover {
      color: #FC5000;      
    }

    &:active {
      opacity: 0.5;
    }

    &--submit {           
      color: #1F2326;
    }

    &--reset {
      margin-bottom: 0;
    }
  }
}
</style>
