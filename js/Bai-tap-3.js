document.getElementById("tinhGiaiThua").addEventListener("click", tinhGiaiThua);
var xuatGiaiThua = document.getElementById("xuatGiaiThua");

function tinhGiaiThua() {
  var n = document.getElementById("nhapSoN").value;
  var giaiThua = 1;
  for (var i = 1; i <= n; i++) {
    giaiThua *= i;
  }
  xuatGiaiThua.innerHTML = giaiThua;
}
