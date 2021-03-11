<template>
  <li class="shop-list__item">
    <a class="shop-list__link" :href="link" target="_blank" rel="nofollow">
      <div class="shop-list__img">
        <img :src="img" :alt="name">
      </div>
      <p class="shop-list__title">{{name}}</p>
      <p class="shop-list__price">{{price}} ₽</p>      
      <p class="shop-list__btn">Смотреть</p>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    img: String,
    price: Number,
    link: String,    
  },
  data() {
    return {
      
    }
  }
  
}
</script>