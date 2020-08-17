


//Indexof method use to find index of the array element 

let indexArray = [12,15,20,30,25]
console.log(indexArray.indexOf(12,0)) // 0
console.log(indexArray.indexOf(12)) //0
console.log(indexArray.indexOf(30)) //3 




//filter method creates a new array with test passed elements
// filter methods not update the orginial Array

let filterArray = [12,13,13,122,4,5]

let newArray=filterArray.filter(res=>res<122)

console.log(newArray)  //[12,13,13,4,5]
let unique=[...new Set(newArray)]
console.log(unique)  //[12,13,4,5]


//Push methods returns new length array and it use to add new element in an array
 let pushArray=['Mango','Orange','lemon']

 pushArray.push('Apple')

console.log(pushArray)//[ 'Mango', 'Orange', 'lemon', 'Apple' ]

//Pop method returns a new length array and it remove the last element from array

let popArray = ['Mango', 'Orange', 'lemon']

popArray.pop()

console.log(popArray) //[ 'Mango', 'Orange' ]



// Set is collection of items which are unique (cannot repeated elements). 
//Set can store any types of values whether primitive or objects.


//Unique Value from two array and concatenate


let arr = [1, 2, 2, 1, 3, 4, 3, 2];

let arr2 = [1, 2, 2, 4, 3, 4, 3, 2];

console.log([...new Set([...arr, ...arr2])]); //[ 1, 2, 3, 4 ]







// reduce iterates the array and reduce array to  single value
// it works left to right

let reducer = [1, 2, 2, 1, 3, 4, 3, 2];

reducer.reduce((myVar, value) => {
  myVar = value;
  console.log(myVar);//1 2 2 1 3 4 3 2
}, []);



// reduceRight function aganist an accumaltor value and each value of the array reduce from (right to left) and give single output  
// it works right to left 
let rightReducer = [1, 2, 2, 1, 3, 4, 3, 2]
rightReducer.reduceRight((myVar,value)=>{
  myVar=value;
  console.log(myVar) //2 3 4 3 1 2 2 1
},[])




// var is a global scoped variable. its means when you declare the variable
//outside the function it also aviliable in inside the function

var variable="hello"

var hello=()=>{
  var newVariable="hello1"
  console.log(variable) //hello
}
///console.log(newVariable)//not defined
hello()



// let is block scoped variable.
//Its means anything in curly braces it block scope.
// so the variable in block scope it only avialable in this block  
// let can be updated not be redeclared

let variable1 = "hello2"

let hello1 = () => {
  let newVariable1 = "hello1"
  console.log(variable1) //hello2
}
// console.log(newVariable1)//not defined
hello1()

//Variable declared with constants maitain constant value
//Its also block scope
//Anythig declared with const never be updated nor be redeclared


// const variable2="12"

// variable2="13"
// console.log(variable2) //Assigment to constant variable



// Destructuring  is cool feature of ES6.
//It is use to unpack the array, object and distinct values.


// const [a,b]=['Irfan','worked','great']
// console.log(a,b) // Irfan worked

// const [, , c] = ['Irfan', 'worked', 'great']
// console.log(c) // great


// var a=5;
// var b=6;
// const [b,a]=[a,b]
// console.log(b,a)//5 6



// Closure 
// The function creating in inside the function is called nested function.
// In this the inner function have an access of variable which is declared in outside func.

// There are two types 
// Global scope
// Local scope


let a = 10;
let closureFunction;
 const callClosureFunction=()=> {
  let b = 2;
  const mod=()=> {
    let c = a % b;
    console.log(c);
  }
  closureFunction = mod();
}
callClosureFunction(); 
closureFunction;



// map is used to iterate on an array and returns the new array along with some value

let mapArray=[10,12,6,4]
let result=mapArray.map(x=>x/2);
let multiplyResult=mapArray.map(y=>{return y*2})
console.log(result,multiplyResult)
 

//-------------------------------------------------------------------------------------------

//Object functions
// Object.create is used to create a new object using any exist object.
// It not maintain the pervious value of object in new one object

let obj={
  name:"pen"
}

let newObj=Object.create(obj)

newObj.company='bolpen'

console.log(newObj.company)// {'bolpen'}



// object entries check the property of check and this return in non flatable array 
// they pairs the value in this form [[a:23][b:12]] 


let entryObj={
  a:23,
  b:12
}

let entriesObj=Object.entries(entryObj)
console.log(entriesObj.flat()) // ['a',23,'b',12]


 

// Object freeze is used to freeze the object 
// You never change the value of object after you freeze the object


let freezeObj={
  name:'Irfan',
  roll:'61',
  address:'kuri Road'
}

Object.freeze(freezeObj) 

freezeObj.address='lahore'
freezeObj.name='Arslan'

console.log(freezeObj) // { name:'Irfan',roll:'061',address:'kuri Road' }



//Object keys is return the all keys of object in the form of array 

let keyObject={
  name:'Ali',
  roll:'10'
}

console.log(Object.keys(keyObject));// ['name','roll']


// Object value is return the all values of object in the form of array

let valueObject = {
  name: 'Ali',
  roll: '10'
}

console.log(Object.values(valueObject));//['Ali','10']




//Object seal is used to seal the object means you never delete the object value 
//but you update the value of object

let sealObject={
   a:10,
   b:20
}

let newObj1=Object.seal(sealObject)

newObj1.a=20

console.log(newObj1)// {a:20,b:20} 

delete sealObject.b
console.log(sealObject) //{a:20,b:20}

// Object is seal checks wether the object is seal or not
// Its return boolean true or false value 
console.log(Object.isSealed(sealObject))//true


//Is method used to check wether the two object are same or not
//Its return boolean true or false value
console.log(Object.is(sealObject===newObj1))//false

//--------------------------------------------------------


















