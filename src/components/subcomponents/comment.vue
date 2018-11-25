<template>
    <div class="comment-box">
      <!-- <h3>发表评论</h3> -->
      <hr>
      <textarea placeholder="请发表你的感慨(最多bb60字)" maxlength="60" v-model="msg"></textarea>
      <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
      <div class="cmt-list">
        <transition-group>
          <div class="cmt-item" v-for="(item,i) in comment" :key="i ">
            <div class="cmt-title">
              第{{ i+1 }}楼:&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dateFormat("YYYY-MM-DD HH:mm:ss")}}
            </div>
            <div class="cmt-body" v-html="item.content == '' || item.content =='undefined' ?'此用户很懒没有留下任何东西':item.content">
                
            </div>
          </div>
        </transition-group>
        <!-- <div class="cmt-item">
          <div class="cmt-title">
            第一楼:&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018-11-22
          </div>
          <div class="cmt-body">
              锄禾日当午，干你好辛苦，要问累不累，汇源肾宝片，来干
          </div>
        </div>
        <div class="cmt-item">
          <div class="cmt-title">
            第一楼:&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018-11-22
          </div>
          <div class="cmt-body">
              锄禾日当午，干你好辛苦，要问累不累，汇源肾宝片，来干
          </div>
        </div>
        <div class="cmt-item">
          <div class="cmt-title">
            第一楼:&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018-11-22
          </div>
          <div class="cmt-body">
              锄禾日当午，干你好辛苦，要问累不累，汇源肾宝片，来干
          </div>
        </div>
        <div class="cmt-item">
          <div class="cmt-title">
            第一楼:&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018-11-22
          </div>
          <div class="cmt-body">
              锄禾日当午，干你好辛苦，要问累不累，汇源肾宝片，来干
          </div>
        </div>
        <div class="cmt-item">
          <div class="cmt-title">
            第一楼:&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018-11-22
          </div>
          <div class="cmt-body">
              锄禾日当午，干你好辛苦，要问累不累，汇源肾宝片，来干
          </div>
        </div>
        <div class="cmt-item">
          <div class="cmt-title">
            第一楼:&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018-11-22
          </div>
          <div class="cmt-body">
              锄禾日当午，干你好辛苦，要问累不累，汇源肾宝片，来干
          </div>
        </div> -->
      </div>

      <mt-button type="danger" size="large" plain @click="jiazaigengduo">加载更多...</mt-button>
    </div>
</template>


<script>

import { Toast } from 'mint-ui'
export default {
  data(){
    return {
      comment:[],
      pageindex:1,
      msg:''
    }
  },
  created(){
    this.getComment()
  },
  props:["id"],
  methods:{
    getComment(){
      this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageindex).then(result=>{
        // console.log(result.body.message);
        if(result.body.status === 0){
          // 成功
          this.comment = this.comment.concat(result.body.message)
        }else {
          // 失败
          Toast('获取评论失败')
        }
      })
    },
    jiazaigengduo(){
      this.pageindex ++;
      this.getComment();
    },
    postComment(){

      if(this.msg.trim().length === 0){
        return Toast('输入内容不能为空，请重新输入')
      }
      
      this.$http.post('api/postcomment/'+ this.$route.params.id,{ content:this.msg.trim() }).then(result=>{
          console.log(this.id)
          console.log(result.body.message)
        if(result.body.status===0){
          // 成功

          var cmt = {
            add_time: Date.now(),
            user_name: '忧伤且华丽De大表哥',
            content: this.msg.trim()
          }

          this.comment.unshift(cmt);
          this.msg = '';
        }else{
          // 失败
          Toast('获取评论数据失败');
        }
      })
    }
  }
}



  

</script>



<style lang="less" scoped>
.comment-box{
  h3{ font-size: 18px;padding: 3px; }
  textarea{ color: #666;font-size: 14px; }
  .cmt-list{
    font-size: 14px;
    .cmt-item{
      margin: 5px 0;
      .cmt-title{ background-color: #999;line-height: 40px; }
      .cmt-body{ text-indent: 30px;line-height: 40px; }
    }
  }
}


.v-enter{
		opacity: 0;
		transform: translateY(-100%);
		// position: absolute;
	}
	.v-leave-to{
		opacity: 0;
		transform: translateY(100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 5s ease;
	}
</style>
