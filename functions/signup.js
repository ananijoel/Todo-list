let firstname = document.querySelector("#Firstname")
let lastname = document.querySelector("#Lastname")
let email = document.querySelector("#Email")
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let passwordverify = document.querySelector("#passwordverify")
let signup = document.querySelector("#signup")

signup.addEventListener("click", async (e) => {
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'insomnia/9.3.1',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTczNTgxOTU1MiwiZXhwIjoxNzM4NDk3OTUyfQ.2lB9FHnszrkWmpnm__ID3muIOHNnOawUYMPvkkCitRE'
        },
        body: `{"firstname":"${firstname.value}","lastname":"${lastname.value}","username":"${username.value}","email":"${email.value}","password":"${password.value}"}`
      };
      
      if(password.value === passwordverify.value){
        if (validatePassword(password.value)){
          fetch('http://localhost:3000/api/add-user', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
          window.location.href = "login.html"
        }
        else{
          alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial")
        }
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
