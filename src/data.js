window.computeUsersStats = (users, progress, courses) => {
  debugger
  const keyAddProgress = Object.keys(progress);

  for (const usuario of users) {}}

  
    for (const codigoUser of keyAddProgress) {
      if (usuario.id === codigoUser) {
        if (progress[codigoUser].intro !== undefined) {
          
          let lista = keyAddProgress.map( user => {

            let usersWithStats = {
              stats: {
                percent: progress[codigoUser].intro.percent,
              }
            };
            //console.log(usersWithStats)
          })
        }
      }

    }
  }
};

//Funcion para Ordenar
window.sortUsers = (users, orderBy, orderDirection) => {
};

window.filterUsers = (users, search) => {
};

window.processCohortData = (options) => {
};