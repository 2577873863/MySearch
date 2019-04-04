<template>
    <div class="round-search-bar">
        <input type="text" class="round-search-inp" v-model="searchText" @keydown.enter="doSearch">
        <button class="round-search-btn" @click="doSearch">
            <img src="./../assets/search-logo.png" class="round-search-icon"/>
        </button>        
    </div>
</template>
<script>
import Util from '@/common/Util.js';
export default {
    
    props:['search'],
    data(){
        return {
            searchText:this.search
        }
    },
    methods:{
        doSearch(){
            Util.doSearch(this.$router,this.searchText);
        }
    }
}
</script>
<style lang="less" scoped>
@import "./../themes/base.less";
.round-search-bar{
    width:400px;
    position: relative;
}
.round-search-inp{
    box-sizing: border-box;
    outline: none;
    width:100%;
    height:40px;
    border-radius: 25px;
    border:1px solid @search-inp-border-color;
    padding-left:15px;
    font-size: 1.1em;
}
.round-search-btn{
    outline: none;
    border:none;
    background: none;
    cursor: pointer;
    position: absolute;
    top:50%;
    right:10px;
    transform: translateY(-50%);
}
.round-search-icon{
    display: block;
    margin:0px auto;
    width:30px;
}
</style>

