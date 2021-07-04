// Bài tập 4 : Tính tiền cáp
var loaiKH = document.getElementById("loaiKH");
window.onload = function () {
  if (loaiKH.value === "nhaDan") {
    document.getElementById("soKetNoi").disabled = true;
  }
};
loaiKH.addEventListener("change", anHien);
function anHien() {
  if (loaiKH.value === "nhaDan") {
    document.getElementById("soKetNoi").disabled = true;
  } else {
    document.getElementById("soKetNoi").disabled = false;
  }
}

document.getElementById("xuatHoaDon").addEventListener("click", tinhTienCap);
function tinhTienCap() {
  var maKH = document.getElementById("maKH").value;
  var soKetNoi = document.getElementById("soKetNoi").value;
  var soKenhCC = document.getElementById("soKenhCC").value;
  var hoaDon = document.getElementById("hoaDon");
  var tongTienCap;
  hoaDon.style.display = "block";
  if (loaiKH.value === "nhaDan") {
    tongTienCap = 4.5 + 20.5 + 7.5 * soKenhCC;
  } else {
    if (soKetNoi > 0 && soKetNoi <= 10) {
      tongTienCap = 15 + 75 * soKetNoi + 50 * soKenhCC;
    } else {
      tongTienCap = 15 + 75 * 10 + 5 * (soKetNoi - 10) + 50 * soKenhCC;
    }
  }
  var inHoaDon = document.createElement("p");
  inHoaDon.innerHTML =
    "Mã Khách Hàng : " + maKH + " Tổng số tiền cáp: " + tongTienCap + " $";
  hoaDon.innerHTML = "";
  hoaDon.appendChild(inHoaDon);
}
