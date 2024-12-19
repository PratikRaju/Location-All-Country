const CheckBox=document.querySelector(".input")
const Password=document.querySelector(".password")
CheckBox.addEventListener('click',(e)=>{
    if(Password.type=="password"){
        Password.type="text"
    }
    else{
        Password.type="password"
    }
})