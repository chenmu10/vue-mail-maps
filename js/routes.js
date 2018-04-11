import home from './pages/home.js'
import about from './pages/about.js'


const routes = [
    {path: '/', component: home},
    {path: '/about', component: about},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;