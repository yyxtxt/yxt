<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
	export default{
		data(){
			return {
				list2:[],
				list3:[],
				list4:[],
				list5:[],
				list6:[],
				list7:[],
				list8:[],
				list9:[],
				list10:[],
				list11:[],
				list12:[],
				listz:[],
				la_id: "",
				nowurl: "",
			}
		},
		created() {
			// this.linktab();
			this.$axios.all([
				this.$axios.get('shu/book-list/533ea342b774950c04000189'),
				this.$axios.get('shu/book-list/5454ccfdbd7c68e31be5577e'),
				this.$axios.get('shu/book-list/576d182926e661a62719a1b6'),
				this.$axios.get('shu/book-list/57331505025ffaa06cb28852'),
				this.$axios.get('shu/book-list/561bf778359a855538e39485'),
				this.$axios.get('shu/book-list/533c2eeb6fcc37c139006cf8'),
				this.$axios.get('shu/book-list/5943d2a4253e111d4e8906ae'),
				this.$axios.get('shu/book-list/5552b1c64df956f918dc4991'),
				this.$axios.get('shu/book-list/5c40574e2d25940001d3fa57'),
				this.$axios.get('shu/book-list/5604e265778ffc605a834de1'),
				this.$axios.get('shu/book-list/54263829d1564bf615448769')
			]).then((res)=>{
				
				if(res[0].status==200&&res[1].status==200&&res[2].status==200){
					this.list2=res[0].data.bookList.books;
					this.list3=res[1].data.bookList.books;
					this.list4=res[2].data.bookList.books;
					this.list5=res[3].data.bookList.books;
					this.list6=res[4].data.bookList.books;
					this.list7=res[5].data.bookList.books;
					this.list8=res[6].data.bookList.books;
					this.list9=res[7].data.bookList.books;
					this.list10=res[8].data.bookList.books;
					this.list11=res[9].data.bookList.books;
					this.list12=res[10].data.bookList.books;
					this.listz = [...this.list2,...this.list3,...this.list4,...this.list5,...this.list6,...this.list7,...this.list8,...this.list9,...this.list10,...this.list11,...this.list12]
					this.$store.commit('serPrint',this.listz)
					console.log(this.listz)
				}
			}).catch((error)=>{
				console.log(error)
			})
		},
		methods:{
			linktab() {
			    //   let goUrl = this.isMobile();
			    //   if (goUrl === 1) {
			    //     //移动端地址
			    //     // location = "http://127.0.0.1:8043";
			    //   } else {
			    //     //PC地址
			    //     location = "http://172.17.162.12:8080/home";
			    //   }
			    // },
			    // isMobile() {
			    //   let flag = navigator.userAgent.match(
			    //     /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
			    //   );
			    //   let goUrl = flag ? 1 : 0;
			    //   return goUrl;
			    },
		}
	}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!-- <template>
   <div class="type-game">
     <canvas id="type" width="400" height="600"></canvas>
   </div>
 </template>
  
 <script>
 const _MAX_TARGET = 3; // 画面中一次最多出现的目标
 const _TARGET_CONFIG = {
   // 靶子的固定参数
   speed: 1.3,
   radius: 10
 };
 const _DICTIONARY = ["apple", "orange", "blue", "green", "red", "current"];
 export default {
   name: "TypeGame",
   data() {
     return {
       ctx: null,
       clientWidth: 0,
       clientHeight: 0,
       bulletArr: [], // 屏幕中的子弹
       targetArr: [], // 存放当前目标
       targetImg: null,
       planeImg: null,
       currentIndex: -1,
       wordsPool: [],
       score: 0,
       gameOver: false,
       colors: ["#FFFF00", "#FF6666"]
     };
   },
   mounted() {
     let _this = this;
     _this.wordsPool = _DICTIONARY.concat([]);
     let container = document.getElementById("type");
     _this.clientWidth = container.width;
     _this.clientHeight = container.height;
     _this.ctx = container.getContext("2d");
     _this.targetImg = new Image();
     _this.targetImg.src = require("@/assets/img/target.png");
  
     _this.planeImg = new Image();
     _this.planeImg.src = require("@/assets/img/plane.png");
  
     document.onkeydown = function(e) {
       let key = window.event.keyCode;
       if (key >= 65 && key <= 90) {
         _this.handleKeyPress(String.fromCharCode(key).toLowerCase());
       }
     };
  
     _this.targetImg.onload = function() {
       _this.generateTarget();
       (function animloop() {
         if (!_this.gameOver) {
           _this.drawAll();
         } else {
           _this.drawGameOver();
         }
         window.requestAnimationFrame(animloop);
       })();
     };
   },
   methods: {
     drawGameOver() {
       let _this = this;
       //保存上下文对象的状态
       _this.ctx.save();
       _this.ctx.font = "34px Arial";
       _this.ctx.strokeStyle = _this.colors[0];
       _this.ctx.lineWidth = 2;
       //光晕
       _this.ctx.shadowColor = "#FFFFE0";
       let txt = "游戏结束，得分：" + _this.score;
       let width = _this.ctx.measureText(txt).width;
       for (let i = 60; i > 3; i -= 2) {
         _this.ctx.shadowBlur = i;
         _this.ctx.strokeText(txt, _this.clientWidth / 2 - width / 2, 300);
       }
       _this.ctx.restore();
       _this.colors.reverse();
     },
     drawAll() {
       let _this = this;
       _this.ctx.clearRect(0, 0, _this.clientWidth, _this.clientHeight);
       _this.drawPlane(0);
       _this.drawBullet();
       _this.drawTarget();
       _this.drawScore();
     },
     drawPlane() {
       let _this = this;
       _this.ctx.save();
       _this.ctx.drawImage(
         _this.planeImg,
         _this.clientWidth / 2 - 20,
         _this.clientHeight - 20 - 40,
         40,
         40
       );
       _this.ctx.restore();
     },
     generateWord(number) {
       // 从池子里随机挑选一个词，不与已显示的词重复
       let arr = [];
       for (let i = 0; i < number; i++) {
         let random = Math.floor(Math.random() * this.wordsPool.length);
         arr.push(this.wordsPool[random]);
         this.wordsPool.splice(random, 1);
       }
       return arr;
     },
     generateTarget() {
       // 随机生成目标
       let _this = this;
       let length = _this.targetArr.length;
       if (length < _MAX_TARGET) {
         let txtArr = _this.generateWord(_MAX_TARGET - length);
         for (let i = 0; i < _MAX_TARGET - length; i++) {
           _this.targetArr.push({
             x: _this.getRandomInt(
               _TARGET_CONFIG.radius,
               _this.clientWidth - _TARGET_CONFIG.radius
             ),
             y: _TARGET_CONFIG.radius * 2,
             txt: txtArr[i],
             typeIndex: -1,
             hitIndex: -1,
             dx: (_TARGET_CONFIG.speed * Math.random().toFixed(1)) / 2,
             dy: _TARGET_CONFIG.speed * Math.random().toFixed(1),
             rotate: 0
           });
         }
       }
     },
     getRandomInt(n, m) {
       return Math.floor(Math.random() * (m - n + 1)) + n;
     },
     drawText(txt, x, y, color) {
       let _this = this;
       _this.ctx.fillStyle = color;
       _this.ctx.fillText(txt, x, y);
     },
     drawScore() {
       // 分数
       this.drawText("分数：" + this.score, 10, this.clientHeight - 10, "#fff");
     },
     drawTarget() {
       // 逐帧画目标
       let _this = this;
       _this.targetArr.forEach((item, index) => {
         _this.ctx.save();
         _this.ctx.translate(item.x, item.y); //设置旋转的中心点
         _this.ctx.beginPath();
         _this.ctx.font = "14px Arial";
         if (
           index === _this.currentIndex ||
           item.typeIndex === item.txt.length - 1
         ) {
           _this.drawText(
             item.txt.substring(0, item.typeIndex + 1),
             -item.txt.length * 3,
             _TARGET_CONFIG.radius * 2,
             "gray"
           );
           let width = _this.ctx.measureText(
             item.txt.substring(0, item.typeIndex + 1)
           ).width; // 获取已敲击文字宽度
           _this.drawText(
             item.txt.substring(item.typeIndex + 1, item.txt.length),
             -item.txt.length * 3 + width,
             _TARGET_CONFIG.radius * 2,
             "red"
           );
         } else {
           _this.drawText(
             item.txt,
             -item.txt.length * 3,
             _TARGET_CONFIG.radius * 2,
             "yellow"
           );
         }
  
         _this.ctx.closePath();
         _this.ctx.rotate((item.rotate * Math.PI) / 180);
         _this.ctx.drawImage(
           _this.targetImg,
           -1 * _TARGET_CONFIG.radius,
           -1 * _TARGET_CONFIG.radius,
           _TARGET_CONFIG.radius * 2,
           _TARGET_CONFIG.radius * 2
         );
         _this.ctx.restore();
         item.y += item.dy;
         item.x += item.dx;
         if (item.x < 0 || item.x > _this.clientWidth) {
           item.dx *= -1;
         }
         if (item.y > _this.clientHeight - _TARGET_CONFIG.radius * 2) {
           // 碰到底部了
           _this.gameOver = true;
         }
         // 旋转
         item.rotate++;
       });
     },
     handleKeyPress(key) {
       // 键盘按下,判断当前目标
       let _this = this;
       if (_this.currentIndex === -1) {
         // 当前没有在射击的目标
         let index = _this.targetArr.findIndex(item => {
           return item.txt.indexOf(key) === 0;
         });
         if (index !== -1) {
           _this.currentIndex = index;
           _this.targetArr[index].typeIndex = 0;
           _this.createBullet(index);
         }
       } else {
         // 已有目标正在被射击
         if (
           key ===
           _this.targetArr[_this.currentIndex].txt.split("")[
             _this.targetArr[_this.currentIndex].typeIndex + 1
           ]
         ) {
           // 获取到目标对象
           _this.targetArr[_this.currentIndex].typeIndex++;
           _this.createBullet(_this.currentIndex);
  
           if (
             _this.targetArr[_this.currentIndex].typeIndex ===
             _this.targetArr[_this.currentIndex].txt.length - 1
           ) {
             // 这个目标已经别射击完毕
             _this.currentIndex = -1;
           }
         }
       }
     },
     // 发射一个子弹
     createBullet(index) {
       let _this = this;
       this.bulletArr.push({
         dx: 1,
         dy: 4,
         x: _this.clientWidth / 2,
         y: _this.clientHeight - 60,
         targetIndex: index
       });
     },
     firedTarget(item) {
       // 判断是否击中目标
       let _this = this;
       if (
         item.x > _this.targetArr[item.targetIndex].x - _TARGET_CONFIG.radius &&
         item.x < _this.targetArr[item.targetIndex].x + _TARGET_CONFIG.radius &&
         item.y > _this.targetArr[item.targetIndex].y - _TARGET_CONFIG.radius &&
         item.y < _this.targetArr[item.targetIndex].y + _TARGET_CONFIG.radius
       ) {
         // 子弹击中了目标
         let arrIndex = item.targetIndex;
         _this.targetArr[arrIndex].hitIndex++;
         if (
           _this.targetArr[arrIndex].txt.length - 1 ===
           _this.targetArr[arrIndex].hitIndex
         ) {
           // 所有子弹全部击中了目标
           let word = _this.targetArr[arrIndex].txt;
           _this.targetArr[arrIndex] = {
             // 生成新的目标
             x: _this.getRandomInt(
               _TARGET_CONFIG.radius,
               _this.clientWidth - _TARGET_CONFIG.radius
             ),
             y: _TARGET_CONFIG.radius * 2,
             txt: _this.generateWord(1)[0],
             typeIndex: -1,
             hitIndex: -1,
             dx: (_TARGET_CONFIG.speed * Math.random().toFixed(1)) / 2,
             dy: _TARGET_CONFIG.speed * Math.random().toFixed(1),
             rotate: 0
           };
           _this.wordsPool.push(word); // 被击中的目标词重回池子里
           _this.score++;
         }
         return false;
       } else {
         return true;
       }
     },
     drawBullet() {
       // 逐帧画子弹
       let _this = this;
       // 判断子弹是否已经击中目标
       if (_this.bulletArr.length === 0) {
         return;
       }
       _this.bulletArr = _this.bulletArr.filter(_this.firedTarget);
       _this.bulletArr.forEach(item => {
         let targetX = _this.targetArr[item.targetIndex].x;
         let targetY = _this.targetArr[item.targetIndex].y;
         let k =
           (_this.clientHeight - 60 - targetY) /
           (_this.clientWidth / 2 - targetX); // 飞机头和目标的斜率
         let b = targetY - k * targetX; // 常量b
         item.y = item.y - 4; // y轴偏移一个单位
         item.x = (item.y - b) / k;
         for (let i = 0; i < 15; i++) {
           // 画出拖尾效果
           _this.ctx.beginPath();
           _this.ctx.arc(
             (item.y + i * 1.8 - b) / k,
             item.y + i * 1.8,
             4 - 0.2 * i,
             0,
             2 * Math.PI
           );
           _this.ctx.fillStyle = `rgba(193,255,255,${1 - 0.08 * i})`;
           _this.ctx.fill();
           _this.ctx.closePath();
         }
       });
     }
   }
 };
 </script>
  
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <!-- <style scoped>
 .type-game {
   #type {
     background: #2a4546;
   }
 }
 </style> --> -->