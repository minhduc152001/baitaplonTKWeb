const email = $("#email");
const pw = $("#pw");

$(document).ready(() => {
  $(".signupbtn").click((e) => {
    e.preventDefault();
    if (
      email.val() == localStorage.getItem("email") &&
      pw.val() == localStorage.getItem("pw")
    ) {
      alert("Bạn đã đăng nhập thành công!");
      window.location.replace("/");
    } else {
      alert("Lỗi: Sai tài khoản hoặc mật khẩu!");
    }
  });

  $(".cancelbtn").click((e) => {
    e.preventDefault();
    window.location.replace("/");
  });
});
