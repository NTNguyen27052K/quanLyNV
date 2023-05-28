function checkInput(dataInput, idAlert) {
  if (dataInput) {
    document.getElementById(idAlert).innerHTML = "";
    return true;
  } else {
    document.getElementById(idAlert).innerHTML = "Vui lòng nhập lại";
    return false;
  }
}
//! check validation
// check tài khoản
function checkTK(dataInput, idAlert) {
  var regexTK = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{4,6}$/g;
  var tempTK = regexTK.test(dataInput);
  if (tempTK) {
    document.getElementById(idAlert).innerHTML = "";
    return true;
  } else {
    document.getElementById(idAlert).innerHTML =
      "Vui lòng nhập lại tên tài khoản(4-6 ký số, không có khoảng trống).";
    return false;
  }
}
// check tên nhân viên
function checkNameNV(dataInput, idAlert) {
  // /^([^0-9]*)$/;
  var regexNameNV = /^(?!.* )([\p{L} ])+$/u;
  // var regexNameNV = /^[A-Z\p{L}]+$/i;
  var tempNameNV = regexNameNV.test(dataInput);
  if (tempNameNV) {
    document.getElementById(idAlert).innerHTML = "";
    return true;
  } else {
    document.getElementById(idAlert).innerHTML =
      "Vui lòng nhập lại tên nhân viên.";
    return false;
  }
}
// check email
function checkEmail(dataInput, idAlert) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var tempEmail = regexEmail.test(dataInput);
  if (tempEmail) {
    document.getElementById(idAlert).innerHTML = "";
    return true;
  } else {
    document.getElementById(idAlert).innerHTML = "Vui lòng nhập lại email";
    return false;
  }
}
// check password
function checkPassWord(dataInput, idAlert) {
  var regexPassWord =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
  var tempPass = regexPassWord.test(dataInput);
  if (tempPass) {
    document.getElementById(idAlert).innerHTML = "";
    return true;
  } else {
    document.getElementById(idAlert).innerHTML =
      "Vui lòng nhập lại password! Password phải có 8 đến 15 ký tự, có ít nhất 1 số, 1 ký tự đặt biệt và một chữ cái viết hoa.";
    return false;
  }
}
// check ngày làm
function checkDate(dataInput, idAlert) {
  var regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  var tempDate = regexDate.test(dataInput);
  if (tempDate) {
    document.getElementById(idAlert).innerHTML = "";
    return true;
  } else {
    document.getElementById(idAlert).innerHTML = "Vui lòng nhập lại ngày làm.";
    return false;
  }
}
// check lương cơ bản
function checkSalary(dataInput, idAlert) {
  var regexSalary = /^([1-9]\d\d\d\d\d\d|1[0-9]\d\d\d\d\d\d|20000000)$/;
  var tempSalary = regexSalary.test(dataInput);
  if (tempSalary) {
    document.getElementById(idAlert).innerHTML = "";
    return true;
  } else {
    document.getElementById(idAlert).innerHTML =
      "Vui lòng nhập lại lương(1tr-20tr).";
    return false;
  }
}
// check giờ làm
function checkWorkTime(dataInput, idAlert) {
  var regexWorkTime = /^(8[0-9]|9[0-9]|[1-2]\d\d|200)$/;
  var tempWorkTime = regexWorkTime.test(dataInput);
  if (tempWorkTime) {
    document.getElementById(idAlert).innerHTML = "";
    return true;
  } else {
    document.getElementById(idAlert).innerHTML =
      "Vui lòng nhập số giờ làm(80-200).";
    return false;
  }
}
