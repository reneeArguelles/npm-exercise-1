const qrcode = require('qrcode-terminal');

console.log(qrcode.generate("WIFI:T:WPA;S:SOCIALDESK - 9th Floor;P:SocialD3$K09F;;"));

console.log(qrcode.generate(`BEGIN:VCARD
N:Arguelles;Mary Renee 
EMAIL:mary.arguelles@siteminder.com
TEL;WORK;VOICE:09171487132
END:VCARD`));
