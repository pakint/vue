<template>
    <div class="mui-numbox" data-numbox-min='1'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" @change="selectedCount" ref="ballValue" />
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
      console.log(this.$refs.ballValue.value);
      this.$emit('getCount', parseInt(this.$refs.ballValue.value));

    }
  },
  props:["max"],
  watch:{
    "max":function(newVal,oldVal){
      mui(".mui-numbox").numbox().setOption("max",newVal);
    }
  }
}
  
</script>


<style lang="less" scoped>

</style>
