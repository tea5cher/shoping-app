const cartStore = {
    namespaced: true,
    state: {
        cartList: [
            {
                "type": "simple",
                "id": 2,
                "sku": "s2",
                "title": "Product 2",
                "regular_price": {
                "currency": "USD",
                "value": 36.87
                },
                "image": "./assets/images/2.png",
                "brand": "Nike"
            },
            {
                "type": "simple",
                "id": 3,
                "sku": "s3",
                "title": "Product 3",
                "regular_price": {
                "currency": "USD",
                "value": 28.91
                },
                "image": "./assets/images/3.png",
                "brand": "Reebok"
            },
        ],
        total: [],
    },
    getters: {
        getCartList: ({cartList}) => cartList,
        getFullPrice: ({cartList}) => {
            let total = 0;
            cartList.forEach(item=>{
                total += item.regular_price.value;
            })
            return total
        }
    },
    mutations: {
        ADD_PRODUCT_IN_CART_LIST(state, product){
            state.cartList.push(product);
        },
        ADD_VALUE_IN_TOTAL(state, value) {
            state.total.push(value);
        }
    },
    actions: {
        addToCart({commit}, product){
            commit('ADD_PRODUCT_IN_CART_LIST', product)
        },
        addPriceInTotalCount({commit}, value){
            commit('ADD_PRODUCT_IN_CART_LIST', product)
        }
    }
}


export default cartStore