/**
 * @author Choler
 * @repo https://github.com/Choler/Surge
 * @Script http-response ^https?:\/\/mp\.weixin\.qq\.com script-path=https://github.com/ConnersHua/Profiles/raw/self-use/Surge/Scripting/WeChat.js
 * @MITM mp.weixin.qq.com
 */

let result = body;

// Subscriptions articles
let subscriptionsArticles = '/mp/getappmsgad?f=';

if (url.indexOf(subscriptionsArticles) != -1) {
    var jsbody = JSON.parse(body);
    jsbody.advertisement_info = [];
    result = JSON.stringify(jsbody);
}

result;