import{_ as n,p as s,q as a,Z as p}from"./framework-87c4c4c1.js";const e={},t=p(`<p>反转链表 206</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> typing <span class="token keyword">import</span> Optional


<span class="token comment"># Definition for singly-linked list.</span>
<span class="token keyword">class</span> <span class="token class-name">ListNode</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> val<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">next</span><span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>val <span class="token operator">=</span> val
        self<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> <span class="token builtin">next</span>


<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reverseList</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>ListNode<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Optional<span class="token punctuation">[</span>ListNode<span class="token punctuation">]</span><span class="token punctuation">:</span>
        pre <span class="token operator">=</span> <span class="token boolean">None</span>
        cur <span class="token operator">=</span> head
        <span class="token keyword">while</span> cur<span class="token punctuation">:</span>
            <span class="token builtin">next</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span>
            cur<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> pre
            pre <span class="token operator">=</span> cur
            cur <span class="token operator">=</span> <span class="token builtin">next</span>
        <span class="token keyword">return</span> pre

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>92</p><p>给你单链表的头指针 head 和两个整数 left 和 right ，其中 left &lt;= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reverseBetween</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>ListNode<span class="token punctuation">]</span><span class="token punctuation">,</span> left<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> right<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Optional<span class="token punctuation">[</span>ListNode<span class="token punctuation">]</span><span class="token punctuation">:</span>
        dummy <span class="token operator">=</span> ListNode<span class="token punctuation">(</span><span class="token builtin">next</span><span class="token operator">=</span>head<span class="token punctuation">)</span>
        p0 <span class="token operator">=</span> dummy
        <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            p0 <span class="token operator">=</span> p0<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token comment"># p0是left的前一个节点</span>
        pre <span class="token operator">=</span> <span class="token boolean">None</span>
        cur <span class="token operator">=</span> p0<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token builtin">next</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span>
            cur<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> pre
            pre <span class="token operator">=</span> cur
            cur <span class="token operator">=</span> <span class="token builtin">next</span>
        <span class="token comment"># 此时pre是right所指节点</span>
        p0<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> cur
        p0<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> pre
        <span class="token keyword">return</span> dummy<span class="token punctuation">.</span><span class="token builtin">next</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="25"><li>K 个一组翻转链表</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reverseKGroup</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> head<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span>ListNode<span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Optional<span class="token punctuation">[</span>ListNode<span class="token punctuation">]</span><span class="token punctuation">:</span>
        n <span class="token operator">=</span> <span class="token number">0</span>
        temp <span class="token operator">=</span> head
        <span class="token keyword">while</span> temp<span class="token punctuation">:</span>
            n <span class="token operator">+=</span> <span class="token number">1</span>
            temp <span class="token operator">=</span> temp<span class="token punctuation">.</span><span class="token builtin">next</span>
        <span class="token keyword">if</span> n <span class="token operator">&lt;</span> k<span class="token punctuation">:</span>
            <span class="token keyword">return</span> head
        dummy <span class="token operator">=</span> ListNode<span class="token punctuation">(</span><span class="token builtin">next</span><span class="token operator">=</span>head<span class="token punctuation">)</span>
        <span class="token comment"># 一组循环的前一个节点</span>
        p0 <span class="token operator">=</span> dummy
        <span class="token comment"># k个一循环</span>
        <span class="token keyword">while</span> n <span class="token operator">&gt;=</span> k<span class="token punctuation">:</span>
            n <span class="token operator">-=</span> k
            pre <span class="token operator">=</span> <span class="token boolean">None</span>
            cur <span class="token operator">=</span> p0<span class="token punctuation">.</span><span class="token builtin">next</span>
            <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token builtin">next</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span><span class="token builtin">next</span>
                cur<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> pre
                pre <span class="token operator">=</span> cur
                cur <span class="token operator">=</span> <span class="token builtin">next</span>
            <span class="token comment"># 记录下一组循环的第一个节点temp,即下一组循环的p0节点</span>
            temp <span class="token operator">=</span> p0<span class="token punctuation">.</span><span class="token builtin">next</span>
            p0<span class="token punctuation">.</span><span class="token builtin">next</span><span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> cur
            p0<span class="token punctuation">.</span><span class="token builtin">next</span> <span class="token operator">=</span> pre
            p0 <span class="token operator">=</span> temp
        <span class="token keyword">return</span> dummy<span class="token punctuation">.</span><span class="token builtin">next</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[t];function l(i,c){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","16.html.vue"]]);export{r as default};
