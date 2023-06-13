<template>
	<div class="waik">
		<p>登录页面</p>
		<div class="d">
			<div class="zi">用户名：</div><input class="wkuan" type="text" v-model.lazy.trim="username" />
		</div>
		<div class="d">
			<div class="zi">密码：</div><input class="wkuan" type="password" v-model.lazy.trim="password" />
		</div>
		<input class="wkuan1" type="button" value="确定" @click="login" />
	</div>
</template>

<script>
	import {mapMutations} from 'vuex';
	export default{
		name:'login',
		data(){return{username:'',password:''}},
		methods:{
			...mapMutations('user',['saveUser']),
			checkForm(){
				if(!this.username||!this.password){
					this.$message.error('用户名和密码都不允许为空！');
					return false;
				}
				return true;
			},
			login(){
				let isLogin = this.checkForm();
				if(!isLogin){
					this.$message.error('登录信息未达到提交标准，请重新核对后提交！');
					return false;
				}
				
				this.$axios.post('/user/login',{
					username:this.username,
					password:this.password
				}).then((res)=>{
					console.log(res)
					if(res.data.code==200){
						this.saveUser(res.data.data);
						this.username='',
						this.password='',
						this.$router.replace('/')
						
					}else if(res.data.code==500){
						this.$message.error('用户登录失败，请重新提交');
						return false;
					}else if(res.data.code==400){
						this.$message.error('用户名或密码错误，请重新核对后在登录！');
						return false;
					}
				}).catch((error)=> console.log(error))
			}
		}
	}
</script>

<style scoped>
	.waik{
		width: 60%;
		margin: auto;
		background-color: gold;
		
	}
	.d{
		text-align: center;
		width: 80%;
		margin: auto;
		display: flex;
	}
	.wkuan{
		width: 90%;
		height: 50px;
		margin-bottom: 30px;
	}
	.wkuan1{
		width: 80%;
		height: 50px;
		background-color: deepskyblue;
		margin-bottom: 30px;
	}
	.zi{
		width: 10%;
		text-align: right;
		line-height: 60px;
	}
</style>
