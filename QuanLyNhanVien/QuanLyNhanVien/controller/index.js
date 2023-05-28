var arrNhanVien = [];
var arrFindNVXT = [];

getStorage();
// console.log(arrNhanVien);
renderGiaoDien(arrNhanVien);
// console.log(arrNhanVien);

function renderGiaoDien(arrRender) {
  var content = "";
  for (var i = 0; i < arrRender.length; i++) {
    var nhanVien = new NhanVien();
    var nhanVienItem = arrRender[i];
    Object.assign(nhanVien, nhanVienItem);
    content += `
    <tr class="" style="font-size: 16px; color: black;border-collapse: collapse">
    <td style="vertical-align: middle">
    ${nhanVien.taiKhoan}
    </td>
    <td style="vertical-align: middle">
    ${nhanVien.name}
    </td>
    <td style="vertical-align: middle">
    ${nhanVien.email}
    </td>
    <td style="vertical-align: middle">
    ${nhanVien.ngayLam}
    </td>
    <td style="vertical-align: middle">
    ${nhanVien.chucVu}
    </td>
    <td style="vertical-align: middle">
      ${nhanVien.tongLuong()}
    </td>
    <td style="vertical-align: middle">
      ${nhanVien.xepLoai()}
    </td>

    <td class="d-flex">
    <button 
    class="btn mr-2" 
    style="vertical-align: middle"
    data-toggle="modal"
    data-target="#myModal"
    id="btnEdit"
    onclick="editNV('${nhanVien.taiKhoan}')"
    >
    <i class="fa fa-pencil" aria-hidden="true"></i>
    </button>
    <button class="btn" style="vertical-align: middle"
    onclick="deleteNV('${nhanVien.taiKhoan}')">
    <i class="fa fa-trash" aria-hidden="true"></i>
    </button>
    </td>
    </tr>
  `;
  }
  /**
   * Khi onclick vào nút xóa thì truyền vào hàm deleteNV chuỗi 'arrNhanVien[i].taiKhoan'
   */
  document.getElementById("tableDanhSach").innerHTML = content;
}
//! add
function quanLyNhanVien() {
  if (getDataInput()) {
    arrNhanVien.push(getDataInput());
    setLocalStorageNV(arrNhanVien);
    renderGiaoDien(arrNhanVien);
    pushInput("", "", "", "", "", "", "", "");
  }
}
//! delete
function deleteNV(taiKhoanNV) {
  var viTriNV = timViTriNV(taiKhoanNV);
  if (viTriNV != -1) {
    arrNhanVien.splice(viTriNV, 1);
    setLocalStorageNV(arrNhanVien);
    renderGiaoDien(arrNhanVien);
  }
}
//! editNV
function editNV(taiKhoanNV) {
  document.getElementById("btnThemNV").style.display = "none";
  document.getElementById("btnCapNhat").style.display = "block";
  document.getElementById("header-title").innerHTML = "Cập nhật thông tin";
  document.getElementById("tknv").readOnly = true;

  document.getElementById("password").type = "text";
  var viTriNV = timViTriNV(taiKhoanNV);

  pushInput(
    arrNhanVien[viTriNV].taiKhoan,
    arrNhanVien[viTriNV].name,
    arrNhanVien[viTriNV].email,
    arrNhanVien[viTriNV].password,
    arrNhanVien[viTriNV].ngayLam,
    arrNhanVien[viTriNV].luongCoBan,
    arrNhanVien[viTriNV].chucVu,
    arrNhanVien[viTriNV].gioLamTrongThang
  );
}
function reloadDataNV() {
  var nhanVien = getDataInput();
  var viTriNV = timViTriNV(nhanVien.taiKhoan);
  arrNhanVien[viTriNV] = nhanVien;
  // console.log(arrNhanVien[viTriNV]);
  setLocalStorageNV(arrNhanVien);
  renderGiaoDien(arrNhanVien);
}

function findNVXS() {
  var loaiNV = document.getElementById("searchName").value;

  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVienXL = new NhanVien();

    var nhanVienItem = arrNhanVien[i];

    Object.assign(nhanVienXL, nhanVienItem);
    var arrNVXL = nhanVienXL.xepLoai().split(/\s/);

    arrNVXL.splice(0, 2);
    arrtemp = arrNVXL.join(" ");

    if (arrtemp == loaiNV) {
      arrFindNVXT.push(nhanVienXL);
      renderGiaoDien(arrFindNVXT);
    } else if (loaiNV == "") {
      renderGiaoDien(arrNhanVien);
    } else if (nhanVienXL.xepLoai() == loaiNV) {
      arrFindNVXT.push(nhanVienXL);
      renderGiaoDien(arrFindNVXT);
    }
  }
}
