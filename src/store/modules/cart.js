const cartStore = {
    namespaced: true,
    state: {
        cartList: [
            // {
            //     "type": "simple",
            //     "id": 2,
            //     "sku": "s2",
            //     "title": "Product 2",
            //     "regular_price": {
            //     "currency": "USD",
            //     "value": 36.87
            //     },
            //     "image": "./assets/images/2.png",
            //     "brand": "Nike",
            //     "quantity": 1
            // },
            // {
            //     "type": "simple",
            //     "id": 3,
            //     "sku": "s3",
            //     "title": "Product 3",
            //     "regular_price": {
            //     "currency": "USD",
            //     "value": 28.91
            //     },
            //     "image": "./assets/images/3.png",
            //     "brand": "Reebok",
            //     "quantity": 1
            // },
        ],
        total: [],
    },
    getters: {
        getCartList: ({cartList}) => cartList,
        getFullPrice: ({cartList}) => {
            let total = 0;
            cartList.forEach(item=>{
                total += (item.regular_price.value*item.quantity);
            })
            total=total.toFixed(2);
            return +total
        }
    },
    mutations: {
        ADD_PRODUCT_IN_CART_LIST(state, product){
            state.cartList.push(product);
        },
        ADD_VALUE_IN_TOTAL(state, value) {
            state.total.push(value);
        },
        CHANGE_SUBTOTAL(state, {id,val}){
            state.cartList.forEach(item=>{
                if (item.id == id) {
                    item.quantity = val;
                }
            })
        },
        DELETE_PRODUCT_FROM_CART(state, id){
            console.log(id);
            state.cartList = state.cartList.filter(item => item.id !== id)
        }
    },
    actions: {
        addToCart({commit}, product){
            const newProduct = JSON.parse(JSON.stringify(product));
            newProduct.id = Math.random();
            commit('ADD_PRODUCT_IN_CART_LIST', newProduct)
        },
        changeQuantityProduct({commit}, {id, val}){
            commit('CHANGE_SUBTOTAL', {id: id, val: val})
        },
        deleteProductfromCart({commit}, id) {
            commit('DELETE_PRODUCT_FROM_CART', id);
        }
    }
}


export default cartStore