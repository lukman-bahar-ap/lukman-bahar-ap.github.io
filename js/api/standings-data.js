import StandingsTemplate from "../component/standings-html.js";
import GlobalFunct from "../utility/global-funct.js";
import {STANDINGS_URL} from "../utility/constants.js";

class StandingData extends HTMLElement {

    static getStandings () {

      if ("caches" in window) {
        caches.match(STANDINGS_URL).then(response => {
          if (response) {
            response.json().then(data => {

              console.log("menggunakan cache");
              const standings = StandingsTemplate.showStandings(data);

              document.getElementById("standing_total").innerHTML = standings[0];
              document.getElementById("standing_home").innerHTML = standings[1];
              document.getElementById("standing_away").innerHTML = standings[2];

            })
            .catch(GlobalFunct.logError);
          }

        });
      }

      GlobalFunct.fetchApi(STANDINGS_URL)
        .then(GlobalFunct.responseToJson)
        .then(data => {

          const standings = StandingsTemplate.showStandings(data);

          document.getElementById("standing_total").innerHTML = standings[0];
          document.getElementById("standing_home").innerHTML = standings[1];
          document.getElementById("standing_away").innerHTML = standings[2];

        })
        .catch(GlobalFunct.logError);
    }
}
export default StandingData;