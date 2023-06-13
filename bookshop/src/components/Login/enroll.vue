<template>
	<div>
		<form>
			<p>用户名：<input type="text" v-model.lazy.trim="username" /></p>
			<p>密码：<input type="password" v-model.lazy.trim='password' /></p>
			<p>确认密码：<input type="password" v-model.lazy.trim='password2' /></p>
			<p>手机号码：<input type="text" v-model.lazy.trim='mobile' /></p>
			<input type="button" value="注册" @click="register" />
			
		</form>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default{
		name:'enroll',
		data(){
			return{
				username :'',
				password:'',
				password2:'',
				mobile :'',
			}
		},
		watch:{
			username( newVal){
				if(newVal){
					this.$axios.get('/user/'+newVal).then( (res)=>{
						if( res.data.code == 200){
							let isLogin = res.data.data
							if(isLogin){
								this.$message.error('用户名已存在')
								return false
							}
						}
					}).catch( (error)=> console.log(error))
				}
			}
		},
		methods:{
			...mapMutations('user' , ['saveUser']),
			checkForm(){
				if( !this.username || !this.password || !this.password2 || !this.mobile){
					this.$message.error('不允许提交空白注册信息')
					return false
				}
				if(this.password != this.password2){
					this.$message.error('两次密码不一致')
					return false
				}
				return true
			},
			register(){
				let isReg = this.checkForm()
				if(!isReg){
					this.$message.error('表单内存在未达到要求的数据,请重新注册')
					return false
				}
				this.$axios.post('/user/register' , {
					username : this.username,
					password : this.password,
					mobile : this.mobile,
				}).then( (res)=>{
					console.log(res)
					if(res.data.code ==200){
						//注册成功
						this.saveUser( res.data.data)
						this.username ='',
						this.password='',
						this.password2='',
						this.mobile =''
					}else if( res.data.data ==500){
						//注册失败
						this.$message.error('用户注册失败')
						console.log(res)
					}
					
				} ).catch( (error)=> console.log(error))
			}
		}
		
	}
</script>

<style>
</style>
