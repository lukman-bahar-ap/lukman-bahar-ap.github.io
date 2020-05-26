import TeamsTemplate from "../component/teams-html.js";
import NoSavedTemplate from "../component/no-saved-html.js";
import { getAll, getById } from "./db.js";

class TeamsDB {

    static getSavedTeam () {

        getAll().then(saved => 
          document.getElementById("team_saved_content").innerHTML = TeamsTemplate.showTeamsDb(saved)
        ).catch(() => document.getElementById("team_saved_content").innerHTML = NoSavedTemplate.showNoSavedPage());

    }

    static getSavedTeamById () {
      return new Promise((resolve, reject) => {
        
        let urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");

        getById(Number(id)).then(data => {
            document.getElementById("body-content").innerHTML = TeamsTemplate.showDetailTeam(data);
            // Kirim objek data hasil parsing json agar bisa dihabus by id
            return resolve(data);
        }).catch(() => document.getElementById("body-content").innerHTML = NoSavedTemplate.showNoSavedPage());

      });
    }
}
export default TeamsDB;