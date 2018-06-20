//CREAANDO LAS  FUNCIONES

window.computeUsersStats = (users, progress, courses) => {

  

  const keyAddProgress = Object.keys(progress);

  for (const usuario of users) {
    //Vamos a Mapear el AR
    for (const progreso of keyAddProgress) {
      if (usuario.id === progreso) {
        debugger

        let userProg = users.map(usersWithSatas => {

          try {
            usersWithSatas.stats = {
              percent : progress[progreso].intro.percent,
            }
           return usersWithSatas;
          } catch (error) {
            return {}
          }         
        })        
        console.log (userProg);
        return userProg;  

      }
      
    }
  }
};

























//Funcion para Ordenar
window.sortUsers = (users, orderBy, orderDirection) => {

};


window.filterUsers = (users, search) => {

}


//creando funciones 
//window.computeUserStatus = (users, progress, course) => {
  //const arregloUser = [];
//};

