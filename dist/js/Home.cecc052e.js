(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{"1a23":function(t,e,i){"use strict";i.r(e),i.d(e,"CountUp",(function(){return s}));var a=function(){return(a=Object.assign||function(t){for(var e,i=1,a=arguments.length;i<a;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},s=function(){function t(t,e,i){var s=this;this.target=t,this.endVal=e,this.options=i,this.version="2.0.7",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var e=t-s.startTime;s.remaining=s.duration-e,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(e/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var e,i,a,o,n,l=t<0?"-":"";if(e=Math.abs(t).toFixed(s.options.decimalPlaces),a=(i=(e+="").split("."))[0],o=i.length>1?s.options.decimal+i[1]:"",s.options.useGrouping){n="";for(var r=0,c=a.length;r<c;++r)0!==r&&r%3==0&&(n=s.options.separator+n),n=a[c-r-1]+n;a=n}return s.options.numerals&&s.options.numerals.length&&(a=a.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),o=o.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),l+s.options.prefix+a+o+s.options.suffix},this.easeOutExpo=function(t,e,i,a){return i*(1-Math.pow(2,-10*t/a))*1024/1023+e},this.options=a(a({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},2214:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"testimonial-section bg-color-dark img-cover",style:{backgroundImage:"url("+t.data.bgImage+")"}},[i("div",{staticClass:"testimonial-bg section-padding"},[i("div",{staticClass:"container"},[t._m(0),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"testimonial-active"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.data.testimonials,(function(e){return i("div",{key:e.id,staticClass:"swiper-slide testimonial-item"},[i("div",{staticClass:"testimonial-inner text-center"},[i("div",{staticClass:"icon"},[i("img",{attrs:{src:"/img/icon/quote.png",alt:"quote icon"}})]),i("p",{staticClass:"testimonial-desc"},[t._v(t._s(e.desc))]),i("div",{staticClass:"client-info"},[i("h6",{staticClass:"client-name"},[t._v(t._s(e.author))]),i("span",{staticClass:"client-desig"},[t._v(t._s(e.designation))])])])])})),0)],1)])])])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"section-title text-center"},[i("span",{staticClass:"water-text"},[t._v("Testimonials")]),i("h2",{staticClass:"title"},[t._v("What Clients Say")])])])])}],o=i("b10c"),n={data:function(){return{data:o,swiperOption:{slidesPerView:1,loop:!0,speed:1e3,delay:5e3,autoplay:!0,spaceBetween:30,pagination:{el:".swiper-pagination-3",type:"bullets",clickable:!0}}}}},l=n,r=i("2877"),c=Object(r["a"])(l,a,s,!1,null,null,null);e["a"]=c.exports},"2a73":function(t,e,i){"use strict";i("af63")},3075:function(t,e,i){"use strict";i("9aaa")},"46c9":function(t){t.exports=JSON.parse('{"blog":{"sectionTitle":"Latest Post","sectionTitleWaterText":"Latest Post","blogPosts":[{"title":"Despite not being built for business, it does let you display","image":"/img/blog/blog-1.jpg","comment":4,"like":15,"postDate":"15 May, 2020"},{"title":"There are many things Google looks at when analyzing website.","image":"/img/blog/blog-2.jpg","comment":4,"like":15,"postDate":"18 Jun, 2020"},{"title":"Google handles billions websites every day. How does it do that","image":"/img/blog/blog-3.jpg","comment":4,"like":15,"postDate":"22 Jul, 2020"},{"title":"How to get your website into Google’s index with right way","image":"/img/blog/blog-4.jpg","comment":4,"like":15,"postDate":"08 Aug, 2020"},{"title":"Before your site can appear in the search results, search engine","image":"/img/blog/blog-5.jpg","comment":4,"like":15,"postDate":"28 Feb, 2020"},{"title":"Ready to launch a blog with these free blog sites for ever","image":"/img/blog/blog-6.jpg","comment":4,"like":15,"postDate":"16 Jan, 2020"},{"title":"Despite not being built for business, it does let you display","image":"/img/blog/blog-1.jpg","comment":4,"like":15,"postDate":"15 May, 2020"},{"title":"There are many things Google looks at when analyzing website.","image":"/img/blog/blog-2.jpg","comment":4,"like":15,"postDate":"18 Jun, 2020"},{"title":"Google handles billions websites every day. How does it do that","image":"/img/blog/blog-3.jpg","comment":4,"like":15,"postDate":"22 Jul, 2020"},{"title":"How to get your website into Google’s index with right way","image":"/img/blog/blog-4.jpg","comment":4,"like":15,"postDate":"08 Aug, 2020"},{"title":"Before your site can appear in the search results, search engine","image":"/img/blog/blog-5.jpg","comment":4,"like":15,"postDate":"28 Feb, 2020"},{"title":"Ready to launch a blog with these free blog sites for ever","image":"/img/blog/blog-6.jpg","comment":4,"like":15,"postDate":"16 Jan, 2020"}]},"sidebar":{"searchTitle":"Search","categoryTitle":"Categories","categories":[{"title":"web development","count":"30"},{"title":"web design","count":"15"},{"title":"apps development","count":"25"},{"title":"digital marketing","count":"22"},{"title":"SEO analyst","count":"08"}],"recentPostTitle":"Recent Posts","recentPosts":[{"image":"/img/blog/recent-01.jpg","alt":"post thumbnail","title":"Despite being built for business","date":"15 June, 2020"},{"image":"/img/blog/recent-02.jpg","alt":"post thumbnail","title":"Ready to launch a blog with these","date":"18 July, 2020"},{"image":"/img/blog/recent-03.jpg","alt":"post thumbnail","title":"Before your site can appear","date":"25 May, 2020"},{"image":"/img/blog/recent-04.jpg","alt":"post thumbnail","title":"There are many things Google","date":"09 March, 2020"}],"tagTitle":"Tags","tags":[{"name":"Development","link":"/blog"},{"name":"Design","link":"/blog"},{"name":"marketing","link":"/blog"},{"name":"Software","link":"/blog"},{"name":"SEO","link":"/blog"},{"name":"Apps","link":"/blog"}]},"blogDetails":{"aboutAuthor":{"image":"/img/blog/author.jpg","name":"Erik Jhonson","heading":"About the author","text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officiis voluptatem libero perspiciatis veritatis sequi corrupti aperiam nostrum voluptas aliquid vel dolorem eos eius."},"title":"International activities of the online world human bieng","quoteTitle":"Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. venenatis elit ac ultrices convallis.","para_1":"Bigger ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis consequuntur illo aliquid nihil ad neque, debitis praesentium libero ullam asperiores exercitationem deserunt inventore facilis, officiis,","para_2":"aliquam maiores asperiores recusandae commodi blanditiis ipsum tempora culpa possimus assumenda ab quidem a voluptatum quia natus? Ex neque, saepe reiciendis quasi velit perspiciatis error vel quas quibusdam autem nesciunt voluptas oditquis dignissimos aspernatur voluptatum est repellat. Pariatur praesentiumcorrupti","blogMidleImage":"/img/blog/blog-details-2.jpg","para_3":"deserunt ducimus quo doloremque nostrum aspernatur saepe cupiditate sit autem exercitationem debitis, maiores vitae perferendis nemo? Voluptas illo, animitemporibus quod earum molestias eaque, iure rem amet autem dignissimos officia dolores numquam distinctio esse voluptates optio pariatur aspernatur omnis? Ipsam qui commodi velit natus reiciendis quod quibusdam nemo eveniet similique animi!","meta":{"postDate":"25 May, 2020","comment":3,"like":15}},"blogComment":{"heading":"What our users think about this blog post (02)","comments":[{"isReply":false,"authorName":"Simon","authorImage":"/img/blog/comment-01.jpg","CommentTime":"Posted on Jan 15, 2020 at 09:15pm","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, non pariatur itaque illo sunt?"},{"isReply":true,"authorName":"Henry","authorImage":"/img/blog/comment-02.jpg","CommentTime":"Posted on May 24, 2020 at 06:20pm","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, non pariatur itaque illo sunt?"},{"isReply":false,"authorName":"William","authorImage":"/img/blog/comment-03.jpg","CommentTime":"Posted on Mar 18, 2020 at 10:45am","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, non pariatur itaque illo sunt?"}]}}')},"4ce9":function(t){t.exports=JSON.parse('{"portfolio":{"sectionTitle":"Projects","sectionTitleWaterText":"Latest Work","portfolioGallery":[{"image":"/img/portfolio/flux.png","title":"Flux - Portfolio","link":"https://flux-hq.com/","desc":"A small agency that finds Office Spaces for you. \\nUI/UX - Front-End Development (Bootstrap, Hugo)"},{"image":"/img/portfolio/lavender.png","title":"Lavender - Ecommerce","link":"http://lavender.com.pk/","desc":"A Unique Shopping System Where They Do The Shopping For You. \\nUI/UX - FullStack Development (Bootstrap, Vue, Laravel)"},{"image":"/img/portfolio/lara-morabito.jpg","title":"Lara Morabito","link":"https://lara-morabito-new.netlify.app/","desc":"Real Estate Of Garden Places. \\nUI/UX - Front-End Development (Bootstrap, Hugo)"},{"image":"/img/portfolio/intelligent.png","title":"intelligent Handshake - Agency","link":"https://intelligenthandshake.com/","desc":"A Company that helps improve the metrics of any consumer platform. \\nUI/UX - Front-End Development (Bootstrap, Hugo)"},{"image":"/img/portfolio/slice-collective.png","title":"Slice Collective - Video Production","link":"https://slicecollective.com/","desc":"Video Production Company that specializes in entertainment & brand marketing. \\nUI/UX - Front-End Development (Bootstrap, Vue)"},{"image":"/img/portfolio/cousin.png","title":"Cousin MG","link":"https://cousinmg.com/","desc":"Media planning and buying experts that specialise in the entertainment industry. \\nUI/UX - Front-End Development (Bootstrap, Hugo)"},{"image":"/img/portfolio/kmk-recruitment.jpg","title":"KMK Recruitment","link":"https://kmkrecruitment.co.uk/","desc":"A personal portfolio Template with animations. \\nUI/UX - Front-End Development (Bootstrap, Vue)"},{"image":"/img/portfolio/arabianpetals.png","title":"Arabian Petal - Flower Shop","link":"http://arabianpetals.ae/","desc":"A flower shop made in Shopify. \\nUI/UX - Front-End Development (Shopify)"},{"image":"/img/portfolio/show-me-the-wow.jpg","title":"Show Me The Wow","link":"https://showmethewow.com/","desc":"Website for a competitive show but if the ideas and prototypes make money, they all win. \\nUI/UX - Front-End Development (Bootstrap, Hugo)"},{"image":"/img/portfolio/knowyourdoctor.png","title":"Know Your Doctor - Blogs","link":"https://www.knowyourdoctor.com.cy/","desc":"A very simple and sleak design with blogging. \\nUI/UX - Front-End Development (WordPress)"},{"image":"/img/portfolio/ksbin.png","title":"Ksbin - CRM","link":"http://client.artdevapp.com/","desc":"A client relation management system. Laravel/Bootstrap Used. \\nUI/UX - Front-End Development (Bootstrap, Vue, CorePHP, Laravel)"},{"image":"/img/portfolio/work.png","title":"Work - Dashboard","link":"https://work.artdevapp.com/","desc":"Keeping the records together. PHP/Vue used. \\nUI/UX - Front-End Development (Bootstrap, PHP, Vue)"}]},"projectDetails":{"projectDetailsTitle":"Web Development Project For Agency Business","projectDetailsDesc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem veritatis quo et ullam, ducimus itaque earum dolorem? Consectetur, et, aut. A, corporis officia eius dicta explicabo saepe nesciunt, mollitia minima, atque maiores optio cum. Atque amet unde impedit voluptate cumque distinctio minima, aspernatur nemo! Expedita in, numquam blanditiis ullam rem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum fugit officia dolores eligendi, rem. Quibusdam quasi impedit perspiciatis iure maiores, eaque numquam doloremque, quo nam soluta itaque obcaecati tempore!.</br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex, nam adipisci dolores laborum earum. Unde cum, ut nostrum nihil alias, laudantium molestiae, vitae quidem dolorem officiis ipsum. Aliquid nemo consequuntur cupiditate delectus sapiente doloribus dolorem, at suscipit, non laudantium mollitia magnam repellat atque quia! Aut, veniam, nam. Ex porro optio facilis nostrum, qui ipsa?","images":[{"image":"/img/screenshot/screenshot-1.jpg"},{"image":"/img/screenshot/screenshot-2.jpg"},{"image":"/img/screenshot/screenshot-3.jpg"}]},"projectDetailsInfo":{"title":"Project Information","lists":[{"label":"Client","desc":"Dominic Due"},{"label":"Location","desc":"Barlin, Jarmany"},{"label":"Sector","desc":"South"},{"label":"Year","desc":"2020"},{"label":"Budget","desc":"$5000"},{"label":"Website","desc":"www.example.com"}]}}')},5549:function(t){t.exports=JSON.parse('{"funfacts":[{"title":"HTML/CSS","counter":"95"},{"title":"Bootstrap","counter":"95"},{"title":"PHP/Laravel","counter":"95"},{"title":"JS/Ajax/Vue","counter":"90"},{"title":"WordPress","counter":"90"},{"title":"Hugo","counter":"90"},{"title":"Illustrator / Photoshop","counter":"85"},{"title":"Figma / Adobe XD","counter":"90"}]}')},8650:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"funfact-area section-padding pb-0 bg-color-dark"},[i("div",{staticClass:"container"},[t._m(0),i("div",{staticClass:"row mtn-50"},t._l(t.data.funfacts,(function(e){return i("div",{key:e.id,staticClass:"col-md-3 col-sm-6 mt-50"},[i("div",{staticClass:"funfact-item text-center"},[i("span",{staticClass:"counter"},[i("ICountUp",{attrs:{endVal:e.counter}})],1),i("h6",[t._v(t._s(e.title))])])])})),0)])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"section-title text-center"},[i("span",{staticClass:"water-text"},[t._v("My Skills")]),i("h2",{staticClass:"title"},[t._v("My Skills")])])])])}],o=i("87f4"),n=i.n(o),l=i("5549"),r={components:{ICountUp:n.a},data:function(){return{data:l}}},c=r,u=i("2877"),m=Object(u["a"])(c,a,s,!1,null,null,null);e["a"]=m.exports},"871b":function(t){t.exports=JSON.parse('{"service":{"sectionTitle":"My Specialty","sectionTitleWaterText":"My Specialty","services":[{"serviceNo":"01","title":"Web Design","desc":"I provide the designs of the website in as well as custom components designing Using Tools Like Figma, XD, Illustrator."},{"serviceNo":"02","title":"Front-End Development","desc":"I provide the front-end development not only design wise but with latest frameworks like Vue and bootstrap."},{"serviceNo":"03","title":"Back-End Development","desc":"I provide the back-end development that is done with frameworks like Laravel to give users the best experience and secure connection."},{"serviceNo":"04","title":"CMS Development","desc":"I provide CMS(Content Management System) like WordPress, Shopify & Hugo"},{"serviceNo":"05","title":"Animations","desc":"I provide the animations in the website to the clients that are looking into more of a classic looking website."},{"serviceNo":"06","title":"Responsive/Up to Date","desc":"I provide resposive code for all devices as well as all the code and system in made in the latest technologies and no older versions."}]}}')},"87f4":function(t,e,i){!function(e,a){t.exports=a(i("1a23"))}(0,(function(t){"use strict";var e,i=(e="Function",function(t){return Object.prototype.toString.call(t)==="[object ".concat(e,"]")}),a={__countup__:t.CountUp,name:"VueCountUp",props:{delay:{type:Number,required:!1,default:0},endVal:{type:Number,required:!0},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(t){this.instance&&i(this.instance.update)&&this.instance.update(t)},deep:!1}},methods:{create:function(){var e=this;if(!e.instance){var i=e.$el,a=new t.CountUp(i,e.endVal,e.options);a.error||(e.instance=a,e.delay<0?e.$emit("ready",a,t.CountUp):setTimeout((function(){return a.start((function(){return e.$emit("ready",a,t.CountUp)}))}),e.delay))}},destroy:function(){this.instance=null},printValue:function(t){if(this.instance&&i(this.instance.printValue))return this.instance.printValue(t)},start:function(t){if(this.instance&&i(this.instance.start))return this.instance.start(t)},pauseResume:function(){if(this.instance&&i(this.instance.pauseResume))return this.instance.pauseResume()},reset:function(){if(this.instance&&i(this.instance.reset))return this.instance.reset()},update:function(t){if(this.instance&&i(this.instance.update))return this.instance.update(t)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}};return function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&a.firstChild?a.insertBefore(s,a.firstChild):a.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(""),function(t,e,i,a,s,o,n,l,r,c){"boolean"!=typeof n&&(r=l,l=n,n=!1);var u,m="function"==typeof i?i.options:i;if(t&&t.render&&(m.render=t.render,m.staticRenderFns=t.staticRenderFns,m._compiled=!0,s&&(m.functional=!0)),a&&(m._scopeId=a),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,r(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},m._ssrRegister=u):e&&(u=n?function(){e.call(this,c(this.$root.$options.shadowRoot))}:function(t){e.call(this,l(t))}),u)if(m.functional){var d=m.render;m.render=function(t,e){return u.call(e),d(t,e)}}else{var p=m.beforeCreate;m.beforeCreate=p?[].concat(p,u):[u]}return i}({render:function(){var t=this.$createElement;return(this._self._c||t)("span")},staticRenderFns:[]},void 0,a,"data-v-0abbdf5a",!1,void 0,void 0,void 0)}))},"8bca":function(t,e,i){"use strict";i("dbe9")},"9aaa":function(t,e,i){},"9d63":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blog-post"},[i("div",{staticClass:"blog-post__thumb"},[i("router-link",{attrs:{to:"/blog-details"}},[i("v-lazy-image",{attrs:{src:t.blogData.image,alt:"blog image"}})],1)],1),i("div",{staticClass:"blog-post__content"},[i("h4",{staticClass:"blog-title"},[i("router-link",{attrs:{to:"/blog-details"}},[t._v(t._s(t.blogData.title))])],1),i("div",{staticClass:"blog-meta d-flex justify-content-between"},[i("div",{staticClass:"date"},[t._v(" "+t._s(t.blogData.postDate)+" ")]),i("ul",{staticClass:"blog-meta-action"},[i("li",[i("button",[i("i",{staticClass:"fa fa-comment"}),t._v(" "+t._s(t.blogData.comment)+" ")])]),i("li",[i("button",[i("i",{staticClass:"fa fa-heart-o"}),t._v(" "+t._s(t.blogData.like)+" ")])])])])])])},s=[],o={props:["blogData"]},n=o,l=i("2877"),r=Object(l["a"])(n,a,s,!1,null,null,null);e["a"]=r.exports},a82a:function(t){t.exports=JSON.parse('{"hero":{"subTitle":"Hi, I\'m <span>Tafseer</span>","title":"Full-Stack Developer, UI/UX Designer, Freelancer","bgImg":"/img/hero/world.png","image":"/img/hero/hero3.png"}}')},acde:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"portfolio-item"},[i("div",{staticClass:"portfolio-item__thumb"},[i("a",{attrs:{href:t.portfolio.link,target:"_blank"}},[i("v-lazy-image",{attrs:{src:t.portfolio.image,alt:"portfolio image"}})],1)]),i("div",{staticClass:"portfolio-item__content"},[i("h4",{staticClass:"portfolio-title"},[i("a",{attrs:{href:t.portfolio.link,target:"_blank"}},[t._v(t._s(t.portfolio.title))])]),i("p",[t._v(t._s(t.portfolio.desc))])])])},s=[],o={props:["portfolio"]},n=o,l=i("2877"),r=Object(l["a"])(n,a,s,!1,null,null,null);e["a"]=r.exports},af63:function(t,e,i){},b10c:function(t){t.exports=JSON.parse('{"bgImage":"/img/bg/testimonial.png","testimonials":[{"desc":"Tafseer was extremely proactive and forthcoming with ideas he had a great understanding of the project.","author":"Jessica Lowe","designation":"Upwork "},{"desc":"The freelancer had great communication skills, sought to understand the project, and then went beyond the initial description to think a few steps ahead. I highly recommend him.","author":"Paul Warren","designation":"Upwork"},{"desc":"Tafseer did a great job for us. We had a website with a lot of pages that needed to be redesigned in Elementor. Tafseer got it done on schedule and I recommended him to a colleague who is already using him and is please so far as well.","author":"James Bronner","designation":"Upwork"},{"desc":"It was very pleasant working with Tafseer, and would absolutely use his services for our future projects. Work was completed on time, and professionally delivered. Great communication throughout the entire project. Highly recommend Tafseer. Thank you","author":"Ratna Colluru","designation":"Upwork"}]}')},b658:function(t){t.exports=JSON.parse('{"about":{"sectionTitle":"About Me","sectionTitleWaterText":"About Me","aboutMe":" I have 6+ years of experience in application designing, development, and UI/UX. An expert in WordPress, PHP, JS, HTML/CSS, MySQL, AWS, Laravel, Vue.js, Photoshop, Illustrator and Adobe XD. I firmly believe in action and when given opportunity, I will prove that I am much more than what I have written about myself."},"socials":[{"icon":"fa fa-linkedin","link":"https://www.linkedin.com/in/sajjad-aslam-3a0682184/"}],"aboutDetails":{"image":"/img/about/about.jpeg","heading":"I\'m Tafseer, <br> Full-Stack Developer <br>UX/UI Designer <br>Freelancer","infoList":[{"label":"Name","info":"Tafseer Hussain"},{"label":"Email","info":"tafseerhussain88@gmail.com"},{"label":"Skype","info":"tafseer.hussain6"},{"label":"Website","info":"tafseer.website"},{"label":"Freelance","info":"Available"},{"label":"Phone","info":"(+92)331-6474720"}]}}')},d504:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-container"},[i("Header"),i("Hero"),i("AboutMe"),i("PortfolioGallery"),i("Service"),i("Funfact"),i("Testimonial"),i("Footer"),i("OffCanvasMobileMenu"),i("BackToTop")],1)},s=[],o=i("0418"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero hero__banner bg-color-dark"},[i("div",{staticClass:"container custom-container"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-xl-6 col-lg-6 col-md-6"},[i("div",{staticClass:"hero__content"},[i("h5",{staticClass:"hero__content--subtitle",domProps:{innerHTML:t._s(t.data.hero.subTitle)}},[t._v(t._s(t.data.hero.subTitle))]),i("h1",{staticClass:"hero__content--title"},[t._v(" "+t._s(t.data.hero.title)+" ")])])]),i("div",{staticClass:"col-xl-6 col-lg-6 col-md-6"},[i("div",{staticClass:"hero__thumb"},[i("div",{staticClass:"hero__thumb--one"},[i("v-lazy-image",{staticClass:"img-fluid rotateWorld",attrs:{src:t.data.hero.bgImg,alt:"image"}})],1),i("div",{staticClass:"hero__thumb--two"},[i("v-lazy-image",{staticClass:"img-fluid",attrs:{src:t.data.hero.image,alt:"image"}})],1)])])])])])},l=[],r=i("a82a"),c={data:function(){return{data:r}}},u=c,m=(i("2a73"),i("2877")),d=Object(m["a"])(u,n,l,!1,null,null,null),p=d.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"about-us-area section-padding bg-color-light"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"section-title text-center"},[i("span",{staticClass:"water-text"},[t._v(t._s(t.data.about.sectionTitleWaterText))]),i("h2",{staticClass:"title"},[t._v(t._s(t.data.about.sectionTitle))])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-10 offset-lg-1"},[i("div",{staticClass:"about-us"},[i("div",{staticClass:"about-us__content text-center"},[i("p",[t._v(t._s(t.data.about.aboutMe))]),i("div",{staticClass:"social-link"},t._l(t.data.socials,(function(t){return i("a",{key:t.id,attrs:{href:"javascript:void(0);",target:"_blank"}},[i("i",{staticClass:"fa fa-address-card"})])})),0)])])])])])])},h=[],f=i("b658"),v={data:function(){return{data:f}}},b=v,C=(i("3075"),Object(m["a"])(b,g,h,!1,null,null,null)),w=C.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"portfolio-area section-padding bg-color-dark"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"section-title text-center"},[i("span",{staticClass:"water-text"},[t._v(t._s(t.data.portfolio.sectionTitleWaterText))]),i("h2",{staticClass:"title"},[t._v(t._s(t.data.portfolio.sectionTitle))])])])]),i("div",{staticClass:"row align-items-center mbn-50"},t._l(t.data.portfolio.portfolioGallery.slice(0,8),(function(t){return i("div",{key:t.id,staticClass:"col-lg-3 col-sm-6"},[i("PortfolioItem",{attrs:{portfolio:t}})],1)})),0),i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-12 text-center mt-5"},[i("router-link",{staticClass:"btn text-white border radius-50 px-5 py-3",attrs:{to:"/project"}},[t._v("View More Projects")])],1)])])])},y=[],k=i("4ce9"),V=i("acde"),x={components:{PortfolioItem:V["a"]},data:function(){return{data:k}}},T=x,D=Object(m["a"])(T,_,y,!1,null,null,null),E=D.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"service-area section-padding pb-0 bg-color-light"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"section-title text-center"},[i("span",{staticClass:"water-text"},[t._v(t._s(t.data.service.sectionTitleWaterText))]),i("h2",{staticClass:"title"},[t._v(t._s(t.data.service.sectionTitle))])])])]),i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-lg-6"},[i("div",{staticClass:"row mtn-30"},t._l(t.data.service.services,(function(e){return i("div",{key:e.id,staticClass:"col-md-6 mt-30"},[i("div",{staticClass:"service-item"},[i("div",{staticClass:"service-item__icon"},[i("span",[t._v(t._s(e.serviceNo))])]),i("div",{staticClass:"service-item__content"},[i("h4",{staticClass:"title"},[t._v(t._s(e.title))]),i("p",{staticClass:"desc"},[t._v(t._s(e.desc))])])])])})),0)]),i("div",{staticClass:"col-lg-6"},[i("div",{staticClass:"service-author"},[i("v-lazy-image",{staticClass:"img-fluid",attrs:{src:"/img/service/back.jpeg",alt:"image"}})],1)])])])])},S=[],F=i("871b"),q={data:function(){return{data:F}}},I=q,P=(i("8bca"),Object(m["a"])(I,j,S,!1,null,null,null)),U=P.exports,A=i("8650"),M=i("2214"),N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"blog-area section-padding bg-color-light fix"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"section-title text-center"},[i("span",{staticClass:"water-text"},[t._v(t._s(t.data.blog.sectionTitleWaterText))]),i("h2",{staticClass:"title"},[t._v(t._s(t.data.blog.sectionTitle))])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"blog-carousel"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.data.blog.blogPosts,(function(t){return i("div",{key:t.id,staticClass:"swiper-slide"},[i("BlogPost",{attrs:{blogData:t}})],1)})),0)],1)])])])])},O=[],B=i("9d63"),H=i("46c9"),W={components:{BlogPost:B["a"]},data:function(){return{data:H,swiperOption:{loop:!0,speed:1e3,watchSlidesVisibility:!0,spaceBetween:30,breakpoints:{1200:{slidesPerView:3},768:{slidesPerView:2},575:{slidesPerView:1}}}}}},L=W,J=Object(m["a"])(L,N,O,!1,null,null,null),R=J.exports,$=i("fd2d"),X=i("1e05"),G=i("205c"),z={components:{Header:o["a"],Hero:p,AboutMe:w,PortfolioGallery:E,Service:U,Funfact:A["a"],Testimonial:M["a"],BlogSection:R,Footer:$["a"],OffCanvasMobileMenu:X["a"],BackToTop:G["a"]},metaInfo:{title:"Tafseer - Full Stack Developer - UI/UX Designer",htmlAttrs:{lang:"en",amp:!0}}},K=z,Q=Object(m["a"])(K,a,s,!1,null,null,null);e["default"]=Q.exports},dbe9:function(t,e,i){}}]);
//# sourceMappingURL=Home.cecc052e.js.map