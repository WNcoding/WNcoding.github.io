import{_ as n,o as s,c as a,a as e}from"./app-d0f06d78.js";const t={},i=e(`<h1 id="华为od-0420" tabindex="-1"><a class="header-anchor" href="#华为od-0420" aria-hidden="true">#</a> 华为OD 0420</h1><h2 id="第一题" tabindex="-1"><a class="header-anchor" href="#第一题" aria-hidden="true">#</a> 第一题：</h2><p>某农场主管理了一大片果园，fields[i]表示不同果林的面积，单位:(m^2)，现在要为所有的果林施肥目必须在n天之内完成，否则影响收成。小布是果林的工作人员，他每次选择一片果林进行施肥，且一片果林施肥完后当天不再进行施肥作业。假设施肥机的能效为k，单位:(m^2/day)，请问至少租赁能效k为多少的施肥机才能确保不影响收成?如果无法完成施肥任务，则返回-1。</p><p><strong>输入描述：</strong></p><p>第一行输入为m和n，m表示fields中的元素个数，n表示施肥任务必须在n天内(含n天)完成;</p><p>第二行输入为fields，fields[i]表示果林i的面积，单位:(m^2)</p><p><strong>输出描述:</strong></p><p>对于每组数据，输出最小施肥的能效k，无多余空格</p><p><strong>示例1</strong></p><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>5 7
5 7 9 15 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>说明：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当能效k为9时，fields[0]需要1天，fields[1]需要1天，fields[2]需要1天，fields[3]需要2天，fields[4]需要2天，一共7天完成，最小的施肥效能为9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例2：</strong></p><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3 1
2 3 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>说明：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>由于一天最多完成一片果林的施肥，无论k为多少都至少需要3天才能完成施肥，因此返回-1。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>备注:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 &lt;= fields.length &lt;= 10^4
1 &lt;= n &lt;= 10^9
1 &lt;=fields[i]&lt;=10^9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>二分答案。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;

int m, n;
vector&lt;int&gt; files;

bool check(int k) {
    int cur = 0;
    for (int file : files) {
        cur += file / k;
        if (file % k != 0) cur += 1;
    }
    return cur &lt;= n;
}

int main() {
    cin &gt;&gt; m &gt;&gt; n;
    for (int i = 0; i &lt; m; i++) {
        int c;
        cin &gt;&gt; c;
        files.push_back(c);
    }

    if (n &lt; files.size()) {
        cout &lt;&lt; -1 &lt;&lt; endl;
    } else {
        int l = 0, r = 1e9;
        while (l &lt; r) {
            int mid = (l + r) &gt;&gt; 1;
            if (check(mid)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        cout &lt;&lt; r &lt;&lt; endl;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第二题" tabindex="-1"><a class="header-anchor" href="#第二题" aria-hidden="true">#</a> 第二题：</h2><p>给你一个整数数组nums,请计算数组的中心位置。数组中心位置是数组的一个下标，其左侧所有元素相乘的积等于右侧所有无素相乘的积。</p><p>数组第一个元素的左侧积为1，最后一个元素的右侧积为1</p><p>如果数组有多个中心位置，应该返回最靠近左边的那一个。如果数组不存在中心位置，返回-1。</p><p><strong>输入描述：</strong></p><p>输入只有一行，给出N个正整数用空格分格:nums=2 5 3 6 5 6</p><p>1&lt;=nums.length &lt;=1024</p><p>1&lt;=nums[i]&lt;=10</p><p><strong>输出描述:</strong></p><p>输出: 3</p><p>解释:</p><p>中心位置是3。</p><p>左侧数之积sum=nums[0]<em>nums[1]<em>nums[2]=2</em>5</em>3=30，</p><p>右侧数之积sum=nums[4]<em>nums[5]=5</em>6=30，</p><p><strong>示例1</strong></p><p><strong>输入:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2 5 3 6 5 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>前缀积模拟即可。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;sstream&gt;
using namespace std;

vector&lt;int&gt; nums;
int n;
vector&lt;int&gt; pres;

void solv() {
    for (int i = 0; i &lt; n; i++) {
        if (pres[i] == pres[n] / pres[i + 1]) {
            cout &lt;&lt; i &lt;&lt; endl;
            return;
        }
    }
    cout &lt;&lt; -1 &lt;&lt; endl;
}

int main() {
    string line;
    getline(cin, line);
    istringstream iss(line);
    int c;
    while (iss &gt;&gt; c) {
        nums.push_back(c);
    }

    n = nums.size();
    pres.resize(n + 1);
    pres[0] = 1;
    for (int i = 1; i &lt;= n; i++) {
        pres[i] = pres[i - 1] * nums[i - 1];
    }

    solv();
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第三题" tabindex="-1"><a class="header-anchor" href="#第三题" aria-hidden="true">#</a> 第三题：</h2><p>大众对垃圾短信深恶痛绝，希望能对垃圾短信发送者进行识别，为此，很多软件增加了垃圾短信识别机制。经分析，发现正常用户的短信通常具备交互性，而垃圾短信往往都是大量单向的短信，按照如下规则进行垃圾短信识别:</p><p>本题中，发送者A符合以下条件之一的，则认为A是垃圾短信发送者:</p><p>*A发送短信的接收者中，没有发过短信给A的人数L&gt; 5;</p><p>*A发送的短信数-A接收的短信数M&gt;10</p><p>*如果存在X，A发送给X的短信数-A接收到X的短信数N&gt;5;</p><p><strong>输入描述：</strong></p><p>第一行为条目数目，接下来几行是具体的条目，每个条目，是一对ID，第一个数字是发送者ID，后面的数字是接收者ID，中间空格隔开，所有的ID都为无符号整型 ID最大值为100;</p><p>同一个条目中，两个ID不会相同(即不会自己给自己发消息)</p><p>最后一行为指定的ID</p><p><strong>输出描述：</strong></p><p>输出该ID是否为垃圾短信发送者，并且按序列输出L M的值(由于N值不唯一，不需要输出);输出均为字符串。</p><p><strong>示例1</strong></p><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>15
1 2
1 3
1 4
1 5
1 6
1 7
1 8
1 9
1 10
1 11
1 12
1 13
1 14
14 1
1 15
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>false 0 -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>说明：</strong></p><p>true表示1是垃圾短信发送者，两个数字，代表发送者1对应的L和M值true 13 13</p><p>中间以一个空格分割。注意true是字符串输出</p><p><strong>示例2</strong></p><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>15
1 2
1 3
1 4
1 5
1 6
1 7
1 8
1 9
1 10
1 11
1 12
1 13
1 14
14 1
1 15
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>false 0 -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>就是一个超级大模拟的题目。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unordered_map&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unordered_set&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> N<span class="token punctuation">;</span>
unordered_map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> send_cnter<span class="token punctuation">;</span>
unordered_map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> revi_cnter<span class="token punctuation">;</span>
unordered_map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> unordered_set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> sender<span class="token punctuation">;</span>
unordered_map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> unordered_set<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> revicer<span class="token punctuation">;</span>
unordered_map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> sender1<span class="token punctuation">;</span>
unordered_map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> revicer1<span class="token punctuation">;</span>
<span class="token keyword">int</span> ID<span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">solv</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">bool</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> L <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> send <span class="token operator">:</span> sender<span class="token punctuation">[</span>ID<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sender<span class="token punctuation">[</span>send<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>ID<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> L <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>L <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> M <span class="token operator">=</span> send_cnter<span class="token punctuation">[</span>ID<span class="token punctuation">]</span> <span class="token operator">-</span> revi_cnter<span class="token punctuation">[</span>ID<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>M <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    unordered_map<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> cnter<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">:</span> sender1<span class="token punctuation">[</span>ID<span class="token punctuation">]</span><span class="token punctuation">)</span> cnter<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> x <span class="token operator">:</span> revicer1<span class="token punctuation">[</span>ID<span class="token punctuation">]</span><span class="token punctuation">)</span> cnter<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> <span class="token punctuation">[</span>k<span class="token punctuation">,</span> v<span class="token punctuation">]</span> <span class="token operator">:</span> cnter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>v <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;true &quot;</span> <span class="token operator">&lt;&lt;</span> L <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span> <span class="token operator">&lt;&lt;</span> M <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;false &quot;</span> <span class="token operator">&lt;&lt;</span> L <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span> <span class="token operator">&lt;&lt;</span> M <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cin <span class="token operator">&gt;&gt;</span> N<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        send_cnter<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        revi_cnter<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        sender<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        revicer<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        sender1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        revicer1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> N<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> fr<span class="token punctuation">,</span> to<span class="token punctuation">;</span>
        cin <span class="token operator">&gt;&gt;</span> fr <span class="token operator">&gt;&gt;</span> to<span class="token punctuation">;</span>
        sender<span class="token punctuation">[</span>fr<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
        revicer<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        send_cnter<span class="token punctuation">[</span>fr<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
        revi_cnter<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
        sender1<span class="token punctuation">[</span>fr<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
        revicer1<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    cin <span class="token operator">&gt;&gt;</span> ID<span class="token punctuation">;</span>

    <span class="token function">solv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,77),p=[i];function l(c,o){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","od20230420.html.vue"]]);export{d as default};
