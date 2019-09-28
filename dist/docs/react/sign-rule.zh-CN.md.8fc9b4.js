(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1104:function(n,a){n.exports={content:["article",["h4","所有的请求将进行 md5 签名，确保传输的安全可靠"],["h2","签名原理"],["p",["code","md5"]," 签名的原理如下： 将所有的参数值按参数名升序进行排列在拼接",["code","appSecret"],"。"],["pre",{lang:"php",highlighted:'<span class="token variable">$sign</span> <span class="token operator">=</span> <span class="token function">md5</span><span class="token punctuation">(</span>value1 <span class="token operator">+</span> value2 <span class="token operator">+</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>valueN<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">+</span> appSecret<span class="token punctuation">)</span>'},["code","$sign = md5(value1 + value2 + ...valueN... + appSecret)"]],["h2","注意事项"],["ul",["li",["h4","签名验证时，必须遍历",["code","request"],"请求中的所有参数，进行签名验证。"]],["li",["h4","开发者在验证请求时，务必对所有参数进行遍历，全部加入签名验证数据中。"]],["li",["h4","如果开发者写死签名验证参数，未来升级参数将导致开发者服务不可用，请谨慎。"]]],["h2","PHP 代码示例"],["pre",{lang:"php",highlighted:'<span class="token comment" spellcheck="true">/**\n * 签名\n * @param array $params 参数数组\n * @param string $secret 密钥\n * @return string\n */</span>\n<span class="token keyword">function</span> <span class="token function">getSign</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">,</span> <span class="token variable">$secret</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token function">ksort</span><span class="token punctuation">(</span><span class="token variable">$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token variable">$s</span> <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$params</span> <span class="token keyword">as</span> <span class="token variable">$k</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token variable">$v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token variable">$s</span> <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token variable">$v</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token variable">$s</span> <span class="token punctuation">.</span><span class="token operator">=</span> <span class="token variable">$secret</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token function">md5</span><span class="token punctuation">(</span><span class="token variable">$s</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","/**\n * 签名\n * @param array $params 参数数组\n * @param string $secret 密钥\n * @return string\n */\nfunction getSign($params, $secret)\n{\n    ksort($params);\n    $s = '';\n    foreach ($params as $k => $v) {\n        $s .= $v;\n    }\n    $s .= $secret;\n    return md5($s);\n}"]]],meta:{category:"API文档",order:0,title:"签名规则",filename:"docs/react/sign-rule.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#签名原理",title:"签名原理"},"签名原理"]],["li",["a",{className:"bisheng-toc-h2",href:"#注意事项",title:"注意事项"},"注意事项"]],["li",["a",{className:"bisheng-toc-h2",href:"#PHP-代码示例",title:"PHP 代码示例"},"PHP 代码示例"]]]}}}]);