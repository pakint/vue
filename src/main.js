// 入口文件
console.log('OK')



// 导入 vue 
import Vue from 'vue' 


// 按需导入 Header 组件
import { Header } from 'mint-ui';

Vue.component(Header.name, Header); 

// 导入Mui的样式
import './lib/mui/css/mui.min.css'  




// 导入App.vue 组件
import app from './App.vue'


// 创建 vue 实例对象
var vm = new Vue({
  el:'#app',
  render: function(createElement){
    return createElement(app)
  }
})