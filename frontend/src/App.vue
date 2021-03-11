<template>
  <div class="shop__wrapper">
    <sort-up
      :items="sortUpList"
      :currentItem="sortBy"
      @apply-sort-up="applySortUp"
    />   

    <div class="shop-filter">
      <form action="#">
        <div class="shop-filter__fieldset">
          <p>Категория</p>
          <button class="shop-filter__reset" type="reset" @click="resetFilter">Сбросить</button>
        </div>
        <div class="shop-filter__list">
          <shop-filter-option
            v-for="category in categories"
            :key="category.id"            
            :name="category.name"
            :url="category.url"
            @check-option="checkboxHandler"
          />
        </div>        
      </form>
      <form action="#">
        <div class="shop-filter__fieldset">
          <p>Цена</p>
          <button class="shop-filter__reset" type="reset" @click="resetFilter">Сбросить</button>
        </div>
        <div class="shop-filter__list">
          <div class="shop-filter__price">
            <label>
              от <input class="shop-filter__number" type="number" placeholder="390" v-model="filterMinPrice">
            </label>
            <label>
              до <input class="shop-filter__number" type="number" placeholder="42990" v-model="filterMaxPrice">
            </label>
          </div>
        </div>        
      </form>     
    </div>

    <div class="shop-products">      
      <p v-if="isLoading" class="filterStatus">Загрузка...</p>
      <p v-else-if="!isLoading && (productsPage.length === 0)" class="filterStatus">Товары не найдены</p> 
      <ul v-else-if="!isLoading && productsPage.length > 0" class="shop-list">        
        <shop-list-item
          v-for="product in productsPage"
          :key="product.id"
          :img="product.img"
          :name="product.name"
          :price="product.price"
          :link="product.link"           
          />
      </ul>      
      <pagination
        :currentPage="Math.min(currentPage, countPage)"
        :countPage="countPage"
        @switch-page="switchCurrentPage"
      />
    </div>    
    
  </div>

</template>

<script>
import ShopFilterOption from './components/ShopFilterOption.vue';
import ShopListItem from './components/ShopListItem.vue';
import SortUp from './components/SortUp.vue';
import Pagination from './components/Pagination.vue';

let sortingFunctions = {
  new: (a, b) => a.id < b.id ? 1 : -1,
  cheap: (a, b) => a.price > b.price ? 1 : -1,
  expensive: (a, b) => a.price < b.price ? 1 : -1,
};

export default {
  mounted() {    
    this.getData();    
  }, 
  components: {
    ShopFilterOption,
    ShopListItem,
    SortUp,
    Pagination,
  },
  data() {
    return {
      products: [],  
      categories: [],
      sortUpList: [],

      isLoading: false,
      
      sortBy: 'new',     
      filterMinPrice: 390,
      filterMaxPrice: 42990,
      filterCategories: [],

      currentPage: 1,
      perPage: 3,

    };
  },
  computed: {
    filterProducts() {
      let result = this.products.filter(item => item.price >= this.filterMinPrice && item.price <= this.filterMaxPrice);

      if(this.filterCategories.length > 0) {
         result = result.filter(item => this.filterCategories.includes(item.category));
      }

      // Sorting
      result = result.sort(sortingFunctions[this.sortBy]);      

      return result
    },

    productsPage() {
      const offset = (Math.min(this.currentPage, this.countPage) - 1) * this.perPage;
      return this.filterProducts.slice(offset, offset + this.perPage);
    },

    countPage() {
      return Math.ceil(this.filterProducts.length / this.perPage);
    }
  },

  methods: {
    getData() {
      this.isLoading = true;      
      fetch('/products.json')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => {
        this.isLoading = false;
        const resultsProd = [];
        const resultsCat = [];
        const resultsSortUpList = [];

        for (const id in data.products) {
          resultsProd.push({
            id: id,
            name: data.products[id].name,            
            img: data.products[id].img,            
            price: data.products[id].price,
            link: data.products[id].link,
            category: data.products[id].category
          });
        }
        this.products = resultsProd;        

        for (const id in data.categories) {
          resultsCat.push({  
            id: id,          
            name: data.categories[id].name,
            url: data.categories[id].url
          });
        }
        this.categories = resultsCat;

        for (const id in data.sortUpList) {
            resultsSortUpList.push({
              id: id,
              name: data.sortUpList[id].name,              
              value: data.sortUpList[id].value,
            });
          }
          this.sortUpList = resultsSortUpList;
      })
      .catch(error => {
        console.log(error);
      })
    },  

    checkboxHandler(name) {
      if(this.filterCategories.includes(name)) {
        let index = this.filterCategories.indexOf(name);
        this.filterCategories.splice(index, 1);
      } else {
        this.filterCategories.push(name);
      }
      console.log(this.filterCategories);
    },

    resetFilter() {
      this.filterMinPrice = 390;
      this.filterMaxPrice = 42990;
      this.filterCategories = [];
    },

    applySortUp(data) {
      this.sortBy = data;
    },

    switchCurrentPage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>
  .filterStatus {
    margin: 40px 0 0 20px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }
</style>