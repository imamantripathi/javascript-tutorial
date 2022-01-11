// var arr =[1,2,3,4,5,6,7,8,9];
// for (let index = 0; index < arr.length; index++) {
// if(index==2)
// {
//     // break;
//     continue;
// }
// console.log(arr[index]);
// }
// let myarr = ["Cycle","Car",221,null,true];
// // Array method 
// console.log(myarr.length)
// // finding length of an array 
// myarr.pop();//pop out element from array  (from the last)
// myarr.push("Aam Aadmi")//push element in the last
// myarr.shift();//remove  element from an array  (from the starting )
//  let qa=myarr.unshift("Aman ");//add element in the array from the first
// console.log(qa);// length will increase of your Array

// console.log(myarr);
// Streing method in javascript 
//let myLovelyString = "Aman is a good boy.";
//console.log(myLovelyString.length);
//console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.slice(0,4));
// let d = myLovelyString.replace("Aman",'manu');
// console.log(d)

// let myDate = new Date();
// console.log(myDate);
// console.log( myDate.getTime());
// console.log( myDate.getHours());
// console.log( myDate.getUTCFullYear());
// console.log( myDate.getUTCHours());
// console.log(myDate.getMilliseconds());

// // DOM manipulation
// let ele= document.getElementById('click');
// console.log(ele)
// let le= document.getElementsByClassName('container');
//  console.log(le)//le[0].style.background = "yellow";
//  le[0].classList.add("bg-Primary");
//  le[1].classList.add('text-success');
 // INNER HTML
//  console.log(le[1].innerHTML);
 // get element by tagname 
//  let tn = document.getElementsByTagName('div');
//  console.log(tn)

//  createdElement = document.createElement('p');
//  createdElement.innerText="THIS IS A CREATED PARAGRAPH";
//  tn[0].appendChild(createdElement);

//  createdElement2 = document.createElement('b');
//  createdElement2.innerText="THIS IS A CREATED BOLD";
//  tn[0].replaceChild(createdElement2,createdElement);
//  // removeChild(element);   ---->remove an element  
//  let sel = document.querySelector('.container');
//  console.log(sel);
//    let set= document.querySelectorAll('.container');
//   console.log(set );

  // EVENTS IN JAVSCRIPT 
// function clicked(){
// console.log("The button was clicked");   }
// window.onload=function(){
//     console.log("The Documnet Was Loaded");
// }
//  firstcontainer.addEventListener('click',function(){
//      document.querySelectorAll('.container')[1].innerHTML="<br> This is clicked</br>"
//      console.log("clicked on container ")
//  })
// firstcontainer.addEventListener('mouseover',function(){
//     le[0].style.background='red';

//     console.log("mouse on container ")
// })
// firstcontainer.addEventListener('mouseout',function(){
//    le[0].style.background='none';
   

//     console.log("mouse out of  container ")
// })
// let prehtml = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prehtml;
//     le[0].style.background='green';
//     console.log("mouse up when clicked on container ")
// })
// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<br> This is clicked</br>"
//     le[0].style.background='yellow';
//     console.log("mouse down when clicked on container ")
// })
// Arrow functions
// function summ(a,b)
// {
//     return a+b;
// }
// summ=(a,b)=>{
//     return a+b;
//  }
// // SETTIMEOUT AND SETINTERVAL
// logdone = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML="<br>Set Interval fired</br>"
//     console.log('I am your log')
// } 
//clr = setTimeout(logdone,3000);
// clr is used for stop the oparation by passing in ClearTimeOut(clr) in console

//clr = setInterval(logdone,5000);//clr is used for stop the oparation by passing in ClearInterval(clr) in cons
//localStorage.setItem('name','Aman')
//localStorage.getItem('name')
//localStorage.removeItem('name')
//localStorage.clear();
// let obj = {name:"Aman",length:1,a:{this:"that"}}     
// let jso = JSON.stringify(obj)
// console.log( jso)
// console.log(typeof jso) 
// parsed = JSON.parse(`{"name":"Aman","length":1,"a":{"this":"that"}}`)
// console.log(parsed)

// templates Litrals -- backtiks
a = 34;
console.log(`this is my ${a}`) 





  