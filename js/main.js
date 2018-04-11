/* */
import router from './routes.js'
import userMsg from './cmps/user-msg.js'
import navbar from './cmps/navbar.js'


new Vue({
    el: '#app',
    router,
    components: {
      navbar,
      userMsg
    }
  })