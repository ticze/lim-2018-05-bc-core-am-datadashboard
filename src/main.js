const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const btnUser = document.getElementById('btnMostrarUser');
const selectbtn = document.getElementById('select-cohorts');
const listUsers = document.getElementById('container-user');
const inputFilterUser = document.getElementById('searchBox');//buscar imput
const orderBybtn = document.getElementById('toggleSort'); //ASC O DESC
const selectOrderBy = document.getElementById('orderBy');//SELECTOR 

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

let options = {
  cohort: '',
  cohortData: {
    users: [],
    progress: {}
  },
  orderBy: '',
  orderDirection: '',
  search: '',
}

const addUserProgress = () => {
  const courses = ["intro"]
  const datausers = JSON.parse(event.target.responseText);
  options.cohortData.users = datausers;
  const addCohorts = (event) => {
    const cohorts = JSON.parse(event.target.responseText);
    //options.cohort = cohorts;
    
    cohorts.map((dataCohorts) => {
      const listCor = document.createElement('option');
      listCor.value = dataCohorts.id;
      listCor.innerHTML = dataCohorts.id;      
      selectbtn.appendChild(listCor);
      options.cohort = dataCohorts.id;
      //console.log(options)
    });
  }
  getJSON(urlCohorts, addCohorts);
  const progress = () => {
    const dataprogress = JSON.parse(event.target.responseText);
    options.cohortData.progress = dataprogress ;
    let usersStats = computeUsersStats(datausers, dataprogress, courses);
  }
 
  processCohortData(options)
  getJSON(urlProgress, progress);
  getJSON(urlCohorts, courses);
}
getJSON(urlUser, addUserProgress);


//Funcion para Listar Estudiantes en una lista
const ListarUsuarios = (usuario) => {
  usuario.map((valorusuario) => {
    let listUser = document.createElement('li');
    listUser.innerHTML = valorusuario.name + '<br>' +
      'Percent : ' + valorusuario.stats.percent + '%' + '<br>' +
      'Total de Ejercicios : ' + valorusuario.stats.exercises.total + '<br>' +
      'Total de Ejercicios de completo: ' + valorusuario.stats.exercises.completed + '<br>' +
      'Porcentaje de Exercises  : ' + valorusuario.stats.exercises.percent + '%' + '<br>' +
      'Total de Lecturas : ' + valorusuario.stats.reads.total + '<br>' +
      'Total de Lecturas que completo: ' + valorusuario.stats.reads.completed + '<br>' +
      'Porcentaje de Lecturas  : ' + valorusuario.stats.reads.percent + '%' + '<br>' +
      'Total de Quizzes : ' + valorusuario.stats.quizzes.total + '<br>' +
      'Total de Quizzes que completo: ' + valorusuario.stats.quizzes.completed + '<br>' +
      'Porcentaje de Quizzes  : ' + valorusuario.stats.quizzes.percent + '%' + '<br>';
    listUsers.appendChild(listUser);
  });
}
//Evento para listar Usuarios cuando selecionamos el cohorts
selectbtn.addEventListener('change', e => {
  e.preventDefault();
  if (selectbtn.value === 'lim-2018-03-pre-core-pw') {
    ListarUsuarios(listUsuarioComputerUser)
  }
  else {
    alert('No se encuentran los datos de este cohorts');
  }
});
//Evento para buscar Estudiante
inputFilterUser.addEventListener('keyup', (event) => {
  let search = event.target.value; // Texto
  options.search = search;
  // let search= inputFilterUser.value;
  let mostrarloquesebusca = window.filterUsers(listUsuarioComputerUser, search);
  listUsers.innerHTML = " ";
  ListarUsuarios(mostrarloquesebusca);
  //searchBox.value = '';
});
//Evento para poder Ordenar 
orderBybtn.addEventListener('click', (event) => {
  const direction = toggleSort.innerText;
  options.orderDirection = direction; 
  if (direction == "ASC") {
    toggleSort.innerText = "DESC";
  } else {
    toggleSort.innerText = "ASC";
  }
  if (selectOrderBy.value === "name") {
    //llamamos a la funcion de ordenamiento para que que ordene los usuarios
    const sortedUsers = window.sortUsers(listUsuarioComputerUser, 'Name', direction);
    //no se hace el getElementById por que en JS todo lo declarado en el html con un id queda como variable global :O
    listUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);
  } else if (selectOrderBy.value === "percent") {
    //llamamos a la funcion de ordenamiento 
    const sortedUsers = window.sortUsers(listUsuarioComputerUser, 'Percent', direction);
    listUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);

  } else if (selectOrderBy.value === "excercises-percent") {
    //llamamos a la funcion de ordenamiento 
    const sortedUsers = window.sortUsers(listUsuarioComputerUser, 'ExcercisePercent', direction);
    listUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);

  } else if (selectOrderBy.value === "quizzes-percent") {
    const sortedUsers = window.sortUsers(listUsuarioComputerUser, 'QuizzesPercent', direction);
    listUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);

  } else if (selectOrderBy.value === "quizzes-scoreAvg") {
    const sortedUsers = window.sortUsers(listUsuarioComputerUser, 'QuizzesScoreAvg', direction);
    listUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);
  } else if (selectOrderBy.value === "reads-percent") {
    const sortedUsers = window.sortUsers(listUsuarioComputerUser, 'ReadsPercent', direction);
    listUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);
  } else {
    alert('Seleccionar el selector correcto');
  }

});  