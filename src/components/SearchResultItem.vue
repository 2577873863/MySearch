<template>
  <div class="result-item">
    <a :href="result.url" class="result-link">
      <div class="title">{{result.title}}</div>
      <div class="url">{{result.url}}</div>
      <div class="desc">{{result.desc}}</div>
    </a>
  </div>
</template>
<script>
export default {
  props: ["result"]
};
</script>
<style lang="less" scoped>
.result-item {
  padding: 20px;
}
.result-link{
    text-decoration: none;
}
.title {
  font-size: 1.2em;
  color: #551a8b;
}
.url {
  color: #008000;
}
.desc {
  color: #333333;
  font-size: 0.8em;
}
</style>
