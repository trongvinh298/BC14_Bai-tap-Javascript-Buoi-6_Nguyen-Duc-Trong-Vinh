// Bài tập 1: Quản lý tuyển sinh
document.getElementById("submit").addEventListener("click", xuatKetQua);
function xuatKetQua() {
  var diemChuan = document.getElementById("diemChuan").value;
  var diemToan = document.getElementById("diemToan").value;
  var diemLy = document.getElementById("diemLy").value;
  var diemHoa = document.getElementById("diemHoa").value;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = parseInt(document.getElementById("doiTuong").value);
  var diemKhuVuc = 0;
  var diemDoiTuong = 0;
  var xuatKetQua = document.getElementById("xuatKetQua");
  xuatKetQua.style.display = "block";
  var ketQua = document.createElement("span");
  var xuatDiemTong = document.createElement("span");
  xuatKetQua.innerHTML = "";
  xuatKetQua.appendChild(ketQua);
  xuatKetQua.appendChild(xuatDiemTong);
  switch (khuVuc) {
    case "A":
      {
        diemKhuVuc = 2;
      }
      break;
    case "B":
      {
        diemKhuVuc = 1;
      }
      break;
    case "C":
      {
        diemKhuVuc = 0.5;
      }
      break;
    default: {
      diemKhuVuc = 0;
    }
  }
  switch (doiTuong) {
    case 1:
      {
        diemDoiTuong = 2.5;
      }
      break;
    case 2:
      {
        diemDoiTuong = 1.5;
      }
      break;
    case 3:
      {
        diemDoiTuong = 1;
      }
      break;
    default: {
      diemDoiTuong = 0;
    }
  }
  var tongDiem = +diemToan + +diemLy + +diemHoa + +diemKhuVuc + +diemDoiTuong;
  if (
    tongDiem >= diemChuan &&
    diemToan !== 0 &&
    diemLy !== 0 &&
    diemHoa !== 0
  ) {
    ketQua.innerHTML = "Thí sinh đã đậu với tổng điểm là: ";
    xuatDiemTong.innerHTML = tongDiem;
  } else {
    ketQua.innerHTML = "Thí sinh đã rớt với tổng điểm là: ";
    xuatDiemTong.innerHTML = tongDiem;
  }
}
