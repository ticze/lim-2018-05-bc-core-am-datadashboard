window.progressCohortData = (options) =>{
  const courses = Object.keys(oprtions.cohort.coursesIndex)
 let student = computeUsersStats(options.cohortData.users, options.cohortDataprogress, courses)
 student = sortUsers(users, orderBy, orderDirection)
 search ? student = filterUsers(users, search) : null;

}
