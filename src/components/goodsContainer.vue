<template>
  <div id="#goods">
    <h1>{{ msg }}</h1>
    <div class="goods-page">
      <!-- <product-card v-for="card in goods"
        :card-id = card.id
        :card-title = card.title
        :card-price = card.price
        :card-sale = card.sale
        :card-img = card.img
        :card-category = card.category
      /> -->
    </div>
  </div>
</template>

<script>
import productCard from "./productCard.vue"
import json from "../db/db.json"

export default {
  data() {
    return {
      name: "goodsContainer",
      goods: json['goods']
    }
  },  
  props: {
    msg: String
  },
  components: {
    productCard
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods-page {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>
