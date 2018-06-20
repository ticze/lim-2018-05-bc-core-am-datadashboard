//CREAANDO LAS  FUNCIONES

window.computeUsersStats = (users, progress, courses) => {

  const keyAddProgress = Object.keys(progress);

  for (const usuario of users) {
    //Vamos a Mapear el ARRAY PROGRESS
    keyAddProgress.map((codigoUser) => {
      if (usuario.id === codigoUser) {
        if (progress[codigoUser].intro !== undefined) {

          console.log(usuario.name);
          //Un Arreglo 
          const usersWithStats = {//Objeto stats              
            stats: {
              percent: progress[codigoUser].intro.percent,
              exercises: {
                total: progress[codigoUser].intro.totalParts,
                completed:23,
                percent:23,
              },
              reads: {
                total: 23,
                completed:23,
                percent:23,
              },
              quizzes: {
                total: 23,
                completed:23,
                percent:23,
              }
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

}


//creando funciones 
//window.computeUserStatus = (users, progress, course) => {
  //const arregloUser = [];
//};

