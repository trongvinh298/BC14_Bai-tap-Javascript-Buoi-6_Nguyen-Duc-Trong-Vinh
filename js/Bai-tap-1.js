// Bài tập 1: Tìm số nguyên dương n
document.getElementById("xuatN").addEventListener("click", timN);
var xuatKetQua = document.getElementById("xuatKetQua");
function timN() {
  var totalN = 0;
  var n = 0;
  for (var i = 1; i <= 50; i++) {
    totalN += i;
    if (totalN > 1000) {
      n = i;
      xuatKetQua.style.display = "block";
      xuatKetQua.innerHTML = "Số nguyên dương nhỏ nhất: " + n;
      break;
    }
  }
}
