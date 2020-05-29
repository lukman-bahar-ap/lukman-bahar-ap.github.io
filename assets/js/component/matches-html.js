import GlobalFunct from "../utility/global-funct.js";
class MatchTemplate {

    static showMatches (data) {
        let valueMatchHTML = `<div class="table-container">`;
        
        let datematch ="";
        let i = 0;

        data.matches.forEach(match => {
        
            let utcDate = match.utcDate.substr(0,10);
            let utcTime = match.utcDate.substr(11,5);

            if(datematch !== utcDate){
                datematch = utcDate;

                if(i>0) valueMatchHTML += `</table><br>`;

                valueMatchHTML += `<h5 class="center">${GlobalFunct.dateToPage(datematch)}</h5>
                <table class="striped card" width="100%">
                    <tr>
                        <th width="10%">Time</th>
                        <th width="40%" class="right-align teal-text teal-darken-4">Home</th>
                        <th class="center-align" width="5%"> </th>
                        <th class="blue-text blue-darken-4" width="40%">Away</th>
                        <th width="5%"></th>
                    </tr>
                    <tr>`;
            }

            valueMatchHTML += `
                    <td width="10%"> ${utcTime} WIB </td>
                    <td width="40%" class="right-align teal-text teal-darken-4">${match.homeTeam.name}</td>
                    <td class="center-align" width="5%">VS</td>
                    <td class="blue-text blue-darken-4" width="40%">${match.awayTeam.name}</td>
                    <td width="5%"></td>
                </tr>`;

            i++;
        })
        
        valueMatchHTML += ` </div>`;
        
        return valueMatchHTML;
    }
}
export default MatchTemplate;