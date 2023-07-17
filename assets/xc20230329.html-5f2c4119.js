import{_ as n,o as s,c as a,a as p}from"./app-d0f06d78.js";const t={},e=p(`<div class="custom-container tip"><p class="custom-container-title">前言</p><p>此次笔试难度不大，第一题送分；第二题前往不要陷入到传统的算法思维里面去，这种类型题都可以试着去找规律的。第三题图上的dp，这个模块可能很多同学并不多接触，会导致有些同学拿不到分【今年树形dp考的是真的多.......】。</p></div><h2 id="_1-数字的圆圈" tabindex="-1"><a class="header-anchor" href="#_1-数字的圆圈" aria-hidden="true">#</a> 1.数字的圆圈</h2><p>游游拿到了一串数字，她想知道这串数字一共有多少个圆圈？</p><p>提示：数字0，6，9这三种数字各有一个圆圈，数字8共有两个圆圈。</p><p><strong>输入描述</strong></p><p>一个字符串，仅有数字字符组成。</p><p>长度不超过100000</p><p><strong>输出描述</strong></p><p>该字符串包含的圆圈的数量。</p><p><strong>示例1</strong></p><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>123457890
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>标准打卡题，遍历字符串统计数量就好了</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">from</span> collections <span class="token keyword">import</span> Counter
dic <span class="token operator">=</span> Counter<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>dic<span class="token punctuation">[</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">]</span> <span class="token operator">+</span> dic<span class="token punctuation">[</span><span class="token string">&#39;6&#39;</span><span class="token punctuation">]</span> <span class="token operator">+</span> dic<span class="token punctuation">[</span><span class="token string">&#39;9&#39;</span><span class="token punctuation">]</span> <span class="token operator">+</span> dic<span class="token punctuation">[</span><span class="token string">&#39;8&#39;</span><span class="token punctuation">]</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-好元素" tabindex="-1"><a class="header-anchor" href="#_2-好元素" aria-hidden="true">#</a> 2.好元素</h2><p>游游定义一个排列中，满足以下条件的元素为”好元素“：对于第i个元素ai 而言，ai 是前i个元素的最大值。例如，[3,1,5,2,4]，第一个和第三个元素是好元素。</p><p>游游希望你构建一个长度为n的排列，其中有k个好元素，且任意两个好元素相邻。你能帮帮她吗？</p><p>排列的定义：由1到n的所有正整数组成的长度为n的数组，每个正整数正好出现一次。</p><p><strong>输入描述</strong></p><p>两个正整数n，k，用空格隔开。</p><p>1&lt;=n&lt;=10^5</p><p>1&lt;=k&lt;=[n//2]</p><p><strong>输出描述</strong></p><p>一行n个正整数，代表游游构造的排列。有多解的时候输出任意即可。</p><p><strong>示例1</strong></p><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>5 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3 1 5 2 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>贪心构造即可。</p><p>在排列的[1,n]，将第0个元素和倒数第k个元素交换，第2个元素和倒数第k+1个元素交换。。。。</p><p>例如 [1,2,3,4,5] , k = 2，交换后得到[4,2,5,1,3]即可得到满足调节的排列。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n<span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

ans <span class="token operator">=</span> <span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
j<span class="token punctuation">,</span>i <span class="token operator">=</span> n <span class="token operator">-</span> k<span class="token punctuation">,</span> <span class="token number">0</span>
pos <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> pos <span class="token operator">&lt;</span> k<span class="token punctuation">:</span>
    ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> ans<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> ans<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> ans<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    i <span class="token operator">+=</span> <span class="token number">2</span>
    pos <span class="token operator">+=</span> <span class="token number">1</span>
    j <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">for</span> r <span class="token keyword">in</span> ans<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-树上的染色" tabindex="-1"><a class="header-anchor" href="#_3-树上的染色" aria-hidden="true">#</a> 3.树上的染色</h2><p>游游拿到一棵树，树的每条边有边权。</p><p>游游准备选择一些边染成红色，她希望不存在两条染红的边共用同一个点，且最终染红边的边权之和尽可能大。你能帮帮她吗？</p><p>注：所谓树，即不包含重边、自环和回路的无向连通图。</p><p><strong>输入描述</strong></p><p>第一行输入一个正整数n，代表节点的数量。</p><p>接下来n-1行，每行输入三个正整数u,v,w，代表点u和点v之间有一条权值为w的无向边。</p><p>1&lt;=n&lt;=105</p><p>1&lt;=u,v&lt;=n</p><p>1&lt;=w&lt;=109</p><p><strong>输出描述</strong></p><p>一个正整数，代表最终染红的边的权值之和的最大值。</p><p><strong>示例1</strong></p><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>5
1 2 2
2 3 5
3 4 4
3 5 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>对于每个节点来说，我们可能的选择有2种，选择以这个节点为端点的其中一条边，又或者不选，但是这两种选择会影响到孩子节点的选择。</p><p>状态定义：dp[node][0] 可以选择以node为端点的一条边。</p><p>​ dp[node][1] 不选择以node为端点的一条边。</p><p>状态转移：dp[node ] [0] = Σ dp[child] [1]</p><p>​ dp[node] [1] = MAX(dp[child i] [0] + w + Σdp[childj] [1])，其中 j！=i，我们需要枚举i。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
nxs <span class="token operator">=</span> <span class="token punctuation">{</span>i<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    u<span class="token punctuation">,</span>v<span class="token punctuation">,</span>w <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    nxs<span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span>
    nxs<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>u<span class="token punctuation">,</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span>

dp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> pre<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> dp<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token keyword">return</span> dp<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">[</span>s<span class="token punctuation">]</span>
    notchic <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> nx<span class="token punctuation">,</span> w <span class="token keyword">in</span> nxs<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> nx <span class="token operator">!=</span> pre<span class="token punctuation">:</span>
            notchic <span class="token operator">+=</span> dfs<span class="token punctuation">(</span>nx<span class="token punctuation">,</span> node<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> s <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>  <span class="token keyword">return</span> notchic

    cho <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nxs<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        tmp <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nxs<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            nx<span class="token punctuation">,</span> w <span class="token operator">=</span> nxs<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
            <span class="token keyword">if</span> pre <span class="token operator">!=</span> nx<span class="token punctuation">:</span>
                <span class="token keyword">if</span> j <span class="token operator">==</span> i<span class="token punctuation">:</span>
                    tmp <span class="token operator">+=</span> dfs<span class="token punctuation">(</span>nx<span class="token punctuation">,</span> node<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> w
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    tmp <span class="token operator">+=</span> dfs<span class="token punctuation">(</span>nx<span class="token punctuation">,</span> node<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        cho <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> cho<span class="token punctuation">)</span>
    dp<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>cho<span class="token punctuation">,</span> notchic<span class="token punctuation">)</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>node<span class="token punctuation">]</span><span class="token punctuation">[</span>s<span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>dfs<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","xc20230329.html.vue"]]);export{r as default};