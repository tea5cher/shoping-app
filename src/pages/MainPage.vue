<template>
  <div id="app">
      <div class="container">
        <header>
          <div class="header-wrapper">
            <img class="main-logo" src="../assets/logo.png" alt="main-logo">
            <CartLogo />
          </div>
        </header>
        <section class="main">
          <BrandsList />
          <Catalog />
        </section>
      </div>
  </div>
  
</template>

<script>
import BrandsList from '../components/BrandsList.vue';
import Catalog from '../components/Catalog.vue';
import CartLogo from '../components/CartLogo.vue';


export default {
  name: 'MainPage',
  components: {
    BrandsList,
    Catalog,
    CartLogo
  },
}
</script>

<style lang="scss" scoped>
 
  .container {
    margin: 20px 20px;
    
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
  }
  .main-logo {
    object-fit: contain;
  }
  .main {
    display: grid;
    grid-template-columns: 1fr 6fr;
    min-height: 800px;
  }
</style>
