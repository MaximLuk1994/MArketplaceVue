<template>
  <div id="app">
    <myHeader/>
    <div class="content-wrapper">
      <div id="my-content">
        <filters id="filters" msg="Фильтры:"/>
        <div class="my-content__right">
          <goodsContainer msg="Товары:"/>
          <hr>
          <pagination msg="Пагинация:"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import goodsContainer from './components/goodsContainer.vue'
import myHeader from './components/myHeader.vue'
import filters from './components/filters.vue'
import pagination from './components/pagination.vue'

export default {
  name: 'app',
  components: {
    myHeader,
    filters,
    goodsContainer,
    pagination
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
