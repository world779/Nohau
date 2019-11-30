function postToukou(){
 var ID = postNohau();
 document.getElementById("objectId").name = ID;
}

function implementFav(){
  var ID = document.getElementById("objectId").name;
  countFav(ID);
  var fav = getFav(ID);
  document.getElementById("fav").innerHTML = fav;
}
