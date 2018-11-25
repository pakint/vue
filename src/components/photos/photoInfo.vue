<template>
  <div class="photoInfoContainer">
    <h3>{{ photoInfo.title }}}</h3>

    <p class="photoInfoContainer-title">
      <span>发表时间:{{ photoInfo.add_time | dateFormat }}</span>
      <span>点击次数:{{ photoInfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <div class="chums">

      <vue-preview :slides="slide1"></vue-preview>
    </div>


    <!-- 图片内容区域 -->
    <div class="content" v-html="photoInfo.content"></div>
    
    <!-- 放置一个现成的 评论子组件 -->

    <comm :id="id"></comm>

  </div>
</template>

<script>

// 导入评论子组件

  import comm from '../../components/subcomponents/comment.vue'
  
  export default {
    data(){
      return {
        id:this.$route.params.id,
        photoInfo:{},
        // 缩略图数组
        slide1:[] 
      }
    },
    created(){
      this.getPhotoInfo()
      this.getThumbs()
    },
    methods:{
      getPhotoInfo(){
        this.$http.get("api/getimageInfo/" + this.id).then(result=>{
          // console.log(result.body.message);
          if(result.body.status === 0){
            // 成功

            this.photoInfo = result.body.message[0];
            
          }
        })
      },
      // 获取缩略图
      getThumbs(){
        this.$http.get('api/getthumimages/'+this.id).then(result=>{
          console.log(result.body.message);
          if(result.body.status === 0){
            // 成功
            // 循环 每个图片数据 补全图片的宽和高
            result.body.message.forEach(item=>{
              // console.log(item)
              item.w = 600;
              item.h = 400;
              item.msrc = item.src;
            })

            this.slide1 = result.body.message;
            // console.log(this.slide1)
          }
        })
      }

    },
    components:{
      comm
    }
  }


</script>


<style lang="less">

.photoInfoContainer{
  padding: 3px;
  h3{
    font-size: 16px;
    text-align: center;
    color: aqua;
    margin-bottom: 20px;
  }
  .photoInfoContainer-title{
    display: flex;
    justify-content: space-between;
    font-size: 12px;

  }
  .content{
    font-size: 14px;
    line-height: 30px;
  }

  
}

.chums{
  
padding: 15px;
  .my-gallery{
    display: flex;
  flex-wrap: wrap;
    figure{
      justify-content: space-between;
      width: 30%;
      margin: 0;
      a{
        img{

        }
      }
    }
  }
}



</style>
