<template>
	<div>
		<form>
			<p>用户名：<input type="text" v-model.lazy.trim="username" /></p>
			<p>密码：<input type="password" v-model.lazy.trim="password" /></p>
			<input type="button" value="登录" @click="login" style="margin-right: 20px;"/>
			<router-link to="/sj">手机号登录</router-link>
		</form>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default{
		name:'login',
		data(){
			return{
				username:'',
				password:''
			}
		},
		methods:{
			...mapMutations('user' , ['saveUser']),
			checkForm(){
				if( !this.username || !this.password){
					this.$message.error('用户名密码不允许为空')
					return false
				}
				return true
			},
			login(){
				let isLogin = this.checkForm()
				if( !isLogin ){
					this.$message.error('登录信息未达到提交标准，请重新审核后提交')
					return false
				}
				this.$axios.post('/user/login',{
					username:this.username,
					password:this.password,
				}).then( (res)=>{
					console.log(res)
					if( res.data.code ==200){
						//登录成功
						//1.将登录的信息存入
						this.saveUser(res.data.data)
						this.username = ''
						this.password = ''
						
						//获取路由参数
						// let respath = this.$route.query
						// if(respath){
						// 	let aa = this.$route.query.redirect
							
						// this.$router.replace(aa).catch( (err)=>{})
						// }else{
							this.$router.replace('/').catch( (err)=>{})
						// }
						
					}else if(res.data.code == 500 ){
						this.$message.error('用户登录失败，请重新提交')
						return false
					}else if(res.data.code ==400){
						this.$message.error('用户名或密码错误，请重新提交')
						return false
						}
				}).catch( (error)=> console.log(error))
				
				
			}
		}
	}
</script>

<style>
</style>
