let username = document.querySelector("#username")
let password = document.querySelector("#password")
let login = document.querySelector("#login")





login.addEventListener("click", (e) => {
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: `{"username":"${username.value}","password":"${password.value}"}`
      };

    fetch('http://localhost:3000/api/user-login', options)
    .then(response => response.json())
    .then(response => {
        if(response.error){
            alert(response.error)
        } else {
            localStorage.setItem("todolisttoken", response.token)
            localStorage.setItem("todolistuserid", response.userId)
            window.location.href = "../index.html"
            
        }
    })
    .catch(err => console.error(err));
})


  
  