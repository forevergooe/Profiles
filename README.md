### 简介

配置规则文件（订阅 [Telegram 频道](https://t.me/DivineEngine_Profiles) 获取更多信息）

macOS：[Surge](https://nssurge.com/)、[ClashX](https://github.com/yichengchen/clashX)

iOS：[Surge](https://itunes.apple.com/app/apple-store/id1329879957?mt=8)、[Quantumult](https://itunes.apple.com/app/apple-store/id1252015438?mt=8)、[Kitsunebi](https://testflight.apple.com/join/2w6EF67u)、[Shadowrocket](https://itunes.apple.com/app/apple-store/id932747118?mt=8)、[Pepi(ShadowRay)](https://itunes.apple.com/app/apple-store/id1283082051?mt=8) 

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

| Surge 2 | [Surge 2 捷径](https://www.icloud.com/shortcuts/cf486fa3f7f44b288416bc501efaf613) |
| ------- | ------------------------------------------------------------ |
| 标准版  | [Basic](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Basic.conf) |
| 专业版  | [Pro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Pro.conf) |
| 回国版  | [China](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/China.conf) |

| Surge 3  | [Surge 3 捷径](https://www.icloud.com/shortcuts/8a2c2c9649dd484eab2f7e727282732c) |
| -------- | ------------------------------------------------------------ |
| 多功能版 | [Surge3](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Surge3.conf) |

| Quantumult    |                                                              |
| ------------- | ------------------------------------------------------------ |
| 分流 - 标准版 | [Basic](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult/Basic.conf) |
| 分流 - 专业版 | [Pro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult/Pro.conf) |
| 分流 - 回国版 | [China](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult/China.conf) |
| 链接阻止      | [Rejection](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Quantumult/Rejection.conf) |

| Kitsunebi |                                                              |
| --------- | ------------------------------------------------------------ |
| 标准版    | [Basic](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Kitsunebi/Basic.conf) |
| 专业版    | [Pro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Kitsunebi/Pro.conf) |

| Shadowrocket<br />Pepi(ShadowRay) | [Shadowrocket/Pepi 捷径](https://www.icloud.com/shortcuts/6eb1214d7ae345b18fcec2c93d18785b) |
| --------------------------------- | ------------------------------------------------------------ |
| 标准版                            | [Basic](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow/Basic.conf) |
| 专业版                            | [Pro](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow/Pro.conf) |
| 回国版                            | [China](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow/China.conf) |

| Clash  |                                                              |
| ------ | ------------------------------------------------------------ |
| 出国版 | [Global](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Clash/Global.yml) |
| 回国版 | [China](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Clash/China.yml) |

### 使用说明 & 常见问题

> 怎么导入规则？规则怎么更新？

导入配置及更新教程：

- [Surge 导入配置及安装证书](https://medium.com/circumvention-technology/import-profile-on-surge-2d4119822302)
  注：Surge 2 使用捷径（否则更新麻烦），Surge 3 如不需要去广告按教程删除去广告部分即可否则使用捷径。

- [Quantumult 导入配置及安装证书](https://medium.com/circumvention-technology/import-profile-on-quantumult-2e5cef9cb0c5)
- [Kitsunebi 导入配置](https://medium.com/circumvention-technology/import-profile-on-kitsunebi-6befa3db03db)
- [Shadowrocket 导入配置及安装证书](https://medium.com/circumvention-technology/import-profile-on-shadowrocket-f183cd4e95ae)



> XX 规则更新没？

每次更新即全部更新



> 需要及时更新规则吗？

如果 Telegram 频道的更新日志中没有对应你的需求可以不更，换句话说用着没问题就不更新



> 捷径是什么？我想规则自定义怎么办？

有自定义规则需要使用捷径



> 遇到连接公共场所 Wi-Fi 时验证页面无法显示？

暂时关闭待验证成功后再开启



> DNS 推荐设置什么？

**为什么不建议运营商的 DNS 及公共 DNS 的弊端是什么**

部分运营商存在 DNS 劫持、解析不准确或失败(尤其海外网站)的问题

使用公共 DNS 上网的弊端（一）https://ephen.me/2017/PublicDns_1/

使用公共 DNS 上网的弊端（二）https://ephen.me/2017/PublicDns_2/

**那么建议是什么**

1. 使用运营商 DNS 和公共 DNS 设置为「system,119.29.29.29,223.5.5.5」
2. 仅使用运营商 DNS 设置为「system」(Quantumult、Kitsunebi 留空)
3. 仅使用公共 DNS设置为「119.29.29.29,223.5.5.5」

说明：

若网络环境存在 DNS 劫持则使用第三种即去掉「system」选项

若网络环境存在劫持 DNS（DNS 抢答）则不使用公共 DNS（或尝试使用 1.2.4.8 此 DNS 在部分中国移动不被抢答，反馈良好）

**为什么不推荐海外的 DNS**

首先目前海外 DNS 基本在国内没有节点会导致 CDN 解析不准确如解析到香港节点（包括腾讯的 119.28.28.28因运营商没有对路由进行更新所导致）

其次很多人觉得海外公共 DNS 干净，而现实是被污染的域名仍旧污染部分重灾区运营商还对海外 DNS 请求完全抢答，所以没有意义

> 所以对于劫持/抢答/污染的应对？

- DNS 劫持 > 使用公共 DNS
- DNS 抢答 > 无解
- HTTP 劫持 > 使用规则（反运营商劫持）
- DNS 污染 > 使用规则（海外加速）



> 关于 Apple 服务加速？

此处分为两个部分：

第一是必须加速的服务有：Dictionary（维基百科）、Spotlight（汇率、航班等查询）、iBook Store（下载）、iTunes Store(影片预览)、短链接等

第二是针对部分地区速度不理想给的可选策略（仅 Surge）：App Store、Music(待完善)、Moveis(待完善) 以及（仅 Surge 和 Quantumult） Apple News 和 Maps 海外版加速
（需要注意的是使用 News 需将「地区」改成「美国」且中国大陆手机卡需在「飞行模式下」使用且因此必然导致 Maps 必须是海外版）



> 关于 Media 媒体服务加速？

仅 Surge 及 Quantumult 可用，主要是针对部分媒体服务需要特定节点支持，如没有特定节点则默认设置即可，目前支持： Youtube、Netflix、HBO、Hulu、BBC iPlayer、Bahamut、myTV SUPER、AbemaTV、Spotify 和 JOOX。



> 有些应用无法去除广告

部分应用存在缓存广告，如果在使用规则前就已经加载过广告需到设置中清除缓存，部分应用需重装

部分广告去除需要 [URL Rewrite] 功能，即不支持该功能的应用会无法去除一些广告（Surge 虽支持该功能但如 YOUKU 等需要在 TUN 模式下请求的应用因无法识别也无法去除广告，Quantumult 默认也是如此需在「附加功能」中开启「激进阻止」）

最后，不是所有广告都能通过规则去除，如广告功能写死或者应用只相信特定的证书的情况下 MitM 无法正常工作



> 为什么 Youtube、知乎等应用（存在于 MitM 域名列表）无法使用？

如果使用了专业版规则并且开启了「HTTPS 解密(MitM)」功能不仅需要安装证书。还需在系统「设置」>「通用」>「关于本机」中底部的「证书信任设置」中信任所安装的证书

另外 Shadowrocket(2.1.23) 的版本（后续版本未测）中「HTTPS 解密」功能存在问题。所以 不要不要不要 在该版本中开启此功能

### 感谢

[lhie1](https://github.com/lhie1) – 2017 ~ 2018.5 特别版去广告相关规则基于其规则

Lison Bin – 完善 Apple、WhatsApp、Line 相关规则

[linjiacheng](https://github.com/linjiacheng) – 解决盯盯拍无法使用的问题

Booui、liceva – 完善 Google Play IP 段

[JO2EY](https://github.com/JO2EY) - 完善 Media 策略组

### 许可

转载需注明作者及项目地址
