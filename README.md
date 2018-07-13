# 简介
Surge、Shadowrocket、Pepi(ShadowRay)、Kitsunebi、V2Ray(v2rayNG、BifrostV) 的配置规则文件 

### 规则

**标准版**

Surge / Kitsunebi

<https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge.conf>

Shadowrocket / Pepi(ShadowRay)

<https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow.conf>

V2Ray

<https://raw.githubusercontent.com/ConnersHua/Profiles/master/V2Ray.json>

**特别版**

Surge / Kitsunebi

<https://raw.githubusercontent.com/ConnersHua/Profiles/master/SurgeS.conf>

Shadowrocket / Pepi(ShadowRay)

<https://raw.githubusercontent.com/ConnersHua/Profiles/master/ShadowS.conf>

V2Ray

<https://raw.githubusercontent.com/ConnersHua/Profiles/master/V2RayS.json>

### 使用说明

一、规则不提供节点

二、规则分为标准版和特别版：

标准版只有代理规则

特别版针对应用内以下行为做屏蔽：

1. 广告（网页广告请使用 Safari 内容拦截器如 ADGuard （在「过滤器」中添加「ChinaList+EasyList」） 或自带去广告功能的浏览器。）
2. 行为分析、数据统计、隐私跟踪
3. 诈骗网站（如**思杰马克丁**伪造的一系列软件官网）
4. 运营商劫持

三、配置方法：

- [Surge 导入配置及安装证书](https://diveng.io/import-profile-and-install-certificate-on-surge.html)
- [Shadowrocket 导入配置及安装证书](https://diveng.io/import-profile-and-install-certificate-on-shadowrocket.html)
- [Kitsunebi 导入配置](https://diveng.io/import-profile-on-kitsunebi.html)
- V2Ray 为兼容 V2Ray Core 的配置：
  Android 用户推荐使用 [BifrostV](https://play.google.com/store/apps/details?id=com.github.dawndiy.bifrostv) ：复制配置地址选择从「从 URL 导入」后文本编辑修改「outboundDetour」下的服务器相关配置（可[加入频道](https://t.me/DivineEngine_Profiles)索取内置节点版本）

四、规则为黑名单模式：

- 什么是黑名单模式？黑名单模式为只有被 ☭ 墙、主动屏蔽或极慢的网站和应用才走代理的模式。

五、连接公共 Wi-Fi 时可能出现验证页面无法加载的情况，可暂时关闭待连接成功后再开启。 

# 感谢

> [lhie1](https://github.com/lhie1) - 旧版特别版去广告基于其规则

> Lison Bin - 完善 Apple、WhatsApp、Line 相关规则

> [linjiacheng](https://github.com/linjiacheng) - 解决盯盯拍无法使用的问题

# 许可

转载需注明作者及项目地址
