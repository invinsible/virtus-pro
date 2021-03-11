<template>
  <div class="sort-up">
  <button
    class="sort-up__btn sort-arrow"
    type="btn"
    aria-label="Сортировка"
    @click="showList = !showList"
    :class="{ active: showList }"
  >
    {{getPeriodName}}
  </button>
  <div 
    v-if="showList"
    :class="{ show: showList }"
    class="sort-up__list">
    <a
      v-for="item in items"
      :key="item.id"
      @click="setPeriodSort(item.value)"
      class="sort-up__link">
        {{item.name}}
    </a>    
  </div>
</div>
</template>

<script>
export default {
  props: {
    items: [Array],
    currentItem: String,    
  },

  data() {
    return {
      showList: false,
    }
  },

  computed: {
    getPeriodName() {      
      let selected = this.items.find(item => item.value == this.currentItem);
      return (typeof selected == 'object') ? selected.name : '';
    }
  },


  methods: {
    setPeriodSort(value) {
      this.$emit('apply-sort-up', value);
      this.showList = false;
    }
  } 
  
}
</script>