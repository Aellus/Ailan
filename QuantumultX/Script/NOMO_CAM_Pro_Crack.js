/*
 *
 *
脚本功能：NOMO CAM 解锁订阅(包括 NOMO1 NOMO2)
软件版本：1.5.131
软件地址：https://apps.apple.com/cn/app/nomo-cam-%E4%BD%A0%E7%9A%84%E6%8B%8D%E7%AB%8B%E5%BE%97/id1362548649
脚本作者：Hausd0rff
更新时间：2022-01-06

*******************************

[rewrite_local]

# > NOMO CAM 解锁订阅
^https?:\/\/nomo\.dafork\.com\/api\/v3\/register\/phone_signin$ url script-response-body https://raw.githubusercontent.com/HiChen404/QuantumultX/master/NOMO_CAM_Pro_Crack.js

[mitm] 

hostname = nomo.dafork.com
*
*
*/


var obj = JSON.parse($response.body);
    
    obj.sign = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTQ1MzUzNiwiYWNjZXNzX3Rva2VuIjoiY3RsMEdIT2RkVnUtWmpIR3RIMTNVQVRWVDRTRzVKaXY3OWJUWlExMDY1eUJSYy1BeXlPQ2h6VWdFelhSRXo5TTFiWTZCcWI2ZmVpVTdyZmEycUNXMFNUM21pb05odzRnNFZDT2ZDcThwVVJ4M3VqdTBtZW1ZdC1DM1J5MkR0clhPRTIxRUtXV3VNVUFoM0I5bGNDWWJCeUo2Vm82WjlTbzVBazNVWHlkTE1hd3NBMjVGbkU3YXZJdnBsRzZYeFMyUWJUZmJ6ak8iLCJwcm9kdWN0cyI6W10sInByb2R1Y3RfaW9zX2lkcyI6W10sImlzX3N1YnNjcmlwdGlvbl91c2VyIjp0cnVlLCJyZWNlaXZlZF9maWxtX2lkcyI6W10sInRpbWVzdGFtcCI6MTY0MjE3MTMyN30.jHA-7GdSnFDLTwOX-CR7U6twWasjRhNKC3W_ikpCjkjbNOPJvYNPkVVG9Tc6jgJAaAQoV6iHWxIoxIdtnZQQwwuHcNpfx6GBHieYN3NWmNwKznjKonreueZJmis6RJhNt5Egq1k5xc0boqIUqY7oIT8NeRBCSDawih-QZ0GFQTHodY3qH1RqPNBTCnaz4VdFK964AK8I9JwIhSncLpfdlY15cGRhgVhkGe52BVHhpLriqp8ULw1qonjEjWziZLHLM8sPf1eR-E1S31TojCsYM14U4THaR1Cc20RBQxTBuC26tcLgXkuh3lN-MFBeSxhEzswQZ9PzcfBi6TNyNzkYjQ";

$done({
        body : JSON.stringify(obj)
});
