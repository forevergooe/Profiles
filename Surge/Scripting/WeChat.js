/**
 * @author Choler
 * @repo https://github.com/Choler/Surge
 * @Script http-response ^https?:\/\/mp\.weixin\.qq\.com script-path=https://github.com/ConnersHua/Profiles/raw/master/Surge/Scripting/WeChat.js
 * @MITM mp.weixin.qq.com
 */

let result = JSON.parse(body);

delete result['advertisement_info'];

JSON.stringify(result);