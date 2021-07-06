document.getElementById("taoDiv").addEventListener("click", taoDiv);
var divCha = document.getElementById("divCha");
var divCon;

function taoDiv() {
  for (var i = 1; i <= 10; i++) {
    if (Math.floor(i / 2) !== i / 2) {
      divCon = document.createElement("div");
      divCon.innerHTML = "Div lẻ " + i;
      divCon.style.backgroundColor = "blue";
      divCon.style.color = "white";
      divCha.appendChild(divCon);
    } else {
      divCon = document.createElement("div");
      divCon.innerHTML = "Div chẵn " + i;
      divCon.style.backgroundColor = "red";
      divCon.style.color = "white";
      divCha.appendChild(divCon);
    }
  }
}
