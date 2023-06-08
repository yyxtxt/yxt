<template>
	<div>
		
		<div class="home">
			<div>
				<img src="../assets/banner/logo.png">
			</div>
			<div>
				<HeaderSeach></HeaderSeach>
			</div>
			<div>
				<HeaderCart></HeaderCart>
			</div>
			<div v-if="!user">
				<span>你好，请</span>
				<router-link to="/login">登录</router-link>
				<router-link to="/enroll">免费注册</router-link>
			</div>
			<div v-else>
				欢迎，{{user.username}},<a href="#" @click="logout">退出登录</a>
			</div>
			
			<div class="el-footer">
				<HeaderMenu></HeaderMenu>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState , mapMutations} from 'vuex'
	
	import Loading from './Loading.vue'
	import HeaderSeach from './home/HeaderSearch.vue'
	import HeaderCart from './home/HeaderCart.vue'
	import HeaderMenu from './home/HeaderMenu.vue'
	export default{
		name:'Header',
		components:{
			HeaderSeach,
			HeaderCart,
			HeaderMenu,
		},
		computed:{
			...mapState('user' , ['user']),
		},
		methods:{
			...mapMutations('user' , ['delUser']),
			logout(){
				this.delUser()
				if(this.$route.name == 'ShopCart' || this.$route.name == 'checkOut'){
					this.$router.push('/')
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.home{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	div{
		margin: auto;
	}
	.el-footer{
		width: 100%;
		margin: 0 !important;
		padding: 0 !important;
	}
</style>
