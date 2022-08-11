const brandsStore = {
    namespaced: true,
    state: {
        brandsList: [],
    },
    getters: {
        getBrandList: ({brandsList}) => brandsList,
    },
    mutations: {
        SET_BRAND_LIST_FROM_JSON(state, list){
            state.brandsList = list
        }
    },
    actions: {
        fetchBrandList({commit}){
            fetch('/brands.json').
                then(result=>result.json()).
                then(data=>{
                    commit('SET_BRAND_LIST_FROM_JSON', data)
                })
        }
    }
}


export default brandsStore