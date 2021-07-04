// Bài tập 2 : Tính tiền điện
document.getElementById("tinhTienDien").addEventListener("click", tinhTienDien);
function tinhTienDien() {
  var tenKH = document.getElementById("tenKH").value;
  var khoiLuong = document.getElementById("khoiLuong").value;
  var xuatThongTin = document.getElementById("xuatThongTin");
  var tongTienDien = 0;
  xuatThongTin.style.display = "block";
  const giaK0 = 500;
  const giaK1 = 650;
  const giaK2 = 850;
  const giaK3 = 1100;
  const giaK4 = 1300;
  if (khoiLuong >= 0 && khoiLuong <= 50) {
    tongTienDien = giaK0 * khoiLuong;
  } else if (khoiLuong > 50 && khoiLuong <= 100) {
    tongTienDien = giaK0 * 50 + giaK1 * (khoiLuong - 50);
  } else if (khoiLuong > 100 && khoiLuong <= 200) {
    tongTienDien = giaK0 * 50 + giaK1 * 50 + giaK2 * (khoiLuong - 100);
  } else if (khoiLuong > 200 && khoiLuong <= 350) {
    tongTienDien =
      giaK0 * 50 + giaK1 * 50 + giaK2 * 100 + giaK3 * (khoiLuong - 200);
  } else {
    tongTienDien =
      giaK0 * 50 +
      giaK1 * 50 +
      giaK2 * 100 +
      giaK3 * 150 +
      giaK4 * (khoiLuong - 350);
  }
  var xuatTen = document.createElement("p");
  xuatTen.innerHTML = "Tên khách hàng : " + tenKH;
  var xuatTien = document.createElement("p");
  xuatTien.innerHTML = "Tổng tiền điện : " + tongTienDien + " VND";
  xuatThongTin.appendChild(xuatTen);
  xuatThongTin.appendChild(xuatTien);
}
