### 简介

配置规则文件

iOS: [Surge](https://itunes.apple.com/app/apple-store/id1329879957?mt=8)、[Quantumult](https://itunes.apple.com/app/apple-store/id1252015438?mt=8)、[Kitsunebi](https://itunes.apple.com/app/apple-store/id1275446921?mt=8)、[Shadowrocket](https://itunes.apple.com/app/apple-store/id932747118?mt=8)、[Pepi(ShadowRay)](https://itunes.apple.com/app/apple-store/id1283082051?mt=8)

Android: [Surfboard](https://manual.getsurfboard.com/) 、V2Ray([v2rayNG](https://play.google.com/store/apps/details?id=com.v2ray.ang)、[BifrostV](https://play.google.com/store/apps/details?id=com.github.dawndiy.bifrostv))

可订阅 [Telegram 频道](https://t.me/DivineEngine_Profiles) 获取更多信息

### 规则

规则分为标准版、专业版和回国版

**标准版**

- 使用公共 DNS 达到快速、准确、稳定及安全的解析
- 国内应用及网站直连
- 海外常用应用及网站加速
- Apple 部分服务加速(Apple News、Spotlight、iBook Store 及 iTunes Store)
  注：iPhone 上使用 Apple News 需将「地区」改成「美国」且在「飞行模式」下方可使用。但由此而来会造成 Apple Map 的地图数据变成 TOMTOM 来源，如果觉得受到影响可以将规则中的「gspe1-ssl.ls.apple.com」的策略修改成「DIRECT」

**专业版**

- 标准版所有功能
- 拦截应用及网站的行为分析、数据统计、隐私跟踪
- 拦截运营商劫持
- 拦截应用的广告（网页广告请使用 Safari 内容拦截器如 [ADGuard](https://itunes.apple.com/app/apple-store/id1047223162?mt=8) (在「过滤器」中添加「EasyList China」) 或自带去广告功能的浏览器。）
- 拦截臭名昭著的诈骗网站（如**思杰马克丁**伪造的一系列软件官网、MacKeeper等）

**回国版**

- 国内常用应用及网站加速(主要针对视听如腾讯视频、爱奇艺、网易云音乐等)

**规则下载**

| **标准版**                                                   | **专业版**                                                   | **回国版**                                                   | **捷径**                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Surge](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge.conf) | [SurgePro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/SurgePro.conf) | [SurgeCN](https://raw.githubusercontent.com/ConnersHua/Profiles/master/SurgeCN.conf) | [Surge](https://www.icloud.com/shortcuts/940a8d1220ef435faba4b8989c2d2e72) |
| [Quantumult](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult.conf) | [QuantumultPro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/QuantumultPro.conf) [QuantumultRejection](https://raw.githubusercontent.com/ConnersHua/Profiles/master/QuantumultRejection.conf) | [QuantumultCN](https://raw.githubusercontent.com/ConnersHua/Profiles/master/QuantumultCN.conf) | 无                                                           |
| [Shadow](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow.conf) | [ShadowPro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/ShadowPro.conf) | [ShadowCN](https://raw.githubusercontent.com/ConnersHua/Profiles/master/ShadowCN.conf) | [Shadow](https://www.icloud.com/shortcuts/73add44ee78b4abf8fc0d25b898fe824) |
| [V2Ray](https://raw.githubusercontent.com/ConnersHua/Profiles/master/V2Ray.json) | [V2RayPro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/V2RayPro.json) | 无                                                           | 无                                                           |

***Surge 用户建议使用捷径***

*Surge 规则同适用于 Kitsunebi 和 Surfboard*

*Shadow 规则同适用于 Shadowrocket 和 Pepi(ShadowRay)*

*若对规则有定制需求可使用捷径*

### 使用说明

连接公共 Wi-Fi 时若出现验证页面无法加载的情况，可暂时关闭待连接成功后再开启。

导入配置教程：

- [Surge 导入配置及安装证书](https://diveng.io/import-profile-and-install-certificate-on-surge.html)
- [Shadowrocket 导入配置及安装证书](https://diveng.io/import-profile-and-install-certificate-on-shadowrocket.html)
- [Quantumult 导入配置及安装证书](https://diveng.io/import-profile-and-install-certificate-on-quantumult.html)
- [Potatso 2 导入配置](https://diveng.io/import-profile-on-potatso.html)
- [Kitsunebi 导入配置](https://diveng.io/import-profile-on-kitsunebi.html)
- [Surfboard 导入配置](https://diveng.io/import-profile-on-surfboard.html)
- V2Ray 为兼容 V2Ray Core 的配置：
  Android 用户推荐使用 [BifrostV](https://play.google.com/store/apps/details?id=com.github.dawndiy.bifrostv) ：复制配置地址选择从「从 URL 导入」后进行文本编辑修改「outboundDetour」下的服务器相关配置；（可[加入频道](https://t.me/DivineEngine_Profiles)索取内置节点版本）

规则为黑名单模式：

- 什么是黑名单模式？
  黑名单模式为只有被 ☭ 墙、主动屏蔽或极慢的网站和应用才走代理的模式。

- 为什么是黑名单模式？

  现在众多流行的规则基本都是白名单模式也就是在这个基础上

  ```bash
  [Rule]
  // 中国 IP 段直连
  GEOIP,CN,DIRECT
  // 其他都走代理
  FINAL,Proxy
  ```

  这个策略的走法就是中国的 IP 段都走直连，其他走代理，在墙越来越高的今天这样的分流策略是好的，但是我认为有几个问题需要探讨：

  1. 首先，白名单就是除了大陆应用或网站的都代理，这个理念看起来是很美好的，但是实际情况却是因为 CDN 等原因是做不到保证都走了直连，所以在此基础上需要添加大陆应用或网站的地址。另外也是没法保证如 Google 这样的应用或网站确保走了正确代理，所以可以看到白名单规则除了大陆地址规则还得有**部分**如 Google 等应用或网站的规则。
     此处的问题是明明理论上白名单模式只用管大陆区域应用或网站就好了，但是实际还是要加代理规则，那如果到最后还是要加代理规则为何不只做代理规则，这样至少我可以保证该直连的东西一定直连了。
  2. 其次，除了大陆的服务或网站都代理是否真的有必要，有些应用或网站明明可以直连却走了代理，且不说不少人的代理服务流量有限，在敏感时期大流量还容易被封 IP。
  3. 最后，墙已经够高了，希望世界上的中国流量可以更多吧，我不是说白名单模式是错误的，而是出于基于此三点的理念不同，希望能带来别的选择，黑白模式并无好坏之分，我更希望有一天可以不再需要规则就能上网冲浪。

### 感谢

[lhie1](https://github.com/lhie1) – 2017 ~ 2018.5 特别版去广告相关规则基于其规则

Lison Bin – 完善 Apple、WhatsApp、Line 相关规则

[linjiacheng](https://github.com/linjiacheng) – 解决盯盯拍无法使用的问题

Booui、liceva – 完善 Google Play IP 段

### 许可

转载需注明作者及项目地址