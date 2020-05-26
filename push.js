var webPush = require('web-push');
const vapidKeys = {
   "publicKey": "BBIK6W0gyuVKVqZW2VE7jMxByq2_M3e9JpgStSmSr8FZU918eZOzXVypdt1_2U0V3x79bFOekxVJwC4Hf7OzbzE",
   "privateKey": "C0loEU5PbaVNz15B43tdHULVYiVmPGjKHqPTcfCd24w"
};
 
webPush.setVapidDetails(
   'mailto:lukman.trescode@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/drAI9cBs2kw:APA91bHkNQzV2vivMapctlTcluDJaPPLPOukbiY6QLNzv86p8tT2OHAXM9Upp4i-uBxh4BU0OE-jKZ-czBbdr90l0Ab-CcYbtJdE2TOV1VAMUbt680Ju7flLdUOBJ8FdWL42labTX5ih",
    "keys": {
        "p256dh": "BKZL8IqX3tfS2IPiRRa3NWmAWVFJjOBvullR1VwXmREvyx5AlTKfQTFMyoBNaWfAKXBkUNXFicp+wsbjAOFqi2E=",
        "auth": "Ngl/45/iI2bQZ5/IXJ9L2g=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '91036698074',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);