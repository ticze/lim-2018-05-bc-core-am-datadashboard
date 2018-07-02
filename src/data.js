let listUsuarioComputerUser = [];
window.computeUsersStats = (users, progress, courses) => {

  users.map(usuario => {
    const UsuarioNuevo = NuevoUsuarioStats(usuario, progress[usuario.id], courses);
    listUsuarioComputerUser.push(UsuarioNuevo);
  });
  //ListarUsuarios(listUsuarioComputerUser);
  return listUsuarioComputerUser;

};
const NuevoUsuarioStats = (usuario, progress, courses) => {
  let nameUser = usuario.name;
  let usersWithStats = {}
  usersWithStats.stats = {
    percent: computerUserPercent(progress, courses),
    exercises: computerExercises(progress, courses),
    reads: computerUsersRead(progress, courses),
    quizzes: computerUserQuizz(progress, courses),
  }
  usersWithStats.name = nameUser;
  return usersWithStats;
}
const computerUserPercent = (progress, courses) => {
  try {
    return progress[courses].percent;
  } catch (error) {
    return 0;
  }
}
const computerExercises = (progress, courses) => {
  let cont = 0;
  let contComplet = 0;
  try {
    courses.map((curso) => {
      const valorUnits = Object.keys(progress[curso].units);
      //console.log(valorUnits)
      valorUnits.map((nombreUnits) => {
        //console.log (nombreUnits);
        const valorParts = Object.keys(progress[curso].units[nombreUnits].parts);
        // console.log(valorParts)
        valorParts.map((nombreParts) => {
          const valorExcercises = progress[curso].units[nombreUnits].parts[nombreParts];
          //console.log (valorExcercises)
          if (valorExcercises.hasOwnProperty('exercises')) {
            const nombreExercises = valorExcercises.exercises;
            cont += Object.keys(nombreExercises).length;
            //const nombreExercises = valorExcercises.exercises
            const valorCompletado = Object.keys(valorExcercises.exercises);
            //console.log(valorCompletado) 
            valorCompletado.map((nombreExercises) => {
              //console.log (nombreExercises)
              const valorCompleted = progress[curso].units[nombreUnits].parts[nombreParts].exercises[nombreExercises].completed;
              //console.log (valorCompleted)
              if (valorCompleted == 1) {
                contComplet += valorCompleted;
              }
            });
          }
        });


      });
    });
  } catch (error) {
    let exercises = {
      total: 0,
      completed: 0,
      percent: 0,
    }

    return exercises;

  }

  let exercises = {
    total: cont,
    completed: contComplet,
    percent: (contComplet / cont) * 100,
  }
  return exercises;


};
const computerUsersRead = (progress, courses) => {
  let cont = 0;
  let contComplet = 0;
  try {
    courses.map((curso) => {
      const valorUnits = Object.keys(progress[curso].units);
      //console.log(valorUnits)
      valorUnits.map((nombreUnits) => {
        //console.log (nombreUnits);
        const valorParts = Object.keys(progress[curso].units[nombreUnits].parts);
        //console.log(valorParts)
        valorParts.map((nombreParts) => {
          //console.log (nombreParts)
          const valorType = progress[curso].units[nombreUnits].parts[nombreParts];
          //console.log(valorType);
          if (valorType.type == "read") {
            cont++;
          }
          if (valorType.type == "read" && valorType.completed == 1) {
            contComplet++;
          }
        });
      });
    });

  } catch (error) {
    let reads = {
      total: 0,
      completed: 0,
      percent: 0,
    }
    return reads;
  }

  let reads = {
    total: cont,
    completed: contComplet,
    percent: Math.round((contComplet / cont) * 100),
  }
  return reads;


}
const computerUserQuizz = (progress, courses) => {
  let cont = 0;
  let contComplet = 0;
  let contscoreAvg = 0
  try {
    courses.map((curso) => {
      const valorUnits = Object.keys(progress[curso].units);
      //console.log(valorUnits)
      valorUnits.map((nombreUnits) => {
        //console.log (nombreUnits);
        const valorParts = Object.keys(progress[curso].units[nombreUnits].parts);
        //console.log(valorParts)
        valorParts.map((nombreParts) => {
          //console.log (nombreParts)
          const valorType = progress[curso].units[nombreUnits].parts[nombreParts];
          //console.log(valorType);
          if (valorType.type == "quiz") {
            cont++;
          }
          if (valorType.type == "quiz" && valorType.completed == 1) {
            contComplet++;
          }

          if (valorType.type == "quiz" && valorType.completed == 1 && valorType.score) {
            contscoreAvg += valorType.score;
          }
        });
      });
    });

  } catch (error) {
    let quizzes = {
      total: 0,
      completed: 0,
      percent: 0,
      scoreSum: 0,
      scoreAvg: 0,
    }
    return quizzes;
  }

  let quizzes = {
    total: cont,
    completed: contComplet,
    percent: Math.round((contComplet / cont) * 100),
    scoreSum: contscoreAvg,
    scoreAvg: Math.round(contscoreAvg / contComplet),
  }
  return quizzes;


}

//Funcion para Ordenar
window.sortUsers = (users, orderBy, orderDirection) => {
  
 //console.log(users)
/* 
  const sortByName = (a, b) => {
    const obj1 = a.name.toUpperCase()
    const obj2 = b.name.toUpperCase()
    if (obj1 > obj2) {
      return 1;
    }
    if (obj1 < obj2) {
      return -1;
    }
    return 0;
  }

  const sortByName2 = (a, b) => {
    const obj1 = a.name.toUpperCase()
    const obj2 = b.name.toUpperCase()
    if (obj1 < obj2) {
      return 1;
    }
    if (obj1 > obj2) {
      return -1;
    }
    return 0;
  }

  const sortByPercent = (a, b) => {
    if (a.stats.percent > b.stats.percent) {
      return 1;
    }
    if (a.stats.percent < b.stats.percent) {
      return -1;
    }
    return 0;
  }

  const sortByPercent2 = (a, b) => {
    if (a.stats.percent < b.stats.percent) {
      return 1;
    }
    if (a.stats.percent > b.stats.percent) {
      return -1;
    }
    return 0;
  }

  const sortByExcercisePercent = (a, b) => {
    if (a.stats.exercises.percent > b.stats.exercises.percent) {
      return 1;
    }
    if (a.stats.exercises.percent < b.stats.exercises.percent) {
      return -1;
    }
    return 0;
  }

  const sortByExcercisePercent2 = (a, b) => {
    if (a.stats.exercises.percent < b.stats.exercises.percent) {
      return 1;
    }
    if (a.stats.exercises.percent > b.stats.exercises.percent) {
      return -1;
    }
    return 0;
  }

  const sortByQuizzesPercent = (a, b) => {
    if (a.stats.quizzes.percent > b.stats.quizzes.percent) {
      return 1;
    }
    if (a.stats.quizzes.percent < b.stats.quizzes.percent) {
      return -1;
    }
    return 0;
  }

  const sortByQuizzesPercent2 = (a, b) => {
    if (a.stats.quizzes.percent < b.stats.quizzes.percent) {
      return 1;
    }
    if (a.stats.quizzes.percent > b.stats.quizzes.percent) {
      return -1;
    }
    return 0;
  }

  const sortByQuizzesScoreAvg = (a, b) => {
    if (a.stats.quizzes.scoreAvg > b.stats.quizzes.scoreAvg) {
      return 1;
    }
    if (a.stats.quizzes.scoreAvg < b.stats.quizzes.scoreAvg) {
      return -1;
    }
    return 0;
  }

  const sortByQuizzesScoreAvg2 = (a, b) => {
    if (a.stats.quizzes.scoreAvg < b.stats.quizzes.scoreAvg) {
      return 1;
    }
    if (a.stats.quizzes.scoreAvg > b.stats.quizzes.scoreAvg) {
      return -1;
    }
    return 0;
  }

  const sortByReadsPercent = (a, b) => {
    if (a.stats.reads.percent > b.stats.reads.percent) {
      return 1;
    }
    if (a.stats.reads.percent < b.stats.reads.percent) {
      return -1;
    }
    return 0;
  }

  const sortByReadsPercent2 = (a, b) => {
    if (a.stats.reads.percent < b.stats.reads.percent) {
      return 1;
    }
    if (a.stats.reads.percent > b.stats.reads.percent) {
      return -1;
    }
    return 0;
  } */

  const arrName = users.map((user) => {
    return user.name
  })
  //console.log(arrName)
  debugger
  const orderName = arrName.sort((a, b) => {
    const obj1 = a.toUpperCase()
    const obj2 = b.toUpperCase()
    if (obj1 < obj2) {
      return 1;
    }
    if (obj1 > obj2) {
      return -1;
    }
    return 0;
  })
  console.log(orderName)

  const reverseName = arrName.sort((a, b) => {
    const obj1 = a.toUpperCase()
    const obj2 = b.toUpperCase()
    if (obj1 < obj2) {
      return 1;
    }
    if (obj1 > obj2) {
      return -1;
    }
    return 0;
  })
  

  /* let sorted;
  if (orderBy === 'name' && orderDirection === 'ASC') {
    sorted = orderName
  } else if (orderBy === 'name' && orderDirection === 'DESC') {
    sorted = reverseName
  } */ /* else if (orderBy === 'percent' && orderDirection === 'ASC') {
    sorted = arrUser.sort(sortByPercent)
  } else if (orderBy === 'percent' && orderDirection === 'DESC') {
    sorted = arrUser.sort(sortByPercent2)
  } else if (orderBy === 'excercises-percent' && orderDirection === 'ASC') {
    sorted = arrUser.sort(sortByExcercisePercent)
  }  else if (orderBy === 'excercises-percent' && orderDirection === 'DESC') {
    sorted = arrUser.sort(sortByExcercisePercent2)
  } else if (orderBy === 'quizzes-percent' && orderDirection === 'ASC') {
    sorted = arrUser.sort(sortByQuizzesPercent)
  }  else if (orderBy === 'quizzes-percent' && orderDirection === 'DESC') {
    sorted = arrUser.sort(sortByQuizzesPercent2)
  } else if (orderBy === 'quizzes-scoreAvg' && orderDirection === 'ASC') {
    sorted = arrUser.sort(sortByQuizzesScoreAvg)
  }  else if (orderBy === 'quizzes-scoreAvg' && orderDirection === 'DESC') {
    sorted = arrUser.sort(sortByQuizzesScoreAvg2)
  } else if (orderBy === 'reads-percent'&& orderDirection === 'ASC') {
    sorted = users.sort(sortByReadsPercent)
  } else if (orderBy === 'reads-percent'&& orderDirection === 'DESC') {
    sorted = arrUser.sort(sortByReadsPercent2)
  }   */

  /* return sorted */

};

window.filterUsers = (users, search) => {
  //console.log('hola soy el array' + users);
  //console.log('hola soy el texto del user' + search);

  let buscarUser = users.filter(listaUser => listaUser.name.includes(search))
  //console.log (buscarUser);
  return buscarUser;

  /* const userFilter = users.filter(user => {
      console.log (user);
      return user.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
  //console.log(userFilter);
  return userFilter; */

};

window.processCohortData = (options) => {
};



