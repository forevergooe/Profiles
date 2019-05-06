/**
 * @author Choler
 * @repo https://github.com/Choler/Surge
 * @Script http-response ^https?:\/\/api\.rr\.tv script-path=https://github.com/ConnersHua/Profiles/raw/master/Surge/Scripting/RRTV.js
 * @MITM api.rr.tv
 */

let profile = '/user/profile';

if (url.indexOf(profile) != -1) {
    var obj = JSON.parse(body);
    obj.data.user.medalList = JSON.parse('[{"name":"原画","endTime":"2033-12-31 23:59:59","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510128764030.png","id":1}]');
    obj.data.user.privilegeList = JSON.parse('[{"effectObject":"video","action":"play","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":1671718942000},{"effectObject":"coin","action":"sign","func":"5","description":"签到额外银币+5","icon":"qiandaoyinbi","endTime":1671718942000},{"effectObject":"growth","action":"play","func":"0.4","description":"经验值加成+40%","icon":"jingyanzhijiacheng","endTime":1671718942000},{"effectObject":"video","action":"play","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":1671718942000},{"effectObject":"video","action":"play","func":"noAd","description":"看剧无告","icon":"kanjuwuguanggao","endTime":1671718942000}]');
    result = JSON.stringify(obj);
}

result;