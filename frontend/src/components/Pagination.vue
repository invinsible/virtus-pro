<template>
  <div class="pagination">
    <button class="pagination__nav left" aria-label="Предыдущая страница" v-if="currentPage !== 1" @click="switchPage(currentPage - 1)"></button>
    <ul class="pagination__list">
      <li
       class="pagination__item"
       v-for="item in countPage"
       :key="item"
       :class="{active: item == currentPage}"
      >
        <a class="pagination__link" href="#" @click.prevent="switchPage(item)">{{item}}</a>
      </li>
      
    </ul>
    <button class="pagination__nav right" aria-label="Следующая страница" v-if="currentPage !== countPage" @click="switchPage(currentPage + 1)"></button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    countPage : Number
  },

  methods: {    

    switchPage(page) {
      this.$emit('switch-page', page);      
    }
  }
  
}
</script>