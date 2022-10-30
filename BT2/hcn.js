function tinhDienTich() {
	var chieudai = document.getElementById("dai").value;
	var chieurong = document.getElementById("rong").value;
	if (chieudai == "" || chieurong == "") alert("Vui long nhap kich thuoc!");
	else {
		chieudai = parseInt(chieudai);
		chieurong = parseInt(chieurong);
		if (!chieudai || !chieurong || chieurong >= chieudai) {
			alert("Nhap kich thuoc sai, vui long nhap lai!");
		} else {
			var dientich = chieudai * chieurong;
			var ketqua = confirm("Dien tich hinh chu nhat la: " + dientich);
			if (ketqua) {
				window.location.href = "https://edu.vinaenter.vn/gioi-thieu";
			}
		}
	}
}
//alert(tinhDienTich());