<template>

    <div class="newsInfo-container">
      <h1 class="title">{{ newList.title }}</h1>
      <p class="subTitle">
        <span>发表时间:{{ newList.add_time }}</span>
        <span>点击:{{ newList.click }}次</span>
      </p>


      <hr>

      <div class="content" v-html="newList.content"></div>
    </div>
</template>

<script>

  import { Toast } from 'mint-ui'

export default {



  data(){
    return {
      // 将URL地址栏中传递过来的id值挂载到data上 方面以后调用
      id:this.$route.params.id,
      newList:[]
    }
  },
  created(){
    this.getNewsList()
  },
  methods:{
    getNewsList(){
      // 因为我们设置了root根路径 这里获取地址API 写入的地址里不要加/
      this.$http.get('api/getnew/' + this.id).then(result=>{
        console.log(result.body.message)
        if(result.body.status===0){
          // 成功
          this.newList = result.body.message;
        }else {
          // 失败
          Toast('获取新闻内容失败')
        }
      })
    }

  }
}
  
</script>

<style lang="less" scoped>
    .newsInfo-container{
      padding: 0 4px;
      .title{
        font-size: 16px;
        color: red;
        text-align: center;
        margin: 10px 0;
      }
      .subTitle{
        font-size: 14px;
        color: deeppink;
        display: flex;
        justify-content: space-between;
      }
      .content{}
    }

</style>
