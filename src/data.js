window.computeUsersStats = (users, progress, courses) => {
  //FUNCION DE EJERCICIOS
  const exercisesTotal = (progress, courses) => {
    let cont = 0;
    courses.map((curso) => {
      const valorUnit = Object.keys(progress[curso].units);
      valorUnit.map((nombreUnidad) => {
        //console.log (nombreUnidad)
        const valorParts = Object.keys(progress[curso].units[nombreUnidad].parts);
        //console.log(nombreUnidad, valorParts)
        valorParts.map(nombrePart => {
          //console.log(nombrePart)
          const part = progress[curso].units[nombreUnidad].parts[nombrePart]
          //console.log(nombreUnidad, valorParts,nombrePart,part)
          if (part.hasOwnProperty('exercises')) {
            const exercises = part.exercises;
            cont += Object.keys(exercises).length
            //console.log(exercises);
          }
        });
      })
      //console.log(valorUnit)
      progress[curso].units
      //console.log(curso)
    })
    return cont
  };

  const completedTotal = (progress, courses) => {
    let contCompletado = 0;
    courses.map((curso) => {
      const valorUnit = Object.keys(progress[curso].units);
      valorUnit.map((nombreUnidad) => {
        //console.log (nombreUnidad)
        const valorParts = Object.keys(progress[curso].units[nombreUnidad].parts);
        //console.log(nombreUnidad, valorParts)
        valorParts.map(nombrePart => {
          //console.log(valorParts, nombrePart)
          const part = progress[curso].units[nombreUnidad].parts[nombrePart]
         // console.log(part)
         if (part.hasOwnProperty('exercises')) {
          const exercises = part.exercises;
          const exercisesNames = Object.keys(exercises)
          exercisesNames.map((nameExercise) => {
            //console.log(nameExercise)
            const valorCompleted = exercises[nameExercise]
            if(typeof(valorCompleted) === 'number'){
              contCompletado += valorCompleted
            } else {
              contCompletado += valorCompleted.completed
            }
          })
        }
        });
      })
      //console.log(valorUnit)
      progress[curso].units
      //console.log(curso)
    })
    return contCompletado
  }; 

  let lista = users.map(userWhitStats => {

    try {
      userWhitStats.stats = {
        percent: progress[userWhitStats.id].intro.percent,
        exercises: {
          total: exercisesTotal(progress[userWhitStats.id], courses),
          completed: completedTotal(progress[userWhitStats.id], courses),
          percent: completedTotal(progress[userWhitStats.id], courses) * 100 /  exercisesTotal(progress[userWhitStats.id], courses)  
        },
        reads: {
          total : readsTotal()
        }
      }
      // console.log(userWhitStats)
      return userWhitStats;
    } catch (error) {
      return {};
    }
  })
  console.log(lista);
  return lista;
  //const courses = ["intro"]
  //["intro"]
};

//Funcion para Ordenar
window.sortUsers = (users, orderBy, orderDirection) => {
};

window.filterUsers = (users, search) => {
}

window.processCohortData = (options) => {
};


