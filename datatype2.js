var val;
var datatype1= typeof val;

var val=0;
var datatype2= typeof val;

var val=10n;
let datatype3= typeof val;

var val=true;
let datatype4= typeof val;

var val="foo";
let datatype5= typeof val;

let datatype6=typeof Symbol("id");

let datatype7=typeof Math;

let datatype8=typeof null;

let sayHi=function(){
 console.log.apply("Say Hi");
};

var datatype9=typeof sayHi;
console.log(datatype9);

