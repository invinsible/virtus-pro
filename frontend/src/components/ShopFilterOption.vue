<template>
  <div class="shop-filter__option">
    <input class="visually-hidden" type="checkbox" :id="url" @click="checkOption">
    <label class="shop-filter__label" :for="url">{{name}}</label>
  </div>  
</template>

<script>
export default {
  props: {
    name: String,    
    url: String,
  },
  methods: {
    checkOption() {
      this.$emit('check-option', this.url);
    }
  }
  
}
</script>