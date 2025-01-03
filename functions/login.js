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

    fetch('https://anatide.ulrichanani.com/api/user-login', options)
    .then(response => response.json())
    .then(response => {
        if(response.error){
            alert(response.error)
        } else {
            if(response.ok){
                localStorage.setItem("token", response.token)
                localStorage.setItem("userid", response.userId)
                window.location.href = "../index.html"
                window.location.href = "../index.html"
            } else{
                alert(response.message)
                console.log(response.ok)
            }
        }
    })
    .catch(err => console.error(err));
})


  
  