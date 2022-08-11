<template>
    <router-link class="cart-link" to="/cart">
        <div class="cart" ref="cart">
            <img class="cart-icon" src="../assets/bag-cart.svg" alt="bag">
            <span class="cart-value">{{getCartList.length}}</span>
        </div>  
    </router-link>
      
</template>


<script>
import { mapGetters } from 'vuex'


export default {
    name: 'CartLogo', 
    computed:{
        ...mapGetters('cart',['getCartList'])
    }
   
}
</script>

<style lang="scss" scoped>
.cart {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cart-icon {
    width: 100px;
    fill: red;
}
.cart-value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 600;
}
@keyframes shake-cart {   
    0%, 50%, 100% {
        transform: rotate(0deg);
    }
    10%, 30% {
        transform: rotate(-10deg);
    }
    20%, 40% {
        transform: rotate(10deg);
    }
}
.shaked {
    animation: shake-cart 1.2s ease;
}
.cart-link:active{
    color: #000;
}
</style>