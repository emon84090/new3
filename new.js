
//number sheet/////////


function myfun() {
	
	var marks= document.getElementById("numbersheet").value;

	if (marks>100 || 0>marks) {

		document.getElementById("result").value="Your Number Invalid";
	}

	else if (marks>=80 && marks<=100) {

		document.getElementById("result").value="Congras Your Result = A+";
	}

 else if (marks>=70 && marks<=79) {

		document.getElementById("result").value="Your result = A";
	}

	else if (marks>=60 && marks<=69) {

		document.getElementById("result").value="Your result = A-";
	}

	else if (marks>=50 && marks<=59) {

		document.getElementById("result").value="Your result = B";
	}

	else if (marks>=40 && marks<=49) {

		document.getElementById("result").value="Your result = C";
	}
	else if (marks>=33 && marks<=39) {

		document.getElementById("result").value="Your result = D";
	}
	
	else{

		document.getElementById("result").value="Your result = Fail (try next time)";
	}


}

//number sheet/////////


function myfun2(){

var weight= document.getElementById("weight").value;

var height=document.getElementById("height").value;



height=height*12;
height=height*0.025;

newBmi=weight/(height*height);


var mynewbmi=Math.round(newBmi);

document.getElementById("showord").value=mynewbmi;



}

//BMI/////////

function myOnlight(){


document.getElementById("emon").src="pic_bulbon_tvpcg5 (1).png";


}

function myOfflight(){


document.getElementById("emon").src="pic_bulboff_to4zaq.png";


}


///////Love Calculator/////////




const myfun4=()=>{


var fname=document.getElementById("fname").value;

var lname=document.getElementById("lname").value;

if (fname.length<3) {

	alert("minimum 3 number");
}


else if (fname.length=="") {

	alert("enter valid name");
}


else if (!isNaN(fname)) {

	alert("number not allowed");
}



if (lname.length<3) {

	alert("minimum 3 number");
}


else if (lname.length=="") {

	alert("enter valid name");
}


else if (!isNaN(lname)) {

	alert("number not allowed");
}

else{


var d=Math.floor(Math.random()*100)+1;

document.getElementById("showresult").value=d+"%";


}




}


//////clock/////

var clock=setInterval(pijon,1000)


function pijon(){


var c=new Date();

var time=c.toLocaleTimeString();

document.getElementById("clock1").innerHTML=time;


}



function myemon(){

document.getElementById("js").classList.add("red");
document.getElementById("js").classList.remove("yellow");
document.getElementById("js").classList.remove("green");
document.getElementById("js").classList.remove("normal");



}


function myemon2(){

document.getElementById("js").classList.remove("red");
document.getElementById("js").classList.add("yellow");
document.getElementById("js").classList.remove("green");
document.getElementById("js").classList.remove("normal");



}

function myemon3(){

document.getElementById("js").classList.remove("green");
document.getElementById("js").classList.remove("red");
document.getElementById("js").classList.remove("yellow");
document.getElementById("js").classList.add("green");
document.getElementById("js").classList.remove("normal");



}


function myemon4(){

document.getElementById("js").classList.add("normal");
document.getElementById("js").classList.remove("red");
document.getElementById("js").classList.remove("yellow");
document.getElementById("js").classList.remove("green");
document.getElementById("js").classList.remove("normal");



}

