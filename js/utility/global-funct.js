import {HEADERS} from "./constants.js";

class GlobalFunct {

    static dateToPage (value) {
        const date = value.split("-");

        const arrMonth = ["Januari", "Februari", "Maret", "April", "Mei", 
              "Juni", "Juli", "Agustus", "September", "Oktober", 
                          "November", "Desember"];

        let mount =  parseInt(date[1]);               
        mount--;
                          
        const dateToPage = `${date[2]} ${arrMonth[mount]} ${date[0]}`;
    return dateToPage;
    }

    static imageHttpToHttps (url){
      if(url === null || url === '' || url === undefined){
          return 'images/icon/icon-m.png';
      }else if(!(url.indexOf('https:') > -1)){
          return url.replace(/^http:\/\//i, 'https://');
      }else{
          return url;
      }
    }

    static fetchApi (url) {
      return fetch(url, 
        { headers : HEADERS }
      );
    }

    // Blok kode yang akan di panggil jika fetch berhasil
    static responseStatus = response => {
      if (response.status !== 200) {
        console.log("Error : " + response.status);
        // Method reject() akan membuat blok catch terpanggil
        return Promise.reject(new Error(response.status));
      } else {
        // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
        return Promise.resolve(response);
      }
    }

    static responseToJson (response) {return response.json() }
    
    static responseToText (response) { return response.text() }

    static logError (error) { console.log("Error : " + error)  }

    static urlBase64ToUint8Array = base64String => {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
}
export default GlobalFunct;