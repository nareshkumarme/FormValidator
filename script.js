const form = document.getElementById("form")
const username = document.getElementById("Username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show Input Error Messages

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message

}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//Validate email address
function isvalidEmail(input){
    var regex = /\S+@\S+\.\S+/;
    if(regex.test(input.value)){
        showSuccess(input)
     }
     else{
        showError(input,'The email is invalid')
     }
}

//Functionality
function functionality(inputArr){
    inputArr.forEach((input)=>{
        if(input.value.trim() === ""){
            showError(input,`${getRequiredfiled(input)}is Required`)
        }

        else{
            showSuccess(input)
        }
    })
}

//getRequiredfield
function getRequiredfiled(input)  {
     return input.id.toUpperCase();
}

// Checking Length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,'The charecters are less than 3')
    }
    else if (input.value.length > max){
        showError(input,'The charecters are more than 15')
    }
    else {
        showSuccess(input)
    }
}
// PasswordMatch
function PasswordMatch(input1,input2){

    if(input1.value != input2.value){
        showError(input2,'Passwords doesnot match')
    }
    else{
        showSuccess(input2)
    }

}

    //EventListner

// addEventListener(event, function, Capture)

form.addEventListener('submit', function(e) {
    e.preventDefault();
    functionality([username,email,password,password2]);
    checkLength(password,3,15);
    checkLength(username,3,15);
    isvalidEmail(email);
    PasswordMatch(password,password2)
})



