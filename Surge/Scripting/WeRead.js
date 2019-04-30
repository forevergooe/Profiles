/**
 * @author Choler
 * @repo https://github.com/Choler/Surge
 * @Script http-response ^https?:\/\/i\.weread\.qq\.com script-path=https://github.com/ConnersHua/Profiles/raw/master/Surge/Scripting/WeRead.js
 * @MITM i.weread.qq.com
 */

let result = body

let path = '/pay/memberCardSummary';

if (url.indexOf(path) != -1) {
    let jsbody = JSON.parse(body);
    jsbody.remainTime = 86313600;
    result = JSON.stringify(jsbody);
}
result;