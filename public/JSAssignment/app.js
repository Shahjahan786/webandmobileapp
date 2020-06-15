//Varibles
 vistorCount = 0;

//Assignment# 1

//Task 1]
function assignment1_task1(){
	alert("Hello visitor! You are welcome");
}


//Task 2
function assignment1_task2(){
	alert("Error! Please enter a valid password.");
}
//Task 3
function assignment1_task3(){
	alert("Welcome to JS Land...\nHappy Coding!");
}

//Task 4
function assignment1_task4(){
	alert("Welcome to JS Land...");
	alert("Happy Coding!");
}

//Task 5
function assignment1_task5(){
	alert("Hello... I can run JS through my web browser\'s console");
	
}

//Task 6
function assignment1_task6(){
	alert("Usage of alert in HTML project, you will be redirected to a new page");
	window.location.href = "assignment6.html";
	
}

//Task 7
function assignment1_task7(){
	alert("Placement of <script> tag, you will be redirected to a new page");
	window.location.href = "assignment6.html";
	
}






//Assignment# 2

//Task 1]
function assignment2_task1(){
	var username;
	alert("declared varible username");
}


//Task 2
function assignment2_task2(){
	var myName  = "Shahjahan Samoon";
	alert("defined varible myName  with value "+myName );
}
//Task 3
function assignment2_task3(){
	var message = "Hello World!";
	alert(message);
}

//Task 4
function assignment2_task4(){

	var name = "John Doe";
	var age  = 15;
	var qualification = "Certified Mobile Application Development";

	alert(name);
	alert(age + " years old");
	alert(qualification);
}

//Task 5
function assignment2_task5(){
	var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
	alert(pizza);
	
}

//Task 6
function assignment2_task6(){
	var email = "example@example.com";
	alert("My email address is "+email);

	
}

//Task 7
function assignment2_task7(){
	var book = "A smarter way to learn JavaScript";
	alert("I am trying to learn from the "+book);
	
}

//Task 8
function assignment2_task8(){
	document.write("Yah! I can write html content throgh Javascript.");
	
}


//Task 9
function assignment2_task9(){
	const msg = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
	alert(msg);
	
}

//Assignment# 3

//Task 1]
function assignment3_task1(){
	var age = 15;
	alert("I am "+ age +" years old.");
}


//Task 2
function assignment3_task2(){
	
	vistorCount++;
	alert("You have visited this site " + vistorCount + " times");
	
}
//Task 3
function assignment3_task3(){
	var birthYear  = 1989;
	document.write("My birth year is "+birthYear+"<br>Data type of my declared variable is "+typeof(birthYear));
}

//Task 4
function assignment3_task4(){

	var product = "T-shirt";
	var quantity  = 5;
	var name = "John Doe";

	document.write("<b>"+name+"</b> ordered <b>"+quantity+" "+product+"</b>(s) on XYZ Clothing store")

	
}

//Assignment# 4

//Task 1]
function assignment4_task1(){
	var age, name, city;
	alert("declared 3 vaiables in 1 line");
}


//Task 2
function assignment4_task2(){
	//five legal varible names
	var name;
	var age;
	var surname;
	var address;
	var mobile;


	//five illegal varible names
	/*var 1stName;
	var food+nonfood;
	var age_;
	var #num;
	var break;*/
	alert("Declared 5 legal & 5 illegal variable names. ");
	
}
//Task 3
function assignment4_task3(){
	
	document.write("<h1>Rules for naming JS variables</h1>"
		+"<p>Varible names can only contain letters, numbers, $ and _. for example:$my_1stVariable.</p>"
		+"<p>Variable must begin with letter, $ and _. For example $name, _name and name.</p>"
		+"<p>Variable names are case sensitive.</p>"
		+"<p>Variable names should not be JS keywords.</p>" );
}




//Assignment# 5

//Task 1]
function assignment5_task1(){
	var num1 = 3;
	var num2 = 5;
	document.write("sum of " + num1 + " and " + num2 + " is " + (num1+num2));
}


//Task 2
function assignment5_task2(){
	var num1 = 3;
	var num2 = 5;
	document.write("division of " + num1 + " and " + num2 + " is " + (num1/num2) +
		"<br>difference of " + num1 + " and " + num2 + " is " + (num1-num2) +
		"<br>Product of " + num1 + " and " + num2 + " is " + (num1*num2)
		);
}
//Task 3
function assignment5_task3(){
	var aValue;
	var html = "Value after variable declaration is: "+aValue ;
	aValue = 5;
	html += "<br>Initial value: "+aValue;
	aValue++;
	html += "<br>Value after increment is: "+aValue;

	aValue += 7;

	html += "<br>Value after addition is: " + aValue;

	aValue--;

	html += "<br>Value after decrement is: " + aValue;

	aValue %= 3;

	html += "<br>The remainder is :  " + aValue;

	document.write(html);


}

//Task 4
function assignment5_task4(){

	var count = 5;
	var price = 600;
	document.write("Total cost to buy "+count+ " tickets a movie is " + (count * price));
}

//Task 5
function assignment5_task5(){
	
	var table = 4;

	var html = "Table of "+ table;

	for (i = 1; i<=10; i++){
		html += "<br> "+table +" x " + i +" = " + (table * i);

	}

	document.write(html);
	
}

//Task 6
function assignment5_task6(){
	
	var c = 25;
	var cf = (c * 9/5) + 32;
	var f = 70;
	var fc = (f - 32) * 5/9;

	document.write(c+"<sup>o</sup>C is " + cf + "<sup>o</sup>F<br>" +f+"<sup>o</sup>F is " + fc + "<sup>o</sup>C");


	
}

//Task 7
function assignment5_task7(){
	
	var price1 = 650;
	var price2 = 100;
	var quantity1 = 3;
	var quantity2 = 7;
	var charges = 100;

	var html = "<h1>Shopping Cart</h1>";

	html += "<br>Price of Item 1 is " + price1;
	html += "<br>Quantity of Item 1 is " + quantity1;
	html += "<br>Price of Item 2 is " + price2;
	html += "<br>Quantity of Item 2 is " + quantity2;
	html += "<br>Shipping charges are " + charges;
	html += "<br>Total cost of your order is " + ((price1*quantity1) + (price2*quantity2) + charges);

	document.write(html);


	
}

//Task 8
function assignment5_task8(){
	
	var marks = 804;
	var total = 980;
	

	var html = "<h1>Marks Sheet</h1>";

	html += "<br>Total Marks " + total;
	html += "<br>Obtained Marks " + marks;
	html += "<br>Percentage " + (marks / total * 100) + "%";

	document.write(html);

	
}


//Task 9
function assignment5_task9(){
	var dollor = 104.80;
	var riyal = 28;
	var dCount = 10;
	var rCount = 25;


	

	var html = "<h1>Marks Sheet</h1>";
	html += "Total currency in PKR " + ((dollor * dCount) + (riyal * rCount));

	document.write(html);
	
}

//Task 10
function assignment5_task10(){
	var value = 1;

	var result = (((value + 5) * 10) / 2);
	document.write("Expression (((value + 5) * 10) / 2) : " + result);
}

//Task 11
function assignment5_task11(){
	var currentYear = 2016;
	var birthYear = 1992;
	var age = currentYear - birthYear;
    document.write("Current Year: "+currentYear+"<br>Birth Year: "+birthYear+"<br>Your age is: "+ age);

}

//Task 12
function assignment5_task12(){
	var radius = 20;
	var circ = 2 * radius * 3.142;
	var area = 3.142 * (radius * radius);
	html = "<h1>The Geometrizer</h1>";
	html += "<br>Radius of a circle is: " + radius;
	html += "<br>The circumference is: " + circ;
	html += "<br>The area of circle is: " + area;

	document.write(html);
}

//Task 13
function assignment5_task13(){

	var snake = "Chocolate Chip";
	var age = 15;
	var estAge = 65;
	var snakesPerDay = 3;

	html = "<h1>Life Time Supply Calculator</h1>";
	html += "<br>Favourite Snack: "+ snake;
	html += "<br>Current Age: "+ age;
	html += "<br>Estimated maximum age: "+ estAge;
	html += "<br>Amount of snacks per day: "+ snakesPerDay;
	
	html += "<br>You will need "+ ((estAge - age) * (365 * snakesPerDay)) +" to last you until the ripe old age of "+estAge;
	document.write(html);
}

//Assignment# 6-9

//Task 1]
function assignment6_task1(){
	var a = 10;
	html = "Result:"
	html += "<br>Value of a is "+a;
	html += "<br>------------------------<br>"

	html += "<br>The value of ++a is "+ (++a);
	html += "<br>Now value of a is "+ a + "<br>";

	html += "<br>The value of a++ is "+ (a++);
	html += "<br>Now value of a is "+ a + "<br>";

	html += "<br>The value of --a is "+ (--a);
	html += "<br>Now value of a is "+ a + "<br>";

	html += "<br>The value of a-- is "+ (a--);
	html += "<br>Now value of a is "+ a + "<br>";


	document.write(html);

}


//Task 2
function assignment6_task2(){
	var a = 2, b = 1; 
	var result = --a - --b + ++b + b--; 

	var html = "a is : "+a;
	html += "<br> b is: "+b;
	html += "<br> result is: "+result;
	document.write(html);
}
//Task 3
function assignment6_task3(){
	var name = prompt("What is your name? ");
	alert("Hello "+ name);
}

//Task 4
function assignment6_task4(){

	var num = prompt("Enter table: i.e 4 ");
	var table = 5;

	if(num != ""){
		table = parseInt(num);
	}

	var html = "Table of "+ table;

	for (i = 1; i<=10; i++){
		html += "<br> "+table +" x " + i +" = " + (table * i);

	}

	document.write(html);
}

//Task 5
function assignment6_task5(){
	var sub1 = prompt("Enter 1st subject name: ");
	var sub2 = prompt("Enter 2nd subject name: ");
	var sub3 = prompt("Enter 3rd subject name: ");

	var marks1 = parseInt(prompt("Enter "+sub1+" marks: "));
	var marks2 = parseInt(prompt("Enter "+sub2+" marks: "));
	var marks3 = parseInt(prompt("Enter "+sub3+" marks: "));

	perc1 =  ((marks1/100) * 100);
	perc2 =  ((marks2/100) * 100);
	perc3 =  ((marks3/100) * 100);


	html = "<table>";
	html += "<tr><th>Subject</th> <th>Total Marks</th>  <th>Obtained Marks</th>  <th>Percentage</th></tr>";
	html += "<tr><td>"+sub1+"</td> <td>100</td>  <td>"+marks1+"</td>  <td>"+ perc1 +"%</td></tr>";
	html += "<tr><td>"+sub2+"</td> <td>100</td>  <td>"+marks2+"</td>  <td>"+ perc2 +"%</td></tr>";
	html += "<tr><td>"+sub3+"</td> <td>100</td>  <td>"+marks3+"</td>  <td>"+ perc3 +"%</td></tr>";
	html += "<tr><td></td> <th>300</th>  <th>"+(marks1+marks2+marks3)+"</th>  <th>"+ (perc1+perc2+perc3)/3 +"%</th></tr>";

	html += "</table>";


	document.write(html);
	
}

//Assignment# 9-11

//Task 1]
function assignment7_task1(){
	var city = prompt("Enter city:");
	if(city == "Karachi"){
		alert("Welcome to city of lights");
	}
}


//Task 2
function assignment7_task2(){
	var gender = prompt("Enter gender:");
	if(gender == "Male" || gender == "male"){
		alert("Good Morning Sir");
	}else{
		alert("Good Morning Maa\'m");
	}
}
//Task 3
function assignment7_task3(){
	
var color = prompt("Enter trafic light color:");
	if(color.toLowerCase() == "red"){
		alert("Must Stop ");
	}else if(color.toLowerCase() == "yellow"){
		alert("Ready to move ");
	}else if(color.toLowerCase() == "green"){
		alert("Move now ");
	}

}

//Task 4
function assignment7_task4(){
var fuel = parseFloat(prompt("Enter fuel in litters:"));
	if(fuel < 0.25){
		alert("Please refill the fuel in your car");
	}
}

//Task 5
function assignment7_task5(){
	
	alert("a: "+ " given condition for variable a is true\n"+
			"b: "+ "alert not shown\n"+
			"c: "+ "condition 2 is true and condition 4 is true\n"+
			"d: "+ "The cost equals\n"+
			"e: "+ "True\n"+
			"f: "+ "car is smaller than cat");
	
}

//Task 6
function assignment7_task6(){
	var marks = parseInt(prompt("Enter your marks"));
	var total = parseInt(prompt("Enter total marks"));

	var perc = (marks / total) * 100;

	var grade = "";
	var comments = "";

	if(perc >= 80){
		grade = "A-One";
		comments = "Excellent";
	}else if(perc >= 70){
		grade = "A";
		comments = "Good";
	}else if(perc >= 60){
		grade = "B";
		comments = "You need to improve";
	}else{
		grade = "Fail";
		comments = "Sorry";
	}

	var html = "<h1>Masks Sheet</h1>";

	html += "<br>Total Marks: " + total;
	html += "<br>Marks obtained: " + marks;
	html += "<br>Percentage: " + perc + "%";
	html += "<br>Grade: " + grade;
	html += "<br>Remarks: " + comments;

	document.write(html);


	
}

//Task 7
function assignment7_task7(){
	
	var guess = parseInt(prompt("Guess Number between 1-10: "));
	var number = Math.floor((Math.random() * 10) + 1);

	if(number == guess){
		alert("Bingo! Correct answer");
	}else if(number+1 == guess){
		alert("Close enough to the correct answer");
	}else{
		alert("Nooooo");
	}
	
}

//Task 8
function assignment7_task8(){
	
	
var num = parseInt(prompt("Enter any number"));

	if(num%3 == 0){
		alert("number is divisible by 3");
	}
}


//Task 9
function assignment7_task9(){
	
	var num = parseInt(prompt("Enter any number"));

	if(num%2 == 0){
		alert("number is even");
	}else{
		alert("number is odd");
	}
}


//Task 10
function assignment7_task10(){

	var T = parseInt(prompt("Enter Temprature"));
	if (T > 40){ 
		alert("It is too hot outside.");
	} else if (T > 30){  
		alert("The Weather today is Normal.");
	}else if(T > 20){  
		alert("Today’s Weather is cool.");
	} else if (T > 10){  
		alert("OMG! Today’s weather is so Cool.");
	}


}

//Task 11
function assignment7_task11(){
	var num1 = parseInt(prompt("Enter First number"));
	var num2 = parseInt(prompt("Enter 2nd number"));
	var op = prompt("Enter operator +,-,*, / & % ");
	var res = "";

	if(op == "+"){
		res = num1 + num2;
	}else if(op == "-"){
		res = num1 - num2;
	}else if(op == "%"){
		res = num1 % num2;
	}else if(op == "*"){
		res = num1 * num2;
	}else if(op == "/"){
		res = num1 / num2;
	}else{
		res = "Invalid operator";
	}

	alert(res);
}

//Assignment# 12-13

//Task 1]
function assignment8_task1(){

	var letter = prompt("Enter any letter");

	var n = letter.charCodeAt(0);
	console.log(n);
	var msg = "Unknown";
	if(n >= 65 && n <= 97){
		 msg = "Uppercase";
	}else if(n >= 97 && n <= 122){
		 msg = "Lowercase";	
	}else if(n >= 48 && n <= 57){
	 	msg = "Number";
	}

	alert(msg);
}


//Task 2
function assignment8_task2(){

	var num1 = parseInt(prompt("Enter First number"));
	var num2 = parseInt(prompt("Enter 2nd number"));

	var msg = "";

	if(num1 > num2){
		msg = "First Number "+num1+" is greater";
	}else if(num2 > num1){
		msg = "2nd Number "+num2+" is greater";
	}else if(num1 == num2){
		msg = "Both numbers are equal";
	}

	alert(msg);
}
//Task 3
function assignment8_task3(){
	var num = parseInt(prompt("Enter First number"));
	

	var msg = "";

	if(num > 0){
		msg = "Positive";
	}else if(num < 0){
		msg = "Negative";
	}else if(num == 0){
		msg = "Zero";
	}

	alert(msg);
}

//Task 4
function assignment8_task4(){
	var a = prompt("Enter any vovel charachter");
	if(a.toLowerCase() == "a" || a.toLowerCase() == "e" || a.toLowerCase() == "i" || a.toLowerCase() == "o" || a.toLowerCase() == "u"){
		alert("true");
	}else{
		alert("false");
	}
}

//Task 5
function assignment8_task5(){
	var password = "123";
	var input = prompt("Enter Password");

	if(input == ""){
		alert("Please enter your password");
	}else if (password == input){
		alert("Correct! The password you entered matches the original password");
	}else{
		alert("Incorrect password");

	}
	
}

//Task 6
function assignment8_task6(){
	var greeting; 
	var hour = 13; 
	
	if (hour < 18) { 
		greeting = "Good day"; 
	}else {
		greeting = "Good evening"; 
	}

	alert(greeting);
} 

	


//Task 7
function assignment8_task7(){
	
	var time = parseInt(prompt("Input from user in 24 hours clock format like: 1900 = 7pm"));
	var msg = "";
	if(time >= 0000 && time < 1200){
		msg = "Good Morning!";
	}else if(time >= 1200 && time < 1700){
        msg = "Good afternoon!";
	}else if(time >= 1700 && time < 2100){
		msg = "Good Evening!";
	} else if(time >= 1200 && time < 2359){
		msg = "Good Night!";
	}  

	alert(msg);
	
}


//Assignment# 14-16

//Task 1]
function assignment9_task1(){
	var names = [];
	alert(names);
}


//Task 2
function assignment9_task2(){
	var names = new Array();
	alert(names);
}
//Task 3
function assignment9_task3(){
	var names = ["Ali", "Hassan", "Waseem"];
	alert(names);
}

//Task 4
function assignment9_task4(){

	var arr = [1, 2, 3];
	alert(arr);
}

//Task 5
function assignment9_task5(){
	
	var arr = [true, false];
	alert(arr);
	
}

//Task 6
function assignment9_task6(){
	var arr = [true, false, 1, 2, 3, "Ali"];
	alert(arr);
}

//Task 7
function assignment9_task7(){
	var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
	var html = "<h1>Qualification</h1><br>"

	for (var i = 0; i <= qualification.length - 1; i++) {
		html += (i+1) +") " + qualification[i] + " <br>";
	}

	document.write(html);

}

//Task 8
function assignment9_task8(){
	
	var names = ["Michael", "John", "Tony"];
	var marksArr = [320, 230, 480];

	for (var i = 0; i <=  names.length - 1; i++) {
		var name  = names[i];
		var marks = marksArr[i];

		var perc  = marks / 500 * 100;

		var msg = "Score of "+ name +" is " + marks + ". Percentage: " + perc +"%<br>";
		document.write(msg);

	}
}


//Task 9
function assignment9_task9(){
	var colors = ["Red", "Blue", "Green"];
	document.write(colors);

	var color = prompt("Enter color name: ");
	colors.unshift(color);
	document.write("<br>"+colors);

	var color = prompt("Enter color name: ");
	colors.push(color);
	document.write("<br>"+colors);

	colors.push("Brown");
	colors.push("Black");
	document.write("<br>"+colors);

	colors.pop();
	document.write("<br>"+colors);

	var color = prompt("Enter color name: ");
	var index = parseInt(prompt("Index: ") );
	colors.splice(index, 0, color);
	document.write("<br>"+colors);

	var index = parseInt(prompt("Index: ") );
	var count = parseInt(prompt("No. of Colors: ") );
	colors.splice(index, count);
	document.write("<br>"+colors);



}

//Task 10
function assignment9_task10(){
	var scores = [320, 230, 480, 120];
	var html = "Score of students:  "+ scores + "<br>";

	html += "Ordered Score of students:  "+ scores.sort();
	document.write(html)

}

//Task 11
function assignment9_task11(){
	var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
	var html = "Cities List:<br> "+ cities + "<br>";
	var selectCities = cities.splice(2,2);
    html += "Selected Cities List:<br> "+ selectCities;
	document.write(html)

}

//Task 12
function assignment9_task12(){
	var arr = ["This ", " is ", " my ", " cat"]; 
	document.write(arr.join(""));
}

//Task 13
function assignment9_task13(){

	var names  = ["Keyboard", "Mouse","Printer", "Moniotor"];

	var html = "Devices: ";

	for (var i = 0; i <= names.length - 1; i++) {
		var device = names[i];
		html += "<br>Out: <br>"+device;
	}

	document.write(html);
}

//Task 14
function assignment9_task14(){

	var names  = ["Keyboard", "Mouse","Printer", "Moniotor"];

	var html = "Devices: ";

	for (var i = names.length - 1; i >= 0; i--) {
		var device = names[i];
		html += "<br>Out: <br>"+device;
	}

	document.write(html);
}

//Task 15
function assignment9_task15(){

	var names  = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" ,"Haier"];

	var html = "<select>";
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		html += "<option value=\'"+name+"\'>"+name+"</option>";

	}

	html += "</select>";

	document.write(html);
	
}




