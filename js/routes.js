import home from './pages/home.js'
import about from './pages/about.js'
import emailApp from './pages/email/email-app.js';
import emailDetails from './pages/email/email-details.js';
import emailCompose from './pages/email/email-compose.js';
import mapApp from './pages/map/map-app.js';



const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/email', component: emailApp },
  { path: '/email/compose', component: emailCompose },
  { path: '/email/:emailId?', component: emailDetails },
  { path: '/map', component: mapApp },



];

Vue.use(VueRouter);
var myRouter = new VueRouter({ routes })

export default myRouter;




// const routes = [
//   { path: '/', component: home },
//   { path: '/about', component: about },
//   {
//     path: '/email:id?', component: emailApp,
//     children: [
//       {
//         // UserProfile will be rendered inside User's <router-view>
//         // when /user/:id/profile is matched
//         path: 'compose',
//         component: emailCompose
//       },
//       {
//         // UserPosts will be rendered inside User's <router-view>
//         // when /user/:id/posts is matched
//         path: ':emailId?',
//         component: emailDetails
//       }
//     ]
//   },
 
//   { path: '/map', component: mapApp },



// ];
