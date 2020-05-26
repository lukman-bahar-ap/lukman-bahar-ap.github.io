import GlobalFunct from "../utility/global-funct.js";
import {MATCHES_URL} from "../utility/constants.js";
import MatchTemplate from "../component/matches-html.js";

class MatchSchedule {

    static getMatches () {
      const MATCHES_POSTPONED_URL = `${MATCHES_URL}?status=POSTPONED`;

      if ("caches" in window) {
        caches.match(MATCHES_POSTPONED_URL).then(response => {
          if (response) {
            response.json().then(data => 
              document.getElementById("mathces_content").innerHTML =  MatchTemplate.showMatches(data)
            );
          }
        });
      }
      
       GlobalFunct.fetchApi(MATCHES_POSTPONED_URL)
        .then(GlobalFunct.responseToJson)
        .then(data =>
          document.getElementById("mathces_content").innerHTML =  MatchTemplate.showMatches(data)
        )
        .catch(GlobalFunct.logError);
    }
}
export default MatchSchedule;