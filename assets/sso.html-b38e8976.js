import{_ as u,a as d,b as _,c as p}from"./google-04c02151.js";import{_ as g}from"./Google-6-ed708062.js";import{_ as b,M as m,X as f,a5 as e,O as s,P as l,$ as t,ai as A,G as r}from"./framework-ca2ea75b.js";const k={},v=A('<h1 id="单点登录" tabindex="-1"><a class="header-anchor" href="#单点登录" aria-hidden="true">#</a> 单点登录</h1><h3 id="single-sign-on-client-id" tabindex="-1"><a class="header-anchor" href="#single-sign-on-client-id" aria-hidden="true">#</a> Single sign-on client id</h3><p>客户端ID</p><h3 id="single-sign-on-client-secrets" tabindex="-1"><a class="header-anchor" href="#single-sign-on-client-secrets" aria-hidden="true">#</a> Single sign-on client secrets</h3><p>秘钥ID</p><div class="hint-container warning"><p class="hint-container-title">注意事项</p><ol><li><p>AList 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用</p></li><li><p>四种单点登录暂时只能启用一种，如果你之前用的是别的单点登录方式然后换了新的单点登录方式 那么你回到个人资料绑定的时候需要先将之前的解绑（点击一下即可）然后再绑定现在你要使用的单点登录方式。</p></li></ol></div>',6),x=l("div",{class:"hint-container warning"},[l("p",{class:"hint-container-title"},"注意"),l("p",null,"若想使用GitHub登录，首选需要你搭建Alist的机器能连接访问GitHub才可以调用使用，不然连接不上无法使用")],-1),D={href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"},I=l("strong",null,[l("code",null,"New OAuth App")],-1),L=l("h3",{id:"register-oauth-填写说明",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#register-oauth-填写说明","aria-hidden":"true"},"#"),t(" Register OAuth 填写说明")],-1),E=l("li",null,[t("Application name "),l("ul",null,[l("li",null,"随便写想叫什么叫什么")])],-1),w=l("li",null,[l("mark",null,[l("strong",null,"Homepage URL")]),l("ul",null,[l("li",null,[t("主页网址地址 "),l("ul",null,[l("li",null,"可以使用http https都可以")])])])],-1),R=l("li",null,[t("Application description "),l("ul",null,[l("li",null,"随便写")])],-1),B=l("mark",null,[l("strong",null,"Authorization callback URL")],-1),G=l("li",null,"回调URL地址",-1),z={href:"https://xn--6qqv7i2xdt95b/api/auth/sso_callback",target:"_blank",rel:"noopener noreferrer"},C=l("ul",null,[l("li",null,"可以使用http https都可以")],-1),H=l("p",null,[t("填写完毕后记得获取一下 "),l("strong",null,"Client secrets"),t("，然后填写到Alist后台。")],-1),U=l("h4",{id:"完整填写参考示意图",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#完整填写参考示意图","aria-hidden":"true"},"#"),t(" 完整填写参考示意图")],-1),N=l("p",null,[l("img",{src:u,alt:"sso"})],-1),O=l("h3",{id:"视频教程",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#视频教程","aria-hidden":"true"},"#"),t(" 视频教程")],-1),S={href:"https://b23.tv/Fm8AkC5",target:"_blank",rel:"noopener noreferrer"},T={href:"https://open-dev.dingtalk.com/fe/app#/corp/app",target:"_blank",rel:"noopener noreferrer"},F=l("p",null,[t("右上角先 "),l("code",null,"新建应用"),t("，类型选择 "),l("code",null,"H5微应用"),t(" ,内容自己填写点击确认创建")],-1),P=l("p",null,[t("点击新建好好的应用我们就会看到应用凭证选项，里面的 "),l("code",null,"AppKey"),t(" 就是客户端ID，"),l("code",null,"AppSecret"),t(" 是客户端秘钥")],-1),V=l("ul",null,[l("li",null,"填写到Alist后台单点登录内对应的参数即可")],-1),j=l("p",null,[t("来到左侧栏找到 "),l("code",null,"登录与分享"),t(),l("mark",null,[t("填写回调参数 "),l("strong",null,[l("code",null,"http://127.0.0.1:5234/api/auth/sso_callback")])])],-1),y=l("div",{class:"language-回调参数示例 line-numbers-mode","data-ext":"回调参数示例"},[l("pre",{class:"language-回调参数示例"},[l("code",null,`http://127.0.0.1:5244/api/auth/sso_callback
`)]),l("div",{class:"line-numbers","aria-hidden":"true"},[l("div",{class:"line-number"})])],-1),M={href:"http://127.x",target:"_blank",rel:"noopener noreferrer"},q=l("strong",null,"http(s)😕/自己域名/api/auth/sso_callback",-1),K=l("p",null,[t("回调参数写好好我们来到左侧栏找到 "),l("code",null,"权限管理"),t(" 找到 "),l("strong",null,[l("code",null,"通讯录个人信息读权限")]),t(" 然后点击进行授权")],-1),W=l("p",null,"Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用",-1),X=l("h4",{id:"完整填写参考示意图-1",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#完整填写参考示意图-1","aria-hidden":"true"},"#"),t(" 完整填写参考示意图")],-1),$=l("p",null,[l("img",{src:d,alt:"sso"})],-1),J=l("p",null,null,-1),Q={href:"https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"},Y=l("p",null,"然后注册创建应用，我这里就不多说了可以看完整示意图",-1),Z=l("p",null,[t("账户类型必须选择："),l("strong",null,"任何组织目录(任何 Azure AD 目录 - 多租户)中的帐户")],-1),ll={href:"http://xn--localhost-jn9p932c",target:"_blank",rel:"noopener noreferrer"},tl=l("div",{class:"language-回调参数示例 line-numbers-mode","data-ext":"回调参数示例"},[l("pre",{class:"language-回调参数示例"},[l("code",null,`http://localhost:5244/api/auth/sso_callback?method=sso_get_token
http://localhost:5244/api/auth/sso_callback?method=get_sso_id
`)]),l("div",{class:"line-numbers","aria-hidden":"true"},[l("div",{class:"line-number"}),l("div",{class:"line-number"})])],-1),el=l("ul",null,[l("li",null,[t("大家使用的时候写 "),l("strong",null,"http(s)😕/自己域名/api/auth/sso_callback?method=sso_get_token")]),l("li",null,[t("大家使用的时候写 "),l("strong",null,"http(s)😕/自己域名/api/auth/sso_callback?method=get_sso_id")]),l("li",null,"注：在新建应用时添加重定向URL的时候只能添加一条，第二条等应用好注册好后点击应用看到 重定向 URI 后面的选项")],-1),nl=l("p",null,[t("填写好后我们点击左侧栏的 "),l("code",null,"证书和密码"),t(" 新建一个 "),l("code",null,"客户端密码"),t("即可获得我们的客户端秘钥")],-1),sl=l("ul",null,[l("li",null,[t("客户端密码创建好后 "),l("strong",null,[l("code",null,"值")]),t(" 参数是我们的"),l("code",null,"客户端秘钥"),t("，记得保存，出现一次就不会在出现了，如果没有及时保存新建一个客户端密码即可")])],-1),ol=l("p",null,[t("客户端ID在左侧栏顶部的 "),l("code",null,"概述"),t("，找到 应用程序(客户端)ID 就是我们需要填写到Alist里面的客户端ID")],-1),il=l("ul",null,[l("li",null,"客户端ID和秘钥我们都拿到了填写到AList单点登录配置里面去即可")],-1),al=l("p",null,"Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用",-1),rl=l("h4",{id:"完整填写参考示意图-2",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#完整填写参考示意图-2","aria-hidden":"true"},"#"),t(" 完整填写参考示意图")],-1),cl=l("p",null,[l("img",{src:_,alt:"sso"})],-1),hl=l("p",null,null,-1),ul=l("div",{class:"hint-container warning"},[l("p",{class:"hint-container-title"},"注意"),l("p",null,"若想使用Google登录，首选需要你搭建Alist的机器能连接访问Google才可以调用使用，不然连接不上无法使用")],-1),dl={href:"https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},_l=l("li",null,[l("p",null,"如果是第一次使用需要先新建一个项目（随便写就行，如果已创建跳过）")],-1),pl=l("li",null,[l("p",null,[t("然后配置"),l("a",{href:"#%E5%90%8C%E6%84%8F%E5%B1%8F%E5%B9%95%E9%85%8D%E7%BD%AE"},"同意屏幕"),t("（如何配置文档中有单独说明，如果已经配置好跳过）")])],-1),gl=l("li",null,[l("p",null,"配置好统一屏幕后我们点左侧的凭据，创建凭据，选择OAuth 客户端ID")],-1),bl=l("ul",null,[l("li",null,"应用类型 选择 Web 应用，名称随便写"),l("li",null,"然后在 已获授权的重定向 URI 添加我们的两个回调参数")],-1),ml=l("div",{class:"language-回调参数示例 line-numbers-mode","data-ext":"回调参数示例"},[l("pre",{class:"language-回调参数示例"},[l("code",null,`http://127.0.0.1:5244/api/auth/sso_callback?method=get_sso_id
http://127.0.0.1:5244/api/auth/sso_callback?method=sso_get_token
`)]),l("div",{class:"line-numbers","aria-hidden":"true"},[l("div",{class:"line-number"}),l("div",{class:"line-number"})])],-1),fl=l("ul",null,[l("li",null,[t("大家使用的时候写 "),l("strong",null,"http(s)😕/自己域名/api/auth/sso_callback?method=get_sso_id")]),l("li",null,[t("大家使用的时候写 "),l("strong",null,"http(s)😕/自己域名/api/auth/sso_callback?method=sso_get_token")])],-1),Al=l("p",null,"填写好后，点击创建就能拿到 OAuth的客户端ID和秘钥",-1),kl=l("ul",null,[l("li",null,"（在这里如果你不小心关闭了也没关系，点击我们创建的应用名称进去在右上的位置就能看到）")],-1),vl=l("p",null,"客户端ID和秘钥我们都拿到了填写到AList单点登录配置里面去即可",-1),xl=l("p",null,"Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用",-1),Dl=l("h4",{id:"同意屏幕配置",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#同意屏幕配置","aria-hidden":"true"},"#"),t(" 同意屏幕配置")],-1),Il=l("p",null,"如已配置好 忽略本图即可(如果看不清楚可以放大)",-1),Ll=l("p",null,[l("img",{src:g,alt:"Google"})],-1),El=l("h4",{id:"完整填写参考示意图-3",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#完整填写参考示意图-3","aria-hidden":"true"},"#"),t(" 完整填写参考示意图")],-1),wl=l("p",null,[l("img",{src:p,alt:"sso"})],-1);function Rl(Bl,Gl){const n=r("ExternalLinkIcon"),c=r("ArtPlayer"),h=r("Tabs");return m(),f("div",null,[v,e(h,{id:"29",data:[{title:"GitHub"},{title:"钉钉"},{title:"微软"},{title:"谷歌"}],"tab-id":"sso"},{tab0:s(({title:o,value:i,isActive:a})=>[x,l("p",null,[t("打开 "),l("strong",null,[l("a",D,[t("https://github.com/settings/developers"),e(n)])]),t(" 点击 "),I]),L,l("ul",null,[E,w,R,l("li",null,[B,l("ul",null,[G,l("li",null,[l("strong",null,[l("a",z,[t("https://你的域名/api/auth/sso_callback"),e(n)])]),C])])])]),H,U,N,O,e(c,{src:"https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4872400300415846&raw=true",poster:"/img/advanced/github-login.png"}),l("p",null,[l("strong",null,[t("视频若失效可以前往观看: "),l("a",S,[t("https://b23.tv/Fm8AkC5"),e(n)])])])]),tab1:s(({title:o,value:i,isActive:a})=>[l("p",null,[t("首先打开 "),l("strong",null,[l("a",T,[t("https://open-dev.dingtalk.com/fe/app#/corp/app"),e(n)])])]),F,P,V,j,y,l("ul",null,[l("li",null,[t("注：我这里回调参数是本地测试就使用了 "),l("a",M,[t("http://127.x"),e(n)]),t(" 大家使用的时候写 "),q])]),K,W,X,$,J]),tab2:s(({title:o,value:i,isActive:a})=>[l("p",null,[t("首先打开 "),l("strong",null,[l("a",Q,[t("https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade"),e(n)])])]),Y,Z,l("p",null,[t('微软回调参数：必须以"HTTPS"或"'),l("a",ll,[t("http://localhost开头"),e(n)]),t(" （我这里是本地测试就用了localhost）")]),tl,el,nl,sl,ol,il,al,rl,cl,hl]),tab3:s(({title:o,value:i,isActive:a})=>[ul,l("ol",null,[l("li",null,[l("p",null,[t("首先打开 "),l("strong",null,[l("a",dl,[t("https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn"),e(n)])])])]),_l,pl,gl]),bl,ml,fl,Al,kl,vl,xl,Dl,Il,Ll,El,wl]),_:1})])}const Ul=b(k,[["render",Rl],["__file","sso.html.vue"]]);export{Ul as default};