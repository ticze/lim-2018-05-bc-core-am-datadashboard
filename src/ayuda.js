const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';

const getJSON = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.onerror = handleError;
  request.send();
}

const handleError = () => {
  console.log('Se ha presentado un error');
}


const addUserProgress = () => {
  const courses = JSON.parse(event.target.responseText);

  const users = JSON.parse(event.target.responseText);
  
  const progress = ()=>{
    const progress = JSON.parse(event.target.responseText);
    computeUsersStats(users,progress,courses);
  }
  getJSON(urlProgress, progress);
  getJSON(urlCohorts, courses);
  
}
getJSON(urlUser, addUserProgress);



