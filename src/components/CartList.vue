<template>
    <div class="cart-list-wrap">
        <ul v-if="getCartList.length>0 ? true : false" class="cart-list">
            <li class="cart-product cart-product_titles">
                <div class="cart-item cart-item__item">Item</div>
                <div class="cart-item cart-item__price">Price</div>
                <div class="cart-item cart-item__quantity">Qty</div>
                <div class="cart-item cart-item__total">Total</div>
            </li>
            <li class="cart-product" v-for="product in getCartList" :key="product.id">
                <CartListItem :product='product'/>
            </li>
            <div class="subtotal">
                <p class="subtotal-price">Subtotal: {{getFullPrice}}$</p>
                <button @click="onCheckout" class="checkout">Checkout</button>
            </div>
        </ul>
        <div class="empty-cart-wrap" v-else>
            <!-- <CartLogo /> -->
            <img class="empty-card-img" src="../assets/test.png" alt="empty-cart_img">
            <p class="empty-text">Your Shopping Bag is Empty</p>
            <router-link to="/">
                <button>Go to homepage</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'
import CartLogo from './CartLogo.vue'
export default {
    name: 'CartList',
    data(){
        return {
            total: 0,
        }
    },
    components: {
        CartListItem,
        CartLogo
    },
    computed: {
        ...mapGetters('cart', ['getCartList']),
        ...mapGetters('cart', ['getFullPrice']),
    },
    methods: {
        onCheckout(){
            console.log('sd')
            this.$notify({ type: "success", text: "The operation completed" });
        }
    }
}
</script>


<style lang="scss" scoped>
    .cart-list {
        padding: 0;
        margin: 0;
    }

    .cart-list-titles {
        display: flex;
    }
    .cart-item {
        text-align: center;
    }
    .cart-product {
        display: grid;
        grid-template-columns: 4fr 1fr 1fr 1fr 0.3fr;
        border-bottom: 1px solid black;
        align-items: center;
        &_titles{
            border: none;
            font-weight: 600;
            font-size: 20px;
        }
    }
    .subtotal {
        display: flex;
        // justify-content: flex-end;
        flex-direction: column;
        align-items: flex-end;
    }
    .empty-cart-wrap{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        width: 30%;
        min-width: 220px;
        // height: 500px;
        margin: 0 auto;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        color:#fff;
        border: none;
        border-radius: 8px;
        background-color: #de2d02;
        padding:10px;
        transition:all 0.3s;
        font-size: 14px;
        cursor: pointer;
        text-transform: uppercase;
    }
    button:hover{
        opacity: 0.7;
    }
    .empty-text {
        color: #000;
        font-size: 20px;
        margin-bottom: 40px;
        text-align: center;
    }
    .empty-card-img{
        width: 100%;
    }
    .subtotal-price{
        font-size: 20px;
    }
</style>