const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'
const btnUser = document.getElementById('btnMostrarUser');

// Agregamos un evento submit y las instrucciones a ejecutar
btnUser.addEventListener('click', function (e) {
  e.preventDefault();
  getNews();
});


function getNews() {
  //Creamos nuestro Objeto
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
  //La funcion onload se le asigna la funcion addNEws
  articleRequest.onload = addNews;
  //La funcion onerror tiene asignado la funcion handleError 
  articleRequest.onerror = handleError;
  articleRequest.send();
}

function handleError() {
  console.log('Se ha presentado un error');
}

function addNews() {
  const data = JSON.parse(this.responseText);
  data.map((usuario)=>{
    console.log(usuario.name );
    //document.getElementById('response-container').innerHTML=usuario.name;
  });

   
  //console.log(data);
 }

  