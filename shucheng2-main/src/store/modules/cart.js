const state = {
	// 变量
	cartlist:[],
}

// 创建state常量数据的同步函数常量
const mutations={
	pushProToCart(state,{id,imgUrl,title,price,quantity}){
		if(!quantity){
			quantity=1;
		}
		state.cartlist.push({id,imgUrl,title,price,quantity});
	},
	increaCartList(state,{id,quantity}){
		// 1.先找到需要修改的数据内容
		let newItem=state.cartlist.find((val)=> val.id ==id);
		// 2.将传递过来的新的购买数量；累加到原来的购买数量上
		newItem.quantity+=quantity;
	},
	delCartList(state,id){
		let index = state.cartlist.findIndex((val) => {
			return val.id == id;
		})
		if(index > -1){
			state.cartlist.splice(index,1)
		}
	}
}


const actions = {
	// 3.1函数：用于介绍从books组件当个添加到购物车的数据
	// {},表示该函数的第一个参数
	// {state,commit}指向存储数据的state以及操作数据的mutation
	// {第二个参数}:获取添加到购物车的具体数量
	addProductToCart({state,commit},{id,imgUrl,title,price,inventory,quantity}){
		if(inventory>0){
			// for(let item in state.cartlist){
			// 	if(item.id==id){
			// 		cartItem=item;
			// 	}
			// }
			let cartItem = state.cartlist.find((item)=> item.id == id);
			if(!cartItem){
				console.log('第一次**')
				commit('pushProToCart',{id,imgUrl,title,price,quantity})
			}else{
				console.log('已经不是第一次了')
			}
		}
	}
	
}


const getters = {
	ItemPrice(state){
		return (id)=>{
			let sum = 0;
			if(state.cartlist.length>0){
				let cartItem = state.cartlist.find((val)=> val.id == id);
				if(cartItem){
					sum = Number(cartItem.price)*cartItem.quantity;
				}
			}
			return sum.toFixed(2)
		}
		console.log(state.cartlist)
	},
	TotalPrice(state){
		let total = 0;
		let sum= state.cartlist.reduce((total,val)=>{
			return total + Number(val.price)*val.quantity;
		},0)
		return sum.toFixed(2)
	}
}

export default{
	// 注册当前模块，使其带有命名空间 【将整个文件统一命名为cart，调用内部的对象的时候cart。state】
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}