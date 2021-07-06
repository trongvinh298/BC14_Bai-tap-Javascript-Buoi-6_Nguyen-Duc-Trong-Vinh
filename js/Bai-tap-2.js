document.getElementById("tinhTong").addEventListener("click", tinhTong);
var xuatTong = document.getElementById("xuatTong");

function tinhTong() {
  var x = document.getElementById("nhapX").value;
  var n = document.getElementById("nhapN").value;
  var tongXN = 0;
  for (var i = 1; i <= n; i++) {
    tongXN += Math.pow(x, i);
  }
  xuatTong.innerHTML = "Tổng S(n) là : " + tongXN;
}
