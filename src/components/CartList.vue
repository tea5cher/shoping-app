<template>
    <div class="cart-list-wrap">
        <ul class="cart-list">
            <li class="cart-product cart-product_titles">
                <div class="cart-item cart-item__item">Item</div>
                <div class="cart-item cart-item__price">Price</div>
                <div class="cart-item cart-item__quantity">Qty</div>
                <div class="cart-item cart-item__total">Total</div>
            </li>
            <li class="cart-product" v-for="product in getCartList" :key="product.id">
                <CartListItem :product='product'/>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
    name: 'CartList',
    components: {
        CartListItem
    },
    computed: {
        ...mapGetters('cart', ['getCartList'])
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
        grid-template-columns: 4fr 1fr 1fr 1fr;
        border-bottom: 1px solid black;
        align-items: center;
        &_titles{
            border: none;
            font-weight: 600;
            font-size: 20px;
        }
    }
</style>