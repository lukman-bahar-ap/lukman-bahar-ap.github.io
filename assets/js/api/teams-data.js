import TeamsTemplate from "../component/teams-html.js";
import GlobalFunct from "../utility/global-funct.js";
import {TEAMS_URL} from "../utility/constants.js";

class TeamData extends HTMLElement {
    //all teams
    static getTeams () {
      
        if ("caches" in window) {
          caches.match(TEAMS_URL).then(response => {

            if (response) {
                    response.json().then(data => 
                    document.getElementById("teams_content").innerHTML = TeamsTemplate.showTeams(data)
                  );
            }
          })
          .catch(GlobalFunct.logError);  
        }
      
        GlobalFunct.fetchApi(TEAMS_URL)
        .then(GlobalFunct.responseToJson)
        .then(data => 
            document.getElementById("teams_content").innerHTML = TeamsTemplate.showTeams(data)
        )
        .catch(GlobalFunct.logError);

    }

    //select team by id
    static getTeamById () {

      return new Promise((resolve, reject) => {

        let urlParams = new URLSearchParams(window.location.search);
        const idParam = urlParams.get("id");
        const TEAM_ID_URL = `${TEAMS_URL}${idParam}`;

        if ("caches" in window) {
          caches.match(TEAM_ID_URL).then(response => {
            if (response) {
                response.json().then(data => {
                document.getElementById("body-content").innerHTML = TeamsTemplate.showDetailTeam(data);
                // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
                return resolve(data);
              });
            }
          });
        }
        GlobalFunct.fetchApi(TEAM_ID_URL)
          .then(GlobalFunct.responseToJson)
          .then(data => {
            console.log(data);
            document.getElementById("body-content").innerHTML = TeamsTemplate.showDetailTeam(data);
            // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
            return resolve(data);
          });

      });
    }
}
export default TeamData;