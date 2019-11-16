<template>
  <header class="container-fluid">
    <div class="container" id="navbar">
      <nav class="navbar navbar-expand-lg">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">
            <img src="../assets/logo.png" width="30" height="30" alt />
          </a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="btn nav-link" href="#">
                Главная
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="btn nav-link" href="#">О нас</a>
            </li>
            <li class="nav-item">
              <a class="btn nav-link" href="#">Контакты</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success my-2 my-sm-0" type="submit" id="search">Поиск</button>
          </form>
          <div id="cart" class="btn btn-secondary" @click="showCart">
            Корзина
            <div id="quantity" class="is-hidden"></div>
          </div>
        </div>
      </nav>
    </div>
    <hr />
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: 'myHeader'   
    }
  },
  methods: {
    showCart() {
      this.$emit('showCart', false)
    }
  }
}
</script>

<style>
</style>