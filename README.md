### 简介

[Surge](https://itunes.apple.com/app/apple-store/id1329879957?mt=8)、[Quantumult](https://itunes.apple.com/app/apple-store/id1252015438?mt=8)、[Kitsunebi](https://testflight.apple.com/join/2w6EF67u)、[Shadowrocket](https://itunes.apple.com/app/apple-store/id932747118?mt=8)、[Pepi(ShadowRay)](https://itunes.apple.com/app/apple-store/id1283082051?mt=8) 、[Surfboard](https://rink.hockeyapp.net/recruit/2113783c503645abb0a5ec6317e1a169) 配置规则文件

可订阅 [Telegram 频道](https://t.me/DivineEngine_Profiles) 获取更多信息

### 规则

规则分为标准版、专业版和回国版

**标准版**

- 使用公共 DNS 达到快速、准确、稳定及安全的解析
- 国内应用及网站直连
- 海外应用及网站加速
- Apple Spotlight、iBook Store、iTunes Store 部分服务及 Apple News（需将「地区」改成「美国」且中国大陆手机卡需在「飞行模式下」使用）加速
- 海外媒体部分服务可指定节点（仅 Surge 及 Quantumult，支持 Youtube、Netflix、HBO、Hulu、BBC iPlayer、Bahamut、myTV SUPER、AbemaTV 和 JOOX）

**专业版**

- 标准版所有功能
- 拦截应用及网站的行为分析、数据统计、隐私跟踪
- 拦截运营商劫持
- 拦截应用的广告（网页广告请使用 Safari 内容拦截器如 [ADGuard](https://itunes.apple.com/app/apple-store/id1047223162?mt=8) (在「过滤器」中添加「EasyList China」) 或自带去广告功能的浏览器。）
- 拦截臭名昭著的诈骗网站（如**思杰马克丁**伪造的一系列软件官网、MacKeeper等）

**回国版**

- 国内应用及网站加速

**下载**

| **标准版**                                                   | **专业版**                                                   | **回国版**                                                   | [**捷径**](https://itunes.apple.com/app/apple-store/id915249334?mt=8) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Surge](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge.conf)<br>[SurgeNG](https://raw.githubusercontent.com/ConnersHua/Profiles/master/SurgeNG.conf) | [SurgePro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/SurgePro.conf)<br/>[SurgeNG](https://raw.githubusercontent.com/ConnersHua/Profiles/master/SurgeNG.conf) | [SurgeCN](https://raw.githubusercontent.com/ConnersHua/Profiles/master/SurgeCN.conf) | [Surge](https://www.icloud.com/shortcuts/dce799f2861b436b8febf08fb9df38e7) |
| [Quantumult](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult.conf) | [QuantumultPro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/QuantumultPro.conf) <br> [QuantumultRejection](https://raw.githubusercontent.com/ConnersHua/Profiles/master/QuantumultRejection.conf) | [QuantumultCN](https://raw.githubusercontent.com/ConnersHua/Profiles/master/QuantumultCN.conf) | 无                                                           |
| [Shadow](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow.conf) | [ShadowPro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/ShadowPro.conf) | [ShadowCN](https://raw.githubusercontent.com/ConnersHua/Profiles/master/ShadowCN.conf) | [Shadow](https://www.icloud.com/shortcuts/f026a745909d4addb920fdda08984832) |

**Surge 2 用户建议使用捷径，Surge Mac 3 用户使用 SurgeNG**

*Surge 规则同适用于 Kitsunebi、Surfboard*

*Shadow 规则同适用于 Shadowrocket 和 Pepi(ShadowRay)*

*若对规则有定制需求可使用捷径*

### 使用说明

连接公共 Wi-Fi 时若出现验证页面无法加载的情况，可暂时关闭待连接成功后再开启。

导入配置教程：

- [Surge 导入配置及安装证书](https://diveng.io/import-profile-and-install-certificate-on-surge.html)
- [Quantumult 导入配置及安装证书](https://diveng.io/import-profile-and-install-certificate-on-quantumult.html)
- [Shadowrocket 导入配置及安装证书](https://diveng.io/import-profile-and-install-certificate-on-shadowrocket.html)
- [Kitsunebi 导入配置](https://diveng.io/import-profile-on-kitsunebi.html)

### 常见问题

规则是所有版本同步更新吗？

````
是
````

需要及时更新规则吗？

````
如果 Telegram 频道的更新日志中没有对应你的需求可以不更，换句话说用着没问题就不更新
````

遇到连接公共场所 Wi-Fi 时验证页面无法显示？

````
暂时关闭待验证成功后再开启
````

DNS 推荐设置什么？

````
1.为什么不建议运营商的 DNS 及公共 DNS 的弊端是什么
部分运营商存在 DNS 劫持、解析不准确或失败(尤其海外网站)的问题
使用公共 DNS 上网的弊端（一）https://ephen.me/2017/PublicDns_1/
使用公共 DNS 上网的弊端（二）https://ephen.me/2017/PublicDns_2/

2.那么建议是什么
不使用公共 DNS 设置「system」
电信和联通设置「119.29.29.29,223.5.5.5」
移动和长城宽带等设置「1.2.4.8」

3.为什么不推荐海外的 DNS
首先海外 DNS 基本没有国内节点，导致 CDN 解析不准确，如 OpenDNS 会将某些解析到香港导致访问速度变慢等问题
其次现阶段追求海外 DNS 已无意义，早期来说可以避免 DNS 污染，但现在基本上 Public DNS 没有不污染的，还会导致上述解析问题
````

所以对于劫持/抢答/污染的应对？

````
DNS 劫持 > 使用公共 DNS
DNS 抢答 > 无解(使用「1.2.4.8」仍抢答的情况下向工信部投诉「运营商劫持中国互联网网络信息中心」，即以流氓治流氓)
HTTP 劫持 > 使用规则(反运营商劫持)
DNS 污染 > 使用规则(海外加速)
````

有些应用无法去除广告

````
1.不少应用会调用缓存广告，如果在使用规则前就已经加载过广告了建议到设置中清除缓存。

2.部分广告去除需要 [URL Rewrite] 功能，即不支持该功能的应用会无法去除一些广告。

3.Surge 虽有 [URL Rewrite] 但不支持去除 YOUKU 等部分应用的广告。

4.不是所有广告都能通过规则去除，如广告功能写死或者应用只相信特定的证书的情况下 MitM 无法正常工作。
````

为什么 Youtube、知乎等应用（存在于 MitM 域名列表）无法使用？

````
首先如果使用了专业版规则并且开启了「HTTPS 解密(MitM)」功能不仅需要安装证书。
还需在系统「设置」>「通用」>「关于本机」中底部的「证书信任设置」中信任所安装的证书！

另外 Shadowrocket(2.1.23) 的版本(后续版本未测)中「HTTPS 解密」功能存在问题。
所以 不要不要不要 在该版本中开启此功能。
````

### 感谢

[lhie1](https://github.com/lhie1) – 2017 ~ 2018.5 特别版去广告相关规则基于其规则

Lison Bin – 完善 Apple、WhatsApp、Line 相关规则

[linjiacheng](https://github.com/linjiacheng) – 解决盯盯拍无法使用的问题

Booui、liceva – 完善 Google Play IP 段

[JO2EY](https://github.com/JO2EY) - 完善 Media 策略组

### 许可

转载需注明作者及项目地址
