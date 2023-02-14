
// if(name=="bibek"){
// 	console.log("you are welcome here");
// }else{
// 	console.log("sorry");
// }
// function which is used to perform the task of the arguement


// var userdata= [
// 	{
// 		username: "bibekpurbe",
// 		passw: "quickbrownfox11"
// 	},
// 	{
// 		username: "pujapurbe",
// 		passw:"pujapurbe111"

// 	},
// 	{
// 		username:"princepurbe",
// 		passw: "princepurbe111"

// 	},

// 	{
// 		profilename: "bibekpurbe",
// 		address: "kathmandy",
// 		recentost: "good mornign fello",
// 		total_friend: "345",
// 		notification: "26"

// 	}
// ];
// function goodbye(good){
// 	alert("sorry");
// }
 
// var name= prompt("enter the username:");
// var password= prompt ("enter the password:");
// function naami(name,password){
// 	for(var i=0; i<4;i++){
// 		if(userdata[i].username==name && userdata[i].passw==password
// 			){
// 			console.log(userdata[3]);
// 		}return goodbye;
// 	}
// }
// naami();
// goodbye();





// var user= prompt("enter your username");
// var pass= prompt("enter your passord");
// // if(isUserValid(username,passw)){
// // 		console.log(userdata[1]);

// // }else throw new Error("'sorry',try again");
// // function isUserValid(username,passw){
// if(userdata[0].username==user && userdata[0].passw
// 		==pass){
// 		console.log("welcome to our website")
// 	}else{
// 		console.log("try again");
// 	}

// function name(a,b){
// 	alert("helooooooooooooooooooo\n"+a+" "+b);
// }
// var hello11= prompt("enter your name");
// for (var i=0; i<userdata.length+10000-50001;i++){
// 	alert(userdata[0],i);
// }
// name(prompt("entery your first name"),prompt("enter your lastname"));
   

// var input= document.getElementById("input1");
// var button= document.getElementById("button1");
// var ul= document.querySelector("ul");
// var ul = document.querySelector("ul");
// if (ul) {
//   console.log("hellllllll")
// }
// button.addEventListener("click", function(){
// 	if(input.value.length>0 ){
// 	var li= document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value="";
	
// }
// })
// input.addEventListener("keydown", function(event){
//   if (input.value.length > 0 && event.key === "Enter") {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }
// });
// 

// function isUserValid(bool){
// 	return bool
// }
// var name= isUserValid(false)? console.log("heloooooo"): console.log("sorry");
// 


       //ternary and and statement

//var userdata=[{
// 	username: "bibekpurbe55",
// 	password:"quickbrownfox11"

// },{
// 	username: "purbeprince33",
// 	password:"quickbrownfox"

// },
// {
// 	username: "oncoursevideoextraatoh",
// 	password:"oncoursevideoextraatoh11"


// },{
// 	username:"oncoursevideoextraitop",
// 	password:"oncoursevideoextraitop11"
// },{
// 	username:"brownfox",
// 	password:"Jack_Vankey"

// },{
// 	username:"bibek",
// 	password:"bibek"
// },{
// 	usernmae:"welcome to our website"
// }
// ];
// let promtuser= prompt("enter the username");
// let promtpass= prompt("enter the passsword");
// function hello(){
//  userdata[1].username===promtuser && userdata[1].password===promtpass?console.log("YOU  ARE A AUTHOROZED"):console.log("sorry unauthorized");
// }
// hello();

                          //switch statement
// let name= prompt("enter your name");
// function hello(){
// 	switch(name){
// 	case "bibek":
// 		console.log("you can enter");
// 		break;
// 	case "prince":
// 		console.log("you can enter");
// 		break;
// 	case "puja":
// 		console.log("you can enter");
// 		break;
// 	case "anita devi purbe":
// 		console.log("you can enter");
// 		break;
// 	case "bijay purbe":
// 		console.log("you can enter");
// 		break;
// 	case "relative":
// 		console.log("you can enter");
// 		break;
// 	default:
// 	    alert("sorry i don't know you, can you give us your identity ");		
// 	    break;
// 		}
	
// }
// hello(); 
// 
//const hello=(a,b)=>{
// 	return a*b;
// }
// console.log(hello(5,8));

// function multiply1(a){
// 	function(b){
// 		return a*b;
// 	}
// }
// const multiply1 = (a)=>(b)=>a*b;
// const multiply2=multiply1(5)
// function compose(f,g){
// 	(a){
// 		return (f+g)*a;
// }

// const compose=(f,g)=>(a)=>(f+g)*a;
// const compose1=compose(6,6);
   ////composite funtion//
// const compose1= (f,g)=>(x)=>f(g(x));
// const function1=(num)=>num+10;
// console.log(compose1(function1,function1)(5));
// const compose1 = (f,g) => (x) => f(g(x));
// const function1 = (num) => num + 10;
// const function2= (sum)=>sum+5;
// const compose2=compose1(function2, function1);
// console.log(compose2(5));
	//best method to solve the composite function
// const compose=(f,y)=>(t)=>f(y(t));
// const number1=(multiply)=>(4*multiply)+6;
// const number2=(multiply)=>(4*multiply)+44;
// const compose2= compose(number1,number2);
// console.log(compose2(58));
      // advance array
// const num= [2,4,5,44,64,64,67,35];
// const double=[];
// num.forEach((num)=>{
//  	double.push(num*2);
// })

// console.log(double);
// const fronum=[]; num.forEach(num =>{
// 	fronum.push(num+"!")
// });
// console.log(fronum);
      //map
// const num= [2,4,5,44,64,64,67,35];
// const mapnum= num.map(num=>{ 
// 	return num+"!"});
// console.log(mapnum);

 		//filter
// const num=[{
	
// 	team:"dark",
// 	names:`bibek, prince,rahul,tomm,sunil`
// },{
// 	team:"purple",
// 	name:[`biraj`,`sanam`, `xxxtantacion`,`dhiraj`,`santosh`,`hari`,`ram`],
// 	player:"cricket"
// },{
// 	team:"red",
// 	name:[`ppushpak`, `mairaj`,`avishek`,`amrit`,`tokla`,`sherpa`],
// 	player:`football`
// },{
// 	team:"yellow",
// 	name:[`niraj`,`aakash`,`dhiraj`,`heman`,`syam`],
// 	player:"rugby"

// },{
// 	team:"red",
// 	name:[`tom`,`miley syrus`,`cuise`,`tailer swifr`,`covay`],
// 	player:"marathon"

// },{
// 	team:"blue",
// 	name:[`rabina`,`bijay`,`puja`,`cast of wall stream`],
// 	player:`running`
// }];
// const filter1=num.filter(num2=>{ 
// 	return num2.team==="red"
// });
// console.log(filter1);

// const num2=num.map(num=> num*2);
// console.log("original"+num);
// console.log("maped"+num);
		//reduce
// const hello=[1,4,6,4,6];
// const bibekhello=hello.reduce((accumulator,bibek)=>{
// 	return accumulator+bibek
// },5 );
// console.log(bibekhello);	

//      /refference type
// var object1={value:10};
// var object2=object1;
// var object3={value:10}

//      //context///class
// class player{
// 	constructor(name,aptitude,play){
// 		this.name=name;
// 		this.aptitude=aptitude;
// 		this.play=play;
// 	}
	
// };	
// class player1 extends player{
// 	constructor(name,aptitude,play){
// 		super(name,aptitude,play)
// 	}
// 	play1(){
// 	console.log(`hey, i am a ${this.play} player  my name is ${this.name}\n.i love to play a ${this.play}`);
//  }
// }


// const playerone= new player1(`bibek`,`programmer`,`console`);
// const playertwo= new player1("amrit","batter","cricket");


// const num={a:4,b:3,c:4,d:4,f:5,g:5};
// console.log(num);

const bibek=function(name){
	return name.padEnd();
}




















































































