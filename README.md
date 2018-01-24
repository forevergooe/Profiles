# 简介
Surge、Shadowrocket、Pepi(ShadowRay)、Kitsunebi、Postern 的配置规则

- 规则不提供节点信息。

- 规则主推黑名单模式，被 ☭ 和速度极慢的网站才走代理。

- 规则分为标准版及特别版（特别版基于 [lhie1](https://github.com/lhie1) 的规则具有去广告作用）

# 使用

- 连接公共 Wi-Fi 时可暂时关闭待连接成功后再开启，否则可能出现验证页面无法加载的情况。

- 如需要去广告请使用特别版，特别版需安装证书，具体方法：
  - [Surge 导入配置及安装证书](https://diveng.io/import-profile-and-install-certificate-on-surge.html)
  - [Shadowrocket 导入配置及安装证书](https://diveng.io/import-profile-and-install-certificate-on-shadowrocket.html)

- Surge 配置多节点时建议在「在文本模式中编辑」进行修改，务必做到配置中的[Proxy]和[Proxy Group]段首名称信息一一对应才不会报错。

- Kitsunebi 每次规则导入不会清空以前的规则，所以需先「删除全部规则」再倒入，也不建议和其他规则叠压使用

# 规则

**标准版**

Surge / Kitsunebi

[https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge.conf](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge.conf)

Shadowrocket / Pepi(ShadowRay)

[https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow.conf](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow.conf)

Postern

[https://raw.githubusercontent.com/ConnersHua/Profiles/master/Postern.conf](https://raw.githubusercontent.com/ConnersHua/Profiles/master/Postern.conf)

**特别版**

Surge / Kitsunebi

[https://raw.githubusercontent.com/ConnersHua/Profiles/master/SurgeS.conf](https://raw.githubusercontent.com/ConnersHua/Profiles/master/SurgeS.conf)

Shadowrocket / Pepi(ShadowRay)

[https://raw.githubusercontent.com/ConnersHua/Profiles/master/ShadowS.conf](https://raw.githubusercontent.com/ConnersHua/Profiles/master/ShadowS.conf)

Postern

[https://raw.githubusercontent.com/ConnersHua/Profiles/master/PosternS.conf](https://raw.githubusercontent.com/ConnersHua/Profiles/master/PosternS.conf)

# 感谢

> [lhie1](https://github.com/lhie1) - 特别版去广告基于其规则

> Lison Bin - 完善 Apple、WhatsApp、Line 相关规则

> [linjiacheng](https://github.com/linjiacheng) - 解决盯盯拍无法使用的问题

# 许可

转载需注明作者及项目地址
