window.computeUsersStats = (users, progress, courses) => {
  let lista = users.map(usersWithStats => {

      const exercisesTotal = (progress, courses) => {
          let cont = 0;
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
                      }
                  });
              });
          });
          return cont
      };

      const exercisesCompleted = (progress, courses) => {
          let cont = 0;
          courses.map((curso) => {
              const valorUnits = Object.keys(progress[curso].units);
              //console.log(valorUnits)
              valorUnits.map((nombreUnits) => {
                  //console.log (nombreUnits);
                  const valorParts = Object.keys(progress[curso].units[nombreUnits].parts);
                  //console.log(valorParts)
                  valorParts.map((nombreParts) => {
                      const valorExcercises = progress[curso].units[nombreUnits].parts[nombreParts];
                      //console.log (valorExcercises)
                      if (valorExcercises.hasOwnProperty('exercises')) {
                          //const nombreExercises = valorExcercises.exercises
                          const valorCompletado = Object.keys(valorExcercises.exercises);
                          //console.log(valorCompletado) 
                          valorCompletado.map((nombreExercises) => {
                              //console.log (nombreExercises)
                              const valorCompleted = progress[curso].units[nombreUnits].parts[nombreParts].exercises[nombreExercises].completed;
                              //console.log (valorCompleted)
                              if (valorCompleted == 1) {
                                  cont += valorCompleted;
                              }
                          });
                      }
                  });
              });
          });

          //console.log (cont)
          return cont
      }

      const readTotal = (progress, courses) => {
          let cont = 0;
          courses.map((curso) => {
              const valorUnits = Object.keys(progress[curso].units);
              //console.log(valorUnits)
              valorUnits.map((nombreUnits) => {
                  //console.log (nombreUnits);
                  const valorParts = Object.keys(progress[curso].units[nombreUnits].parts);
                  //console.log(valorParts)
                  valorParts.map((nombreParts) => {
                      //console.log (nombreParts)
                      const valorType = progress[curso].units[nombreUnits].parts[nombreParts].type;
                      //console.log(valorType);
                      if (valorType == "read") {
                          cont++;
                      }
                  });
              });
          });

          // console.log(cont)
          return cont
      }
      const readCompleted = (progress, courses) => {
          let cont = 0;
          courses.map((curso) => {
              const valorUnits = Object.keys(progress[curso].units);
              //console.log(valorUnits)
              valorUnits.map((nombreUnits) => {
                  //console.log (nombreUnits);
                  const valorParts = Object.keys(progress[curso].units[nombreUnits].parts);
                  //console.log(valorParts)
                  valorParts.map((nombreParts) => {
                      //console.log (nombreParts)
                      const valorTypeComplet = progress[curso].units[nombreUnits].parts[nombreParts].completed;
                      const valorType = progress[curso].units[nombreUnits].parts[nombreParts].type;
                      //console.log(valorType);
                      if (valorType == "read" && valorTypeComplet == 1) {
                          cont++;
                      }
                  });
              });
          });

          // console.log(cont)
          return cont


      }

      const quizTotal = (progress, courses) => {
          let cont = 0;
          courses.map((curso) => {
              const valorUnits = Object.keys(progress[curso].units);
              //console.log(valorUnits)
              valorUnits.map((nombreUnits) => {
                  //console.log (nombreUnits);
                  const valorParts = Object.keys(progress[curso].units[nombreUnits].parts);
                  //console.log(valorParts)
                  valorParts.map((nombreParts) => {
                      //console.log (nombreParts)
                      const valorType = progress[curso].units[nombreUnits].parts[nombreParts].type;
                      //console.log(valorType);
                      if (valorType == "quiz") {
                          cont++;
                      }
                  });
              });
          });

          // console.log(cont)
          return cont
      }
      const quizCompleted = (progress, courses) => {
          let cont = 0;
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
                      if (valorType.type == "quiz" && valorType.completed == 1) {
                          cont++;
                      }
                  });
              });
          });
          // console.log(cont)
          return cont
      }

      const quizScoreSum = (progress, courses) => {
          let cont = 0;
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
                      if (valorType.type == "quiz" && valorType.completed == 1 && valorType.score) {
                          cont += valorType.score;
                      }
                  });
              });
          });
          // console.log(typeof(cont),cont)
          return cont

      }


      try {
          usersWithStats.stats = {
              percent: progress[usersWithStats.id].intro.percent,
              exercises: {
                  total: exercisesTotal(progress[usersWithStats.id], courses),
                  completed: exercisesCompleted(progress[usersWithStats.id], courses),
                  percent: (exercisesCompleted(progress[usersWithStats.id], courses) / exercisesTotal(progress[usersWithStats.id], courses)) * 100,
              },
              reads: {
                  total: readTotal(progress[usersWithStats.id], courses),
                  completed: readCompleted(progress[usersWithStats.id], courses),
                  percent: Math.round((readCompleted(progress[usersWithStats.id], courses) / readTotal(progress[usersWithStats.id], courses)) * 100)
              },
              quizzes: {
                  total: quizTotal(progress[usersWithStats.id], courses),
                  completed: quizCompleted(progress[usersWithStats.id], courses),
                  percent: Math.round((quizCompleted(progress[usersWithStats.id], courses) / quizTotal(progress[usersWithStats.id], courses)) * 100),
                  scoreSum: quizScoreSum(progress[usersWithStats.id], courses),
                  scoreAvg: Math.round(quizScoreSum(progress[usersWithStats.id], courses) / quizCompleted(progress[usersWithStats.id], courses)),
              }
          }
          return usersWithStats;
      } catch (error) {
          return {};
      }

  })
  console.log(lista);
  return lista;
}

//Funcion para Ordenar
window.sortUsers = (users, orderBy, orderDirection) => {
};

window.filterUsers = (users, search) => {
}

window.processCohortData = (options) => {
};


