<template>
  <div class="home-search-bar">
    <input type="text" v-model="searchText" class="search-inp" @keydown.enter="doSearch">
    <button class="search-btn" @click="doSearch">搜索一下</button>
  </div>
</template>
<script>
import Unit from '@/common/Util.js';
export default {
  data() {
    return {
      searchText: "" //搜索的内容
    };
  },
  methods: {
    doSearch() {
      Unit.doSearch(this.$router,this.searchText);
    }
  }
};
</script>
<style lang="less" scoped>
@import "./../themes/base.less";
.home-search-bar {
  max-width: 750px;
}
.search-inp {
  width: 70%;
  height: @search-bar-height;
  box-sizing: border-box;
  vertical-align: bottom;
  border: 1px solid @search-inp-border-color;
  font-size: 1.2em;
  padding-left: 15px;
  border-top-left-radius: @search-bar-radius;
  border-bottom-left-radius: @search-bar-radius;
}
.search-btn {
  width: 30%;
  height: @search-bar-height;
  box-sizing: border-box;
  background-color: @search-btn-color;
  border: none;
  color: white;
  border-top-right-radius: @search-bar-radius;
  border-bottom-right-radius: @search-bar-radius;
  font-size: 1.5em;
}
</style>

