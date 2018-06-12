const conexion = (url)=> {
  let xhr = new XMLHttpRequest();
  //obtenemos la data de usurios con l url absoluta
  xhr.open('GET', url);
  //hicimos una solicitud asincrona
  xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status < 400){
      let dataUser = JSON.parse(xhr.responseText);
      console.log(dataUser);
    }
  };
  //enviamos al sevirdor la solicitud
  xhr.send();
};
//CONEXION PARA OBTENER LOS DATOS DE USER, PROGRESS Y COHORTS.
conexion('/data/cohorts/lim-2018-03-pre-core-pw/users.json');
conexion('/data/cohorts/lim-2018-03-pre-core-pw/progress.json');
conexion('/data/cohorts.json');

//creando funciones 
//window.computeUserStatus = (users, progress, course) => {
  //const arregloUser = [];
//};

