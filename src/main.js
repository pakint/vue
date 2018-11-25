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


// 导入 vuex包
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建一个store 实例 得到一个数据仓储对象
var store = new Vuex.store({
  // 可以把 state:{} 想象成是data:{} 是用来保存数据用的 
  // 如果在组件中 想访问 store 中的数据 只能通过 this.stort.state. *** 来访问
  state: {
    
  },
  mutations:{
    // 如果要操作 store 中的 state 值，只能通过mutations提供的方法，才能操作对应的数据
    // 不推荐直接操作 state中的数据，因为，万一导致了数据的紊乱，不能快速的定位到错误的原因，因为每个组件都有可能有操作数据的方法
   
      // 注意：如果组件想要调用mutations中的方法，只能通过 this.store.commit()
    // 如果 组件，想要修改数据，必须使用mutations提供的方法，需要通过this.store.commit(\'方法的名称\',唯一的一个参数)
    
  },
  getters:{
    // 注意这里的getters 只负责对外提供数据，不负责修改数据，如果想要修改state中的数据请去找mutations
    // 经过咱们回顾对比，发现getters中的方法，和组件中的过滤器比较类似，因为过滤器和getters都没有修改原数据，都是把原数据做了一层包装，提供给了调用者，
    // 其次：getters和computed也比较像，只要state中的数据发生变化了，那么，如果getters正好也引用了这个数据，那么就会立即触发getters的重新求值
  
    // 如果store中 state 上的数据，在对外提供的时候，需要做一层包装，那么，推荐使用getters,如果需要使用getters,则用this.store.getters.***
  }
})

// 导入App.vue 组件
import app from './App.vue'


// 创建 vue 实例对象
var vm = new Vue({
  el:'#app',
  render: function(createElement){
    return createElement(app)
  },
  router,
  store
})




