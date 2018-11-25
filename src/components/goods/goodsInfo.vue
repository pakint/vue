<template>
  <div class="goodsInfo-container">

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
        <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
   
    <!-- 商品轮播区域 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <swiper :lunbotuList="lunbotuList" isfull="false"></swiper>
					</div>
				</div>
			</div>


    <!-- 商品购买区域 -->
    <div class="mui-card">
				<div class="mui-card-header">{{goodsInfoshangpin.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p class="price">
              市场价：<del>¥{{goodsInfoshangpin.market_price}}</del>&nbsp;&nbsp;销售价：<span>¥{{goodsInfoshangpin.sell_price}}</span>
            </p>
            <p>购买数量：<numberBox @getCount="getSelectedCount" :max="goodsInfoshangpin.stock_quantity"></numberBox></p>
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>
              <mt-button type="danger" size="small" @click="ballFlag= !ballFlag">加入购物车</mt-button>
            </p>
					</div>
				</div>
				
			</div>
			
			


    <!-- 商品参数区域 -->
    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p>商品货号:{{goodsInfoshangpin.goods_no}}</p>
            <p>库存情况:{{goodsInfoshangpin.stock_quantity}}件</p>
            <p>上架时间:{{goodsInfoshangpin.add_time | dateFormat("YYYY-MM-DD HH:mm:ss")}}</p>

            <hr>

           

					</div>
				</div>
				<div class="mui-card-footer">
           <mt-button @click="goDesc(id)" size="large" plain type="primary" class="mui-btn mui-btn-primary mui-btn-outlined">
					图文介绍
				</mt-button>

        <mt-button @click="goComment(id)" size="large" plain type="danger" class="mui-btn mui-btn-danger mui-btn-outlined">
					商品评论
				</mt-button>
        </div>
			</div>

    
  </div>
</template>

<script>


import swiper from '../subcomponents/swiper.vue'
import numberBox from '../subcomponents/goodsInfo-numberBox.vue'

export default {

  data(){
    return {
      id:this.$route.params.id,
      lunbotuList:[],
      goodsInfoshangpin:[],
      ballFlag:false,
      selectedCount:1
      

    }
  },
  created(){
    this.getlunbotu();
    this.getgoodsInfoshangpin();
  },
  methods:{
    getlunbotu(){
      this.$http.get("api/getthumimages/"+this.id).then(result=>{
        if(result.body.status === 0){
          this.lunbotuList = result.body.message;
        }
      })
    },
    getgoodsInfoshangpin(){
      this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
        console.log(result.body)
        if(result.body.status=== 0){
          // 成功
          this.goodsInfoshangpin = result.body.message[0]
          
        }
      })
    },
    goDesc(id){
      // 点击跳转到图文介绍页面
      this.$router.push({name:'goodsdesc',params:{ id }});
    },
    goComment(id){
      // 点击跳转到商品评论页面
      this.$router.push({name:'goodscomment',params:{ id }});
    },
    beforeEnter(el){
      el.style.transform="translate(0,0)";
    },
    enter(el,done){
      el.offsetWidth;

      // 获取小球的位置 

      // 获取小球的初始位置

      const ballFirstPosition = this.$refs.ball.getBoundingClientRect()
      console.log(ballFirstPosition)

      // 获取购物车的位置 
      const badgePosition = document.getElementById('badge').getBoundingClientRect()

      // 获取 横纵坐标的差值

      const distX = badgePosition.left - ballFirstPosition.left
      const distY = badgePosition.top - ballFirstPosition.top





      el.style.transform=`translate(${distX}px,${distY}px)`;
      el.style.transition = "all 0.5s cubic-bezier(0,0,.58,1)";
      done()
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(count){
      this.selectedCount = count;

      console.log('子组件向父组件传递过来的值为:'+this.selectedCount);
      
    }
  },
  components:{
    swiper,
    numberBox
  }
}
  
</script>


<style lang="less" scoped>
.goodsInfo-container{
  background-color: #ccc;
  overflow: hidden;

  // 购物车小球

  .ball{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    left: 153px;
    top: 376px;
    z-index: 999;
    padding: 0;
    transform: translate(88px,230px);
  }
}

.mui-card-content-inner {
  .price {
    span {
      color: red;
      font-size: 18px;
    }
  }
}

.mui-card-footer {
  display: block;
 
 button {
    margin: 10px 0;
    box-shadow: 0 0 8px #999;
 }
}


</style>
