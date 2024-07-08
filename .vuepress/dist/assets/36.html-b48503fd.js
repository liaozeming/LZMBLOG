import{_ as n,p as s,q as a,Z as e}from"./framework-87c4c4c1.js";const p="/assets/11-826f3548.png",t="/assets/12-0b0267da.png",c={},o=e('<p>输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。</p><p>为了让您更好地理解问题，以下面的二叉搜索树为例： <img src="'+p+'" alt="Alt text"></p><p>我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。</p><p>下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。 <img src="'+t+`" alt="Alt text"></p><p>特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。</p><h2 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路：</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 中序，递归，来自解题大佬</span>
    <span class="token class-name">Node</span> pre<span class="token punctuation">,</span> head<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Node</span> <span class="token function">treeToDoublyList</span><span class="token punctuation">(</span><span class="token class-name">Node</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 边界值</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 题目要求头尾连接</span>
        head<span class="token punctuation">.</span>left <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        pre<span class="token punctuation">.</span>right <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">// 返回头节点</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">Node</span> cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 递归结束条件</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果pre为空，就说明是第一个节点，头结点，然后用head保存头结点，用于之后的返回</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> head <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token comment">// 如果不为空，那就说明是中间的节点。并且pre保存的是上一个节点，</span>
        <span class="token comment">// 让上一个节点的右指针指向当前节点</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> pre<span class="token punctuation">.</span>right <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token comment">// 再让当前节点的左指针指向父节点，也就连成了双向链表</span>
        cur<span class="token punctuation">.</span>left <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        <span class="token comment">// 保存当前节点，用于下层递归创建</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[o];function i(u,r){return s(),a("div",null,l)}const k=n(c,[["render",i],["__file","36.html.vue"]]);export{k as default};
