<template> 
        <div class="item-brand-img-wrap">
            <img :src="product.image" alt="product-img" class="cart-product__img">
            <div class="descr-wrap">
                <p>Brand: {{product.brand}}</p>
                <p>Name: {{product.title}} </p>
            </div>
        </div>
        <div class="cart-product__option cart-product__option_price">{{product.regular_price.value}} $</div>
        <div class="cart-product__option cart-product__option_quantity">
            <input required min="1" @change="onChangeQuantity" value="1" class="input-qty" type="number">
        </div>
        <div class="cart-product__option cart-product__option_total">{{this.total}} $</div>
        <div @click="onDeleteItem" class="delete-product">
            <img src="../assets/trash.svg" alt="trash-btn" class="trash">
        </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'CartListItem',
    data(){
        return {
            total: +this.product.regular_price.value
        }
    },
    props: {
        product: {
            type: Object,
            default: ()=>({}),
        },
    },
    methods: {
        ...mapActions('cart', ['changeQuantityProduct']),
        ...mapActions('cart', ['deleteProductfromCart']),
        onChangeQuantity(e){
            let val = e.target.value;
            this.total = +(this.product.regular_price.value * val).toFixed(2);
            this.changeQuantityProduct({id:this.product.id, val:val});
        },
        onDeleteItem(){
            console.log('sd')
            this.deleteProductfromCart(this.product.id);
        }
    },

}
</script>

<style lang="scss" scoped>
    .cart-product {
        display: grid;
        grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
        border-bottom: 1px solid black;
        align-items: center;
        font-size: 20px;
        &__img {
            max-height: 150px;
        }
        &__option {
            display: flex;
            justify-content: center;
            font-size: 20px;
        }
    }
    .item-brand-img-wrap{
        display: flex;
        align-items: center;
    }
    .input-qty {
        width: 40px;
        height: 25px;
        padding: 5px 10px;
        font-size: 20px;
    }
    .trash{
        height: 25px;
        cursor: pointer;
    }
    .descr-wrap{
        margin-left: 20px;
        p {
            font-size: 20px;
        }
    }
</style>