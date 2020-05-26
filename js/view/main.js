import nav from "../dom-content-loaded/nav.js";
import teamFavButton from "../dom-content-loaded/teams-save-favorite.js"
import InitJquery from "../dom-content-loaded/init-jquery.js";
import PremissionFunct from "../dom-content-loaded/premission.js";

const main = () => {

    PremissionFunct();
    InitJquery();

    if(window.location.href.indexOf("team-info.html") > -1) teamFavButton();
    else nav();   
    

};
export default main;