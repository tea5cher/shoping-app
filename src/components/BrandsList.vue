<template>
    <div class="brand">
        <h2 class="brand-title">Brands</h2>
        <ul class="brand-list">
            <li @click="onClickBrandFilter('ALL')" class="brand-item">All</li>
            <li @click="onClickBrandFilter(brand)" class="brand-item" v-for="brand of getBrandList" :key="brand.id">{{brand.title}}</li>
        </ul>
    </div>
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'BrandsList',
    computed: {
        ...mapActions('brands', ['fetchBrandList']),
        ...mapGetters('brands', ['getBrandList']),
        
    },
    methods:{
        ...mapActions('products',['filterCatalogWithBrand']),
        onClickBrandFilter({title}){
            if(title){
                this.filterCatalogWithBrand(title);
            } else {
                this.filterCatalogWithBrand('ALL');
            }
            
        }
    },
    mounted(){
        this.fetchBrandList
    }
}
</script>

<style lang="scss" scoped>

    .brand-list {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 200px;
        position: relative;
        &::after{
            position: absolute;
            content: '';
            width: 2px;
            // height: 10px;
            background-color: black;
            display: block;
            top: 8px;
            bottom: 8px;
            right: 5px;
        }
    }
    .brand-item {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 25px;
        font-weight: 600px;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover{
            font-weight: 700;
        }
    }
</style>