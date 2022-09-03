
function namevalidate(){
    let name=document.getElementById("name").value
    let error=document.querySelector(".name-error")
    if(name.trim()==''){
        error.innerHTML='Enter Full Name';
        return false;
    }
    else if(name.length<4){
        error.innerHTML='Name Must Be Atleast Four Character';
        return false;
    }
    else if(!name.match(/^[a-zA-Z ]+$/)){
        error.innerHTML='Enter valid name';
        return false;
    }
    else{
        error.innerHTML=''
        return true;
    }
}
function emailvalidate(){
    var email=document.getElementById("email").value;
    var error1=document.getElementById("email-error")
    if(email==''){
        error1.innerHTML='Enter a Email';
        return false;
    }
    
    else{
        error1.innerHTML='';
        return true;
    }
}
        
function phonevalidate(){
    var phone=document.getElementById("phoneno").value
    var error2=document.getElementById("number-error")
    if(phone==''){
        error2.innerHTML='Enter a Phone no';
        return false;
    }
    else if(phone.length<10){
        error2.innerHTML='please Enter 10 Number';
        return false;
    }
    else if(!phone.match(/^\d{10}$/)){
        error2.innerHTML='Enter valid number';
        return false;
    }
    else{
        error2.innerHTML='';
        return true;
    }
}
function messagevalidate(){
    var message=document.getElementById("message").value
    var error3=document.getElementById("message-error")
    if(message==''){
        error3.innerHTML='Enter a Message'
        return true
    }
    else{
        error3.innerHTML='';
        return true;
    }

}

function validation(){
    namevalidate();
    emailvalidate();
    phonevalidate();
    messagevalidate();
    if(namevalidate()==false){
        return false;
    }
   
    else if(emailvalidate()==false){
        return false;
    }
    else if(phonevalidate()==false){
        return false;
    }
    else if(messagevalidate()==false){
        return false;
    }
    else{
        return true;
    }
}
console.log("helo")
// const scriptURL="https://script.google.com/macros/s/AKfycbzGZ5XK5fHauJSU18gn4_rbHLTaNiqdodMG1sm7IT4iDu5HrGnKOqErfXMA5_8DmY-0-g/exec"


// fetch(scriptURL, { method: "POST", body: new FormData(form) })
//    .then((response) => {
//      console.log("Success!", response);

//     .catch((error) => {
//      console.error("Error!", error.message);
//    });