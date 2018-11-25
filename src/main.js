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

// 设置请求数据的根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899'
// 如果您的Web服务器无法处理编码为的请求application/json，则可以启用该emulateJSON选项。这将以application/x-www-form-urlencodedMIME类型的形式发送请求，就像从普通的HTML表单一样。

Vue.http.options.emulateJSON = true;

// 按需导入 mint-ui 组件   注意如果是按需导入的话  懒加载的 转圈小组件 不能实现  必须要使用mint-ui全部加载模式
// import { Header,Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// 注册导入的组件
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem); 
// Vue.component(Button.name, Button); 
// Vue.use(Lazyload);
// 导入Mui的样式
// import './lib/mui/css/mui.min.css'  


// 完整引入mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import './lib/mui/css/mui.min.css'






// 导入图片浏览缩略图插件
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)




// 导入扩展的字体图标样式
import './lib/mui/css/icons-extra.css'


// 导入格式化时间的插件
import moment from 'moment'

Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})

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