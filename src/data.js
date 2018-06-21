//CREAANDO LAS  FUNCIONES

window.computeUsersStats = (users, progress, courses) => {

  let lista = users.map( userWhitStats => {
    exercisesTotal = () => {
     let cont = 0;
     
    }
    
    try {
      userWhitStats.stats = {
        percent:progress[userWhitStats.id].intro.percent,
        exercises : {
          total : exercisesTotal(),

        }
      }
      return userWhitStats;
    } catch (error) {
     return {}; 
    }
    })
  console.log(lista);
  return lista

};

//Funcion para Ordenar
window.sortUsers = (users, orderBy, orderDirection) => {

};


window.filterUsers = (users, search) => {

}


