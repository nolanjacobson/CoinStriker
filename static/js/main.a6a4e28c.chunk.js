(this.webpackJsonpcoinstriker=this.webpackJsonpcoinstriker||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(6),l=t.n(o),s=(t(14),t(1)),r=t(2),c=t(4),m=t(3),d=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-header"},i.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}," ",i.a.createElement("span",{className:"sr-only"},"Toggle navigation")," ",i.a.createElement("span",{className:"icon-bar"})," ",i.a.createElement("span",{className:"icon-bar"})," ",i.a.createElement("span",{className:"icon-bar"})," "),i.a.createElement("div",null," ",i.a.createElement("img",{src:"img/header.png",alt:""}))),i.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},i.a.createElement("ul",{className:"nav navbar-nav navbar-right"},i.a.createElement("li",null,i.a.createElement("a",{href:"#about",className:"page-scroll"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"#investmentStrategy",className:"page-scroll"},"Our Edge")),i.a.createElement("li",null,i.a.createElement("a",{href:"#team",className:"page-scroll"},"Team")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contact",className:"page-scroll"},"Contact"))))))}}]),t}(n.Component),u=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{id:"header"},i.a.createElement("div",{className:"intro"},i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8 col-md-offset-2 intro-text"},i.a.createElement("div",null," ",i.a.createElement("img",{src:"img/header-w.png",className:"img-responsive",alt:""})),i.a.createElement("a",{href:"#contact",className:"btn btn-custom btn-lg page-scroll"},"Contact Us")," "))))))}}]),t}(n.Component),p=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"about"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xs-12 col-md-6"}," ",i.a.createElement("img",{src:"img/about.jpg",className:"img-responsive",alt:""})," "),i.a.createElement("div",{className:"col-xs-12 col-md-6"},i.a.createElement("div",{className:"about-text"},i.a.createElement("h2",null,"About Us"),i.a.createElement("p",null,this.props.data?this.props.data.paragraph1:"loading..."),i.a.createElement("p",null,this.props.data?this.props.data.paragraph2:"loading..."))))))}}]),t}(n.Component),g=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"team",className:"text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-md-8 col-md-offset-2 section-title"},i.a.createElement("h2",null,"Meet the Team")),i.a.createElement("div",{id:"row"},this.props.data?this.props.data.map((function(e,a){return i.a.createElement("div",{key:"".concat(e.name,"-").concat(a),className:"col-md-alt team"},i.a.createElement("div",{className:"thumbnail"}," ",i.a.createElement("img",{src:e.img,alt:"...",className:"team-img"}),i.a.createElement("div",{className:"caption"},i.a.createElement("h4",null,e.name),i.a.createElement("p",null,e.job))))})):"loading")))}}]),t}(n.Component),f=t(7),h=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"contact"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-md-8"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"section-title"},i.a.createElement("h2",null,"Get In Touch"),i.a.createElement("p",null,"Please fill out the form below to send us an email and we will get back to you as soon as possible.")),i.a.createElement("form",{name:"sentMessage",noValidate:!0,action:"https://formspree.io/f/xwkwqlye",method:"POST"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required",name:"name"}),i.a.createElement("p",{className:"help-block text-danger"}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",id:"email",className:"form-control",placeholder:"Email",required:"required",name:"_replyto"}),i.a.createElement("p",{className:"help-block text-danger"})))),i.a.createElement("div",{className:"form-group"},i.a.createElement("textarea",Object(f.a)({name:"message",id:"message",className:"form-control",rows:"4",placeholder:"Message",required:!0},"name","message")),i.a.createElement("p",{className:"help-block text-danger"})),i.a.createElement("div",{id:"success"}),i.a.createElement("button",{type:"submit",className:"btn btn-custom btn-lg",value:"Send"},"Send Message")))),i.a.createElement("div",{className:"col-md-3 col-md-offset-1 contact-info"},i.a.createElement("div",{className:"contact-item"},i.a.createElement("h3",null,"Contact Info"),i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-map-marker"})," Address"),this.props.data?this.props.data.address:"loading")),i.a.createElement("div",{className:"contact-item"},i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-phone"})," Phone")," ",this.props.data?this.props.data.phone:"loading")),i.a.createElement("div",{className:"contact-item"},i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("i",{className:"fa fa-envelope-o"})," Email")," ",this.props.data?this.props.data.email:"loading"))),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"social"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:this.props.data?this.props.data.facebook:"/"},i.a.createElement("i",{className:"fa fa-facebook"}))),i.a.createElement("li",null,i.a.createElement("a",{href:this.props.data?this.props.data.twitter:"/"},i.a.createElement("i",{className:"fa fa-twitter"}))),i.a.createElement("li",null,i.a.createElement("a",{href:this.props.data?this.props.data.youtube:"/"},i.a.createElement("i",{className:"fa fa-youtube"}))))))))),i.a.createElement("div",{id:"footer"},i.a.createElement("div",{className:"container text-center"},i.a.createElement("p",null,"\xa9 2020 CoinStriker"))))}}]),t}(n.Component),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"investmentStrategy",className:"text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-md-10 col-md-offset-1 section-title"},i.a.createElement("h2",null,"Our Edge")),i.a.createElement("div",{className:"row"},this.props.data?this.props.data.map((function(e,a){return i.a.createElement("div",{key:"".concat(e.title,"-").concat(a),className:"col-xs-6 col-md-3"}," ",i.a.createElement("i",{className:e.icon}),i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.text))})):"Loading...")))}}]),t}(n.Component),E=t(8),v=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={landingPageData:{}},e}return Object(r.a)(t,[{key:"getlandingPageData",value:function(){this.setState({landingPageData:E})}},{key:"componentDidMount",value:function(){this.getlandingPageData()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d,null),i.a.createElement(u,{data:this.state.landingPageData.Header}),i.a.createElement(p,{data:this.state.landingPageData.About}),i.a.createElement(b,{data:this.state.landingPageData.InvestmentStrategy}),i.a.createElement(g,{data:this.state.landingPageData.Team}),i.a.createElement(h,{data:this.state.landingPageData.Contact}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"Header":{"title":"CoinStriker","paragraph":"Digital Asset Management Fund"},"About":{"paragraph1":"CoinStriker is a boutique research, algorithmic trading, and investment fund which identifies highly nuanced FinTech, blockchain, and open finance investment opportunities.","paragraph2":"We have a deep passion and hyper-focus for Decentralized Finance (DeFi) and Proof-of-Stake (PoS) consensus algorithm technologies and focus solely on that segment."},"Services":[{"icon":"fa fa-wordpress","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-cart-arrow-down","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-cloud-download","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-language","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-plane","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-pie-chart","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."}],"Testimonials":[{"img":"img/testimonials/01.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/02.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/03.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/04.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/05.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/06.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"}],"Team":[{"img":"img/team/01.jpg","name":"Ross Karel","job":"Founder & Managing Director"},{"img":"img/team/02.jpg","name":"Gabe Higgins","job":"Chief Blockchain Officer"},{"img":"img/team/03.jpg","name":"Kyle Santiago","job":"Chief Investment Officer"},{"img":"img/team/04.jpg","name":"Jeff Stanislow","job":"Chief Sales Officer"},{"img":"img/team/05.jpg","name":"Nolan Jacobson","job":"VP of Engineering"}],"Contact":{"address":"PO BOX 341858 Tampa, FL 33626","phone":"888-340-INET","email":"explore@coinstriker.com","facebook":"fb.com","twitter":"twitter.com","youtube":"youtube.com"},"InvestmentStrategy":[{"icon":"fa fa-rocket","title":"Algorithmic","text":"Our data driven algorithms look for the edge in the market to make non-emotional decisions to maximize profit."},{"icon":"fa fa-bar-chart","title":"Micro-Index","text":"We are able to evaluate the best programmtic entry and exit logic to ensure efficiency on micro timescales using deep research analyses."},{"icon":"fa fa-star","title":"Macro-Index","text":"Building trust in communities and creating tools that foster growth in the ecosystem allow for long term growth in the assets we manage."},{"icon":"fa fa-bolt","title":"DeFi Multiplier","text":"Staking, lending, flash loans, operating nodes, and more are all things that we specialize in so that you don\'t have to."}]}')},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a6a4e28c.chunk.js.map