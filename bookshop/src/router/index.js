import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Loading from '../components/Loading.vue'
import BooksNew from '../components/BooksNew.vue'
import Headerxs from '../components/Headerxs.vue'
import Books from '../views/Books.vue'
import Header from '../components/Header.vue'
import login from '../components/Login/login.vue'
import enroll from '../components/Login/enroll.vue'
import sj from '../components/Login/sj.vue'
import checkout from '../views/CheckOut.vue'
import ShopCart from '../views/ShopCart.vue'
import BookDetail from '../views/BookDetail.vue'
//@表示的是src文件夹，vue为了更方便读取src的内部文件所设置的相对路径
import store from '@/store'

Vue.use(VueRouter)


const routes = [
	{
		path:'/',
		redirect:'/header/home',
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
				},
				meta:{
					title:'书城'
				},
			},
			{
				path:'headerxs',
				name:'Headerxs',
				component:Headerxs,
				meta:{
					title:'书城'
				},
			},
			{
				path:'/search',
				name:'BooksSearch',
				components:{
					default:Books,
					header:Header,
				},
				meta:{
					title:'书城'
				},
			},
			{
				path:'/category/:id',
				name:'BookCategory',
				components:{
				   default:Books,
				   header:Header,
				},
				meta:{
					title:'书城'
				},
			},
			{
				path:'/shopcart',
				name:'ShopCart',
				components:{
					default:ShopCart,
					header:Header
				},
				meta:{
					title:'书城'
				},
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
				},
				meta:{
					title:'书城'
				},
			},
		]
	},
	{
		path:'/login',
		name:'login',
		components:{
			default:login,
		},
		meta:{
			title:'登录'
		},
	},
	{
		path:'/enroll',
		name:'enroll',
		components:{
			default:enroll,
		},
		meta:{
			title:'注册'
		},
	},
	{
		path:'/sj',
		name:'sj',
		components:{
			default:sj
		},
		meta:{
			title:'书城'
		},
	}
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach( (to)=>{
	document.title = to.meta.title;
})
export default router
