<template>
	<form>
		<div class="waik">
			<p>注册页面</p>
			<div class="d">
				<div class="zi">用户名：</div><input class="wkuan" type="text" v-model.lazy.trim="username" />
			</div>
			<div class="d">
				<div class="zi">密码：</div><input class="wkuan" type="password" v-model.lazy.trim="password" />
			</div>
			<div class="d">
				<div class="zi">确认密码：</div><input class="wkuan" type="password" v-model.lazy.trim="password2" />
			</div>
			<div class="d">
				<div class="zi">手机号：</div><input class="wkuan" type="tel" v-model.lazy.trim="mobile" />
			</div>
			<div class="d">
				<div class="zi">验证码：</div><input style="width: 50%;" type="password" /><input type="button" value="获取验证码" @click="Code()" />
			</div>
			<input class="wkuan1" type="button" value="确定" @click="register" />
		</div>
		<router-link to="/BooksNew">cnm</router-link>
	</form>
</template>

<script>
	import {mapMutations} from 'vuex';
	export default{
		name:'resight',
		data(){
			return {username:'',password:'',password2:'',mobile:'',code:''}
		},
		watch:{
			username(newVal){
				// 判断输入框不为空
				if(newVal){
					// 将用户名作为地址栏数据，向后台发起请求
					this.$axios.get('/http/user/'+newVal).then((res)=>{
						let isLogin = res.data.data;
						if(isLogin){
							this.$message.error('用户名已存在，请重新输入~');
							console.log(isLogin)
							return false;
						}
					}).catch((error)=>console.log(error))
				}
			}
		},
		methods:{
			...mapMutations('user',['saveUser']),
			checkForm(){
				if(!this.username||!this.password||!this.password2||!this.mobile||!this.code){
					this.$message.error('表单内不允许提交空白注册信息！');
					return false;
				}
				if(this.password!=this.password2){
					this.$message.error('两次密码不一致，请重新核对提交！');
					return false;
				}
				return true;
			},
			Code(){
			    this.code=(Math.floor((Math.random()*1000000)+100000))
			    console.log(this.code);
				let params =new FormData();
				params.append("mobile",this.mobile),
				params.append("smsSignId","2e65b1bb3d054466b82f0c9d125465e2"),
				params.append("templateId","908e94ccf08b4476ba6c876d13f084ad"),
				params.append("param",JSON.stringify({"**code**":this.code,"**minute**":5})),
				this.axios.post(
				    'https://gyytz.market.alicloudapi.com/sms/smsSend',
				    params,
				    {headers:{
				        "Authorization":"APPCODE "+"7e03259601934fb58638985706b95cb0"},}
				
				)
				.then(code => { 
				    console.log(code);
				})
				.catch( (err)=>{
					console.log(err)
					})
			},
			register(){
				
				console.log(this.checkForm())
				let isReg = this.checkForm();
				if(!isReg){
					this.$message.error('表单内存在未达到提交要求的数据，请用户重新注册！');
					return false;
				}
				// 上诉判断补充成立，表单的数据是符合提交要求，就可以提交请求post表单的注册数据
				this.$axios.post('/http/user/register',{
					username:this.username,
					password:this.password,
					mobile:this.mobile
				}).then((res)=>{
					console.log(res);
					if(res.data.code==200){
						// 注册成功
						this.saveUser(res.data.data);
						this.username='',
						this.password='',
						this.password2='',
						this.mobile='',
						this.$router.push('/login')
					}else if(res.data.data==500){
						// 注册失败，字段有问题/数据类型有问题
						this.$message.error('用户注册失败')
						console.log(res);
					}
				}).catch((error)=> console.log(error))
			}
		}
	}
</script>

<style scoped>
	.waik{
		width: 50%;
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
		font-size: .5rem;
	}
</style>
