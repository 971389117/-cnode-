// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
Vue.prototype.$http=Axios
Vue.config.productionTip = false

Vue.filter('formatData',post=>{
  if(post.top){
    return '置顶'
  }else if(post.good){
    return '精华'
  }else if(post.tab==='share'){
    return '共享'
  }else if(post.tab==='ask'){
    return '问答'
  }
})
Vue.filter('formatDate', str=>{
  let date=new Date(str)
  let currentDate=new Date()
  let timeDifferent=currentDate-date
  if(timeDifferent/1000<30){
    return '刚刚'
  }else if(timeDifferent/1000<60){
    return  parseInt(timeDifferent/1000)+'秒前'
  }else if(timeDifferent/60000<60){
    return parseInt(timeDifferent/60000)+'分钟前'
  }else if(timeDifferent/3600000<24){
    return parseInt(timeDifferent/3600000)+'小时前'
  }else if(timeDifferent/86400000<31){
    return parseInt(timeDifferent/86400000)+'天前'
  }else if(timeDifferent/2678400000<12){
    return parseInt(timeDifferent/2678400000)+'月前'
  }else{
    return parseInt(timeDifferent/31536000000)+'年前'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
