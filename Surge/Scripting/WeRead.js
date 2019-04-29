/**
 * @author Choler
 * @repo https://github.com/Choler/Surge
 * @Script http-response ^https?:\/\/i\.weread\.qq\.com script-path=https://github.com/ConnersHua/Profiles/raw/self-use/Surge/Scripting/WeRead.js
 * @MITM i.weread.qq.com
 */

var result = body

let path = '/pay/memberCardSummary';

if (url.indexOf(path) != -1) {
    var jsbody = JSON.parse(body);
    jsbody.remainTime = 86313600;
    result = JSON.stringify(jsbody);
}
result;