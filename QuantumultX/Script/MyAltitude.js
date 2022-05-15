/*

^https:?/\/.*?dayananetworks.myaltitude*.* url script-response-body https://raw.githubusercontent.com/Aellus/Ailen/master/QuantumultX/Script/MyAltitude.js

*/
var obj = JSON.parse($response.body); 
obj['collect_signals'] = true;
obj['keep_for_rendering'] = true;
$done({body: JSON.stringify(obj)});


    
