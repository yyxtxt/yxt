import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Loading from '../components/Loading.vue'
import BooksNew from '../components/BooksNew.vue'
// import HeaderSeach from '../components/home/HeaderSearch.vue'
import Headerxs from '../components/Headerxs.vue'
// import HeaderSeach from '../components/home/HeaderSearch.vue'
import Books from '../views/Books.vue'
// import BooksNew from '../components/BooksNew.vue'
import Header from '../components/Header.vue'
import login from '../components/Login/login.vue'
import enroll from '../components/Login/enroll.vue'
import sj from '../components/Login/sj.vue'
import checkout from '../views/CheckOut.vue'
import ShopCart from '../views/ShopCart.vue'
// import BookDetail from '../views/BookDetail.vue'
import BookDetail from '../views/BookDetail.vue'
//@表示的是src文件夹，vue为了更方便读取src的内部文件所设置的相对路径
import store from '@/store'

Vue.use(VueRouter)


const routes = [
	{
		path:'/',
		// name:'htgl',
		// component:htgl,
		redirect:'/header/home'
	},
	{
		path:'/header',
		name:'Header',
		component:Header,
		children:[
			{
				path:'home',
				name:'Home',
				components:{
					default:Home,
					header:Header,
				}
			},
			{
				path:'headerxs',
				name:'Headerxs',
				component:Headerxs
			},
			{
				path:'/search',
				name:'BooksSearch',
				components:{
					default:Books,
					header:Header,
				}
			},
			{
				path:'/category/:id',
				name:'BookCategory',
				components:{
				   default:Books,
				   header:Header,
				},
			},
			{
				path:'/shopcart',
				name:'ShopCart',
				components:{
					default:ShopCart,
					header:Header
				}
			},
			{
				   path:'/book/:id',
				   name:'BookDetail',
				   components:{
					   header:Header,
					  default:BookDetail,
				   },
				   meta:{
				   	title:'书籍详情'
				   }
			},
			
			{
				path:'/checkout',
				name:'checkout',
				components:{
					default:checkout,
					header:Header,
				}
			},
			
		]
	},
	{
		path:'/login',
		name:'login',
		components:{
			default:login,
		},
	},
	{
		path:'/enroll',
		name:'enroll',
		components:{
			default:enroll,
		},
	},
	{
		path:'/sj',
		name:'sj',
		components:{
			default:sj
		}
	}
	

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局前置路由
// router.beforeEach( (to , from , next)=>{
	
// 	if( to.matched.some( url => url.meta.isLogin)){
// 		if( store.state.user.user){
// 			next()
// 		}else{
// 			next({
// 				path:'/Login'
// 			})
// 		}
// 	}
// })

//设置路由守卫  全局后置 当程序进度到目标组件之后，执行的一系列操作
// to参数  目标路由

router.afterEach( (to)=>{
	document.title = to.meta.title;
})



export default router
