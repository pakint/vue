<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input readonly id="test" class="mui-input-numbox" type="number" :value="initCount" @change="selectedCount" ref="ballValue" />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
</template>


<script>

import mui from '../../lib/mui/js/mui.min.js'

export default {
  mounted(){
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  methods:{
    selectedCount(){
      // 触发了change事件
      // 数量改变的时候什么也不做
      // console.log(this.$refs.ballValue.value);
      // 每当数量值改变，则立即把最新的数量同步到购物车中的 store 中 覆盖之间的数量值
      this.$store.commit('updateGoodsInfo',{id:this.goodsInfoshangpinId,count:this.$refs.ballValue.value});

    }

    
  },

  props: ["initCount","goodsInfoshangpinId"]
}
  
</script>


<style lang="less" scoped>

</style>
