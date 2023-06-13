<template>
	<div style="width: 100%;height: 140px;">
		<div class="wid">
			<div class="img">
				<img class="img1" src="../assets/img/logo.png" />
			</div>
			<HeaderSearch></HeaderSearch>
			<HeaderCart></HeaderCart>
			<div class="dl">
				<span v-if="!user">你好，请<router-link to="/login" style="font-size: 10px;">登录</router-link>&emsp;<router-link to="/resight" style="font-size: 10px;">免费注册</router-link></span>
				<span v-else>欢迎您，{{user.username}},<a href="#" @click="logout">退出登录</a></span>
			</div>
			<HeaderMenu></HeaderMenu>
		</div>
	</div>
	
	
</template>

<script>
	import {mapState,mapMutations} from 'vuex';
	import HeaderSearch from '../components/home/HeaderSearch.vue'
	import HeaderCart from '../components/home/HeaderCart.vue'
	import HeaderMenu from '../components/home/HeaderMenu.vue'
	export default{
		name:'Header',
		components:{
			HeaderSearch,HeaderCart,HeaderMenu
		},
		computed:{
			...mapState('user',['user']),
		},
		data(){
			return{
				axiosCateList:[],
				axiosHotList:[],
				axiosNewBookList:[],
			}
		},
		methods:{
			...mapMutations('user',['delUser']),
			logout(){
				this.delUser();
				
			}
		}
	}
</script>

<style scoped>
	.wid{
		width: 100%;
		border: 1px solid red;
		height: 50%;
		display: flex;
		flex-wrap: wrap;
		
	}
	.img{
		width: 20%;
		height: 100%;
	}
	.img1{
		width: 50%;
		height: 100%;
	}
	.dl{
		margin: auto;
		width: 20%;
	}
	.dl span a{
		
	}
	.zj{
		width: 30%;
		margin: auto;
		display: flex;
	}
	.gouwuc{
		width: 30%;
		margin: auto;
	}
	.h6{
		width: 100%;
		background-color: #d9defe;
	}
	.el-menu-demo{
		width: 30%;
		margin: auto;
	}
</style>
