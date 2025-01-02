let userid = localStorage.getItem("todolistuserid")
let token = localStorage.getItem("todolisttoken")
let baseurl = "http://localhost:3000"

let firstname = document.querySelector("#Firstname")
let lastname = document.querySelector("#Lastname")
let email = document.querySelector("#Email")
let username = document.querySelector("#username")

let image = document.querySelector("#imageinput")


let edit = document.querySelector("#edit")
let update = document.querySelector("#update")

let inputs = document.querySelectorAll("form input")

const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  
  fetch(baseurl+'/api/get-user/id/'+userid, options)
    .then(response => response.json())
    .then(response => {
        let data = response.data
        firstname.setAttribute(`placeholder`,data.firstname)
        lastname.setAttribute(`placeholder`,data.lastname)
        email.setAttribute(`placeholder`,data.email) 
        username.setAttribute(`placeholder`,data.username)
    })
    .catch(err => console.error(err));

edit.addEventListener("click", async (e) => {
    e.preventDefault()
    edit.style.display = "none"
    update.style.display = "block" 
    inputs.forEach(input => {
        input.removeAttribute('readonly')
    })


})

update.addEventListener("click", async (e) => {
    
    e.preventDefault()
    
    inputs.forEach(input => {
        input.setAttribute('readonly','')
    })
    
    const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: `{"firstname": "${firstname.value}",
        "lastname": "${lastname.value}",
        "username": "${username.value}",
        "email": "${email.value}"}`
      };
      
      fetch(baseurl+'/api/update-user-byid/'+userid, options)
        .then(response => response.json())
        .then(response => {
            update.style.display = "none"
            edit.style.display = "block"
            console.log(response)
        })
        .catch(err => console.error(err));
    
       console.log(options.body)

})
    /*
    console.log(firstname.value)
    console.log(lastname.value)
    console.log(email.value)
    console.log(username.value)
    console.log(firstusername)
    console.log(password.value)
    console.log(passwordverify.value)*/