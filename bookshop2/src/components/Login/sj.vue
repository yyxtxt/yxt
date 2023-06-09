<template>
	<div>
		<div>
	      <input type="text" v-model="sjh" placeholder="建议使用常用手机号" />
		  <div class="ts">{{ts}}</div>
		  <button @click="yzm()" >获取验证码</button>
	    </div>
		<div>
			<input type="number" placeholder="请输入验证码" />
		</div>
		<button>登录</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				sjh:'',
				ts:'',
				code:''
			}
		},
		methods:{
			yzm(){
				var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
				if(this.sjh.length ==11){
					if(!reg.test(this.sjh)){
						this.sj()
						// this.http()
					}
				}else{
					this.ts='格式错误'
				}
				
				
			},
			http(){
				let params = new ForData()
				params.append("mobile",this.sjh),
				params.append("param",SJON.stringify({"**code**":this.code,"**minute**":5})),
				params.append('smsSignId',"2e65b1bb3d054466b82f0c9d125465e2"),
				params.append('templateId',"908e94ccf08b4476ba6c876d13f084ad"),
				this.axios.post(
				   'http(s)://gyytz.market.alicloudapi.com/sms/smsSend',
				   params,
				   {headers:{
					   "Authorization":"APPCODE"+"ab70c60e171a48bf8213190f0e6a38e4"
				   }}
				)
				.then(code =>{
					console.log(code)
				})
				.catch( (err)=>{
					console.log(err)
				})
			},
			sj(){
				for(let i=0;i<=5;i++){
					let a=Math.floor((Math.random()*10))
					this.code.push(a)
				}
				console.log(this.code)
			}
			
		}
	}
	// ab70c60e171a48bf8213190f0e6a38e4
</script>

<style scoped>
	.ts{
		height: 30px;
		color: red;
		font-size: 15px;
	}
	
</style>
