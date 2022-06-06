(function () {
  const regexpCoordinates = /\W/;
  ex1_button.addEventListener("click", function(){
  ex1_content.innerHTML = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
  })
  ex2_text.addEventListener("input", function(){
     if(isNaN(ex2_text.value)){
       if(ex2_text.value.match(regexpCoordinates))
        ex2_content.innerHTML = "Numer nie może zawierać znaków specjalnych!";
       else
        ex2_content.innerHTML = "Numer nie może zawierać liter!";
     }
    else if(ex2_text.value.length != 9)
      ex2_content.innerHTML = "Długość numeru musi być równa 9!";
    else
      ex2_content.innerHTML = "Numer telefonu jest poprawny.";
  })
})();
function allowDrop(dd) {
  dd.preventDefault();
}
function drag(dd) {
  dd.dataTransfer.setData("text", dd.target.id);
}
function drop(dd) {
  dd.preventDefault();
  var dane = dd.dataTransfer.getData("text");
  dd.target.appendChild(document.getElementById(dane));
}