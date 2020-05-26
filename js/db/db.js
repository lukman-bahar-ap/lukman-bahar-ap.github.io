const dbPromised = idb.open("bola-Premier-league", 1, function(upgradeDb) {
  const teamsObjectStore = upgradeDb.createObjectStore("teams", {
    keyPath: "id"
  });
  teamsObjectStore.createIndex("name", "name", { unique: false });
});

export const saveForLater = data => {
  dbPromised
    .then(db => {
      const tx = db.transaction("teams", "readwrite");
      const store = tx.objectStore("teams");
      console.log(data);
      store.put(data);
      return tx.complete;
    })
    .then(() => {
      M.toast({html: 'Your Team Success Saved', classes: 'rounded'});
        const btnDelete = document.getElementById("delete");
        const btnSave = document.getElementById("save");
        btnSave.classList.add("hide");
        btnDelete.classList.remove("hide");
      console.log("Your Team Success Saved.");
    });
}

export const getAll = () => {
  return new Promise((resolve, reject) => {
    dbPromised
      .then(db => {
        const tx = db.transaction("teams", "readonly");
        const store = tx.objectStore("teams");
        return store.getAll();
      })
      .then(teams => {
        console.log(teams);
        const count = teams.length;
        console.log(count);
        if(teams !== undefined || Number(count) > 0) {
          resolve(teams)
        } else {
          reject(new Error("Saved Team not Found"))
      }
      }).catch(() => reject(new Error("Saved Team not Found"))
      );
  });
}
export const getById = id => {
  return new Promise((resolve, reject) => {
    dbPromised
      .then(db => {
        const tx = db.transaction("teams", "readonly");
        const store = tx.objectStore("teams");
        return store.get(id);
      })
      .then(team => {
        if(team !== undefined) {
          resolve(team)
        }else{
          reject(new Error("not Found"))
        }
      });
  });
}

export const deleteById = id => {
    dbPromised
      .then(db => {
        const tx = db.transaction("teams", "readwrite");
        const store = tx.objectStore("teams");
        return store.delete(id);
      })
      .then(()=> {
        
        console.log('Your Team is deleted');
        M.toast({html: 'This team deleted from saved page', classes: 'rounded'});
          const btnDelete = document.getElementById("delete");
          const btnSave = document.getElementById("save");
          btnSave.classList.remove("hide");
          btnDelete.classList.add("hide");

      }).catch(()=>{

        console.log('Error to delete this item');
        M.toast({html: 'Error to delete this item', classes: 'rounded'});

      });
}