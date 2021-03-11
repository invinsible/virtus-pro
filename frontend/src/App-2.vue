<template>
  <div>
    <div class="sort-wrapper">
      <filter-post :items="filterPost" 
        @apply-post-filter="applyPostFilter"
      />

      <sort-up
        :items="sortUpList"
        :currentItem="sortPeriod"
        @apply-sort-up="applySortUp"
      />
    </div>
    <p v-if="isLoading" class="filterStatus">Загрузка...</p>
    <p v-else-if="!isLoading && awards.length === 0" class="filterStatus">
      Награды не найдены
    </p>
    <ul v-else-if="!isLoading && awards.length > 0" class="awards">
      <li class="awards__item awards__item--first">
        <div class="awards__logo">Состав</div>
        <div class="awards__game">Дисциплина</div>
        <p
          class="awards__rate sort-arrow"
          @click="toggleCurrentSorting('rate')"
          :class="{ active: (currentSorting == 'rate') }"
        >
          Место
        </p>
        <p class="awards__tournament">Турнир</p>
        <p class="awards__place">Место проведения</p>

        <p
          class="awards__date sort-arrow"
          @click="toggleCurrentSorting('dateEnd')"
          :class="{ active: (currentSorting == 'dateEnd') }"
        >
          Дата
        </p>

        <p
          class="awards__money sort-arrow"
          @click="toggleCurrentSorting('money')"
          :class="{ active: (currentSorting == 'money') }"
        >
          Призовые
        </p>
      </li>

      <awards-item
        v-for="award in sortAwards"
        :key="award.id"
        :logo="award.logo"
        :game="award.game"
        :rate="award.rate"
        :tournament="award.tournament"
        :place="award.place"
        :date="award.date"
        :dateEnd="award.dateEnd"
        :money="award.money"
      />
    </ul>

    <div class="pagination">
      <button
        class="pagination__nav left"
        aria-label="Предыдущая страница"
      ></button>
      <ul class="pagination__list">
        <li class="pagination__item">
          <a class="pagination__link" href="#">1</a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#">2</a>
        </li>
        <li class="pagination__item active">
          <a class="pagination__link" href="#">3</a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link" href="#">4</a>
        </li>
      </ul>
      <button
        class="pagination__nav right"
        aria-label="Следующая страница"
      ></button>
    </div>
  </div>
</template>

<script>
import AwardsItem from './components/AwardsItem.vue';
import FilterPost from './components/FilterPost.vue';
import SortUp from './components/SortUp.vue';

export default {
  mounted() {
    this.getData();
  },

  components: {
    AwardsItem,
    FilterPost,
    SortUp,
  },

  data() {
    return {
      awards: [],
      filterPost: [],
      dropDownFilter: [],
      currentSorting: '-dateEnd',
      sortPeriod: 'all',
      sortUpList: [],
      isLoading: false, // For errors if no awards
    };
  },

  computed: {
    sortAwards() {
      let result = this.awards;
      let field = this.currentSorting.replace('-', '');
      let flow = this.currentSorting[0] == '-' ? 'desc' : 'asc';

      function customSorting(a, b) {
        if (flow == 'desc') {
          return a[field] > b[field] ? -1 : 1;
        } else {
          return a[field] < b[field] ? -1 : 1;
        }
      }

      result = result.sort(customSorting);

      if (this.dropDownFilter.length > 0) {  
        result = result.filter(item => {
          return this.dropDownFilter.includes(item.team);
        });  
      }   


      return result;
    },
  },

  methods: {
    getData() {
      this.isLoading = true;
      fetch('/products.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const resultsAwards = [];
          const resultsFilterPost = [];
          const resultsSortUpList = [];

          for (const id in data.awards) {
            resultsAwards.push({
              id: id,
              logo: data.awards[id].logo,
              game: data.awards[id].game,
              rate: data.awards[id].rate,
              tournament: data.awards[id].tournament,
              place: data.awards[id].place,
              date: data.awards[id].date,
              dateEnd: data.awards[id].dateEndTimeStamp,
              money: data.awards[id].money,
              team: data.awards[id].team,
            });
          }
          this.awards = resultsAwards;

          for (const id in data.filterPost) {
            resultsFilterPost.push({
              id: id,
              name: data.filterPost[id].name,
              url: data.filterPost[id].url,
              img: data.filterPost[id].img ? data.filterPost[id].img : null,
            });
          }
          this.filterPost = resultsFilterPost;

          for (const id in data.sortUpList) {
            resultsSortUpList.push({
              id: id,
              name: data.sortUpList[id].name,              
              value: data.sortUpList[id].value,
            });
          }
          this.sortUpList = resultsSortUpList;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    
    toggleCurrentSorting(value) {
      if (this.currentSorting !== value) {
        this.currentSorting = value;
        return;
      }
      this.currentSorting = '-' + value;
    },

    applyPostFilter(data) {
      this.dropDownFilter = data;      
    },

    applySortUp(data) {
      this.sortPeriod = data;
    }
  },
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