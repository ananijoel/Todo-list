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
        fetch('http://localhost:3000/api/add-user', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        window.location.href = "login.html"
      }else{
        alert("Les mots de passe ne correspondent pas")
      }
})




    /*
        console.log(firstname.value)
    console.log(lastname.value)
    console.log(email.value)
    console.log(username.value)
    console.log(password.value)
    console.log(passwordverify.value)*/