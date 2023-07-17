import{_ as n,o as s,c as a,a as p}from"./app-d0f06d78.js";const t={},e=p(`<div class="custom-container tip"><p class="custom-container-title">前言</p><p>今晚百度一共三道题，其中2个题目是之前笔试的原题。</p></div><h2 id="小红拆分数组" tabindex="-1"><a class="header-anchor" href="#小红拆分数组" aria-hidden="true">#</a> 小红拆分数组</h2><p>小红拿到了一个长度为n的数组，她希望把该数组拆分成k个非空子序列</p><p>(每个元素必须出现在某个子序列中,且恰好出现一次),使得这个k子序列的平均数之和尽可能小。你能帮帮她吗?</p><p>注，子序列可以不连续。例如数组为[3,2,1,3],k=2时,子序列可以拆分为[3,1]和[2.3]</p><p><strong>输入描述</strong></p><p>n k</p><p>第一行输入两个正整数和,代表数组的长度、子序列的数量。</p><p>第二行输入个n正整数,代表数组的元素ai。</p><p>1≤k≤n≤10^5</p><p>-10^9≤a ≤10^9</p><p><strong>输出描述</strong></p><p>一个小数,代表最终平均数之和的最小值。如果你的答案和正确答案的误差不超过10^-6，则认为答案正确。</p><p><strong>测试样例</strong></p><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4 3
-1 2 -1 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0.50000000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>说明</strong></p><p>拆分为以下3个子序列:[-1] [2,3] [-1]</p><p>平均数之和为(-1)+2.5+(-1)=0.5</p><p><strong>思路与代码</strong></p><p>【此代码未进行大量数据的测试，仅供参考，有疑问欢迎讨论】</p><p>贪心的思想。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n<span class="token punctuation">,</span> k <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>
ans <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token punctuation">:</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
sum_ <span class="token operator">=</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
ans <span class="token operator">+=</span> sum_ <span class="token operator">/</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="red回文串" tabindex="-1"><a class="header-anchor" href="#red回文串" aria-hidden="true">#</a> red回文串</h2><p>给定一个整数x，请你构造一个仅由&#39;r&#39;、&#39;e&#39;、d&#39;三种字符组成的字符串，其中回文子串的数量恰好为x。字符串的长度不得超过10^5。</p><p><strong>输入描述</strong></p><p>一个正整数x。</p><p>1&lt;=x&lt;=109</p><p><strong>输出描述</strong></p><p>输出一个仅由&#39;r&#39;,&#39;e&#39;,&#39;d&#39; 三种字符组成的字符串。若有多解输出任意即可。</p><p><strong>示例1</strong></p><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>red
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>【此代码未进行大量数据的测试，仅供参考，有疑问欢迎讨论】</p><p>打表法。</p><p>观察可知</p><p>f(i)表示长度为i的相同字符的字符串的回文子串的数量</p><p>f(0)=1, f(10)=55,f(100)=5050,f(1000)=500500,f(10000)=50005000.....</p><p>构建回文串的规则如下：rr...rree....eedd....ddd。以此类推构建回文串，使得回文串只能在相同字符组成的子串中构建。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">map</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">:</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">:</span><span class="token number">5050</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">:</span><span class="token number">500500</span><span class="token punctuation">,</span> <span class="token number">10000</span><span class="token punctuation">:</span><span class="token number">50005000</span><span class="token punctuation">,</span> <span class="token number">100000</span><span class="token punctuation">:</span> <span class="token number">5000050000</span><span class="token punctuation">,</span><span class="token number">1000000</span><span class="token punctuation">:</span><span class="token number">500000500000</span><span class="token punctuation">,</span> <span class="token number">10000000</span><span class="token punctuation">:</span><span class="token number">50000005000000</span><span class="token punctuation">}</span>

index_map <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

res <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

str_map <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span>
str_index <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> x <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>index_map<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token builtin">map</span><span class="token punctuation">[</span>index_map<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> x<span class="token punctuation">:</span>
            x <span class="token operator">-=</span> <span class="token builtin">map</span><span class="token punctuation">[</span>index_map<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
            tmp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
            <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>index_map<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> tmp <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span>tmp <span class="token punctuation">,</span>str_map<span class="token punctuation">[</span>str_index<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            res <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span>res <span class="token punctuation">,</span> tmp<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span>
    str_index <span class="token operator">+=</span> <span class="token number">1</span>
    str_index <span class="token operator">%=</span> <span class="token number">3</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小红的重载" tabindex="-1"><a class="header-anchor" href="#小红的重载" aria-hidden="true">#</a> 小红的重载</h2><p>众所周知，在java里可以利用重载的特性，用不同的参数调用同名方法。 小红依次尝试创建了n个方法，但其中的一些方法因为违背重载特性导致创建不成功。 你可以帮小红确认每个方法是否创建成功吗?</p><p><strong>输入描述</strong></p><p>第一行输入一个正整数n，代表小红创建的方法数量。 接下来的n行，每行输入一个字符串，包含方法的名称和参数。请注意，方法的主体（大括号内部的内容〉已经省略。 1&lt;n ≤5000 每个字符串长度不超过80。保证每个方法都是合法的，一定包含返回类型，方法名，参数（或者无参〉已经参数类型。</p><p><strong>输出描述</strong></p><p>对于每个方法，如果创建成功则输出&quot;Yes&quot;，否则输出&quot;No&quot;。</p><p><strong>示例1</strong></p><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>5
int f(int x)
void f()
int f( )
int solve(Node node ,int x)
int f(int y)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Yes
Yes
No
Yes
No
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>【此代码未进行大量数据的测试，仅供参考，有疑问欢迎讨论】</p><p>模拟题。核心就是判断方法名和参数类型是否重复出现，可以使用哈希表进行判断。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">map</span> <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    i1<span class="token punctuation">,</span>i2 <span class="token operator">=</span> s<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;(&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> s<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;)&quot;</span><span class="token punctuation">)</span>
    name <span class="token operator">=</span> s<span class="token punctuation">[</span>s<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span> i1<span class="token punctuation">]</span>
    args <span class="token operator">=</span> s<span class="token punctuation">[</span>i1<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span>i2<span class="token punctuation">]</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> arg <span class="token keyword">in</span> args<span class="token punctuation">:</span>
        tmp <span class="token operator">=</span> arg<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span>
        name <span class="token operator">=</span> name <span class="token operator">+</span> tmp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> name <span class="token keyword">in</span> <span class="token builtin">map</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;No&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Yes&quot;</span><span class="token punctuation">)</span>
        <span class="token builtin">map</span><span class="token punctuation">.</span>add<span class="token punctuation">(</span>name<span class="token punctuation">)</span>
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),o=[e];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","bd20230410.html.vue"]]);export{r as default};
