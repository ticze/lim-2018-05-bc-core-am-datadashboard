window.computeUsersStats = (users, progress, courses) => { 

  const keyAddProgress = Object.keys(progress);
  
  for (const usuario of users) {
    keyAddProgress.map((codigoUser) =>{
      if (usuario.id === codigoUser) {       
        if (progress[codigoUser].intro !== undefined ){
          
          let usersWithStats = {            
            //Objeto stats
            stats: {
              percent: progress[codigoUser].intro.percent,
            }
          };
          console.log(usersWithStats);    
        }
      } 
    });
  }
};

//Funcion para Ordenar
window.sortUsers = (users, orderBy, orderDirection) => {
};

window.filterUsers = (users, search) => {
};

window.processCohortData = (options) => {
};