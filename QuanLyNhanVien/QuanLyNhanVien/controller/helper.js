function getDataInput() {
  var taiKhoanNV = document.getElementById("tknv").value;

  var nameNV = document.getElementById("name").value;

  var emailNV = document.getElementById("email").value;

  var passwordNV = document.getElementById("password").value;

  var ngayLamNV = document.getElementById("datepicker").value;

  var luongCBNV = document.getElementById("luongCB").value;

  var chucvuNV = document.getElementById("chucvu").value;

  var gioLamNV = document.getElementById("gioLam").value;

  var valid = true;
  valid =
    checkInput(taiKhoanNV, "tbTK") &
    checkInput(nameNV, "tbName") &
    checkInput(emailNV, "tbE") &
    checkInput(passwordNV, "tbMK") &
    checkInput(ngayLamNV, "tbNL") &
    checkInput(luongCBNV, "tbL") &
    checkInput(chucvuNV, "tbCV") &
    checkInput(gioLamNV, "tbGL");

  valid =
    checkTK(taiKhoanNV, "tbTK") &
    checkNameNV(nameNV, "tbName") &
    checkEmail(emailNV, "tbE") &
    checkPassWord(passwordNV, "tbMK") &
    checkDate(ngayLamNV, "tbNL") &
    checkSalary(luongCBNV, "tbL") &
    checkWorkTime(gioLamNV, "tbGL");

  if (!valid) {
    return;
  }

  var nhanVienNew = new NhanVien(
    taiKhoanNV,
    nameNV,
    emailNV,
    passwordNV,
    ngayLamNV,
    luongCBNV,
    chucvuNV,
    gioLamNV
  );
  return nhanVienNew;
}

/**
 * Tìm vị trí nhân viên:
 * Tìm theo tài khoảng nhân viên nên truyền vào function taiKhanNV.
 *
 * Cho chạy for nếu arrNhanVien[i].taiKhoan == tài khoản truyền vào thì vị trí nhân viên bằng i.
 *
 * Trả về vị trí nhân viên.
 */
function timViTriNV(taiKhoanNV) {
  var viTriNV = -1;
  for (let i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].taiKhoan == taiKhoanNV) {
      viTriNV = i;
    }
  }
  return viTriNV;
}
function pushInput(
  taiKhoanNV,
  nameNV,
  emailNV,
  passwordNV,
  ngayLamNV,
  luongCBNV,
  chucvuNV,
  gioLamNV
) {
  document.getElementById("tknv").value = taiKhoanNV;
  document.getElementById("name").value = nameNV;
  document.getElementById("email").value = emailNV;
  document.getElementById("password").value = passwordNV;
  document.getElementById("datepicker").value = ngayLamNV;
  document.getElementById("luongCB").value = luongCBNV;
  document.getElementById("chucvu").value = chucvuNV;
  document.getElementById("gioLam").value = gioLamNV;
}

function btnThemNhanVien() {
  document.getElementById("password").type = "password";
  document.getElementById("header-title").innerHTML = "Thêm nhân viên";
  document.getElementById("tknv").readOnly = false;
  document.getElementById("btnCapNhat").style.display = "none";
  document.getElementById("btnThemNV").style.display = "block";
  pushInput("", "", "", "", "", "", "", "");
}

//
//set local storage NV
function setLocalStorageNV(arrNhanVien) {
  localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}
// Hàm lấy giá trị từ local lên và sử dụng
function getStorage() {
  //check điều kiện nếu key gọi tới không có dưới local
  var arrNhanVienLocal = JSON.parse(localStorage.getItem("arrNhanVien"));
  if (arrNhanVienLocal != null) {
    //Nếu arrNhanVienLocal có giá trị sẽ lấy giá trị đó gán mới vào cho mảng arrSinhVien đang có
    arrNhanVien = arrNhanVienLocal;
  }
}
// function checkSearch() {
//   var patt = /cat/;
//   if (patt.test("Chào cat")) {
//     console.log("trong chuỗi có cat");
//   } else {
//     console.log("trong chuỗi không có cat");
//   }
// }
