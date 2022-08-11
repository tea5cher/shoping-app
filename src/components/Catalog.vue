<template>
    <div class="catalog">
        <h1 class="catalog-title">Catalog</h1>
        <div class="catalog-list">
            <div class="product" v-for="product in showProductsList" :key="product.id">
                <img class="product__img" :src="product.image" alt="product img">
                <div class="product__name">{{product.title}}</div>
                <div class="product__brand">Brand: {{product.brand}}</div>
                <div class="product__sell-wrap">
                    <div class="product__price">${{product.regular_price.value}}</div>
                    <button @click='onAddToCart(product)' class="add-to-cart">Add to cart</button>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Catalog',
    data(){
        return {
            products: this.showProductsList,
            newID: 0,
        }
    },
    computed: {
        ...mapGetters('products', ['showProductsList']),
        ...mapActions('products', ['getProductsFromJson'])
    },
    methods: {
        ...mapActions('cart', ['addToCart']),
        onAddToCart(product){
            const cart = document.querySelector('.cart');
            this.addToCart(product);
            cart.classList.add('shaked');
            setTimeout(()=>{
               cart.classList.remove('shaked'); 
            },600)
        }
    },
    mounted(){
        this.getProductsFromJson
    }
}
</script>


<style lang="scss" scoped>
    .catalog {
        padding: 20px;
        &-title{
            padding: 0;
            margin: 0;
        }
    }
    .catalog-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 20px;
    }
    .product {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 8px;
        gap: 10px;
        padding: 20px;
        transition: all 0.2s ease;
        &__img {
            width: 100%;
            object-fit: cover;
        }
        &__name {
            font-size: 25px;
            font-weight: 600;
        }
        &__brand {
            font-size: 20px;
            font-weight: 600;
        }
        &__price {
            font-size: 18px;
            font-weight: 500;
        }
        &__sell-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &:hover{
            transform: scale(1.02);
        }
    }
    .add-to-cart{
        background-color: #018849;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 15px;
        font-weight: 500;
        font-size: 18px;
        cursor: pointer;
        &:hover, &:focus, &:active{
            background-color: #006637;
        }
    }
</style>