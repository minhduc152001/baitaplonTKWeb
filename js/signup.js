const email = $("#email");
const pw = $("#pw");
const pwRepeat = $("#pw-repeat");

$(document).ready(() => {
  $(".signupbtn").click(function (e) {
    e.preventDefault();
    if (email.val() && pw.val() && pwRepeat.val()) {
      if (pw.val() == pwRepeat.val()) {
        localStorage.setItem("email", email.val());
        localStorage.setItem("pw", pw.val());
        alert("Bạn đã đăng ký thành công!");
      } else {
        alert("Hai mật khẩu phải trùng nhau!");
      }
    } else {
      alert("Bạn hãy nhập đầy đủ thông tin!");
    }
  });
});
