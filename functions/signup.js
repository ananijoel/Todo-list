let firstname = document.querySelector("#Firstname")
let lastname = document.querySelector("#Lastname")
let email = document.querySelector("#Email")
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let passwordverify = document.querySelector("#passwordverify")
let signup = document.querySelector("#signup")

signup.addEventListener("click", async (e) => {
  e.preventDefault()
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: `{"firstname":"${firstname.value}","lastname":"${lastname.value}","username":"${username.value}","email":"${email.value}","password":"${password.value}"}`
      };
      
      if(password.value === passwordverify.value){
        
          fetch('https://anatide.ulrichanani.com/api/add-user', options)
          .then(response => response.json())
          .then(response => {
              //console.log(response)
              window.location.href = "login.html"
            }
          )
          .catch(err => console.error(err));
          
        
      }else{
        alert("Les mots de passe ne correspondent pas")
      }
})


function validatePassword(password) {
  if ((password.length < 8) || (password.length > 50)) {
      return false;
  }
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return regex.test(password);
}
