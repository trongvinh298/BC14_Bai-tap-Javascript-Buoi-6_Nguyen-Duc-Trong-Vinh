// Bài tập 3 : tính thuế thu nhập cá nhân
document.getElementById("tinhThue").addEventListener("click", tinhThue);
function tinhThue() {
  var hoTenKH = document.getElementById("hoTenKH").value;
  var tongThuNhap = document.getElementById("tongThuNhap").value;
  var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value;
  var thuNhapThue = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
  var xuatThue = document.getElementById("xuatThue");
  xuatThue.style.display = "block";
  var thueSuat;
  if ((thuNhapThue > 0) & (thuNhapThue <= 60000000)) {
    thueSuat = (thuNhapThue * 5) / 100;
  } else if (thuNhapThue > 60000000 && thuNhapThue <= 120000000) {
    thueSuat = (thuNhapThue * 10) / 100;
  } else if (thuNhapThue > 120000000 && thuNhapThue <= 210000000) {
    thueSuat = (thuNhapThue * 15) / 100;
  } else if (thuNhapThue > 210000000 && thuNhapThue <= 384000000) {
    thueSuat = (thuNhapThue * 20) / 100;
  } else if (thuNhapThue > 384000000 && thuNhapThue <= 624000000) {
    thueSuat = (thuNhapThue * 25) / 100;
  } else if (thuNhapThue > 624000000 && thuNhapThue <= 960000000) {
    thueSuat = (thuNhapThue * 30) / 100;
  } else {
    thueSuat = (thuNhapThue * 35) / 100;
  }
  var xuatHoTen = document.createElement("p");
  xuatHoTen.innerHTML = "Họ tên khách hàng: " + hoTenKH;
  var xuatTienThue = document.createElement("p");
  xuatTienThue.innerHTML = "Tiền thuế thu nhập cá nhân :" + thueSuat + " VND";
  xuatThue.innerHTML = "";
  xuatThue.appendChild(xuatHoTen);
  xuatThue.appendChild(xuatTienThue);
}
