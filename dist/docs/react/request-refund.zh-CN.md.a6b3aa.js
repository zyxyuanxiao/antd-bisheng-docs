(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1102:function(t,a){t.exports={content:["section",["h2","接口说明"],["ul",["li",["p","当商户后台、网络、服务器等出现异常，商户系统最终未接收到支付通知；"]],["li",["p","调用支付接口后，返回系统错误或未知交易状态情况；"]],["li",["p","调用付款码支付",["code","API"],"，返回",["code","USERPAYING"],"的状态；"]],["li",["p","调用关单或撤销接口",["code","API"],"之前，需确认支付状态；"]]],["h2","接口地址"],["pre",{lang:"http request",highlighted:'https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>api<span class="token punctuation">.</span>mch<span class="token punctuation">.</span>weixin<span class="token punctuation">.</span>qq<span class="token punctuation">.</span>com<span class="token operator">/</span>pay<span class="token operator">/</span>unifiedorder'},["code","https://api.mch.weixin.qq.com/pay/unifiedorder"]]],meta:{category:"API文档",type:"扩展接口",order:1,title:"申请退款",filename:"docs/react/request-refund.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#接口说明",title:"接口说明"},"接口说明"]],["li",["a",{className:"bisheng-toc-h2",href:"#接口地址",title:"接口地址"},"接口地址"]],["li",["a",{className:"bisheng-toc-h2",href:"#API-参数",title:"API 参数"},"API 参数"]],["li",["a",{className:"bisheng-toc-h2",href:"#请求示例",title:"请求示例"},"请求示例"]]],api:["section",["h2","API 参数"],["table",["thead",["tr",["th","参数"],["th","必填"],["th","类型"],["th","长度限制"],["th","描述"]]],["tbody",["tr",["td","appId"],["td","yes"],["td","string"],["td","128"],["td","应用ID"]],["tr",["td","appKey"],["td","yes"],["td","string"],["td","32"],["td","接口",["code","appKey"],"，应用的唯一标识"]],["tr",["td","timeStamp"],["td","yes"],["td","long"],["td","20"],["td",["code","1970-01-01"],"开始的时间戳，秒为单位"]],["tr",["td","sign"],["td","yes"],["td","string"],["td","32"],["td",["code","MD5"],"签名，详见 ",["a",{title:null,href:"/docs/react/sign-rule"},"签名规则"]]],["tr",["td","channel"],["td","no"],["td","string"],["td","255"],["td","渠道标识符（仅针对游戏类别应用）"]]]],["h2","请求示例"],["pre",{lang:"http request",highlighted:'https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>api<span class="token punctuation">.</span>mch<span class="token punctuation">.</span>weixin<span class="token punctuation">.</span>qq<span class="token punctuation">.</span>com<span class="token operator">?</span>appKey<span class="token operator">=</span>Fii6DgbvqWnEm2HYXupl5oaw<span class="token operator">&amp;</span>sign<span class="token operator">=</span>b451fb67aa4996d2c08b3567ba3591d3'},["code","https://api.mch.weixin.qq.com?appKey=Fii6DgbvqWnEm2HYXupl5oaw&sign=b451fb67aa4996d2c08b3567ba3591d3"]]]}}}]);