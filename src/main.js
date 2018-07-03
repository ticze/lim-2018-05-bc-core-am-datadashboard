const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const btnUser = document.getElementById('btnMostrarUser');
const selectbtn = document.getElementById('select-cohorts');
const listUsers = document.getElementById('container-user');
const inputFilterUser = document.getElementById('searchBox');//buscar imput
const orderBybtn = document.getElementById('toggleSort'); //ASC O DESC
const selectOrderBy = document.getElementById('orderBy');//SELECTOR 

const getJSON = ( url, callback, ) => {
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
    progress: null
  },
  orderBy: 'name',
  orderDirection: 'ASC',
  search: ''
}
/* const addCohorts = () => {
  const dataCohorts = JSON.parse(event.target.responseText);
  const sedes = dataCohorts.filter( element =>{
    //console.log(element)
   return element.id.indexOf(id) !== -1;
  });
  let contenedor = '';
  sedes.forEach( lugar => {
    contenedor +=  documento.createElement('li')

  });
}
getJSON(urlCohorts, addCohorts); */


selectbtn.addEventListener('change', (event) => {
  const id = event.target.value;
 console.log(id)
})







