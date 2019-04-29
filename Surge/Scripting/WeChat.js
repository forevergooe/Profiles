/**
 * @author Choler
 * @repo https://github.com/Choler/Surge
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