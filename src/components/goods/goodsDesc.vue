<template>
  <div class="desc-container">
      <h3>{{ info.title }}</h3>

      <div class="desc-content" v-html="info.content"></div>

  </div>
</template>

<script>

export default {
  data(){
    return {
      info:{},
      id:this.$route.params.id
    }
  },
  created(){
    this.gettuwenjieshao()
  },
  methods:{
    gettuwenjieshao(){
      this.$http.get('api/goods/getdesc/'+this.id).then(result=>{
        console.log(result.body)
        if(result.body.status === 0){
          // 成功
          this.info = result.body.message[0]
        }
      })
    }
  }
}
  
</script>

<style lang="less">
  .desc-container{
    padding: 5px;
    h3{
      font-size: 18px;
      color: blue;
    }
    .desc-content{
      img{
        width: 100%;

      }
    }
  }
</style>
