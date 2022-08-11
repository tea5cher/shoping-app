<template> 
        <div class="item-brand-img-wrap">
            <img :src="product.image" alt="product-img" class="cart-product__img">
            <p>Brand: {{product.brand}} Name: {{product.title}} </p>
        </div>
        <div class="cart-product__oprion cart-product__option_price">{{product.regular_price.value}} $</div>
        <div class="cart-product__oprion cart-product__option_quantity">
            <input required min="1" @change="onChangeQuantity" value="1" class="input-qty" type="number">
        </div>
        <div class="cart-product__oprion cart-product__option_total">{{this.total}} $</div>
</template>

<script>
export default {
    name: 'CartListItem',
    data(){
        return {
            total: this.product.regular_price.value
        }
    },
    props: {
        product: {
            type: Object,
            default: ()=>({}),
        }
    },
    methods: {
        onChangeQuantity(e){
            this.total = (this.product.regular_price.value * e.target.value).toFixed(2);
        }
    }
}
</script>

<style lang="scss" scoped>
    .cart-product {
        display: grid;
        grid-template-columns: 4fr 1fr 1fr 1fr;
        border-bottom: 1px solid black;
        align-items: center;
        &__img {
            max-height: 150px;
        }
        &__oprion {
            display: flex;
            justify-content: center;
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
    }
</style>