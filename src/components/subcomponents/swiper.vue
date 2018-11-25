<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
          <img v-bind:src="item.img" alt="" :class="{full:isfull}">
      </mt-swipe-item>
      
    </mt-swipe>

  </div>
</template>


<script>
  export default {
    props:['lunbotuList','isfull']
  }
</script>


<style lang="less" scoped>
.mint-swipe {
  height: 200px;

  // 第一种交际选择器写法
  // .mint-swipe-item:nth-child(1){
  //   background-color: red;
  // }
  //   .mint-swipe-item:nth-child(2){
  //   background-color: yellow;
  // }
  //   .mint-swipe-item:nth-child(3){
  //   background-color: blue;
  // }

  // 第二种交际选择器写法
  .mint-swipe-item {
    text-align: center;
    &:nth-child(1){
      background-color: red;
    }
    &:nth-child(2){
      background-color: cyan;
    }
    &:nth-child(3){
      background-color: yellowgreen;
    }
  }

  img {
    // width: 100%;
    height: 100%;
  }
  
}

.full {
  width: 100%;
}
</style>
