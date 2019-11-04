<template>
  <div class="productcard" :data-id="cardId">
    <h5>{{ msg }}</h5>
    <div class="productcard__img">
      <img :src="cardImg" alt="image" />
      <div class="productcard__added is-hidden">Добавлено!</div>
    </div>
    <div class="productcard__sale" v-if="cardSale">sale!</div>
    <div class="productcard__details">
      <div class="productcard__price">{{cardPrice}}</div>
      <div class="productcard__category">{{cardCategory}}</div>
      <div class="productcard__title">{{cardTitle}}</div>
    </div>
    <button class="productcard__btn-buy btn">Купить</button>
  </div>
</template>

<script>
export default {
  name: "productCard",
  props: {
    msg: String,
    cardId: Number,
    cardTitle: String,
    cardPrice: Number,
    cardSale: Boolean,
    cardImg: String,
    cardCategory: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productcard {
    border:1px solid #d6d6d6;
    border-radius: 10px;
    padding: 5px;
    background-color: white;
    margin: 10px 10px;
    width: 200px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
}

.productcard__sale {
    position: absolute;
    top: 5px;
    right: 5px;
    transform: rotate(25deg);
    color: red;
    font-style: italic;
    font-weight: bold;
}

.productcard__img {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.productcard__img > img {
    max-width: 180px;
    max-height: 200px;

}

.productcard__added {
    position: absolute;
    color: #3cf93c;
    text-shadow: 0 0 5px #565555;
    font-weight: bold;
    font-size: 28px;
    transform: rotate(-25deg);    
    transition: all .2s ease-in-out;
}

.productcard__details {
    font-size: 12px;
    color: grey;
    margin: 0 0 5px;
}

.productcard__price {
    font-size: 14px;
    font-weight: bold;
    color: black;
}

.productcard__category {
    font-style:italic;
}

.productcard__title {
    color: black;
}

.productcard__btn-buy, .productcard__btn-remove {
    border: 1px solid balck;
    background-color: #f1efef;
}

.productcard__btn-buy:hover {
    background-color: #e0e0e0;
}
</style>
