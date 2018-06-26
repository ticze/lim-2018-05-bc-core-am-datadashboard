const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const btnUser = document.getElementById('btnMostrarUser');
const selectbtn = document.getElementById('select-cohorts');
const listUsers = document.getElementById('container-user');


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
  const cohorts = JSON.parse(event.target.responseText);
  const courses = ["intro"]
  

  const users = JSON.parse(event.target.responseText);  

  const progress = () => {
    const progress = JSON.parse(event.target.responseText);
    computeUsersStats(users, progress, courses);
    /* const options = {
      cohortData: {
        users: users,
        progress: progress
      }
    };
    let usersWithStats = processCohortData(options); */
    //let usersWithStats = computeUsersStats(users, progress, courses);
    //let usersWithStatsSorted = sortUsers(usersWithStats, "nombre", "ASC");     

  }
  
  //sortUsers(users, orderBy, orderDirection);

  getJSON(urlProgress, progress);
  getJSON(urlCohorts, courses);

}
getJSON(urlUser, addUserProgress);
 

//FUNCION DE LISTA DE USUARIO
const addUsers = (event) => { 
  const data = JSON.parse(event.target.responseText);
  console.log (data);
  data.map((usuario) => {
    let listUser = document.createElement('li');
    listUser.innerHTML = usuario.name;
    listUsers.appendChild(listUser);
  }); 
}

//FUNCION LISTA DE COHORTS
const addCohorts = (event) => {
  const data = JSON.parse(event.target.responseText);
  data.map((cohorts) => {
    const listCor = document.createElement('option');
    listCor.value = cohorts.id;
    listCor.innerHTML = cohorts.id;
    selectbtn.appendChild(listCor);
  });  
}
getJSON(urlCohorts,addCohorts);

selectbtn.addEventListener('change', e => {
  e.preventDefault();
  if(selectbtn.value === 'lim-2018-03-pre-core-pw') {
    getJSON(urlUser,addUsers);
  }   
 });

//getJSON(urlCohorts, addCohorts) 

 


