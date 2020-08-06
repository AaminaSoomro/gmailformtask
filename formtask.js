const email = "sunnahprincess@gmail.com";
function login(){
    let  bordercolor = document.querySelector(".fxemail");
    let errorspan = document.querySelector(".errspn");
    let erroricon = document.querySelector(".fas");
    let spanvalue = document.querySelector(".note");
    let inputvalue = document.querySelector(".fxemail").value;
    if(inputvalue==email){
        window.location.href = "formpassword.html";
        // alert("yayy your email is correct");
    }
 
    else{        
       spanvalue.style.display="block";
       erroricon.style.display="block";
       errorspan.style.display="flex";
       bordercolor.style.border="1px solid red";
    }
    console.log(spanvalue);
    console.log(inputvalue);
}
const pass = "kchbhinhi";

function signin(){
    let erricn = document.querySelector(".email i");
    let  bordercolor = document.querySelector(".fxemail");
    let errorspan = document.querySelector(".errspn");
    let erroricon = document.querySelector(".fas");
    let spanvalue = document.querySelector(".note");
    inputvalue = document.querySelector(".fxemail").value;

    if(inputvalue==pass){
        window.location.href = "formwelcome.html";

        // alert("your password is correct");

    }
    else{
        erricn.style.display="block";
        spanvalue.style.display="block";
       erroricon.style.display="block";
       errorspan.style.display="flex";
       bordercolor.style.border="1px solid red";
    }
}