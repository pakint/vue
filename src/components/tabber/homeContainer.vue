<template>
  <div>

    <!-- 引入进来需要手动给他设置一个高度 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>


    <h1>这是首页路由子组件</h1>
  </div>
</template>

<script>

  // 导入 Toast 组件
  import { Toast } from 'mint-ui'

  export default {
    data(){
      return {
        lunbotuList:[]
      }
    },
    created(){
      this.getLunbotu()
    },
    methods:{
      getLunbotu(){
        // 获取轮播图数据的方法
        this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
          if(result.body.status === 0){
            // 成功的
            this.lunbotuList = result.body.message;
            Toast("加载轮播图成功...");
          }else{
            // 失败的用Toast提示用户 加载轮播图失败
            Toast("加载轮播图失败...");
          }
        })
      }
    }
  }
  
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 400px;

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

   
}

</style>
