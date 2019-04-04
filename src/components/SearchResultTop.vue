<template>
    <div class="search-result-top">
        <img src="./../assets/mysearch_logo_small.png" class="search-logo" @click="goHome" />
        <RoundSearchBar :search="searchText" class="round-search-bar" />
    </div>
</template>
<script>
import RoundSearchBar from '@/components/RoundSearchBar.vue';
export default {
    props:["searchText"],
    components:{
        RoundSearchBar,
    },
    methods:{
        goHome(){
            this.$router.push('/');
        }
    }
}
</script>
<style lang="less" scoped>
@import './../themes/base.less';
.search-result-top{
    border-bottom:1px solid @search-inp-border-color;
    padding:20px;
}
.search-logo{
    display: inline-block;
    vertical-align: middle;
    margin-right:20px;
    height:40px;
}
.round-search-bar{
    display: inline-block;
    vertical-align: middle;
}
</style>
