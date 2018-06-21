window.computeUsersStats = (users, progress, courses) => {
  const keyAddProgress = Object.keys(progress);
  for (const cursos of courses) {
    for (const usuario of users) {
      keyAddProgress.map((codigoUser) => {
        if (usuario.id === codigoUser) {
          if (progress[codigoUser].intro !== undefined) {

            let name = usuario.name;
                 
            let usersWithStats = {
              stats: {
                percent: progress[codigoUser].intro.percent,

                exercises : {
                  total: 5,
                  completed: 5,
                  percent: 7
                },
                reads: {
                  total : 5,
                  completed : 4,
                  percent : 2
                },
                quiz :{
                  total : 5,
                  completed : 5,
                  percent : 2,
                  scoreSum : 2,
                  scoreAvg : 5
                }
              }
            };
            let cursosCohort = cursos.coursesInd;
          }
        }
      });
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