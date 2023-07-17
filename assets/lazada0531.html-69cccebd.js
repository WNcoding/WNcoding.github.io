import{_ as n,o as s,c as a,a as e}from"./app-d0f06d78.js";const p={},t=e(`<p><strong>前言：</strong></p><p>非常简单的一套题。</p><h2 id="重构二叉树" tabindex="-1"><a class="header-anchor" href="#重构二叉树" aria-hidden="true">#</a> 重构二叉树</h2><p>给定节点数为n的二叉树的前序遍历和中序遍历结果，请重建出该二叉树并返回它的头结点。 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建出如下图所示。</p><p><img src="https://uploadfiles.nowcoder.com/images/20210717/557336_1626504921458/776B0E5E0FAD11A6F15004B29DA5E628" alt="image-20230531223425622"></p><p><strong>提示:</strong></p><ol><li>vin.length == pre.length</li><li>pre 和vin均无重复元素</li><li>vin出现的元素均出现在pre里</li><li>只需要返回根结点，系统会自动输出整颗树做答案对比</li></ol><p>数据范围: n ≤2000，节点的值-10000 &lt;val ≤10000要求:空间复杂度O(n)，时间复杂度O(n)</p><p><strong>思路与代码</strong></p><p>LC原题，前序的第一个数字一定是当前子树的根，我们可以找到其在中序序列中对应的位置，将当前子树分为左右子树，递归即可。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># class TreeNode:</span>
<span class="token comment">#     def __init__(self, x):</span>
<span class="token comment">#         self.val = x</span>
<span class="token comment">#         self.left = None</span>
<span class="token comment">#         self.right = None</span>
<span class="token comment">#</span>
<span class="token comment"># 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可</span>
<span class="token comment">#</span>
<span class="token comment"># </span>
<span class="token comment"># @param preOrder int整型一维数组 </span>
<span class="token comment"># @param vinOrder int整型一维数组 </span>
<span class="token comment"># @return TreeNode类</span>
<span class="token comment">#</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span>self <span class="token punctuation">,</span> preOrder<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> vinOrder<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token comment"># write code here</span>
        <span class="token comment"># 前序：根左右</span>
        <span class="token comment"># 中序：左根右</span>
        n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>preOrder<span class="token punctuation">)</span>
        dic <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">for</span> i<span class="token punctuation">,</span>num <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>vinOrder<span class="token punctuation">)</span><span class="token punctuation">:</span>
            dic<span class="token punctuation">[</span>num<span class="token punctuation">]</span> <span class="token operator">=</span> i
        
        <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>pl<span class="token punctuation">,</span>pr<span class="token punctuation">,</span>il<span class="token punctuation">,</span>ir<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>TreeNode<span class="token punctuation">:</span>
            <span class="token keyword">if</span> pl<span class="token operator">&gt;</span>pr <span class="token keyword">or</span> il<span class="token operator">&gt;</span>ir<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">None</span>
            <span class="token keyword">if</span> pl<span class="token operator">&lt;</span><span class="token number">0</span> <span class="token keyword">or</span> pr<span class="token operator">&gt;=</span>n <span class="token keyword">or</span> il<span class="token operator">&lt;</span><span class="token number">0</span> <span class="token keyword">or</span> ir<span class="token operator">&gt;=</span>n<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token boolean">None</span>
            num <span class="token operator">=</span> preOrder<span class="token punctuation">[</span>pl<span class="token punctuation">]</span>
            node <span class="token operator">=</span> TreeNode<span class="token punctuation">(</span>num<span class="token punctuation">)</span>
            lcnt<span class="token punctuation">,</span>rcnt <span class="token operator">=</span> dic<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token operator">-</span>il<span class="token punctuation">,</span> ir<span class="token operator">-</span>dic<span class="token punctuation">[</span>num<span class="token punctuation">]</span>
            node<span class="token punctuation">.</span>left <span class="token operator">=</span> dfs<span class="token punctuation">(</span>pl<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>pl<span class="token operator">+</span>lcnt<span class="token punctuation">,</span> il<span class="token punctuation">,</span> il<span class="token operator">+</span>lcnt<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
            node<span class="token punctuation">.</span>right <span class="token operator">=</span> dfs<span class="token punctuation">(</span>pl<span class="token operator">+</span>lcnt<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>pr<span class="token punctuation">,</span>dic<span class="token punctuation">[</span>num<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>ir<span class="token punctuation">)</span>
            <span class="token keyword">return</span> node
        <span class="token keyword">return</span> dfs<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="趣味折纸" tabindex="-1"><a class="header-anchor" href="#趣味折纸" aria-hidden="true">#</a> 趣味折纸</h2><p>请把一段纸条竖着放在桌子上，然后从纸条的下边向上方对折1次，压出折痕后展开。此时折痕是凹下去的，即折痕突起的方向指向纸条的背面。 如果从纸条的下边向上方连续对折2次，压出折痕后展开，此时有三条折痕，从上到下依次是下折痕、下折痕和上折痕。 给定一个输入参数N，代表纸条都从下边向上方连续对折N次。请从上到下打印所有折痕的方向。</p><p><strong>示例</strong></p><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[0,0,1,0,0,1,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>备注</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>下折痕以0代替，上折痕以1代替。所以当N=2时，输出结果为[0,0,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>递归求解即可。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#</span>
<span class="token comment"># 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可</span>
<span class="token comment">#</span>
<span class="token comment"># 趣味折纸</span>
<span class="token comment"># @param N int整型 对折次数</span>
<span class="token comment"># @return int整型一维数组</span>
<span class="token comment">#</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">paperFolding</span><span class="token punctuation">(</span>self <span class="token punctuation">,</span> N<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token comment"># write code here</span>
        res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> flag<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> i <span class="token operator">&gt;</span> N<span class="token punctuation">:</span> <span class="token keyword">return</span>
            dfs<span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">True</span><span class="token punctuation">)</span>
            res<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">0</span> <span class="token keyword">if</span> flag <span class="token keyword">else</span> <span class="token number">1</span><span class="token punctuation">)</span>
            dfs<span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">False</span><span class="token punctuation">)</span>
        dfs<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","lazada0531.html.vue"]]);export{u as default};
