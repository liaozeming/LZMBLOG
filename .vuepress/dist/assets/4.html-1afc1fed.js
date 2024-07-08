import{_ as l,p as d,q as r,s as n,R as e,t as i,Z as a,n as t}from"./framework-87c4c4c1.js";const c="/assets/1-ba1ff9a2.png",v="/assets/2-4b71efbf.png",o="/assets/3-4ad4a04a.png",m="/assets/4-f1f0e34d.png",p="/assets/5-6925189b.png",u="/assets/6-d2e0f10e.png",b="/assets/7-e9cd2b54.png",g="/assets/8-8e9a29ff.png",h="/assets/9-348824bf.png",x="/assets/10-64f6e845.png",_="/assets/11-99acb044.png",f="/assets/12-d75a2c71.png",k="/assets/14-feb531b8.png",j="/assets/13-1948d395.png",w="/assets/15-ab733fe0.png",A="/assets/16-ce8d064e.png",y="/assets/17-d81d8e6f.png",N="/assets/18-0c6e982d.png",$="/assets/19-9cff4052.png",q={},z=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),e(" 简介")],-1),I=n("p",null,[n("img",{src:c,alt:"Alt text"})],-1),P={href:"http://nginx.org/",target:"_blank",rel:"noopener noreferrer"},E=a(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="安装-openssl-、zlib-、-gcc-依赖" tabindex="-1"><a class="header-anchor" href="#安装-openssl-、zlib-、-gcc-依赖" aria-hidden="true">#</a> 安装 openssl 、zlib 、 gcc 依赖</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装-pcre-依赖" tabindex="-1"><a class="header-anchor" href="#安装-pcre-依赖" aria-hidden="true">#</a> 安装 pcre 依赖</h3><p>wget http://downloads.sourceforge.net/project/pcre/pcre/8.37/pcre-8.37.tar.gz</p><p>解压压缩文件 使用命令</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>tar –xvf pcre<span class="token number">-8.37</span>.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压目录执行./configure 完成后, make &amp;&amp;make install 查看pcre依赖是否安装成功：pcre-config --version</p><h3 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 nginx</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>tar -xvf nginx<span class="token number">-1.24</span>.<span class="token number">0</span>.tar.gz
 ./configure
 make &amp;&amp; make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成进入目录 /usr/local/nginx/sbin/nginx 启动服务</p><p><img src="`+v+'" alt="Alt text"></p><p><img src="'+o+`" alt="Alt text"></p><p>安装后，不能访问的，需要对防火墙进行设置 也可以直接关闭防火墙</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">//关闭防火墙&amp;&amp;防火墙自启</span>
systemctl stop firewalld &amp;&amp; systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token number">1</span>.查看开放的端口

firewall-cmd --list-all

<span class="token number">2</span>.设置开放的端口号

firewall-cmd --add-service=http –permanent

firewall-cmd --add-port=<span class="token number">80</span>/tcp --permanent

<span class="token number">3</span>.设置之后需要重启防火墙

firewall-cmd --reload

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装成功界面</p><p><img src="`+m+`" alt="Alt text"></p><h2 id="nginx常用命令" tabindex="-1"><a class="header-anchor" href="#nginx常用命令" aria-hidden="true">#</a> Nginx常用命令</h2><p>进入 nginx 目录中:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>cd /usr/local/nginx/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="版本号" tabindex="-1"><a class="header-anchor" href="#版本号" aria-hidden="true">#</a> 版本号</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./nginx -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动nginx" tabindex="-1"><a class="header-anchor" href="#启动nginx" aria-hidden="true">#</a> 启动nginx</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>启动nginx
./nginx
查看是否启动成功
ps -ef|grep nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="停止" tabindex="-1"><a class="header-anchor" href="#停止" aria-hidden="true">#</a> 停止</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./nginx -s stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重新加载nginx" tabindex="-1"><a class="header-anchor" href="#重新加载nginx" aria-hidden="true">#</a> 重新加载nginx</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>位置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>/usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文件内容:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
    #                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
    #                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \\.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \\.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache&#39;s document root
        # concurs with nginx&#39;s one
        #
        #location ~ /\\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）全局块：配置服务器整体运行的配置指令 从配置文件开始到 events 块之间的内容，主要会设置一些影响 nginx 服务器整体运行的配置指令，主要包括配置运行 Nginx 服务器的用户（组）、允许生成的 worker process 数，进程 PID 存放路径、日志存放路径和类型以 及配置文件的引入等。</p><p>比如上面第一行配置的： 这是 Nginx 服务器并发处理服务的关键配置，worker_processes 值越大，可以支持的并发处理量也越多，但是会受到硬件、软件等设备的制约</p><p>（2）events 块：影响 Nginx 服务器与用户的网络连接 events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括是否开启对多 work process下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 workprocess 可以同时支持的最大连接数等。 上述例子就表示每个 work process 支持的最大连接数为 1024.这部分的配置对 Nginx 的性能影响较大，在实际中应该灵活配置</p><p>（3）http 块 这算是 Nginx 服务器配置中最频繁的部分，代理、缓存和日志定义等绝大多数功能和第三方模块的配置都在这里。 需要注意的是：http 块也可以包括 http 全局块、server 块。 http 全局块 配置的指令包括文件引入、MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等。</p><p>server 块 这块和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的，该技术的产生是为了节省互联网服务器硬件成本。每个 http 块可以包括多个 server 块，而每个 server 块就相当于一个虚拟主机。而每个 server 块也分为全局 server 块，以及可以同时包含多个 locaton 块。</p><h2 id="nginx反向代理" tabindex="-1"><a class="header-anchor" href="#nginx反向代理" aria-hidden="true">#</a> nginx反向代理</h2>`,40),L={href:"https://tomcat.apache.org/download-10.cgi",target:"_blank",rel:"noopener noreferrer"},H=a(`<p>2、准备工作</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token number">1</span>.在 liunx 系统安装 tomcat，使用默认端口 <span class="token number">8080</span>
tomcat 安装文件放到 liunx 系统中，解压
进入 tomcat 的 bin 目录中，./startup.sh 启动 tomcat 服务器

<span class="token number">2</span>.对外开放访问的端口 
firewall-cmd --add-port=<span class="token number">8080</span>/tcp --permanent
firewall-cmd –reload

查看已经开放的端口号
firewall-cmd --list-all

<span class="token number">3</span>.在 windows 系统中通过浏览器访问 tomcat 服务器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt="Alt text"></p><p><img src="'+u+`" alt="Alt text"></p><p>3.在 nginx 进行请求转发的配置（反向代理配置）</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>proxy_pass http<span class="token operator">:</span><span class="token comment">//127.0.0.1:8080;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+b+'" alt="Alt text"></p><h2 id="nginx-反向代理实例-2" tabindex="-1"><a class="header-anchor" href="#nginx-反向代理实例-2" aria-hidden="true">#</a> Nginx 反向代理实例 2</h2><p>1、实现效果 使用 nginx 反向代理，根据访问的路径跳转到不同端口的服务中</p><p>nginx 监听端口为 9001，</p><p>访问 http://192.168.17.129:9001/edu/ 直接跳转到 127.0.0.1:8080</p><p>访问 http:// 192.168.17.129:9001/vod/ 直接跳转到 127.0.0.1:8081</p><p>2、准备工作 （1）准备两个 tomcat 服务器，一个 8080 端口，一个 8081 端口 <img src="'+g+'" alt="Alt text"></p><p>（2）创建文件夹和测试页面 <img src="'+h+'" alt="Alt text"></p><p><img src="'+x+'" alt="Alt text"></p><p><img src="'+_+`" alt="Alt text"></p><p>配置server</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>    server <span class="token punctuation">{</span>
        listen       <span class="token number">9001</span>;
        server_name  localhost;

       location ~ /edu/ <span class="token punctuation">{</span>
           proxy_pass http<span class="token operator">:</span><span class="token comment">//127.0.0.1:8080;</span>
        <span class="token punctuation">}</span>

        location ~ /vod/ <span class="token punctuation">{</span>
           proxy_pass http<span class="token operator">:</span><span class="token comment">//127.0.0.1:8081;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><p>1、实现效果 （1）浏览器地址栏输入地址 http://XXXX/edu/a.html，负载均衡效果，平均 8080和 8081 端口中</p><p>2、准备工作 （1）准备两台 tomcat 服务器，一台 8080，一台 8081</p><p>（2）在两台 tomcat 里面 webapps 目录中，创建名称是 edu 文件夹，在 edu 文件夹中创建页面 a.html，用于测试</p><p>3、在 nginx 的配置文件中进行负载均衡的配置 <img src="`+f+'" alt="Alt text"></p><p><img src="'+k+'" alt="Alt text"><img src="'+j+'" alt="Alt text"></p><p>4、nginx 分配服务器策略 第一种 轮询（默认） 每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 down 掉，能自动剔除。</p><p>第二种 weight weight 代表权重默认为 1,权重越高被分配的客户端越多</p><p>第三种 ip_hash 每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器</p><p>第四种 fair（第三方） 按后端服务器的响应时间来分配请求，响应时间短的优先分配。</p><p><img src="'+w+`" alt="Alt text"></p><h2 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  location /html/ <span class="token punctuation">{</span>
            root /learn/nginx/;
            #proxy_pass http<span class="token operator">:</span><span class="token comment">//myserver;</span>
            index  index.html index.htm;
        <span class="token punctuation">}</span>
        location /image/ <span class="token punctuation">{</span>
            root /learn/nginx/;
           #proxy_pass http<span class="token operator">:</span><span class="token comment">//127.0.0.1:8081;</span>
           autoindex on;
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+A+'" alt="Alt text"></p><p><img src="'+y+'" alt="Alt text"></p><p><img src="'+N+'" alt="Alt text"></p><h2 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用" aria-hidden="true">#</a> 高可用</h2><p><img src="'+$+'" alt="Alt text"></p>',36);function S(T,M){const s=t("ExternalLinkIcon");return d(),r("div",null,[z,I,n("p",null,[n("a",P,[e("官网"),i(s)])]),E,n("p",null,[e("1、实现效果 打开浏览器，在浏览器地址栏输入地址ip，跳转到 liunx 系统 "),n("a",L,[e("tomcat"),i(s)]),e(" 主页面中")]),H])}const X=l(q,[["render",S],["__file","4.html.vue"]]);export{X as default};
