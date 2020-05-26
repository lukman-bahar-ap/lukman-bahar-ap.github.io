import  TeamData from "../api/teams-data.js";
import  TeamsDB from "../db/teams-db.js";
import  {getById, saveForLater, deleteById} from "../db/db.js";

const teamFavButton = () => {
      
    const urlParams = new URLSearchParams(window.location.search);
    const isFromSaved = urlParams.get("saved");
    // mendeklarasikan idparam agar saat hapus / simpan dihalaman 
    // yang tidak perlu reload dan baca kondisi isFromSaved  
    let idParam = urlParams.get("id");

    let btnDelete = document.getElementById("delete");
    let btnSave = document.getElementById("save");
    let teamParams ="";

    if (isFromSaved) {

        btnSave.classList.add("hide");
        btnDelete.classList.remove("hide");
        // ambil data json lalu tampilkan
        teamParams = TeamsDB.getSavedTeamById();
        
        console.log(teamParams);

    } else {

        getById(Number(idParam)).then((data)=> {

          btnSave.classList.add("hide");
          btnDelete.classList.remove("hide");
          
          teamParams = TeamsDB.getSavedTeamById();           
          console.log("Menampilkan data dari DB ");

        }).catch(() => {

          teamParams = TeamData.getTeamById();
    
          btnDelete.classList.add("hide");
          btnSave.classList.remove("hide");
          console.log("Menampilkan data dari API");

        });

    }

    btnDelete.onclick = () => {
        console.log(`Tombol delete di klik. parameter ${idParam}`);
        deleteById(Number(idParam));
    };
    
    btnSave.onclick = () => {
      console.log("Tombol save di klik.");
      teamParams.then(dataTeam => {
        saveForLater(dataTeam);
      });
    };
    
}
export default teamFavButton;