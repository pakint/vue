<template>
  <div>
    
    <!-- 新闻列表 采用的是 mui 中 的 media-list 组件 -->

      <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link v-bind:to="'/home/newsInfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p>
                <!-- 使用了全局过滤器 管道符 设置了只显示 时间格式 -->
                <span>发表时间:{{ item.add_time | dateFormat("HH:mm:ss") }}</span>
                <span>点击:{{ item.click }}次</span>
              </p>
						</div>
					</router-link>
				</li>

        <!-- 以下是静态假数据 作为测试 -->
				<!-- <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/40422470?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p>
                <span>发表时间:2018-11-21</span>
                <span>点击:1000次</span>
              </p>
						</div>
					</a>
				</li> -->
        

			</ul>

  </div>
</template>


<script>

import { Toast } from 'mint-ui'

export default {
  data(){
    return {
      newsList:[]
    }
  },
  created(){
    this.getNewsList();
  },
  methods:{
    getNewsList(){
      this.$http.get('api/getnewslist').then(result=>{
        // console.log(result.body.message)
        if(result.body.status===0){
          //成功
          this.newsList = result.body.message
          
          
        }else {
          //失败
          Toast('导入新闻列表数据失败')
        }
      })
    }
  }
}
  
</script>


<style lang="less" scoped>
  .mui-table-view{
    li{
      h1{
        font-size: 13px;
      }
      p{
        font-size: 12px;
        color: darkgreen;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
