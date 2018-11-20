// 入口文件
console.log('OK')



// 导入 vue 
import Vue from 'vue' 


// 导入路由
import VueRouter from 'vue-router'

// 安装路由
Vue.use(VueRouter)

// 导入自己的路由模块
import router from './router.js'

// 导入 vue-resource 模块
import VueResource from 'vue-resource'
// 安装 vue-resource
Vue.use(VueResource)


// 按需导入 Header 组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
// 注册导入的组件
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem); 

// 导入Mui的样式
import './lib/mui/css/mui.min.css'  

// 导入扩展的字体图标样式
import './lib/mui/css/icons-extra.css'




// 导入App.vue 组件
import app from './App.vue'


// 创建 vue 实例对象
var vm = new Vue({
  el:'#app',
  render: function(createElement){
    return createElement(app)
  },
  router
})