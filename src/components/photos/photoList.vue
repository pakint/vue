<template>

<!-- 顶部滑动导航条区域 -->
  <div>
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in creat" :key="item.id" @click="getPhotoListByCateId(item.id)">
							{{ item.title }}
						</a>
					</div>
				</div>

			</div>

  <!-- 图片列表区域 -->

        <ul class="photoList">
              <router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoInfo' + item.id">
                <img v-lazy="item.img_url">

                  <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-zhaiyao">{{ item.zhaiyao }}</div>
                  </div>
              </router-link>
        </ul>


      
  </div>

  


</template>

<script>

import mui from '../../lib/mui/js/mui.min.js';



export default {
  data(){
    return {
      creat:[],
      list:[]
    }
  },
  created(){
    this.getcategrop(),
    this.getPhotoListByCateId(0)
  },
  mounted(){
    mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods:{
    getcategrop(){
      this.$http.get('api/getimgcategory').then(result=>{
        
        if(result.body.status === 0){
          // 成功
          result.body.message.unshift({title:'全部',id:0})
          this.creat = result.body.message
          
        }
      })
    },
    getPhotoListByCateId(cateid){
      this.$http.get('api/getimages/'+cateid).then(result=>{
        // console.log(result.body.message)
        if(result.body.status===0){
          // 成功
          this.list = result.body.message;
        }
      })
    }
  }
}
  
</script>


<style lang="less" scoped>
  * { touch-action: pan-y; }



  .photoList{
    margin: 0;
    padding: 10px;
    list-style: none;
    margin-bottom: 0;
    
    li {
      position: relative;
      text-align: center;
      background-color: #ccc;
      margin-bottom: 20px;
      img{
        width: 100%;
        vertical-align: middle;
        box-shadow: 0 0 9px #999;  
      }
      // 图片列表 中图片的样式
      img[lazy=loading] {
          width: 40px;
          height: 300px;
          margin: auto;
        }


        .info{
          position: absolute;
          text-align: left;
          color: white;
          bottom: 0;
          background: rgba(27, 27, 27, 0.7);
          max-height: 85px;

          .info-title{
           
            font-size: 15px;
          }
          .info-zhaiyao{
            font-size: 12px;
          }
        }

    }

  }


  
    

</style>
