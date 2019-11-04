<template>
  <div id="app">
    <app-header v-bind="cart" @showCart="cart.isHidden=$event"/>
    <div class="content-wrapper">
      <div id="my-content">
        <app-filters id="filters" msg="Фильтры:"/>
        <div class="my-content__right">
          <app-goods-container msg="Товары:"/>
          <hr>
          <app-pagination msg="Пагинация:"/>
        </div>
      </div>
    </div>
    <app-cart v-if="!cart.isHidden"/>
  </div>
</template>

<script>
import appGoodsContainer from './components/goodsContainer.vue'
import appHeader from './components/myHeader.vue'
import appFilters from './components/filters.vue'
import appPagination from './components/pagination.vue'
import appCart from './components/cart.vue'

export default {
  components: {
    appHeader,
    appFilters,
    appGoodsContainer,
    appPagination,
    appCart
  },
  data() {
    return {
      name: 'app',
      cart: {
        isHidden: true
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#my-content {
    display: flex;
}
#my-content>* {
    padding: 10px;
}
.content-wrapper {
  max-width: 1200px;
  margin: auto;
}
.my-content__right {
  flex-grow: 1;
}
#filters {
    border-right: 1px solid rgba(0,0,0,.1);
}
</style>
