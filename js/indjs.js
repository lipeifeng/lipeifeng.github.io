var articleNum=document.getElementsByClassName('main-content-article');

var pageNum=Math.ceil(articleNum.length/this.pageNum);

var newlist = new Vue({
  el: '#app',
  data: { 
    articleContent:[
    	{
    		'title1':'【技术文章】前端--字体&图标引进',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'在网页设计的时候，尤其是在做前端时，针对图标字体的使用，可以缓解做小图标的压力，并且图标字体还可以自己更改颜色。那么如何更好的使用图标(fontello.com)字体呢？本文给各位客官介绍一下',
    		'time4':'2017-12-20',
    		'href5':'article.html?name=fonticon&path=technology',
    		'artTitle6':'前端字体图标引进'
    	},
    	{
    		'title1':'【技术文章】css权重',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'我们在使用CSS对网页元素定义样式时经常会遇到这种情况：要对一般元素应用一般样式，然后在更特殊的元素上覆盖它们。那么我们怎么样来保证我们所新定义的元素样式能覆盖目标元素上原有的样式呢？',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=cssweight&path=technology',
    		'artTitle6':'css权重'
    	},
    	{
    		'title1':'【技术文章】Cookie 基本概念（1）',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'cookie 历来指就着牛奶一起吃的点心。然而，在因特网内，“cookie”这个字有了完全不同的意思。那么“cookie”到底是什么呢？“Cookie”是小量信息，由网络服务器发送出来以存储在网络浏览器上，从而下次这位独一无二的访客又回到该网络服务器时，可从该浏览器读回此信息。',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=cookie1&path=technology',
    		'artTitle6':'Cookie 基本概念'
    	},
    	{
    		'title1':'【技术文章】JS操作cookie（2）',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'详述--原生js操作cookie',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=cookie2&path=technology',
    		'artTitle6':'JS操作cookie'
    	},
    	{
    		'title1':'【技术文章】JQ操作cookie（3）',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'详述--JQ操作cookie',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=cookie3&path=technology',
    		'artTitle6':'JQ操作cookie'
    	},
    	{
    		'title1':'【技术文章】驼峰式命名法',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'转述--驼峰式命名法',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=camelCase&path=technology',
    		'artTitle6':'驼峰式命名法'
    	},
    	{
    		'title1':'【技术文章】浏览器不解析HTML标签的方法',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'转述--浏览器不解析HTML标签的方法',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=noParsing&path=technology',
    		'artTitle6':'浏览器不解析HTML标签的方法'
    	},
    	{
    		'title1':'【技术文章】JS&JQ操作AJAX',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'转述--JS&JQ操作AJAX',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=ajax&path=technology',
    		'artTitle6':'JS&JQ操作AJAX'
    	},
    	{
    		'title1':'【技术文章】cursor光标类型',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'cursor光标类型展示',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=cursor&path=technology',
    		'artTitle6':'cursor光标类型'
    	},
    	{
    		'title1':'【技术文章】插件使用--css进度条',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'css进度条',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=spinners&path=technology',
    		'artTitle6':'css进度条'
    	},
    	{
    		'title1':'【技术文章】插件使用--WOW.js - 让页面滚动更有趣',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'WOW.js - 让页面滚动更有趣',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=wow&path=technology',
    		'artTitle6':'WOW.js - 让页面滚动更有趣'
    	},
    	{
    		'title1':'【技术文章】插件使用--scrollReveal.js - 多次动画',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'scrollReveal.js - 多次动画',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=scrollReveal&path=technology',
    		'artTitle6':'scrollReveal.js - 多次动画'
    	},
    	{
    		'title1':'【技术文章】百度地图API接口的使用方法',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'百度地图API接口的使用方法',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=mapApi&path=technology',
    		'artTitle6':'百度地图API接口的使用方法'
    	},
    	{
    		'title1':'【技术文章】搭建个人博客--利用github仓库（1）',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'搭建个人博客--利用github仓库',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=personalBlog1&path=technology',
    		'artTitle6':'搭建个人博客'
    	},
    	{
    		'title1':'【技术文章】搭建个人博客--如何申请域名（2）',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'搭建个人博客--如何申请域名',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=personalBlog2&path=technology',
    		'artTitle6':'搭建个人博客--如何申请域名'
    	},
    	{
    		'title1':'【技术文章】搭建个人博客--域名绑定到github博客上（3）',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'搭建个人博客--怎样将域名绑定到github pages 博客上',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=personalBlog3&path=technology',
    		'artTitle6':'搭建个人博客--域名绑定到github博客上'
    	},
    	{
    		'title1':'【技术文章】git入门',
    		'img2':'images/indimgs/img_1.jpg',
    		'detail3':'git入门',
    		'time4':'2017-12-19',
    		'href5':'article.html?name=git&path=technology',
    		'artTitle6':'git入门'
    	}
   
    ],
    current_page: 1, //当前页
    changePage:'',//跳转页
    nowIndex:0,
    newContent:'',
    pageNum:4,//每页this.pageNum条
  },
  created:function(){
	　　		this.jumpPage(1)
	},
  computed:{
  	 pages:function(){
  	 	return Math.ceil(this.articleContent.length/this.pageNum);
  	 },
     show:function(){
         return this.articleContent.length && this.articleContent.length !=1
     },
     pstart: function() {
       return this.current_page == 1;
     },
     pend: function() {
       return this.current_page == this.pages;
     },
     
     efont: function() {
       if (this.articleContent.length <= 7) return false;
       return this.current_page > 5
     },
     ebehind: function() {
       if (this.articleContent.length <= 7) return false;
       var nowAy = this.indexs;
       return nowAy[nowAy.length - 1] != Math.ceil(this.articleContent.length/this.pageNum);
     },
     
     indexs: function() {

       var left = 1,
         right = Math.ceil(this.articleContent.length/this.pageNum),
         ar = [];
       if (Math.ceil(this.articleContent.length/this.pageNum) >= 7) {
         if (this.current_page > 5 && this.current_page < Math.ceil(this.articleContent.length/this.pageNum) - this.pageNum) {
           left = Number(this.current_page) - 3;
           right = Number(this.current_page) + 3;
         } else {
           if (this.current_page <= 5) {
             left = 1;
             right = 7;
           } else {
             right = Math.ceil(this.articleContent.length/this.pageNum);

             left = Math.ceil(this.articleContent.length/this.pageNum) - 6;
           }
         }
       }
       while (left <= right) {
         ar.push(left);
         left++;
       }
       return ar;
     },
   },
  methods: {
    jumpPage: function(id) {
      this.current_page = id;
      this.newContent=this.articleContent.slice(this.current_page*this.pageNum-this.pageNum);
     
    },
  },

})


