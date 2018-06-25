//CREANDO LAS  FUNCIONES
window.computeUsersStats = (users, progress, courses) => {
  
  //FUNCION DE EJERCICIOS
  const exercisesTotal = (progress, courses) => {
   // debugger
    let cont = 0;
    courses.map((curso) => {
      const valorUnit = Object.keys(progress[curso].units);
      valorUnit.map((nombreUnidad) => {
        //console.log (nombreUnidad)
        const valorParts = Object.keys(progress[curso].units[nombreUnidad].parts);
        //console.log(nombreUnidad, valorParts)
        valorParts.map(nombrePart => {
          const part = progress[curso].units[nombreUnidad].parts[nombrePart]
          if (part.hasOwnProperty('exercises')) {
            const exercises = part.exercises;
            cont += Object.keys(exercises).length
            // console.log(exercises)
            //console.log(nombreUnidad, valorParts, nombrePart,exercises)
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
    let cont = 0;
    courses.map((curso) => {
      const valorUnit = Object.keys(progress[curso].units);
      valorUnit.map((nombreUnidad) => {
       // console.log (nombreUnidad)
        const valorParts = Object.keys(progress[curso].units[nombreUnidad].parts);
        //console.log(nombreUnidad, valorParts)
        valorParts.map(nombrePart => {
          //console.log(nombreUnidad, valorParts, nombrePart)
          const part = progress[curso].units[nombreUnidad].parts[nombrePart]
          if (part.hasOwnProperty('exercises')) {
            const exercises = part.exercises;
            //console.log(nombreUnidad, valorParts, nombrePart,exercises)
            const complite = Object.keys(progress[curso].units[nombreUnidad].parts[nombrePart].exercises)
            complite.map((valorcomple) => {
              const valorcomplete = progress[curso].units[nombreUnidad].parts[nombrePart].exercises[valorcomple]
              //console.log(nombreUnidad, valorParts, nombrePart,exercises,valorcomple)
              if (valorcomplete.hasOwnProperty('completed')) {
                const completado = valorcomplete.completed;
                cont += Object.keys(completed).length
                //console.log(nombreUnidad, valorParts, nombrePart,exercises,valorcomple,completado)
                //console.log (completado)
              }
            });
          }
        });
      })
      //console.log(valorUnit)
      progress[curso].units
      //console.log(curso)
    })
    return cont
  }; 

  let lista = users.map(userWhitStats => {

    try {
      userWhitStats.stats = {
        percent: progress[userWhitStats.id].intro.percent,
        exercises: {
          total: exercisesTotal(progress[userWhitStats.id], courses),
          completed: completedTotal(progress[userWhitStats.id], courses),

        }
      }
      // console.log(userWhitStats)
      return userWhitStats;
    } catch (error) {
      return {};
    }
  })
  //console.log(lista);
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
