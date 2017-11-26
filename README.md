# 描述
Surge、Shadowrocket、ShadowRay、Kitsunebi、Postern 的配置规则


1.本规则不提供节点信息。

2.本规则主推黑名单模式，被☭和速度极慢的网站才走代理。

3.连接公共 Wi-Fi 时可暂时关闭 Surge 或 Shadowrocket 待连接成功后再开启，否则可能出现验证页面无法加载的情况。

4.Surge 及 Shadowrocket 一定要安装并信任证书，如果不愿意安装信任证书用文本模式把规则底部包括 [MITM] 之后的内容全部删掉再用，不然会出现少数应用和网站出现上不去及图片加载失败等情况。

```
安装：

Surge：配置 – 编辑配置 – HTTPS 解密 – 安装证书

Shadowrocket：设置 – 证书 – 安装证书

信任：

设置 – 通用 – 关于本机 – 证书信任设置 – 信任
```
5.REJECT 规则偏向于反劫持和跟踪保护。

# 规则
Surge / Kitsunebi

（因 Kitsunebi 每次规则导入不会清空以前的规则，所以需先「删除全部规则」再倒入，也不建议和其他规则叠压使用）

[https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge.conf](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge.conf)

Shadowrocket / ShadowRay

[https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow.conf](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow.conf)

Postern

[https://raw.githubusercontent.com/ConnersHua/Profiles/master/Postern.conf](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Postern.conf)

# 感谢

[lhie1](https://github.com/lhie1) （2017年3至10月使用其去广告规则）

[Eval](https://twitter.com/OAuth4/status/829012555976712192) 

[BreakWa11](https://breakwa11.blogspot.com/2016/12/baidu.html)

[逗bi极客](http://weibo.com/1989623982/) 

[旦旦熊](https://twitter.com/zanefox/status/775330280768843776) 

[Jelly](https://twitter.com/zhgd/status/774794766953230336) 

[慕容寻](https://twitter.com/yanfengzi/status/772850538778013696) 

# 许可

转载需注明作者及项目地址
