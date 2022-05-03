$(document).ready(() => {
  $("h1").click(function (e) {
    e.preventDefault();
    window.location.href = "/";
  });

  $(".btn").click((e) => {
    e.preventDefault();
    alert("Thanh toán Thành công!");
  });
});
