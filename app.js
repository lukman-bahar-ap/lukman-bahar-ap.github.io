import main from "./assets/js/view/main.js";
import NoAccessTemplate from "./assets/js/component/no-access-html.js";
import GlobalFunct from "./assets/js/utility/global-funct.js";

if(!(window.location.href.indexOf("team-info.html") > -1)){

    const registerBtn = document.getElementById('registrationBtn');
    registerBtn.onclick = () => {
   
        let content = document.querySelector("#body-content");
        return fetch("pages/registration.html")
            .then(GlobalFunct.responseStatus)
            .then(GlobalFunct.responseToText)
            .then(data =>  content.innerHTML = data)
            .catch(() => content.innerHTML = NoAccessTemplate.showNoAccessPage());
        
    }
}

document.addEventListener("DOMContentLoaded", main);