//CREAANDO LAS  FUNCIONES

window.computeUsersStats = (users, progress, courses) => {

  let lista = users.map(userWhitStats => {

    const exercisesTotal = (progress, courses) => {
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
          //console.log (nombreUnidad)
          const valorParts = Object.keys(progress[curso].units[nombreUnidad].parts);
          //console.log(nombreUnidad, valorParts)
          valorParts.map(nombrePart => {
            const part = progress[curso].units[nombreUnidad].parts[nombrePart]
            if (part.hasOwnProperty('exercises')) {
              const exercises = part.exercises;
              const complite = Object.keys(progress[curso].units[nombreUnidad].parts[nombrePart].exercises)
              complite.map((valorcomple) => {
                const valorcomplete = progress[curso].units[nombreUnidad].parts[nombrePart].exercises[valorcomple]
                //console.log (valorcomple)
                if (valorcomplete.hasOwnProperty('completed')) {
                  const completado = valorcomplete.completed;
                  // console.log (completado)

                }
              });
              // cont += Object.keys(exercises).length
              //console.log(exercises)
            }

          });

        })
        //console.log(valorUnit)
        progress[curso].units
        //console.log(curso)
      })

      return completado

    };
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

  // console.log(lista);
  return lista;

  //const courses = ["intro"]
  //["intro"]
  //FUNCION DE EJERCICIOS



};


//Funcion para Ordenar
window.sortUsers = (users, orderBy, orderDirection) => {

};


window.filterUsers = (users, search) => {

}


