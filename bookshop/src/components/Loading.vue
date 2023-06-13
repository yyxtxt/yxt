<template>
	<div class="loading">
		<!-- 动画的圆形 -->
		<div class="shadow">
			<!-- 轮廓 -->
			<div class="loader">
				<!-- 动画进行的扇形区域 -->
				<div class="mask"></div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>


<style scoped>
	.shadow{
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -50px;
		margin-left: -50px;
		/* 阴影 */
		box-shadow: -2px 2px 10px 0 rgba(0,0,0,0.5) , 2px -2px 10px 0px rgba(255,255,255,0.5);
		border-radius: 50%;
		z-index: 3;
	}
	.loader{
		/* -webkit-linear-gradient  带有兼容性的线性渐变 */
		background: -webkit-linear-gradient( left , #d9deff 50% , #afafaf 50%);
		/* 形状尺寸 */
		width: 100px;
		height: 100px;
		border-radius: 100%;
		/* 调用动画 */
		animation: time 8s steps(500 , start) infinite;
	}
	/* 扇形 */
	.mask{
		border-radius: 100% 0 0 100% / 50% 0 0 50%;
		height: 100%;
		width: 50%;
		position: absolute;
		left: 0;
		top: 0;
		transform-origin: 100% 50%;
		/* 动画效果 */
		animation: makss 8s steps(250 , start) infinite;
	}
	/* 定义动画 */
	/* 带有背景颜色的轮廓，在动画进行360度的旋转 */
	@keyframes time{
		100%{
			transform: rotate( 360deg );
		}
	}
	@keyframes makss{
		0%{background-color: #afafaf; transform: rotate(0deg);}
		50%{ background-color: #afafaf; transform: rotate(-180deg);}
		50.01%{ background-color: #d9deff; transform: rotate(0deg);}
		100%{ background-color: #d9deff; transform: rotate(-180deg);}
		}
</style>
