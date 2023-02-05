/*let number = 0; //--1
const titleArea = document.getElementById("title"); //--2
const contentArea = document.getElementById("content"); //--2
const videoArea = document.getElementById("video"); //--2
const button = document.getElementById('btn'); //--3

function getData() {
  button.addEventListener('click', e => { //--4
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          titleArea.innerHTML = request.response[number].title; //--5
          contentArea.innerHTML = request.response[number].content; //--5
          videoArea.setAttribute("src", request.response[number].url); //--6
          number == 2 ? number = 0 : number++; //--7
        }
      }
    }
    request.open("GET", "../ajax.json");
    request.responseType = "json";
    request.send(null);
  })
}

window.onload = getData;*/
let number = 0;
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");
function getData() {// fonction collecte les donnees
  const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          data= request.response;
  // ajax.jsonからデータを取得する処理を記述
}
}
}
request.open("GET", "ajax.json");
    request.responseType = "json";
    request.send(null);

  }
function changeVideo() {//fonction de rechargement des videos
  if (data.length < 1){ 
    getData();
  }
  button.addEventListener('click', e => {
          titleArea.innerHTML = data[number].title; 
          contentArea.innerHTML = data[number].content; 
          videoArea.setAttribute("src", data[number].url); 
          number == 2 ? number = 0 : number++; 
})
}
window.onload = changeVideo