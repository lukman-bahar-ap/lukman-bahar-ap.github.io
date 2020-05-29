import GlobalFunct from "../utility/global-funct.js";

class TeamsTemplate {

    static showTeams (data) {

        let valueTeamHTML = "";
        data.teams.forEach(team => {

            valueTeamHTML += `
              <div class="card colom-box hoverable">
                  <a href="./team-info.html?id=${team.id}" class="waves-effect waves-block waves-light">
                    <img src="${GlobalFunct.imageHttpToHttps(team.crestUrl)}" alt="logo ${team.name}" onerror="this.onerror=null;this.src='assets/images/icon/icon-m.png'"/>
                  
                    <div class="card-info">
                      <h4>${team.name}</h4>
                      <p>${team.venue}</p>
                    </div>
                  </a>
              </div>`;
        })
        return valueTeamHTML;
    }

    static showTeamsDb (data) {

        let valueTeamHTML = "";
        if(data.length <= 0){

          valueTeamHTML += `
            <div class="center">
                  <img src="assets/images/icon/empty.png"/>
                  <p><b>Saved Teams will show up here</b><p>
                  <p>So you can easily view them after saved your favorite teams<p>
            </div>`;

        }else{

            data.forEach(team => {

                valueTeamHTML += `
                  <div class="card colom-box hoverable">
                      <a href="./team-info.html?id=${team.id}&saved=true" class="waves-effect waves-block waves-light">
                        <img src="${GlobalFunct.imageHttpToHttps(team.crestUrl)}" alt="logo ${team.name}" onerror="this.onerror=null;this.src='assets/images/icon/icon-m.png'"/>
                      
                        <div class="card-info">
                          <h4>${team.name}</h4>
                          <p>${team.venue}</p>
                        </div>
                      </a>
                  </div>`;
            })

        }
        return valueTeamHTML;
    }

    static showDetailTeam (data) {

        let detailTeamHTML = `
            <style>
            .colom-header {
              flex: 0 0 25%;
              max-width: 25%;
              margin:5px 10px 10px 10px;
              position: relative;
              text-align:center;
            }
            .colom-header img{
              max-height: 250px;
            }
            @media screen and (max-width: 1200px) {
              .colom-header  {
                flex: 0 0 45%;
                max-width: 45%;
              }
            }
            @media screen and (max-width: 720px) {
              .colom-header  {
                flex: 0 0 95%;
                max-width: 95%;
              }
              .colom-header img{
                max-height: 200px;
              }
            }
            @media screen and (max-width: 400px) {
              .colom-header  {
                flex: 0 0 91%;
                max-width: 91%;
              }
            }
            </style>
            <div class="row">
              <div id="index-banner" class="page-banner">
                <div class="section no-pad-bot">
                  <div class="variant-box">
                      <div class="colom-header">
                        <img src="${GlobalFunct.imageHttpToHttps(data.crestUrl)}" alt="logo ${data.shortName}" onerror="this.onerror=null;this.src='assets/images/icon/icon-m.png'"/>
                      </div>
                      <div class="colom-header">
                        <h1 class="header center">${data.shortName}</h1>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container">
            <h4><blockquote>Information</blockquote></h4>
              <div class="table-container">
                <table class="card" width="100%">
                    <tr>
                      <td width="15%"><b>Name</b></td>
                      <td width="35%">${data.name}</td>
                      <td width="15%"><b>Founded</b></td>
                      <td width="35%">${data.founded}</td>
                    </tr>
                    <tr>
                      <td width="10%"><b>Address</b></td>
                      <td>${data.address}</td>
                      <td width="10%"><b>Email</b></td>
                      <td>${data.email}</td>
                    </tr>
                    <tr>
                      <td width="10%"><b>Venue</b></td>
                      <td>${data.venue}</td>
                      <td width="10%"><b>Club Colors</b></td>
                      <td>${data.clubColors}</td>
                    </tr>
                </table>
            `;

            detailTeamHTML += `
              <h4><blockquote>Squad Team</blockquote></h4>
              <div class="table-container">
                <table class="highlight striped card" width="100%">
                    <tr>
                      <th>Name</th>
                      <th>Number</th>
                      <th>Position</th>
                      <th>Role</th>
                      <th class="hide-on-med-and-down">Birth</th>
                      <th class="hide-on-med-and-down">country Of Birth</th>
                      <th class="hide-on-med-and-down">Nationality</th>  
                    </tr>
            `;

            data.squad.forEach(squad => {
             
                let shirtNumber = "-";
                if(squad.shirtNumber !== null){
                    shirtNumber  = squad.shirtNumber;
                }
                
                let position = "-";
                if(squad.position !== null){
                    position  = squad.position;
                }

                let birthDay = squad.dateOfBirth.substr(0,10);

                detailTeamHTML += `
                  <tr>
                    <td>${squad.name}</td>
                    <td>${shirtNumber}</td>
                    <td>${position}</td>
                    <td>${squad.role}</td>
                    <td class="hide-on-med-and-down">${GlobalFunct.dateToPage(birthDay)}</td>
                    <td class="hide-on-med-and-down">${squad.countryOfBirth}</td>
                    <td class="hide-on-med-and-down">${squad.nationality}</td>
                  </tr>`;
            })

            detailTeamHTML += `</table></div>`;

        return detailTeamHTML;
    }
}
export default TeamsTemplate;