<template>
  <div class="goods-list">
    <!-- 第一种跳转方式 -->
    <router-link tag="div" :to="'/home/goodsInfo'+item.id" class="goods-item" v-for="item in goodsList" :key="item.id">
      <img :src="item.img_url" alt="">
      
      <h3>{{ item.title }}</h3> 
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </router-link>
    
    <!-- 使用Vue-router中的链式导航进行跳转 -->

    <!-- <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url" alt="">
      
      <h3>{{ item.title }}</h3> 
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div> -->
    

    <mt-button size="large" type="danger" @click="getGoodsListGY">加载更多</mt-button>
  </div>
</template>



<script>

export default {
  data(){
    return {
      pageindex:1,
      goodsList:[]
    }
  },
  created(){
    this.getGoodsList()
  },
  methods:{
    getGoodsList(){
      this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
        console.log(result.body)
        if(result.body.status === 0){
          // 成功
          this.goodsList = this.goodsList.concat(result.body.message);
        }
      })
    },
    getGoodsListGY(){
      this.pageindex++;
      this.getGoodsList();
    },
    goDetail(id){
      this.$router.push("/home/goodsInfo/"+id)
    }
  }
}
  
</script>


<style lang="less" scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 12px;
    justify-content: space-between;

    .goods-item{
      width: 48%;
      border: 1px solid #ccc;
      box-shadow: 0 0 7px #999;
      margin: 8px 0;
      padding: 5px;
      display: flex;
      flex-direction: column;
      min-height: 293px;

      img{
        width: 100%;
      }
      h3{
        font-size: 14px;
      }
      .info{
        background-color: #eee;
        padding: 2px;
        
        .price{
          margin: 0;
          padding: 5px;
          .now{
            color: red;
            font-size: 18px;
          }
          .old{
            color: #ccc;
            text-decoration: line-through;
            font-size: 12px;
            margin-left: 15px;
          }
        }
        .sell{
          display: flex;
          justify-content: space-between;
          margin: 0;
          font-size: 13px;
        }
      }
    }
  }
</style>
