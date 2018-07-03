 const addUserProgress = () => {
  const dataUsers = JSON.parse(event.target.responseText);
  options.cohortData.users = dataUsers;

  const addCohorts = (event) => {
    const dataCohorts = JSON.parse(event.target.responseText);
    options.cohort = dataCohorts;
  }
  getJSON(urlCohorts, addCohorts);

  const progress = () => {
    const dataProgress = JSON.parse(event.target.responseText);
    options.cohortData.progress = dataProgress;
    console.log(options)
  }
  getJSON(urlProgress, progress);

}
getJSON(urlUser, addUserProgress); 