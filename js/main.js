/* */
import router from './routes.js'
import userMsg from './cmps/user-msg.js'


new Vue({
    el: '#app',
    router,
    components: {
      userMsg
    }
  })