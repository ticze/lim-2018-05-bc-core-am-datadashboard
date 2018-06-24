window.computeUsersStats = (users, progress, courses) => {
  debugger
  const keyAddProgress = Object.keys(progress);

<<<<<<< HEAD
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
<<<<<<< HEAD
            let cursosCohort = cursos.coursesIndex;
            console.log(cursosCohort)
          }
=======
            //console.log(usersWithStats)
          })
>>>>>>> a685ef864baa5a99af2953e98bb5f13dc8191bf6
        }
      }

    }
  }
=======
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



>>>>>>> cce87609f8cc66e33d54fae5ccd4e6f3a2239813
};


//Funcion para Ordenar
window.sortUsers = (users, orderBy, orderDirection) => {
<<<<<<< HEAD
=======

>>>>>>> cce87609f8cc66e33d54fae5ccd4e6f3a2239813
};

window.filterUsers = (users, search) => {
};

<<<<<<< HEAD
window.processCohortData = (options) => {
};
=======
window.filterUsers = (users, search) => {

}


>>>>>>> cce87609f8cc66e33d54fae5ccd4e6f3a2239813
