
const productsStore = {
    namespaced: true,
    state: {
        products: [],
        showProducts: [],
    },
    getters: {
        productsList: ({products}) => products,
        showProductsList: ({showProducts}) => showProducts
    },
    mutations: {
        SET_PRODUCTS_TO_STATE(state,products){
            state.products = products;
            state.showProducts = products;
        },
        FILTER_SHOW_PRODUCTS(state,products){
            state.showProducts = products;
        },
    },
    actions: {
        getProductsFromJson({commit}){
            fetch('/products.json').then(result => result.json())
            .then(data => {
                commit('SET_PRODUCTS_TO_STATE', data)
            })
        },
        filterCatalogWithBrand({commit, state}, filter){
            
            if (filter==="ALL"){
                commit('FILTER_SHOW_PRODUCTS', state.products)
            } else {
                let newList = [];
                
                state.products.forEach(item=>{
                    if(item.brand == filter){
                        newList.push(item);
                    }
                })
              
                commit('FILTER_SHOW_PRODUCTS', newList)
            }
            
        }
    }
    
    

}



export default productsStore