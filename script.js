window.onload = function () {
	//Reference the DropDownList.
	var ddlYears = document.getElementById("year");

	//Determine the Current Year.
	var currentYear = (new Date()).getFullYear();

	//Loop and add the Year values to DropDownList.
	for (var i = 1950; i <= currentYear - 1; i++) {
		var option = document.createElement("OPTION");
		option.innerHTML = i;
		option.value = i;
		ddlYears.appendChild(option);
	}

};
function checkfirstname() {
	let valid = false;
	let x = document.querySelector('#firstname').value.trim();
	let t = /^[A-Z a-z]*$/;
	let b = t.test(x);
	if (x == "") {
		document.getElementById("r1").innerHTML = 'required';
		return false;
	}
	else if (b == false) {
		document.getElementById("r1").innerHTML = "Must be only letter and first letter capital";
		return false;
	}
	else if (x.length < 3) {
		document.getElementById("r1").innerHTML = "Atleast three character";
	}
	else if (b == true || x != "") {
		document.getElementById("r1").innerHTML = " ";
		valid = true;
	}
	return valid;
}
function checklastname() {
	let valid = false;
	let x = document.querySelector('#lastname').value.trim();
	let t = /^[A-Z a-z]*$/i;
	let b = t.test(x);
	if (x == "") {
		document.getElementById("r2").innerHTML = 'required';

	}
	else if (b == false) {
		document.getElementById("r2").innerHTML = "Must be only letter and first letter capital";

	}
	else if (x.length < 3) {
		document.getElementById("r2").innerHTML = "Atleast three character";
	}
	else if (b == true && x != "") {
		document.getElementById("r2").innerHTML = " ";
		valid = true;
	}
	return valid;
}
function checkphone() {
	let valid = false;
	let x = document.getElementById("phone").value.trim();
	let t = /^[6-9]{1}[0-9]{9}$/;
	let b = t.test(x);
	if (x == "") {
		document.getElementById("r3").innerHTML = "required";
	}

	else if (b == false) {
		document.getElementById('r3').innerHTML = "It should be a number, and should be starting with 6/7/8/9, and must be a 10 digit! Kindly dont include +0 or +91 country codes at the starting!!"
	}
	else if (x != "" || b == true) {
		document.getElementById("r3").innerHTML = " ";
		valid = true;
	}
	return valid;
}
function checkoffice() {
	let valid = false;
	let x = document.getElementById("office").value.trim();
	let t = /^(\d{3}[-]?){2}\d{4}$/;
	let b = t.test(x);
	if (x == "") {
		document.getElementById("r4").innerHTML = "required";
	}
	else if (b == false) {
		document.getElementById("r4").innerHTML = "Must be in '123-123-5678' format";
	}
	else if (x != "" || b == true) {
		document.getElementById("r4").innerHTML = " ";
		valid = true;
	}
	return valid;
}
function checkemail() {
	let valid = false;
	let x = document.getElementById("email").value.trim();
	const t = /^[A-z a-z 0-9 .-]{3,}@[A-z a-z]{3,}[.]{1}[a-z]{3,20}$/;
	let b = t.test(x);
	if (x == "") {
		document.getElementById("r5").innerHTML = "required";
	}
	else if (b == false) {
		document.getElementById("r5").innerHTML = "invlaid";
	}
	else if (x != "" || b == true) {
		document.getElementById("r5").innerHTML = " ";
		valid = true;
	}
	return valid;
}
function checkpassword() {
	let valid = false;
	let x = document.getElementById("password").value.trim();
	let y = document.getElementById("conpassword").value.trim();
	const t = /^[A-z a-z 0-9]{8,12}$/;
	let b = t.test(x);
	if (x == "") {
		document.getElementById("r6").innerHTML = "required";
	}
	else if (b == false) {
		document.getElementById('r6').innerHTML = "Must be Ex. 'abc123@/.' format";
	}
	else if (x != "" || b == true) {
		document.getElementById("r6").innerHTML = " ";
		valid = true;
	}
	if (x == y) {
		document.getElementById("r7").innerHTML = " ";
	}
}
function checkconpassword() {
	let valid = false;
	let x = document.getElementById("password").value.trim();
	let y = document.getElementById("conpassword").value.trim();
	if (y != x) {
		document.getElementById("r7").innerHTML = "Does not Match!";
	}
	else if (x == y) {
		document.getElementById("r7").innerHTML = " ";
		valid = true;
	}
	return valid;
}
function checkage() {
	let valid = false;
	let x = document.querySelector("#month").value.trim();
	let y = document.querySelector("#day").value.trim();
	let z = document.querySelector("#year").value.trim();
	let dob = new Date();
	dob.setMonth(x);
	dob.setDate(y);
	dob.setFullYear(z);
	let currentdate = new Date();
	document.getElementById("age").value = currentdate.getFullYear() - dob.getFullYear();
	let age = currentdate.getFullYear() - dob.getFullYear();
	if (isNaN(age)) {
		document.getElementById("age").value = "please enter dob";
		document.getElementById("r8").innerHTML = "required";
	}
	else if (age <= 16) {
		document.getElementById("r8").innerHTML = "Must be 16+";
	}
	else if (age > 16) {
		document.getElementById("r8").innerHTML = " ";
		valid = true;
	}
	return valid;
}
function checkgender() {
	let x = document.getElementById('residence1').checked;
	let y = document.getElementById('residence1').checked;
	if (x == false && y == false) {
		document.getElementById("r9").innerHTML = "required";
	}
	else {
		document.getElementById("r9").innerHTML = " ";
	}
	let c1 = document.getElementById('checkbox_sample18').checked;
	let c2 = document.getElementById('checkbox_sample19').checked;
	let c3 = document.getElementById('checkbox_sample20').checked;
	if (c1 == false && c2 == false && c3 == false) {
		document.getElementById("r10").innerHTML = "required";
	}
	else {
		document.getElementById("r10").innerHTML = " ";
	}

}
function checktextarea() {
	let x = document.getElementById("textarea").value.trim();
	let t = /^[A-Z a-z]*$/;
	let b = t.test(x);
	if (x == "") {
		document.getElementById("r11").innerHTML = "required";
	}
	else if (x != "" || b == true) {
		document.getElementById("r3").innerHTML = " ";
		valid = true;}
}
function validate() {
	var fname = checkfirstname();
	var lname = checklastname();
	var pn = checkphone();
	var email = checkemail();
	var pwd = checkpassword();
	var cpwd = checkconpassword();
	var age = checkage();
	var gen = checkgender();
	var feild = checkoffice();
	var imp = checktextarea();
	//  var tick=checked();
	if (fname == " " && lname == " " && pn == " " && email == " "  && pwd == " " && cpwd == " " && age == " " && gen == " " && feild == " " & imp == " ") {
		alert(" not submit ");


	}
	else {
		alert(" submit");
	}
}
