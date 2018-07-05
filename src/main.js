const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const btnUser = document.getElementById('btnMostrarUser');
const selectbtn = document.getElementById('select-cohorts');
const contUsers = document.getElementById('container-user');
const inputFilterUser = document.getElementById('searchBox');//buscar imput
const orderBybtn = document.getElementById('toggleSort'); //ASC O DESC
const selectOrderBy = document.getElementById('orderBy');//SELECTOR 
const listaS = document.getElementById('listasedes');


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
  cohort: null,
  cohortData: {
    users: null,
    progress: null,

  },
  orderBy: 'Name',
  orderDirection: 'ASC',
  search: ''
}

const addUserProgress = () => {
  const users = JSON.parse(event.target.responseText);

  const addCohorts = (event) => {
    const cohorts = JSON.parse(event.target.responseText);
    options.cohorts = cohorts;
    listaS.addEventListener('click', e => {
      console.log(e.target.id);
      const nuevoArray = cohorts.filter(cohort => cohort.id.indexOf(e.target.id) > -1);
      selectbtn.innerHTML = '';
      nuevoArray.map((dataCohorts) => {
        const listCohort = document.createElement('option');
        listCohort.value = dataCohorts.id;
        listCohort.innerHTML = dataCohorts.id;
        selectbtn.appendChild(listCohort);
      });

    })
    //MUESTRA TODOS LOS COHORST               

  }
  getJSON(urlCohorts, addCohorts);

  const progress = () => {
    const progress = JSON.parse(event.target.responseText);
    options.cohortData.users = users;
    options.cohortData.progress = progress;
  }
  getJSON(urlProgress, progress);

}
getJSON(urlUser, addUserProgress);


//Funcion para Listar Estudiantes en una lista
const ListarUsuarios = (userArr) => {
  userArr.map((dateUser) => {
    let listUser = document.createElement('li');
    listUser.innerHTML = dateUser.name + '<br>' +
      'Percent : ' + dateUser.stats.percent + '%' + '<br>' +
      'Total de Ejercicios : ' + dateUser.stats.exercises.total + '<br>' +
      'Total de Ejercicios de completo: ' + dateUser.stats.exercises.completed + '<br>' +
      'Porcentaje de Exercises  : ' + dateUser.stats.exercises.percent + '%' + '<br>' +
      'Total de Lecturas : ' + dateUser.stats.reads.total + '<br>' +
      'Total de Lecturas que completo: ' + dateUser.stats.reads.completed + '<br>' +
      'Porcentaje de Lecturas  : ' + dateUser.stats.reads.percent + '%' + '<br>' +
      'Total de Quizzes : ' + dateUser.stats.quizzes.total + '<br>' +
      'Total de Quizzes que completo: ' + dateUser.stats.quizzes.completed + '<br>' +
      'Porcentaje de Quizzes  : ' + dateUser.stats.quizzes.percent + '%' + '<br>';
    contUsers.appendChild(listUser);
  });
}

//Evento para listar Usuarios cuando selecionamos el cohorts
selectbtn.addEventListener('change', e => {
  e.preventDefault();
  if (selectbtn.value === 'lim-2018-03-pre-core-pw') {
    const cohort = options.cohorts.find(c => c.id === e.target.value);
    options.cohort = cohort;
    const data = processCohortData(options);
    ListarUsuarios(data);
  } else {
    contUsers.innerHTML = '';
  }

});

//Evento para buscar Estudiante
inputFilterUser.addEventListener('keyup', (event) => {
  let search = inputFilterUser.value; // Texto
  options.search = search;
  const searchDate = processCohortData(options);
  contUsers.innerHTML = " ";
  ListarUsuarios(searchDate);
});
//Evento para poder Ordenar 
orderBybtn.addEventListener('click', (event) => {
  const direction = toggleSort.innerText;
  if (direction == "ASC") {
    toggleSort.innerText = "DESC";
    options.orderDirection = "DESC";
  } else {
    toggleSort.innerText = "ASC";
    options.orderDirection = "ASC"
  }
  if (selectOrderBy.value === "name") {
    const sortedUsers = processCohortData(options);
    contUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);
  } else if (selectOrderBy.value === "percent") {
    options.orderBy = 'Percent';
    const sortedUsers = processCohortData(options);
    contUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);
  } else if (selectOrderBy.value === "excercises-percent") {
    options.orderBy = 'ExcercisePercent';
    const sortedUsers = processCohortData(options);
    contUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);
  } else if (selectOrderBy.value === "quizzes-percent") {
    options.orderBy = 'QuizzesPercent';
    const sortedUsers = processCohortData(options);
    contUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);
  } else if (selectOrderBy.value === "quizzes-scoreAvg") {
    options.orderBy = 'QuizzesScoreAvg';
    const sortedUsers = processCohortData(options);
    contUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);
  } else if (selectOrderBy.value === "reads-percent") {
    options.orderBy = 'ReadsPercent';
    const sortedUsers = processCohortData(options);
    contUsers.innerHTML = " ";
    ListarUsuarios(sortedUsers);
  }

});
