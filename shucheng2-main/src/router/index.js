import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Loading from '../components/Loading.vue'
import HomeCategory from '../page/HomeCategory.vue'
import BooksNew from '../components/BookNew.vue'
import Books from '../views/Books.vue'
import HeaderSearch from '../components/home/HeaderSearch.vue'
import ShopCart from '../views/ShopCart.vue'
import CheckOut from '../views/CheckOut.vue'
import resight from '../components/user/userzhuc.vue'
import login from '../components/user/userlogin.vue'
import xianq from '../page/xianq.vue'
import xianqWW from '../page/xianqWW.vue'
import catory from '../views/catory.vue'
import cateory from '../page/cateory.vue'
import sjhome from '../views/sjhome.vue'
import sjxiangq from '../page/sjxiangq.vue'
import sud from '../views/shud.vue'
import sudanxiangqing from '../page/shudanxiangqing.vue'
import sjxiangqwww from '../page/sjxiangqwww.vue'
import sjsearch from '../views/sjsearch.vue'
import store from '@/store'

// 引入页面组件
Vue.use(VueRouter)
    // 上一个组件的子路由组件
const routes = [
		// 首页的路由地址
		{
			path:'/',
			redirect:{
				name:'Home'
			}
		},
		{
			path:'/home',
			name:'Home',
			components:{
				default:BooksNew,
				header:BooksNew
			},
			meta:{
				title:'书城首页'
			}
		},
		{
			path:'/book',
			name:'BookCategory',
			components:{
				default:Books,
				header:BooksNew,
			},
			meta:{
				title:'书籍分类'
			}
			
		},
		{
			path:'/search',
			name:'BooksSearch',
			components:{
				default:Books,
				header:BooksNew,
			},
			meta:{
				title:'搜索结果'
			},
			
		},
	        {
			path:'/sjsearch',
			name:'sjsearch',
			components:{
				default:sjsearch,
				header:BooksNew,
			},
			meta:{
				title:'搜索结果'
			},
			
		},
		{
			path:'/cart',
			name:'ShopCart',
			components:{
				default:ShopCart,
				header:BooksNew,
			},
			meta:{
				title:'购物车',
				isLogin:true,
			},
			
		},
		{
			path:'/resight',
			name:'resight',
			components:{
				default:resight,
				header:BooksNew,
			},
			meta:{
				title:'注册页面'
			},
			
		},
		{
			path:'/login',
			name:'login',
			components:{
				default:login,
				header:BooksNew,
			},
			meta:{
				title:'登录页面'
			},
			
		},
		{
			path:'/BooksNew',
			name:'BooksNew',
			components:{
				default:BooksNew,
				header:BooksNew,
			},
			meta:{
				title:'实验页面'
			},
			
		},
		{
			path:'/checkout',
			name:'CheckOut',
			components:{
				default:CheckOut,
				header:BooksNew,
			},
			meta:{
				title:'结算页面',
				isLogin:true,
			},
			
		},
		{
			path:'/book/:id',
			name:'xianq',
			components:{
				default:xianq,
				header:BooksNew,
			},
			meta:{
				title:'详情页面',
				isLogin:true,
			},
			
		},
		{
			path:'/sjbook/:id',
			name:'sjxiangq',
			components:{
				default:sjxiangq,
				header:BooksNew,
			},
			meta:{
				title:'详情页面',
				isLogin:true,
			},
			
		},
		{
			path:'/catory',
			name:'catory',
			components:{
				default:catory,
				header:BooksNew,
			},
			meta:{
				title:'分类页面',
				isLogin:true,
			},
		},
		{
			path:'/sjhome',
			name:'sjhome',
			components:{
				default:sjhome,
				header:BooksNew,
			},
			meta:{
				title:'首页',
				isLogin:true,
			},
		},
		{
			path:'/sud',
			name:'sud',
			components:{
				default:sud,
				header:BooksNew,
			},
			meta:{
				title:'书单',
			},
		},
		{
			path:'/book-list/:id',
			name:'sudanxiangqing',
			components:{
				default:sudanxiangqing,
				header:BooksNew,
			},
			meta:{
				title:'cnm',
			},
		}
		
		// {
		// 	path:'/',
		// 	name:'Loading',
		// 	component:Loading,
		// },
		// {
		//     path:'/',
		// 	name:'BooksNew',
		// 	component:BooksNew,
		// },
		
	]
// 实例化路由对象且配置路由规则
const router = new VueRouter({
	// 整个项目的所有路径组成一个数组
	mode:'history',
	base:process.env.BASE_URL,
	routes
});

// router.beforeEach((to,from,next)=>{
// 	if(to.matched.some(url=>url.meta.isLogin)){
// 		if(store.state.user.user){
// 			next();
// 		}
// 	}else{
// 		next({
// 			path:'/login',
// 		});
// 	}
		
// });
router.afterEach((to)=>{
	document.title = to.meta.title
})

// 导出路由实例对象
export default router;
