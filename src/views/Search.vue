<template>
  <div class="search">
    <SearchResultTop :searchText="searchText"/>
    <div v-for="item in results" :key="item.id">
      <SearchResultItem :result="item"/>
    </div>
  </div>
</template>
<script>
import SearchResultTop from '@/components/SearchResultTop.vue';
import SearchResultItem from '@/components/SearchResultItem.vue';
const DB = require('@/api/data.json');
export default {
  data(){
    return {
      results:[],
    }
  },
  computed:{
    searchText(){
      return this.$route.params.searchText;
    }
  },
  beforeRouteUpdate(to, from, next){
    next();
    this.doSearchResult();
  },
  created(){
    this.doSearchResult();
  },
  methods:{
    doSearchResult(){
      let {searchText} = this.$route.params;
      this.results = [];
      DB.result.forEach(item => {
        if(item.title.toUpperCase().indexOf(searchText.toUpperCase()) != -1){
          this.results.push(item)
        }
      });
      // this.$axios.get('http://localhost:1213/search/'+this.$route.params.searchText).then(res=>{
      //   console.log(res.data);
      // }).catch(err=>console.log('获取结果异常',err));
    }
  },
  components:{
    SearchResultTop,
    SearchResultItem
  }
}
</script>
<style lang="less" scoped>
</style>

