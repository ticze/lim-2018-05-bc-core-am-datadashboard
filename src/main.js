const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const btnUser = document.getElementById('btnMostrarUser');
const selectbtn = document.getElementById('select-cohorts');
const listUsers = document.getElementById('container-user');
const listDataUsers = document.getElementById('container-data-user');
const buscarUser = document.getElementById('busca-users');
const selectByOrder = document.getElementById('orderBy');


const getJSON = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.onerror = handleError;
  request.send();
}

const handleError = () => {
  alert('Se ha presentado un error');
}


const addUserProgress = () => {
  const courses = ["intro"]
  const users = JSON.parse(event.target.responseText);
  //console.log (users);
  //FUNCION LISTA DE COHORTS
  const addCohorts = (event) => {
    const cohorts = JSON.parse(event.target.responseText);
    cohorts.map((dataCohorts) => {
      const listCor = document.createElement('option');
      listCor.value = dataCohorts.id;
      listCor.innerHTML = dataCohorts.id;
      selectbtn.appendChild(listCor);
    });
  }
  getJSON(urlCohorts, addCohorts);

  const progress = () => {
    const progress = JSON.parse(event.target.responseText);

    const usersWithStats = computeUsersStats(users, progress, courses);
    //console.log(usersWithStats)
    //console.log(sortUsers(usersWithStats, 'name', 'ASC')) 
    //console.log(sortUsers(usersWithStats, 'name', 'DESC')) 
    //console.log(sortUsers(usersWithStats, 'percent', 'ASC'))
    //console.log(sortUsers(usersWithStats, 'percent', 'DESC')) 
    //console.log(sortUsers(usersWithStats, 'excercises-percent', 'ASC')) 
    //console.log(sortUsers(usersWithStats, 'excercises-percent', 'DESC')) 
    sortUsers(usersWithStats, 'quizzes-percent', 'ASC')
    sortUsers(usersWithStats, 'quizzes-percent', 'DESC')
    sortUsers(usersWithStats, 'quizzes-scoreAvg', 'ASC')
    sortUsers(usersWithStats, 'quizzes-scoreAvg', 'DESC')
    sortUsers(usersWithStats, 'reads-percent', 'ASC')
    sortUsers(usersWithStats, 'reads-percent', 'DESC')

    //const sortUser =sortUsers(users, orderBy, orderDirection);
    //const  procesCohortData =processCohortData(options);
    //Evento para mostrar una vez seleccionado el Cohorts 
    selectbtn.addEventListener('change', e => {
      e.preventDefault();
      if (selectbtn.value === 'lim-2018-03-pre-core-pw') {
        //FUNCION DE LISTA DE USUARIO
        //console.log (usersWithStats);
        const ListarUsuarios = () => {
          usersWithStats.map((usuario) => {
            let listUser = document.createElement('li');
            if (usuario.stats !== undefined) {
              listUser.innerHTML = usuario.name + '<br>' +
                'Progreso : ' + usuario.stats.percent + '%' + '<br>' +
                'Porcentaje de Quiz : ' + usuario.stats.quizzes.percent + '%' + '<br>' +
                'Porcentaje de Exercises  : ' + usuario.stats.exercises.percent + '%' + '<br>' +
                'Porcentaje de Reads  : ' + usuario.stats.reads.percent + '%' + '<br>';
              listUsers.appendChild(listUser);
            }
            else {
              return {};
            }
          });
          getJSON(urlUser, addUserProgress);
        }
        ListarUsuarios();
      }
      else {
        alert('No se encuentran los datos de este cohorts');
      }
    });
    //Evento para buscar usuario
    //EVENTO PARA BUSCAR 
    //console.log(usersWithStats);

    buscarUser.addEventListener('keypress', (event) => {
      //console.log(event.which);
      // console.log(event.keyCode);
      //let enter = event.which || event.keyCode;

      //console.log(buscarUser.value);
      let search = buscarUser.value; // Texto
      let mostrarloquesebusca = window.filterUsers(usersWithStats, search);
      //let mostrarloquesebusco = window.filterUsers(addUsers, valorBusqueda);
      //console.log(mostrarloquesebusco);
      //impirmirlista (mostrarlo que busco en html);
      ListarUsuarios(mostrarloquesebusca);
      buscarUser.value = '';

    });

    //selector para ordenar 
    // selectByOrder.addEventListener('change', (e) => {
    //   const valorOrdenador = e.target.value;
    //   sortUser(usersWithStats, valorOrdenador )
    // })

  }
  getJSON(urlProgress, progress);
  getJSON(urlCohorts, courses);
  // console.log (users);
}
getJSON(urlUser, addUserProgress);



