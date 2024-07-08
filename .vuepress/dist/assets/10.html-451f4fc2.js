import{_ as n,p as s,q as a,Z as t}from"./framework-87c4c4c1.js";const p={},e=t(`<p>如果字符串中的所有字符都相同，那么这个字符串是单字符重复的字符串。</p><p>给你一个字符串 text，你只能交换其中两个字符一次或者什么都不做，然后得到一些单字符重复的子串。返回其中最长的子串的长度。</p><h2 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：text = &quot;ababa&quot;
输出：3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：text = &quot;aaabaaa&quot;
输出：6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路：</h2><p>1.首先统计字符串text中各个字符的数量 2.定义指针i和j,j向右滑动，直到与i指针指的字符不同，则l长度为j-i 3.将k指针指向下一个字符，判断字符与i指针指向的字符是否相同，则r的长度为k-1 - (j+1) + 1 =k-j-1 4.总长度为Math.min(l + r + 1, cnt[text.charAt(i) - &#39;a&#39;]) ,例如aabaaccaa ，a的字符数量为6，l=(0,2) =2 r=(3,5)=2 ,ans=Math.min(2+2+1,6)=5 5.将i指针指向进行下一轮</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxRepOpt1</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//统计字符串text中各个字符的数量</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cnt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token operator">++</span>cnt<span class="token punctuation">[</span>text<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> text<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">==</span> text<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token operator">++</span>j<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">int</span> l <span class="token operator">=</span> j <span class="token operator">-</span> i<span class="token punctuation">;</span>
            <span class="token keyword">int</span> k <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> text<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span> <span class="token operator">==</span> text<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token operator">++</span>k<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">int</span> r <span class="token operator">=</span> k <span class="token operator">-</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
            ans <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>l <span class="token operator">+</span> r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> cnt<span class="token punctuation">[</span>text<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            i <span class="token operator">=</span> j<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","10.html.vue"]]);export{r as default};
