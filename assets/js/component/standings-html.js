class StandingsTemplate {
   
    static showStandings (data) {

        let valueStandingTabHTML = "";
        let stands = [];
        let i = 0;

        data.standings.forEach(standing => {

            valueStandingTabHTML += `
            <div class="table-container">
            <table class="highlight striped card" width="100%">
                <tr>
                    <th>Position</th>
                    <th>Team</th>
                    <th class="blue-text blue-darken-4">Win</th>
                    <th class="teal-text teal-darken-4">Draw</th>
                    <th class="red-text red-darken-4">Lost</th> 
                    <th class="purple-text purple-darken-4">Point</th>
                    <th class="hide-on-med-and-down">GF</th>
                    <th class="hide-on-med-and-down">GA</th>
                    <th class="hide-on-med-and-down">GD</th>
                </tr>`;

            standing.table.forEach(table => {

                let team = `${table.team.name}`;
                if(table.position === 1) team = `<b>${table.team.name}</b>`;

                valueStandingTabHTML += `
                    <tr>
                        <td class="center">${table.position}</td>
                        <td><a href="./team-info.html?id=${table.team.id}" class="black-text">${team}</a></td>
                        <td class="blue-text blue-darken-4">${table.won}</td>
                        <td class="teal-text teal-darken-4">${table.draw}</td>
                        <td class="red-text red-darken-4">${table.lost}</td>
                        <td class="purple-text purple-darken-4">${table.points}</td>
                        <td class="hide-on-med-and-down">${table.goalsFor}</td>
                        <td class="hide-on-med-and-down">${table.goalsAgainst}</td>
                        <td class="hide-on-med-and-down">${table.goalDifference}</td>
                    </tr>`;
            })

            valueStandingTabHTML += ` </table></div>`;
            stands[i] = valueStandingTabHTML;
            valueStandingTabHTML ="";
            i++;
        })

        return [stands[0], stands[1], stands[2]];

    }
}
export default StandingsTemplate;