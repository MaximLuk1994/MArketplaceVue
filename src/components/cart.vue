<template>
  <div class="cart is-hidden">
    <div class="cart__body">
      <div class="cart__title">Корзина</div>
      <div class="cart__total">
        <div>
          Общая сумма:<span>0</span> руб
        </div>
        <div class="cart__clean">
          <div class="btn btn-danger is-hidden" id="cleanBtn">Очистить корзину</div>
          <div class="cart__select is-hidden">
            <span>Выделить все:</span>
            <input type="checkbox" id="selectAll" />
          </div>
        </div>
      </div>
      <hr />
      <div class="cart__wrapper">
        <div class="empty">Ваша корзина пока пуста</div>
      </div>
      <button class="cart__confirm">Оформить заказ</button>
      <div class="cart__close" @click="hideCart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      name: "cart"
    }
  },
  methods: {
    hideCart() {
      this.$emit('hideCart', true)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3)
}

.cart__body {
    position: absolute;
    top: 150px;
    left: 50%;
/*     width: 1024px; */
    min-width: 700px;
    min-height: 200px;
    max-height: 640px;
    background-color: #fff;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    padding: 25px;
    overflow: auto
}

.cart__title {
    font-size: 28px;
    color: rgba(0, 0, 0, .4)
}

.cart__clean {
    display: flex;
    flex-direction: column-reverse;    
}

.cart__select {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.cart__select > * {
    flex-grow: 1;
}

.cart__wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 25px
}

.cart__wrapper .empty {
    font-size: 24px;
    color: rgba(0, 0, 0, .4);
    margin: auto
}

.cart__wrapper .goods__item {
    margin-right: 75px
}

.cart__wrapper .productcard__sale {
    top: 0;
    left: 20px;
    width: max-content;
}

.cart__close {
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer
}

.cart__total {
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart__total span {
    color: #dc3e2a
}

.cart__confirm {
    width: 280px;
    height: 40px;
    display: block;
    margin: 0 auto;
    background-color: #dc3e2a;
    border: none;
    outline: 0;
    margin-top: 20px;
    color: #fff;
    font-weight: 700;
    cursor: pointer
}

.cart__confirm:focus {
    outline: 0
}

.cart__confirm:hover {
    box-shadow: 0 0 15px rgba(220, 62, 42, .7)
}

.confirm {
    display: none;
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 100px;
    height: 100px
}

.confirm img {
    width: 100%
}

.cart__wrapper .productcard {
    width: 100%;   
    display: flex;
    flex-direction: row;
    margin: 2px 0;
    align-items: center;
}

.cart__wrapper .productcard > * {
    margin: 0 10px;
}

.cart__wrapper .productcard__img {
    height: 30px;
}

.cart__wrapper .productcard__img img {
    height: 100%;
    width: auto;
}

.cart__wrapper .productcard__details {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
}

.cart__wrapper .productcard__details > * {
    margin: 0 10px;
}
</style>
