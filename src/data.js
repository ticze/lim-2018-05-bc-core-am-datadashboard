window.computeUsersStats = (users, progress, courses) => {
  let roleStudent = users.filter(students => students.role === 'student');
  //console.log(roleStudent)
  const studentPercent = (roleStudent) => {
    let cont = 0;
    courses.forEach(nameCourse => {
      const progressUsers = progress[roleStudent.id];
      if (progressUsers.hasOwnProperty(nameCourse)) {
        cont += progressUsers[nameCourse].percent;
      }
    });
    return (cont / courses.length)
  }
  const exercisesTotal = (roleStudent) => {
    //debugger
    let cont = 0;
    courses.forEach( nameCourse => {
      const progressUsers = progress[roleStudent.id];
      if (progressUsers.hasOwnProperty(nameCourse)){
        const units = Object.values(progressUsers[nameCourse].units) 
        units.forEach( units => {
          const parts = Object.values(units.parts)
          const exercises = parts.filter(objParts =>  objParts.type === 'practice')
        });
      }
    });
    return cont
  }
  roleStudent = roleStudent.map(objUser => {
    const usersWithStats = {
      name: objUser.name,
      stats: {
        percent: studentPercent(objUser),
        exercises : {
        total : exercisesTotal(objUser)
        }
      }
    }
    //console.log(objUser)
    return usersWithStats
  })
 // console.log(roleStudent)
};

window.sortUsers = (users, orderBy, orderDirection) => {
};

window.filterUsers = (users, search) => {
};

window.progressCohortData = (options) => {
  const courses = Object.keys(options.cohort.coursesIndex)
  let student = computeUsersStats(options.cohortData.users, options.cohortData.progress, courses)
  /*  student = sortUsers(options.cohortData.users, orderBy, orderDirection)
   search ? student = filterUsers(options.cohortData.users, search) : null */
};
