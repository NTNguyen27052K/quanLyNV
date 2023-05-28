function NhanVien(
  _taiKhoan,
  _name,
  _email,
  _password,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLamTrongThang,
  _tongLuong,
  _loaiNhanVien
) {
  this.taiKhoan = _taiKhoan;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLamTrongThang = _gioLamTrongThang;

  this.quyDoiTienSangVN = function (tien) {
    var tienVN = tien.toLocaleString("vn-VN", {
      style: "currency",
      currency: "VND",
    });
    return tienVN;
  };

  this.tongLuong = function () {
    if (this.chucVu == "Sếp") {
      return this.quyDoiTienSangVN(this.luongCoBan * 3);
    } else if (this.chucVu == "Trưởng phòng") {
      return this.quyDoiTienSangVN(this.luongCoBan * 2);
    } else {
      return this.quyDoiTienSangVN(this.luongCoBan);
    }
  };
  this.xepLoai = function () {
    if (this.gioLamTrongThang >= 192) {
      return "Nhân viên xuất sắt";
    } else if (this.gioLamTrongThang >= 176 && this.gioLamTrongThang <= 192) {
      return "Nhân viên giỏi";
    } else if (this.gioLamTrongThang >= 160 && this.gioLamTrongThang <= 176) {
      return "Nhân viên khá";
    } else if (this.gioLamTrongThang < 160) {
      return "Nhân viên trung bình";
    }
  };
}
