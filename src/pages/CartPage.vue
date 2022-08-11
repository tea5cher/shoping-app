<template>
    <div class="container">
        <header>
          <router-link to="/">
            <div class="header-wrapper">
                <img class="main-logo" src="../assets/logo.png" alt="main-logo">
            </div>
          </router-link>  
        </header>
        <section class="cart-section">
            <h2 class="cart-title">Shopping Cart</h2>
            <CartList />
        </section>
    </div>
</template>


<script>
import CartList from '../components/CartList.vue'

export default {
    name: 'CartPage',
    components: {
        CartList,
    }
}
</script>


<style lang="scss" scoped>
  .container {
    width: 80%;
    margin: 20px auto;
  }
  .header-wrapper {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    padding: 20px;
  }
  .main-logo {
    object-fit: contain;
  }
</style>