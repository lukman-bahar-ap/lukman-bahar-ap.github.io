import GlobalFunct from "../utility/global-funct.js";

const PremissionFunct = () => {

  // Periksa service worker
  if (!('serviceWorker' in navigator)) {
      console.log("Service worker tidak didukung browser ini.");
    } else {
      registerServiceWorker();
    }
    // Register service worker
    function registerServiceWorker() {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
          console.log('Registrasi service worker berhasil.');
          registration;
        }).catch(function (err) {
          console.error('Registrasi service worker gagal.', err);
        });
      
      navigator.serviceWorker.ready.then(function() {
          // Periksa fitur Notification API
          if ("Notification" in window) {
            requestNotifPermission();
          } else {
            console.error("Browser tidak mendukung notifikasi.");
          }
      });
    }
    
    
    // Meminta ijin menggunakan Notification API
    function requestNotifPermission() {

        Notification.requestPermission().then(function (result) {
          if (result === "denied") {
            console.log("Fitur notifikasi tidak diijinkan.");
            return;
          } else if (result === "default") {
              console.error("Pengguna menutup kotak dialog permintaan ijin.");
              return;
          }
          
            if (('PushManager' in window)) {
              navigator.serviceWorker.getRegistration().then(function(registration) {
              registration.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: GlobalFunct.urlBase64ToUint8Array("BBIK6W0gyuVKVqZW2VE7jMxByq2_M3e9JpgStSmSr8FZU918eZOzXVypdt1_2U0V3x79bFOekxVJwC4Hf7OzbzE")
              }).then(function(subscribe) {
                  console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
                  console.log('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
                    null, new Uint8Array(subscribe.getKey('p256dh')))));
                  console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
                    null, new Uint8Array(subscribe.getKey('auth')))));
                }).catch(function(e) {
                    console.error('Tidak dapat melakukan subscribe ', e.message);
                });
              });
            }

        });
      
    }
}
export default PremissionFunct;