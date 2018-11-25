<template>
  <div class="comments-container">
    <comments :id="$route.params.id"></comments>
  </div>
</template>

<script>

import comments from '../subcomponents/comment.vue'
  export default {
    components:{
      comments
    }
  }
</script>

<style lang="less" scoped>
.comments-container{
  padding: 8px;
}
</style>
