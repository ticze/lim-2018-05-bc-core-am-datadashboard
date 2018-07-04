const urlUser = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlCohorts = '../data/cohorts.json';
const urlProgress = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const btnUser = document.getElementById('btnMostrarUser');
const selectbtn = document.getElementById('select-cohorts');
const listUsers = document.getElementById('container-user');
const inputFilterUser = document.getElementById('searchBox');//buscar imput
const orderBybtn = document.getElementById('toggleSort'); //ASC O DESC
const selectOrderBy = document.getElementById('orderBy');//SELECTOR 

const getJSON = ( str, url, callback, ) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.addEventListener('load', event => {
    if(event.target.readyState === 4) {
      if(event.target.status !== 200) {
        return console.error(new Error ( `HTTP : ${event.target.status}`))
      } else{
        const response = JSON.parse(event.target.responseText)
        callback(str,response)
      }
    }
  })
  request.send();
};


let options = {
  cohort: null,
  cohortData: {
    users: null,
    progress: null
  },
  orderBy: 'name',
  orderDirection: 'ASC',
  search: ''
};

const addCohort = (campus, dataCohorts) => {
  //console.log(campus,dataCohorts)
  options.cohort = dataCohorts;
  const sedes = dataCohorts.filter( newCohort => {
    //console.log(newCohort)
    return newCohort.id.indexOf(campus) !== -1;
  });
  //console.log(sedes)
  listUsers.innerHTML = '';
  for (const cohortForSedes of sedes) {
    let listUser = document.createElement('li');
    let newAtri = document.createAttribute('id');
    newAtri.value = cohortForSedes.id;
    listUser.setAttributeNode(newAtri)
    listUser.innerHTML += cohortForSedes.id;
    listUsers.appendChild(listUser);
  }

}

selectbtn.addEventListener('change', (event) => {
  getJSON( event.target.value, '../../data/cohorts.json', addCohort)
  
});

const addProgress = (cohortGeneracion , dataProgress) =>{
  //console.log(cohortGeneracion , dataProgress)
  options.cohortData.progress = dataProgress;
  console.log(options)
  progressCohortData(options)
}

const addUser = (cohortGeneracion , dataUsers) => {
  //console.log(cohortGeneracion , dataUsers)
  options.cohortData.users = dataUsers;
  getJSON(cohortGeneracion , `../../data/cohorts/${cohortGeneracion}/progress.json`, addProgress )
}

listUsers.addEventListener('click' , (event) => {
 //console.log(event.target.id)
 options.cohort.forEach(element => {
   if(element.id === event.target.id){
     options.cohort = element;
   }
 });

 getJSON(event.target.id , `../../data/cohorts/${event.target.id}/users.json`, addUser)
})






