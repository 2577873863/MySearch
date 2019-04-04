<template>
  <div class="home">
    <MySearchLogo class="my-search-logo" />
    <HomeSearchBar class="home-search-bar" />
  </div>
</template>

<script>
// @ is an alias to /src
import MySearchLogo from '@/components/MySearchLogo.vue';
import HomeSearchBar from '@/components/HomeSearchBar.vue';
export default {
  name: 'home',
  components: {
    MySearchLogo,
    HomeSearchBar
  }
}
</script>
<style lang="less" scoped>
.my-search-logo{
  margin-top:40px;
  margin-bottom:30px;
  text-align: center;
}
.home-search-bar{
  margin:0px auto;
}
</style>

