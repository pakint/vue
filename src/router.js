import VueRouter from 'vue-router'



// 导入对应的路由组件

import homeContainer from './components/tabber/homeContainer.vue'
import memberContainer from './components/tabber/memberContainer.vue'
import shopcarContainer from './components/tabber/shopcarContainer.vue'
import searchContainer from './components/tabber/searchContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photoInfo.vue'
import goodsList from './components/goods/goodsList.vue'
import goodsInfo from './components/goods/goodsInfo.vue'
import goodsdesc from './components/goods/goodsDesc.vue'
import goodscomment from './components/goods/goodsComment.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeContainer},
    {path:'/member',component:memberContainer},
    {path:'/shopcar',component:shopcarContainer},
    {path:'/search',component:searchContainer},
    {path:'/home/newsList',component:newsList},
    {path:'/home/newsInfo/:id',component:newsInfo},
    {path:'/home/photoList',component:photoList},
    {path:'/home/photoInfo:id',component:photoInfo},
    {path:'/home/goodsList',component:goodsList},
    {path:'/home/goodsInfo:id',component:goodsInfo},
    {path:'/home/goodsdesc:id',component:goodsdesc,name:'goodsdesc'},
    {path:'/home/goodscomment:id',component:goodscomment,name:'goodscomment'}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router



