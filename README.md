### 简介

配置规则文件（订阅 [Telegram 频道](https://t.me/DivineEngine_Profiles) 获取更多信息）

macOS：[Surge](https://nssurge.com/)、[ClashX](https://github.com/yichengchen/clashX)

iOS：[Surge](https://itunes.apple.com/app/apple-store/id1329879957?mt=8)、[Quantumult](https://itunes.apple.com/app/apple-store/id1252015438?mt=8)、[Kitsunebi](https://itunes.apple.com/us/app/kitsunebi-proxy-utility/id1446584073?ls=1&mt=8)、[Shadowrocket](https://itunes.apple.com/app/apple-store/id932747118?mt=8)、[Pepi(ShadowRay)](https://itunes.apple.com/app/apple-store/id1283082051?mt=8) 

Windows：[Clash for Windows](https://github.com/Fndroid/clash_for_windows_pkg)

### 规则

规则分为标准版、专业版和回国版

**标准版**

- 使用公共 DNS 达到快速、准确、稳定及安全的解析
- 国内应用及网站直连
- 海外应用及网站加速
- Apple 服务加速（具体看底部说明）
- 海外媒体部分服务可指定节点（具体看底部说明）

**专业版**

- 标准版所有功能
- 拦截应用及网站的行为分析、数据统计、隐私跟踪
- 拦截运营商劫持
- 拦截应用的广告（网页广告请使用 Safari 内容拦截器如 [ADGuard](https://itunes.apple.com/app/apple-store/id1047223162?mt=8) (在「过滤器」中添加「EasyList China」) 或自带去广告功能的浏览器。）
- 拦截臭名昭著的诈骗网站（如**思杰马克丁**伪造的一系列软件官网、MacKeeper等）

**回国版**

- 国内应用及网站加速

**下载**

|                             应用                             |                            标准版                            |                            专业版                            |                            回国版                            |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                            Clash                             |                              无                              | [Global](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Clash/Global.yml) | [China](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Clash/China.yml) |
|               BifrostV<br />Kitsunebi(Android)               |                              无                              | [Pro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/ProjectV/Pro.json) |                              无                              |
|                        Kitsunebi(iOS)                        | [Basic](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Kitsunebi/Basic.conf) | [Pro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Kitsunebi/Pro.conf) | [China](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Kitsunebi/China.conf) |
|                          Quantumult                          | [Basic](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult/Basic.conf) | [Pro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult/Pro.conf)<br />[Rejection](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult/Rejection.conf) | [ China](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult/China.conf)<br />[Rejection](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult/Rejection.conf) |
| Shadowrocket \| [捷径](https://www.icloud.com/shortcuts/b50d84fb063e469891f8600ab089a684) <br />Pepi(ShadowRay) \| [捷径](https://www.icloud.com/shortcuts/b50d84fb063e469891f8600ab089a684) | [Basic](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow/Basic.conf) | [Pro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow/Pro.conf) | [China](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow/China.conf) |
| Surge 2 \| [捷径](https://www.icloud.com/shortcuts/ef983d4a23544191890d52c708f42718) | [Basic](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Basic.conf) | [Pro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Pro.conf) | [China](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/China.conf) |
| Surge 3 \| [捷径](https://www.icloud.com/shortcuts/529792025f5b48c0a4b5216326080d0d) |                              无                              | [Surge3](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Surge3.conf) |                              无                              |

### 使用说明 & 常见问题

#### 关于更新

> 怎么导入规则？规则怎么更新？

导入配置及更新教程：

- [Surge 导入配置及安装证书](https://medium.com/circumvention-technology/import-profile-on-surge-2d4119822302)
- [Quantumult 导入配置及安装证书](https://medium.com/circumvention-technology/import-profile-on-quantumult-2e5cef9cb0c5)
- [Kitsunebi 导入配置](https://medium.com/circumvention-technology/import-profile-on-kitsunebi-6befa3db03db)
- [Shadowrocket 导入配置及安装证书](https://medium.com/circumvention-technology/import-profile-on-shadowrocket-f183cd4e95ae)

> XX 规则更新没？

Surge 和 Quantumult 为优先更新对象，其他规则会每月初统一更新。

> 需要及时更新规则吗？

如果 Telegram 频道的更新日志中没有你的需求可以不更，换句话说用着没问题就不更新

#### 关于自定义和捷径

> 捷径是什么？我想规则自定义怎么办？

有自定义规则需要使用捷径，另外 Surge 2 及 Surge 3（需要去广告功能）强烈推荐使用捷径。

> 捷径导入没变化？

比较常见的现象是导出配置后虽然跳转到类 Surge 界面，但是没有任何变化和提示，此时先退出类 Surge 应用，再次进入即可看到「覆盖」等提示或变化，如依旧没有则再运行一次捷径脚本倒出即可。

#### 关于 DNS

> DNS 推荐设置什么？

**为什么不建议运营商的 DNS 及公共 DNS 的弊端是什么**

使用运营商 DNS 可能存在的弊端：

1. 存在 DNS 劫持
2. 解析不准确或失败

使用公共 DNS 的弊端是：

1. [使用公共 DNS 上网的弊端（一）](https://ephen.me/2017/PublicDns_1/)
2. [使用公共 DNS 上网的弊端（二）](https://ephen.me/2017/PublicDns_2/)

**建议**

1. 使用运营商 DNS 和公共 DNS 设置为「117.50.10.10,119.29.29.29,223.5.5.5,system」

   说明：日常情况，在网络没有劫持的情况下。

2. 仅使用运营商 DNS 设置为「system」

   说明：若网络存在劫持 DNS（亦称为抢答或污染）如长城宽带和部分中国移动宽带的情况下不使用公共 DNS。

3. 仅使用公共 DNS设置为「117.50.10.10,119.29.29.29,223.5.5.5」

   说明：若运营商 DNS 解析不准确或网络存在 DNS 劫持（但不是劫持 DNS）不使用运营商 DNS。

> 为什么不推荐海外的 DNS

首先目前海外 DNS 基本在国内没有节点会导致 CDN 解析不准确如解析到香港节点（包括腾讯的 119.28.28.28因运营商没有对路由进行更新所导致）

其次很多人觉得海外公共 DNS 干净，而实际情况是被污染的域名仍旧污染部分重灾区运营商还对海外 DNS 请求完全进行抢答，所以没有意义。

#### 关于服务加速策略

> 关于 Apple 服务加速？

此处分为两个部分：

第一是必须加速的服务有：Dictionary（维基百科）、Spotlight（汇率、航班等查询）、iBook Store（下载）、iTunes Store(影片预览)、短链接等。

第二是针对部分地区速度不理想给的可选策略（仅支持 Clash、Quantumult、Surge）：App Store、Music(待完善)、Moveis(待完善) 、Apple News 和 Maps 海外版（需要注意的是使用 News 需将「地区」改成「美国」且中国大陆手机卡需在「飞行模式下」使用）

> 关于 Media 媒体服务加速？

仅支持 Clash、Quantumult、Surge，主要是针对部分媒体服务需要特定节点支持，如没有特定节点则默认设置即可。

**支持**

视频：

- Youtube
- Netflix
- HBO
- Hulu
- BBC iPlayer
- Bahamut
- myTV SUPER
- AbemaTV
- encoreTVB
- 愛奇藝台灣站

音乐：

- Spotify
- JOOX
- Pandora

#### 关于去广告

> 某某应用无法去除广告

首先，部分应用存在缓存广告，如果在使用规则前就已经加载过广告需到设置中清除缓存，部分应用的缓存清楚功能不会清除广告缓存则需要重新安装。

其次，部分广告去除需要 [URL Rewrite] 功能（如 Kitsunebi 不支持、Quantumult 需在「附加功能」中开启「激进阻止」以完整支持、Surge 无法识别 TUN 模式下的应用导致支持不完整）。

最后，不是所有广告都能通过规则去除，如广告功能写死、应用安装包内已带有广告图片或者应用只相信特定的证书的则 MitM 无法正常工作。

> 为什么 Youtube、知乎等应用（存在于 MitM 域名列表）无法使用？

如果使用了专业版规则并且开启了「HTTPS 解密(MitM)」功能**不仅需要安装证书，还需在系统「设置」>「通用」>「关于本机」中底部的「证书信任设置」中信任所安装的证书。**

另外 Shadowrocket(2.1.23) 的版本（后续版本未测，使用 2.1.23 之前版本的用户可手动开启）中「HTTPS 解密」功能存在问题以及Pepi(ShadowRay) 一直不支持「HTTPS 解密(MitM)」的域名列表导入，因此 Shadow 系列规则已默认关闭「HTTPS 解密」功能。

#### 其他

> 遇到连接公共场所 Wi-Fi 时验证页面无法显示？

暂时关闭待验证成功后再开启，或者如校园网运营商客户端的可将相关域名或 IP 地址加入到「skip-proxy」中（主要是 Surge、Shadowrocket、Pepi(ShadowRay) 支持）。

### 感谢

[lhie1](https://github.com/lhie1) – 2017 ~ 2018.5 特别版去广告相关规则基于其规则

Lison Bin – 完善 Apple、WhatsApp、Line 相关规则

[linjiacheng](https://github.com/linjiacheng) – 解决盯盯拍无法使用的问题

Booui、liceva – 完善 Google Play IP 段

[JO2EY](https://github.com/JO2EY) - 完善 Media 策略组

[Choler](https://github.com/Choler) - Tiktok封区解锁

### 许可

转载需注明作者及项目地址
