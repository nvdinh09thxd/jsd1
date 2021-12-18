function getName(){
	var name = DomID("hoten");
	alert("Ho ten la: "+name); 
}
function getAge(){
	var age = DomID("tuoi");
	alert("Tuoi la: "+age);
}
function getHeight(){
	var height = DomID("chieucao");
	alert("Chieu cao la: "+height); 
}
function getInfo(){
	var name = DomID("hoten");
	var age = DomID("tuoi");
	var height = DomID("chieucao");
	alert("Ten la: "+name+"\nTuoi la: "+age+"\nChieu cao la: "+height); 
}
function DomID(id){
	var element = document.getElementById(id).value;
	return element;
}