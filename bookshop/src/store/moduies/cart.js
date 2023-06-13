const state = {
	cartlist : [],
}

const mutations = {
	pushProToCart( state , {id,imgUrl,title,price,quantity} ){
		if(!quantity){
			quantity = 1
		}
		state.cartlist.push( {id,imgUrl,title,price,quantity} )
	},
	
	increaCartList( state , { id , quantity} ){
		
		let newItem = state.cartlist.find( (val) => val.id == id)
		
		newItem.quantity += quantity;
	},
	//删除被选中，点击的购物车数据
	delCartList( state , id){
		// 1.先去查找被被删除的数据所属的下标值
		let index = state.cartlist.findIndex( (val)=>{
			//将符合条件的数组
			return val.id == id
		})
		if( index > -1){
			//移除数组元素
		state.cartlist.splice(index ,1)
		}
		
	}
}

const actions={
	// 3.1创建一个函数:用于接收从Books组件单个添加到购物车的数据
	// {}表示该函数的第一个参数[一对大括号表示一对参数]
	// { state , commit }指向存储数据的state以及操作数据的mutation
	// {第二个参数}:获取添加购物车的具体数据,图片,书名,单价(折后的单价)price,,购买数量quantity,库存inventory
	addProducToCart( { state , commit } , { id,imgUrl,title,price,inventory,quantity } ){
		// console.log(state)
		// console.log(commit)
		// console.log(id)
		// console.log(imgUrl)
		// console.log(title)
		// console.log(price)
		// console.log(inventory)
		// console.log(quantity)
		
		// 3.2 当有商品需要添加到购物车时,先判断当前数据是否已经添加过了,没有加加入数组,已有就只添加数量
		// inventory > 0如果是有库存的操作
		if( inventory > 0){
			// let cartItem = [];
			// 3.3 从state.cartlist中查询是否存在当前书籍的数据
			// for( let item in state.cartlist){
			// 	if(item.id == id){
			// 		// 如果当前数据已存在,提取出来,做累加操作
			// 		cartItem = item
			// 	}
			// }
			// 上下两种写法都是对的
			let cartItem = state.cartlist.find( (item)=>item.id == id );
			// 判断查询的结果
			if( !cartItem ){
				// 为假,说明当前添加的数据是第一次添加到购物车 [执行数据添加操作]
				// console.log('第一次添加购物车')
				commit( 'pushProToCart' , {id,imgUrl,title,price,quantity} );
			}else{
				// 为真,当前添加的数据已经在购物车中有记录了[执行累加购买数量的操作]
				// console.log('已经存在了,累加购买数量');
				commit( 'increaCartList' , { id , quantity } )
			}
		}
	}
}
//4.针对数据加工返回结果的常量对象【计算属性】
const getters={
	//4.1计算出购物车每样商品的价格
	ItemPrice( state){
		//当调用当前函数时，会向函数传递当前数据的id值，通过箭头函数接收
		return (id)=>{
			let sum = 0;
			//判断购物车内确实有数据
			if(state.cartlist.length > 0){
				//根据id查找当前的数据信息
				let cartItem = state.cartlist.find( (val)=>val.id == id)
				//计算当前这条数据的商品价格
				if(cartItem){
					sum = Number(cartItem.price) * cartItem.quantity
				}
			}
			return sum.toFixed(2);
		}
	},
	//4.2统计出购物车所有商品的总价格
	TotalPrice( state ){
		// es6新增累加器
		//reduce：累加器,提供给数组使用的可以带有条件的累加效果
		// reduce( ()=>{} , 间距)
		//  sum表示每次累加过后的结果，默认为0，val表示循环的元素
		let sum = state.cartlist.reduce( (total , val)=>{
			return total + Number(val.price)*val.quantity
		} , 0)
		return sum.toFixed(2)
		
		// 循环
		// for(let item in state.cartlist){
		// 	sum += item.price * item.quantity
		// }
		
	}
}


export default{
	//注册当前模块[将整个文件统一命名为cart，调用内部的对象的时候，cart，state]
	namespaced : true,
	state,
	mutations,
	actions,
	getters
}








