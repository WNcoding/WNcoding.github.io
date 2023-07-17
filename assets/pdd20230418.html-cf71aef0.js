import{_ as n,o as i,c as e,a as s}from"./app-d0f06d78.js";const d={},l=s(`<h2 id="菱形个数" tabindex="-1"><a class="header-anchor" href="#菱形个数" aria-hidden="true">#</a> 菱形个数</h2><p>给定正整数X、Y，算出同时满足下列3个条件的所有菱形个数:</p><p>1.菱形存在正面积。</p><p>2.菱形每个顶点的横坐标xi为0≤xi≤X的整数，纵坐标yi为0≤yi≤Y的整数。</p><p>3.菱形的对角线平行于坐标轴。</p><p><strong>输入描述</strong></p><p>输入为一行，包含两个整数x和v，满足(1≤x, Y≤300)</p><p><strong>输出描述</strong></p><p>输出一个数,表示满足条件的所有菱形个数</p><p><strong>示例1</strong></p><p>输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>我们通过枚举菱形的两个顶点来解这一题。</p><p>首先，我们枚举菱形的一个顶点(x1, y1)，另一个顶点(x2, y2)，其中x2在x1+2到X之间取值。注意，由于菱形的对角线平行于坐标轴，所以x2必须大于x1+1。</p><p>最后，我们计算满足条件的菱形个数。由于菱形的对角线平行于坐标轴，所以y2只能取y1或2<em>y1-Y。因此，我们只需要计算满足条件的y2的个数即可。这个个数可以通过min(Y, 2</em>y1) - max(2*y1 - Y, y1)来计算。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int X, Y;
    cin &gt;&gt; X &gt;&gt; Y;
    int ans = 0;
    for (int x1 = 0; x1 &lt;= X; x1++) {
        for (int y1 = 1; y1 &lt;= Y; y1++) {
            for (int x2 = x1 + 2; x2 &lt;= X; x2++) {
                ans += min(Y, 2 * y1) - max(2 * y1 - Y, y1);
            }
        }
    }
    cout &lt;&lt; ans &lt;&lt; endl;
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最大投影面积" tabindex="-1"><a class="header-anchor" href="#最大投影面积" aria-hidden="true">#</a> 最大投影面积</h2><p>二维平面上有n个点，它们的横纵坐标均为正整数，且没有两个点有相同的横坐标，把所有点从左到右依次通过直线连接，形成的折线与横坐标可形成一片投影区间。 若最多只能交换其中两点的纵坐标值，问如何交换可得到最大的投影面积。范围: n (2&lt;= n &lt;= 1000)横纵坐标x y范围(1&lt;= x, y &lt;= 10^5) <strong>输入描述</strong> 第一行为坐标上点的个数n。 接下来n行输入每个点的横纵坐标值。 <strong>输出描述</strong> 需要交换两点的横坐标值，按增序排列，若无需交换则输出-1。 <strong>示例1</strong><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3
1 2
4 1
2 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例2</strong><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2
1 2
3 2
2 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>这道题的思路是枚举所有可能的交换点对，然后计算每个点对交换后对投影面积的影响。</p><p>我们可以枚举两个点j和k，然后计算它们交换后对投影面积的影响。这个影响可以通过计算j和k两点之间的横坐标差值乘以它们纵坐标差值来得到。因为交换两个点的纵坐标值会改变它们之间的折线的形状，从而影响投影面积。比如，假设我们交换了点j和点k的纵坐标值，那么它们之间的折线会被拉高或压低，从而改变投影面积。而这个改变量就等于j和k两点之间的横坐标差值乘以它们纵坐标差值。因此，我们可以通过这种方式来计算每个点对交换后对投影面积的影响。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;
using namespace std;

int main() {
    int numPoints;
    cin &gt;&gt; numPoints;
    vector&lt;pair&lt;int, int&gt;&gt; coordinates;
    for (int i = 0; i &lt; numPoints; i++) {
        int xCoord, yCoord;
        cin &gt;&gt; xCoord &gt;&gt; yCoord;
        coordinates.push_back({xCoord, yCoord});
    }
    sort(coordinates.begin(), coordinates.end());

    int maxChange = 0;
    int bestPoint1 = -1, bestPoint2 = -1;
    for (int point1 = 0; point1 &lt; numPoints; point1++) {
        for (int point2 = point1 + 1; point2 &lt; numPoints; point2++) {
            int deltaX1 = coordinates[min(numPoints - 1, point1 + 1)].first - coordinates[max(0, point1 - 1)].first;
            int deltaX2 = coordinates[min(numPoints - 1, point2 + 1)].first - coordinates[max(0, point2 - 1)].first;
            int currentChange = (coordinates[point2].second - coordinates[point1].second) * (deltaX1 - deltaX2);
            if (currentChange &gt; maxChange) {
                maxChange = currentChange;
                bestPoint1 = point1;
                bestPoint2 = point2;
            }
        }
    }
    if (maxChange == 0) {
        cout &lt;&lt; -1 &lt;&lt; endl;
    } else {
        cout &lt;&lt; coordinates[bestPoint1].first &lt;&lt; &quot; &quot; &lt;&lt; coordinates[bestPoint2].first &lt;&lt; endl;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多多的金币分配" tabindex="-1"><a class="header-anchor" href="#多多的金币分配" aria-hidden="true">#</a> 多多的金币分配</h2><p>多多君和皮皮虾在海外大探险中发现了一处宝藏:—个装满了金币的宝箱。宝箱中有N枚金币，怎么分配金币却成为了大麻烦，于是多多君和皮皮虾约定了以下的规则:</p><ol><li>多多君和皮皮虾轮流进行金币的选取，由多多君先选</li><li>当金币数量是偶数时，可以选择拿走一半的金币，也可以只拿走—枚金币 3.当金币数量是奇数时，只能拿走—枚金币 多多君和皮皮虾两人都会选择自己能拿走最多金币的策略，请问两人分别可以拿走多少金币。</li></ol><p><strong>输入描述</strong> 第一行，一个整数T，表示测试用例的组数。( 1 &lt;=T&lt;= 1, 000 ) 接下来T行，每行一个整数N，表示当前测试用例的金币枚数。( 1 &lt;= N&lt;= 1,000 ,000，000 ) <strong>输出描述</strong> 输出共一行，两个整数:分别代表多多君和皮皮虾分别能毫走多少金币。</p><p><strong>示例1</strong></p><p><strong>输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>4
1
2
5
6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 0
1 1
2 3
4 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>对于金币数量是5的情况，由于金币是奇数枚，多多君先选只能选择1枚，剩余4枚
皮皮虾此时有两种选择:
1．拿走一半金币，则剩余2枚，皮皮虾无论如何都能在剩余2枚中拿走1枚，总共能拿到4/ 2＋1 =3枚
2．拿走—校金币，则剩余3枚，多多君只能再选1枚，皮皮虾也还能从剩余2枚中拿走1枚,总.共能拿走1 +1 =2枚
因此皮皮虾会选择对自己最有利的策略（1），于是多多君能拿走2枚，多多虾能拿走3枚
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>思路与代码</strong></p><p>递归模拟，复杂度可以落在O(logn)。</p><p>当金币数量为偶数时，多多君可以通过选择拿走一半的金币或只拿走一枚金币来控制皮皮虾的选择。</p><p>如果 n/2 是偶数，那么多多君不能选择拿走一半的金币，因为这样会使皮皮虾处于有利地位。此时，多多君应该选择只拿走一枚金币，这样皮皮虾就只能拿走一枚金币。</p><p>如果 n/2 是奇数，那么多多君可以选择拿走一半的金币。这样，皮皮虾就只能拿走一枚金币，而多多君可以继续控制局面。</p><p>通过这种方式，多多君可以始终保持对局面的控制，并最终获得更多的金币。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;

long long dfs(long long n) {
    if (n == 0) return 0;
    if (n == 4) return dfs(2) + 2;
    if (n % 2 == 0) {
        if ((n/2)%2 == 1) return dfs(n/2 - 1) + n/2;
        return dfs(n-2)+1;
    }
    return dfs(n-1-n/2) + 1;
}

int main() {
    int T;
    cin &gt;&gt; T;
    while (T-- &gt; 0) {
        long long n;
        cin &gt;&gt; n;
        long long a0, a1;
        if (n % 2 == 1) {
            a1 = dfs(n - 1);
            a0 = n - a1;
        }
        else {
           a0 = dfs(n);
           a1 = n - a0;
        }
        cout &lt;&lt; a0 &lt;&lt; &quot; &quot; &lt;&lt; a1 &lt;&lt; endl;
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50),a=[l];function t(r,v){return i(),e("div",null,a)}const u=n(d,[["render",t],["__file","pdd20230418.html.vue"]]);export{u as default};
