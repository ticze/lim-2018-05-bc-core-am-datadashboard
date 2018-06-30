const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const btnUser = document.getElementById('btnMostrarUser');
const selectbtn = document.getElementById('select-cohorts');
const listUsers = document.getElementById('container-user');
const inputFilterUser = document.getElementById('searchBox');

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
    const courses = ["intro"]
    const users = JSON.parse(event.target.responseText);
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
       let  usersStats = computeUsersStats(users, progress, courses);
    }
    getJSON(urlProgress, progress);
    getJSON(urlCohorts, courses);
}
getJSON(urlUser, addUserProgress);
const ListarUsuarios = (usuario) => {
    usuario.map((valorusuario) => {
      let listUser = document.createElement('li');            
        listUser.innerHTML = valorusuario.name + '<br>' +
          'Percent : ' + valorusuario.stats.percent + '%'  + '<br>' +
          'Total de Ejercicios : '+ valorusuario.stats.exercises.total + '<br>' +
          'Total de Ejercicios de completo: ' + valorusuario.stats.exercises.completed + '<br>' + 
          'Porcentaje de Exercises  : ' + valorusuario.stats.exercises.percent + '%' + '<br>' +
          'Total de Lecturas : '+ valorusuario.stats.reads.total + '<br>' +
          'Total de Lecturas que completo: ' + valorusuario.stats.reads.completed + '<br>' + 
          'Porcentaje de Lecturas  : ' + valorusuario.stats.reads.percent + '%' + '<br>' +
          'Total de Quizzes : '+ valorusuario.stats.quizzes.total + '<br>' +
          'Total de Quizzes que completo: ' + valorusuario.stats.quizzes.completed + '<br>' + 
          'Porcentaje de Quizzes  : ' + valorusuario.stats.quizzes.percent + '%' + '<br>';          
        listUsers.appendChild(listUser);            
    });
  }
//Evento para listar Usuarios
selectbtn.addEventListener('change', e => {
    e.preventDefault();
    if (selectbtn.value === 'lim-2018-03-pre-core-pw') {
       ListarUsuarios(listUsuarioComputerUser)      
    }
    else {
        alert('No se encuentran los datos de este cohorts');
    }
});


inputFilterUser.addEventListener('keyup', (event) => {    
      let search = searchBox.value; // Texto
      let mostrarloquesebusca = window.filterUsers(listUsuarioComputerUser,search );
      listUsers.innerHTML = " ";
      ListarUsuarios(mostrarloquesebusca);
      //searchBox.value = '';
  });

