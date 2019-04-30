/**
 * @author onewayticket255
 * @repo https://github.com/onewayticket255/Surge-Script/
 * @Script http-response ^https?:\/\/api\.zhihu\.com script-path=https://github.com/ConnersHua/Profiles/raw/master/Surge/Scripting/Zhihu.js
 * @MITM api.zhihu.com
 */

let result = JSON.parse(body); 

let follow = '/topstory/follow';
let recommend = '/topstory/recommend';
let questions = '/v4/questions';

if (url.indexOf(follow) != -1) {
    let result1=result['data'];
    
    result1.forEach(function (element, index, array) {
         if(element.hasOwnProperty('ad')){      
           result1.splice(index,1)  
        }
    
       });
    
    result['data']=result1
    
    result = JSON.stringify(result);     
}

if (url.indexOf(recommend) != -1) {
    let result2=result['data'];

    result2.forEach(function (element, index, array) {
        if(element['card_type']=="slot_event_card"||element.hasOwnProperty('ad')){      
        result2.splice(index,1)  
        }

    });

    result['data']=result2

    result = JSON.stringify(result); 
}

if (url.indexOf(questions) != -1) {
    delete result['ad_info']

    result = JSON.stringify(result); 
}

result