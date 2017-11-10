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
5.从 2017 年 3 月开始屏蔽规则取自 [lhie1/Surge](https://github.com/lhie1/Surge) ，在此感谢。

# 规则
Surge
```
https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge.conf
```
Shadowrocket/ShadowRay
```
https://raw.githubusercontent.com/ConnersHua/Profiles/master/Shadow.conf
```
Kitsunebi
```
https://raw.githubusercontent.com/ConnersHua/Profiles/master/Kitsunebi.conf
```
Postern
```
https://raw.githubusercontent.com/ConnersHua/Profiles/master/Postern.conf
```
# 许可
本规则中的屏蔽规则来于 lhie1 的 [Surge](https://github.com/lhie1/Surge) 项目，特此声明并感谢。
