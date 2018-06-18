const btnUser = document.getElementById('btnMostrarUser');
const selectbtn = document.getElementById('select-cohorts');
const listUsers = document.getElementById('container-user');
const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';
const urlProgress = '';

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
  console.log('Se ha presentado un error');
}
//FUNCION DE LISTA DE USUARIO
 const addUsers = () => { 
  //debugger
  const data = JSON.parse(event.currentTarget.responseText);

   data.map((usuario) => {
      let listUser = document.createElement('li');
      listUser.innerHTML = usuario.name;
      listUsers.appendChild(listUser);
    }); 

}

//FUNCION LISTA DE COHORTS
const addCohorts = (event) => {
  //debugger
  const data = JSON.parse(event.target.responseText);

  data.map((cohorts) => {

    let listCor = document.createElement('option');
    listCor.value = cohorts.id;
    listCor.innerHTML = cohorts.id;
    selectbtn.appendChild(listCor);
  });

}

selectbtn.addEventListener('change', e => {
  e.preventDefault();
  if(selectbtn.value === 'lim-2018-03-pre-core-pw') {
    getJSON(urlUser,addUsers);
  } 
  /* const url3 = '../data/cohorts/'+ e.target.value + '/users.json'
  getJSON(url3, addUsers);  */   
});

btnUser.addEventListener('click',(e) => {
  e.preventDefault();
  getJSON(urlUser,addUsers);
});

getJSON(urlCohorts, addCohorts);









