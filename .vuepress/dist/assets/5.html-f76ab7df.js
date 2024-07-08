import{_ as n,p as i,q as r,s,R as a,t,Z as p,n as o}from"./framework-87c4c4c1.js";const c="/assets/2-5f70ebad.png",l="/assets/1-0f990b2b.png",d="/assets/3-cae57d70.png",m="/assets/4-4233a61e.png",h="/assets/5-c94daa36.png",u="/assets/6-609d8adc.png",_="/assets/7-0d095249.png",g="/assets/8-c5d59064.png",x="/assets/9-2c8b1ed2.png",v="/assets/10-cc0b5241.png",b="/assets/11-4c1aa5db.png",f="/assets/12-a635ca3d.png",k="/assets/13-15161176.png",A="/assets/14-44387d1f.png",w="/assets/15-9e0b3a96.png",j="/assets/16-441a35c4.png",y="/assets/17-853063a0.png",E={},V={id:"vant-weapp",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#vant-weapp","aria-hidden":"true"},"#",-1),N={href:"https://vant-contrib.gitee.io/vant-weapp/#/home",target:"_blank",rel:"noopener noreferrer"},I=p('<h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><p><img src="'+c+'" alt="Alt text"></p><p><img src="'+l+`" alt="Alt text"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>npm i @vant/weapp@1.3.3 -S --production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+`" alt="Alt text"></p><h3 id="api-promise" tabindex="-1"><a class="header-anchor" href="#api-promise" aria-hidden="true">#</a> Api Promise</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>npm i --save miniprogram-api-promise@<span class="token number">1.0</span>.<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+'" alt="Alt text"></p><p><img src="'+h+`" alt="Alt text"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>promisifyAll<span class="token punctuation">}</span>  <span class="token keyword">from</span> <span class="token string">&#39;miniprogram-api-promise&#39;</span>
<span class="token keyword">const</span> wxp<span class="token operator">=</span>wx<span class="token punctuation">.</span>p<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token function">promisifyAll</span><span class="token punctuation">(</span>wx<span class="token punctuation">,</span>wxp<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+'" alt="Alt text"></p><h3 id="全局数据共享" tabindex="-1"><a class="header-anchor" href="#全局数据共享" aria-hidden="true">#</a> 全局数据共享</h3><p><img src="'+_+`" alt="Alt text"></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>npm i --save mobx-miniprogram@4.13.2 mobx-miniprogram-bindings@1.2.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+'" alt="Alt text"></p><h3 id="store页面绑定" tabindex="-1"><a class="header-anchor" href="#store页面绑定" aria-hidden="true">#</a> store页面绑定</h3><p><img src="'+x+'" alt="Alt text"></p><p><img src="'+v+'" alt="Alt text"></p><h3 id="store组件绑定" tabindex="-1"><a class="header-anchor" href="#store组件绑定" aria-hidden="true">#</a> store组件绑定</h3><p><img src="'+b+'" alt="Alt text"></p><p><img src="'+f+'" alt="Alt text"></p><h2 id="分包" tabindex="-1"><a class="header-anchor" href="#分包" aria-hidden="true">#</a> 分包</h2><p><img src="'+k+'" alt="Alt text"></p><h3 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法" aria-hidden="true">#</a> 配置方法</h3><p><img src="'+A+'" alt="Alt text"></p><p><img src="'+w+'" alt="Alt text"><img src="'+j+'" alt="Alt text"></p><h3 id="预下载" tabindex="-1"><a class="header-anchor" href="#预下载" aria-hidden="true">#</a> 预下载</h3><p><img src="'+y+'" alt="Alt text"></p>',28),L={href:"https://applet-base-api-t.itheima.net/docs-uni-shop/index.htm#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"};function S(q,C){const e=o("ExternalLinkIcon");return i(),r("div",null,[s("h2",V,[B,a(),s("a",N,[a("Vant Weapp"),t(e)])]),I,s("p",null,[s("a",L,[a("项目"),t(e)])])])}const R=n(E,[["render",S],["__file","5.html.vue"]]);export{R as default};
