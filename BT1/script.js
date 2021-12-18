do {
	var ten = prompt("Nhập vào tên: ");
} while (ten == "");
do {
	var namsinh = prompt("Nhập vào năm sinh: ");
} while (namsinh == "" && !parseInt(namsinh));
var currentTime = new Date();
var tuoi = currentTime.getFullYear() - namsinh;
document.write("Tên của bạn là: <strong>" + ten + "</strong>");
document.write("<br />Tuổi của bạn là: " + tuoi);