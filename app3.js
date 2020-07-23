// CHAPTER # 38-44

// Task 1
// function add(a,b){
//     alert(a+b)
// }
// add(4,6)


// Task 2          LEAP YEAR
// var year = prompt("Enter year")
// function leapyear(year) {
//      return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
    
//   }
// if (leapyear(year) === false ){
//     alert("This year is not leap year")
// }else{
//     alert("This is leap year")
// }



// Task 3
// 

// Task 4
// var sub1 = +prompt("Ënter first subject" )
// var sub2 = +prompt("Ënter second subject" )
// var sub3 = +prompt("Ënter third subject" )
//  var total = +prompt("Enter total marks")
//  var obtained = sub1+sub2+sub3;
//  function percentage(){
//     var totals = +100/total*obtained
//     return totals
// }
// function average(){
//     var ave = obtained/3
//     return ave
//         }

//   function mainResult(average, percentage){
//     function percentage(){
//         var totals = +100/total*obtained
//         return totals
//     }
//     function average(){
//         var ave = obtained/3
//         return ave
//             }
//         return " Average: "+average(),"percentage: "+percentage()
//   }

//  alert(mainResult(obtained,total))



// Task 5



// Task 6
// var sentence = prompt("write a sentence max words 25")

// if(sentence.length <=25){
//     var index = sentence.search("aious")
      

//     console.log(index)
// }else{
//     alert("not working")
// }

// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));


// Task 7




// Task 8
// var distance = prompt("wirte distance ")

// function kmToMeter(distance){
//     var dis = 1000*distance
//     return dis
// }
// function kmToFeet(distance){
//     var dis = 3280.84*distance;
//     return dis
// }
// function kmToInches(distance){
//     var dis = 39370.1*distance
//     return dis
// }
// function kmToCentimeter(){
//     var dis = 100000*distance
//     return dis
// }
// document.write("distance in Kilometres: "+distance+"<br>")
// document.write("distance in Meters: "+kmToMeter(distance)+"<br>")
// document.write("distance in Feets: "+kmToFeet(distance)+"<br>")
// document.write("distance in Inches: "+kmToInches(distance)+"<br>")
// document.write("distance in Centimeters: "+kmToCentimeter(distance))


// Task 9
// var overTime = prompt("Write over time here")
// var total = overTime*12
// document.write("<h1>Employer`s over time is "+total+"<h1/>")



// Task 1o


// CHAPTER 43-48
// task 1
// function clickLink(){
//     var link = document.getElementById("link")
//      alert("Link is working")
// }




// task 2
// function clickImg(){
//     var img = document.getElementById("img")
//     alert("Thanks for purchasing mobile from us")
// }

// task 3
// function del(){
//    var del = document.getElementById("tab")
//    del.remove()
// }

// task 4
// function changeImg(){
//     var img = document.getElementById("mobile")
//     img.src = "images/mobile2.jpg"
// }
// function imgChange(){
//     var img = document.getElementById("mobile")
//     img.src = "images/mobile1.jpg"
// }


// task 5
// function increase(){
//     var i = document.getElementById("increase")
//     i.value++;
// }
// function decrease(){
//     var i = document.getElementById("increase")
//     i.value--;
// }




// CHAPTER 49-52  

// TASK 1
// function signUp(){
//     var user = document.getElementById("user")
//     var pass = document.getElementById("pass")
//     var gander = document.getElementById("gander")
//     var age = document.getElementById("age")

//     var user1 = document.getElementById("userO")
//     var pass1 = document.getElementById("passO")
//     var gander1 = document.getElementById("ganderO")
//     var age1 = document.getElementById("ageO")

//     user1.innerHTML = user.value
//     pass1.innerHTML = pass.value
//     gander1.innerHTML = gander.value
//     age1.innerHTML = age.value
// }



// Task 2
// function readmore(){
//     var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro et ad est deleniti quo accusantium tempora voluptatibus ipsa nesciunt dolor, omnis ducimus beatae, voluptatem rerum aperiam dolorem magnam! Ipsam";
//     var pera = document.getElementById("pera")
//     pera.innerHTML = text
// }


// Task 3 

// function del(){
//    var del = document.getElementById("tab")
//    del.remove()
// }
// function edit(){
//     var editName = document.getElementById("tab").childNodes[1];
//     var editGander = document.getElementById("tab").childNodes[3];
//     var editAge = document.getElementById("tab").childNodes[5];
    
//     var chahgeName = prompt("Change Name",editName.innerText) 
//     var changeGander = prompt("Change Gander",editGander.innerText) 
//     var changeAge = prompt("Change Age",editAge.innerText) 
    
//     editName.innerHTML = chahgeName   
//     editGander.innerHTML = changeGander   
//     editAge.innerHTML = changeAge   

// }




// CHAPTER 53-58

// var imgList = ["images/1.jpg "," images/2.jpg ","images/3.jpg","images/4.jpg"]
// for(var i=0; i<imgList.length; i++){
//         document.write("<img id='img' src="+imgList[i]+">"      )
//     }
    
    
    
    // CHAPTER 58-67
    // TASK 1
    // i)
    //  var mainContent = document.childNodes[1].childNodes[2].childNodes[37].childNodes[5];
    // console.log(mainContent)
    // ii)
    // var mainContent = document.childNodes[1].childNodes[2].childNodes[37].childNodes[5].childNodes;
    // console.log(mainContent)
    // iii)
    // var len = document.getElementsByClassName("render");
    // for(var i=0; i<len.length; i++){
    //     document.write(len[i].innerHTML+"<br>") 
    // }
    // document.write(len[1].innerHTML)
    // console.log(len[1])
    // iv
    // function get(){
    //     var name = document.getElementById("first-name");
    //      name.innerText = name
    //     document.write("<h1> NAME: "+name.value+" </h1>")
    // }
    // v
    // function get(){
    //     var lastName = document.getElementById("last-name")
    //     var  email= document.getElementById("email")
        
    //     lastName.innerText = lastName
    //     email.innerText = email
        
    //     document.write("<h1> LAST NAME: "+lastName.value+" </h1>")
    //     document.write("<h1> EMAIL: "+email.value+" </h1>")
    //  }

    // TASK 2
    //   var len = document.getElementsByClassName("render");
    //      for(var i=0; i<len.length; i++){
    //      document.write(len[i].innerHTML+"<br>")}
    // // i)
    //     var type = document.getElementById("main-content").nodeType;
    // document.write("<hi>"+type+"</h1>")
    // ii)
    // var type = document.getElementById("lastName").nodeType;
    // var type1 = document.getElementById("lastName").childNodes;
    // console.log(type)
    // console.log(type1)
    // iii)

    // iv)
    // var node = document.getElementById("main-content")
    // var firstNode =  node.firstChild;
    // var lastNode = node.lastChild;
    // console.log(firstNode)
    // console.log(lastNode)
    // v)
    // var node = document.getElementById("last-name")
    // console.log(node.nextSibling)
    // console.log(node.previousSibling)
    // vi)
    // var email = document.getElementById("email")
    // console.log(email.parentNode)





