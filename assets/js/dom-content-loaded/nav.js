import StandingData from "../api/standings-data.js"
import MatchSchedule from "../api/matches-data.js"
import TeamData from "../api/teams-data.js"
import TeamsDB from "../db/teams-db.js"
import NotFoundTemplate from "../component/not-found-html.js";
import NoAccessTemplate from "../component/no-access-html.js";
import GlobalFunct from "../utility/global-funct.js";

  // Activate sidebar nav
  const nav = () => {

    const elemNav = "assets/js/component/nav.html";
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
   
  const loadNav = () => {

    return fetch(elemNav)
      .then(GlobalFunct.responseStatus)
      .then(GlobalFunct.responseToText)
      .then(data => {

          // Muat daftar tautan menu
          document.querySelectorAll(".topnav, .sidenav").forEach(elm => {
            elm.innerHTML += data;
          });
     
          // Daftarkan event listener untuk setiap tautan menu
          document.querySelectorAll(".sidenav a, .topnav a").forEach(elm => {
            
            elm.addEventListener("click", event => {
              // Tutup sidenav
              const sidenav = document.querySelector(".sidenav");
              M.Sidenav.getInstance(sidenav).close();

              if (document.querySelector('.topnav a.active') !== null) {
                document.querySelector('.topnav a.active').classList.remove('active');
              }
              event.target.className = "active";
              
              // Muat konten halaman yang dipanggil
              page = event.target.getAttribute("href").substr(1);
              loadPage(page);

            });
          });
      }).catch(GlobalFunct.logError);
    }
    loadNav();
    
    // Load page content
    let page = window.location.hash.substr(1);
    if (page === "") page = "home";

    const loadPage = (page) => {

      const page_request = `pages/${page}.html`;

      let content = document.querySelector("#body-content");
      return fetch(page_request)
        .then(GlobalFunct.responseStatus)
        .then(GlobalFunct.responseToText)
        .then(data => {
 
          content.innerHTML = data;
          // tambahkan blok if berikut
          if (page === "home" || page === "standings") {
                StandingData.getStandings();
          } else if (page === "saved") {
                TeamsDB.getSavedTeam();
          } else if (page === "teams") {
                TeamData.getTeams();
          } else if (page === "matches") {
                MatchSchedule.getMatches();
          }

        }).catch(error => {

            if (error === 404) {
               content.innerHTML = NotFoundTemplate.showPageNotFound();
            } else {
              content.innerHTML = NoAccessTemplate.showNoAccessPage();
            }
            console.log('Error : ' + error);

        });
  }
  loadPage(page);
}

export default nav;