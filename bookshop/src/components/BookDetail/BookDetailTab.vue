<template>
  <el-tabs v-model="yonghu" type="border-card" @tab-click="aun">
	  <template v-for="item in li">
          <el-tab-pane label="图书介绍" name="first" >{{item.detail}}</el-tab-pane>
		  <el-tab-pane label="图书评价" name="second" >
			  <template v-for="i in on">
					<div class="wenda">
					  <p>{{i.content}}</p>
					  <span>{{i.commentDate}}</span>
					  <h1>{{i.username}}</h1>
				    </div>	  		 
			  </template>
		  </el-tab-pane>
          <el-tab-pane label="图书问答" name="third" >{{item.brief}}</el-tab-pane>		  
	  </template>
  </el-tabs>
</template>

<script>
  export default {
	props:['li','on'],
    data() {
      return {
        yonghu: 'first'
      };
    },
    methods: {
      aun(tab, event) {
        // console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
	.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
		background-color: mediumpurple;
	}
	.el-tab-pane{
		text-indent: 2em;
		line-height: 30px;
		font-size: 1em;
	}
	.el-tabs--border-card{
		border-bottom: 1px solid #ADADD0;
		border-left: 1px solid #ADADD0;
		border-right: 1px solid #ADADD0;
	}
	.el-tabs--border-card /deep/ .el-tabs__header{
		background-color: white;
	}
	.el-tabs--border-card /deep/ .el-tabs__header  .el-tabs__item.is-active{
		background-color: #A5A5FF !important;
		color: white;
		font-weight: bold;
	}
	.el-tabs--border-card /deep/ .el-tabs__header .el-tabs__item+.el-tabs__item{
		background-color: #D9DEFE;
		border: 1px solid #C3C4FE;
	}
	.wenda{
		width: 80%;
		margin: 10px auto;
		border: 1px solid black;
		display: flex;
	}
</style>
