<template>
  <div>

    <!-- 引入进来需要手动给他设置一个高度 -->
    
    <swiper :lunbotuList="lunbotuList" isfull="true"></swiper>

    
    <!-- mui 的 grid-default组件 九宫格 改造成项目需求的 六宫格 工程 -->

      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newsList">
		                    <img src="../../images/menu1(1).png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photoList">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goodsList">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 


    <h1>这是首页路由子组件</h1>
  </div>
</template>

<script>

  // 导入 Toast 组件
  import { Toast } from 'mint-ui'
  
  import swiper from '../subcomponents/swiper.vue'

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
        
        this.$http.get("api/getlunbo").then(result=>{
          // console.log(result.body);
          if(result.body.status === 0){

            
            result.body.message.forEach(item=>{
              item.img = item.src;

            })
            // 成功的
            this.lunbotuList = result.body.message;
            Toast("加载轮播图成功...");
          }else{
            // 失败的用Toast提示用户 加载轮播图失败
            Toast("加载轮播图失败...");
          }
        })
      }
    },
    components:{
      swiper
    }
  }
  
</script>

<style lang="less" scoped>



.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border-top: none;
  border-left: none;

  img {
    width: 50%;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border-right: none;
  border-bottom: none;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
  font-size: 12px;
}



</style>




