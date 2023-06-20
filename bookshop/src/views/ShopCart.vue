<template>
	<div class="biaoge">
    <el-table :data="cartlist"  style="width: 100%; text-align: center;">
	  <el-table-column  prop=""  label=""  width="400" >
		 <template slot-scope="item">
			 <img :src="'/api'+item.row.imgUrl" />
		 </template>
	  </el-table-column>
      <el-table-column  prop="title"  label="商品名称"  width="350">
      </el-table-column>
      <el-table-column prop="price"  label="单价"  width="250">
      </el-table-column>
      <el-table-column  prop="" label="数量">
		  <template slot-scope="item">
			  <div class="jiajiano" style="display: flex;justify-content:space-around;align-items: center;width: 30%;margin: 0 auto;">
			  <a @click="add(item.row.id)">+</a>
			  <p>{{item.row.quantity}}</p>
			  <a id="del" diasbled @click="del(item.row)">-</a>  
			  </div> 
		  </template>
      </el-table-column>
	  <el-table-column  prop="address" label="金额">
		  <template slot-scope="item">
			  <h1>{{ItemPrice(item.row.id)}}</h1>
		  </template>
	  </el-table-column>
	  <el-table-column  prop="caozuo" label="操作" width="180">
		  <template slot-scope="item">
			  <el-button type="danger" size="mini" style="color: black;" @click="delCartList(item.row.id)">删除</el-button>
		  </template>
	  </el-table-column>
    </el-table>
	<div class="jiesuan">
		<span>总价:￥{{TotalPrice}}</span>	
		<el-button type="primary" style="color: black;margin-right: 20px;">结算</el-button>
	</div>		
	</div>

  </template>

  <script>
	 // 调用辅助函数
	import {mapState , mapGetters , mapMutations} from 'vuex';
    export default {
	  name:'ShopCart',
      data() {
        return {
        }
      },
	  // 第一种
	  // computed:mapState({
		 //  cartlist:({cart}) => cart.cartlist
	  // })
	  // 第二种
	  computed:{
		  ...mapState('cart',['cartlist']),
		  // 调用getters的函数
		  ...mapGetters('cart' , ['ItemPrice','TotalPrice']),
		   // 计算属性不能调用方法，只能在template里使用
	  },
	  methods:{
		...mapMutations('cart',['delCartList' ,  'increaCartList']),
		// 触发添加购买数量的按钮
		 add(mid){
			  // 调用辅助函数中修改购买数量的方法
			  this.increaCartList({ 
				  // 传id值
				  id : mid,
				  // 就往购买数量传入一个1
				  quantity : 1 ,
			   })
		  },
		  // 减少购买数量的方法
		  del( book ){
			  // 每次点击，减少一件商品数量
			  let quantity = book.quantity - 1;
			  // 如果商品数量等于小于0
			  if( quantity == 0 ){
				  // if( quantity <= 0 ){
				  // // 执行删除购物车商品的操作
				  this.cartshan( book.id )
				  // }
				  
				  // 如果购买数量==0，执行停用按钮操作
				  del.diasbled = true;
			  }else{
				  // 传递当前减少数量的商品id以及传递-1
				this.increaCartList({
					id: book.id,
					quantity : -1,
				})  
			  }
		  }
	  },
    }
  </script>

<style scoped>
	img{
		width: 60%;
		display: block;
		margin: 0 auto;
	}
	.el-table>>>th.el-table__cell.is-leaf {
		text-align: center !important;
		border-bottom: 1px dashed black;
		
	}
	.el-table>>>.el-table__cell {
		text-align: center !important;
		background-color: #E2EFFF;
		border-bottom: 1px dashed black;
	}
	.biaoge{
		width: 98%;
		margin: 20px auto;
	}
	.biaoge .jiesuan{
		width: 100%;
		text-align: right;
		border-top: 1px dashed black;
		background-color: #E2EFFF;
		padding: 10px 0px 5px 0px;
	}
	.biaoge .jiesuan span{
		margin-right: 20px;
	}
	a{
		display: block;
		width: 30px;
		height: 30px;
		line-height: 30px;
		border-radius: 5px;
		background-color: #A9ADC6;
	}
	p{
		height: 30px;
		width: 30px;
		line-height: 30px;
	}
	h1{
		width: 100%;
		font-size: 1.2em;
		font-weight: 100;
	}
	input{
		background-color:#E2EFFF ;
		width: 30px;
		border: 0;
	}
</style>
