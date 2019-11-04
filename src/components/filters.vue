<template>
  <div id="filters">
    <h1>{{ msg }}</h1>
    <div class="filters">
      <div class="filter-price">
        <div class="filter-price_title">Цена</div>
        <form>
          <div class="filter-price_range">
            <div class="filter-price_input-wrapper">
              <label for="min" class="filter-price_label">от</label>
              <input id="min" class="filter-price_input" />
            </div>
            <div class="filter-price_input-wrapper">
              <label for="max" class="filter-price_label">до</label>
              <input id="max" class="filter-price_input" />
            </div>
          </div>
        </form>
      </div>
      <div class="filter-category">
        <div class="filter-category_title">Категория</div>
        <select class="filter-category_select">
          <option selected disabled value="all">Выберите категорию</option>
          <option value="all">Все</option>
        </select>
      </div>
      <div class="filter-check">
        <label class="filter-check_label">
          <input type="checkbox" class="filter-check_checkbox" id="discount-checkbox" />
          <span class="filter-check_checkmark"></span>
          <span class="filter-check_label-text">Скидка</span>
        </label>
      </div>
      <br />
      <hr />
      <br />
      <div class="filter-perPage">
        <div class="filter-perPage_title">Товаров на странице:</div>
        <select class="filter-perPage_select">
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="24">24</option>
          <option value="32">32</option>
          <option value="40">40</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filters",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  font-weight: 700;
  margin-top: 15%;
}

.filter-price_title,
.filter-category_title,
.filter-perPage_title {
  display: block;
  font-size: 14px;
  line-height: 13px;
  margin-bottom: 10px;
  font-weight: 700;
}

.filter-price_range,
.filter-category_select {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 7px;
  width: 100%;
}

.filter-price_input-wrapper {
  padding-right: 4px;
  padding-left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.filter-price_label {
  display: block;
  font-size: 14px;
  padding: 0 3px 0 0;
  color: #999;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.filter-price_input {
  width: 100%;
  max-width: calc(100% - 18px);
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 4px 5px 6px;
  outline: 2px solid transparent;
  border: 1px solid #c5c5c5;
  border-radius: 2px;
  background: #fff;
  height: 27px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.filter-check {
  font-weight: 500;
}

.filter-check_label {
  display: block;
  min-height: 16px;
  position: relative;
  padding-left: 21px;
  color: #4d5f71;
  font-family: GTEestiProText, Arial, sans-serif;
  font-size: 14px;
  line-height: 19px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.filter-check_label-text {
  display: inline-block;
  vertical-align: top;
  line-height: 100%;
  margin-top: 1px;
}

.filter-check_label .active {
  font-weight: 700;
}

.filter-check_checkbox {
  opacity: 0;
  position: absolute;
  cursor: pointer;
}

.filter-check_checkmark {
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #005bff;
  border-radius: 2px;
}

.filter-check_checkmark.checked::after {
  display: block;
}

.filter-check_checkmark:after {
  display: none;
  width: 15px;
  height: 15px;
  position: absolute;
  top: -4px;
  left: 2px;
  content: "";
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.3 15L15 1.2 13.7 0 5.1 12.3 1.1 8 0 9.4 5.3 15z' fill='%23005bff'/%3E%3C/svg%3E");
}
</style>
