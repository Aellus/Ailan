/*************************************

项目功能：一言 解锁终身会员
下载地址：https://t.cn/Aini0veg
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https:\/\/app\.yiyan\.art\/yiyan\/ url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/yiyan.js

[mitm]
hostname = app.yiyan.art

*************************************/

var chxm1023 = $response.body.replace(/viptype":"\d+"/g, 'viptype":"4"');$done(chxm1023);
