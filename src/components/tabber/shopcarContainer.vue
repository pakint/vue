<template>
  <div class="shopcar-container">


        <!-- 商品列表项区域 -->
            <div class="goodsList">
              <div class="mui-card" v-for="item in goodsList" :key="item.id">
                <div class="mui-card-content">
                  <div class="mui-card-content-inner">

                    <mt-switch 
                    v-model="$store.getters.getGoodsSelected[item.id]"
                    @change="GoodsSelected(item.id,$store.getters.getGoodsSelected[item.id])"
                    ></mt-switch>
                    <img :src="item.thumb_path" alt="">

                    <div class="info">
                      <h1>{{ item.title }}</h1>
                      <p>
                        <span class="price">¥{{ item.sell_price }}</span>
                        <numBox :initCount="$store.getters.getGoodsCount[item.id]" :goodsInfoshangpinId="item.id"></numBox>
                        <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        <!-- 商品结算区域 -->

        <div class="mui-card">
				  <div class="mui-card-content">
            <div class="mui-card-content-inner jiesuan">

              <div class="left">
                <p>总计(不含运费)</p>
                <P>已勾选商品：<strong>{{ $store.getters.getGoodsCountAndaMount.count }}</strong> 件，总价¥：<strong>{{ $store.getters.getGoodsCountAndaMount.amount }}</strong> 元</P>
              </div>

              <mt-button type="danger">去结算</mt-button>

            </div>
				  </div>
          
			  </div>


        <p>{{ $store.getters.getGoodsSelected }}</p>

       
  </div>
   
</template>

<script>

// 引入shopCar_numBox.vue 组件
import numBox from '../subcomponents/shopCar_numBox.vue'

export default {
  data(){
    return {
      // 购物车中所有商品的数据
      goodsList:[]
    }
  },
  created(){
    this.getGoodsListCar();
  },
  methods:{
    getGoodsListCar(){

      // 1,获取到 store中所有的商品的ID 然后拼接出来一个用逗号分隔的字符串

        var idArr = [];

        this.$store.state.car.forEach(item=>idArr.push(item.id));
        // console.log(idArr)
        
        // 如果购物车中没有商品 则直接返回 不需要请求接口，否则会报错
        if(idArr.length <= 0){
          return;
        }

      this.$http.get("api/goods/getshopcarlist/"+ idArr.join(',')).then(result=>{
              // console.log(result.body.message);
              if(result.body.status === 0){
                // 成功
                
                this.goodsList = result.body.message;
              }
            })
    },
    remove(id,index){
      this.goodsList.splice(index,1);
      this.$store.commit("deleItemIdInfo",id);
    },
    GoodsSelected(id,val){
      console.log(id+'-----'+val)
      this.$store.commit('upDataGoodsSelected',{id,selected:val})
    }
  },
  components:{
    numBox
  }
}
  
</script>

<style lang="less" scoped>

.shopcar-container{
  background-color: #ccc;
  overflow: hidden;

  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      strong{
        color: red;
        font-size: 16px;
      }
    }
  }

  .goodsList{
    .mui-card-content-inner{
      display: flex;
      align-items: center;
      
    }
    img {
      width: 60px;
      height: 60px;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h1{
        font-size: 13px;
      }
      .price {
        color: red;
      }
    }
    
  }
}


</style>
