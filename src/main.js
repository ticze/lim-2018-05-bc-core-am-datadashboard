const btnUser = document.getElementById('btnMostrarUser');
const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'
const urlCohorts = '../data/cohorts.json'

const getJSON = (url, callback) => {
  //Creamos nuestro Objeto
  const request = new XMLHttpRequest();
  request.open('GET', url);
  //La funcion onload se le asigna la funcion addNEws
  request.onload = callback;
  //La funcion onerror tiene asignado la funcion handleError 
  request.onerror = handleError;
  request.send();
}

const handleError = () => {
  console.log('Se ha prespepitoentado un error');
}

const addUsers = () => {
  //debugger
  const data = JSON.parse(event.currentTarget.responseText);

  data.map((usuario) => {
    // console.log(usuario.name + '//' + usuario.signupCohort );
    document.getElementById('container-user').innerHTML += '<li>' + usuario.name + '</li>';
  });

}


const addCohorts = () => {
  //debugger
  const data = JSON.parse(event.currentTarget.responseText);

  data.map((curso) => {
    //console.log(curso );
    document.getElementById('contaniner-cohorts').innerHTML += '<option>' + curso.id + '</option>'
  });

}




// Agregamos un evento submit y las instrucciones a ejecutar
btnUser.addEventListener('click', e => {
  e.preventDefault();
  getJSON(urlUser, addUsers);
 
  //getJSON(urlCohorts,addCohorts);

});

getJSON(urlCohorts, addCohorts);





