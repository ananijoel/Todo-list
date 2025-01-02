
let passwordupdate = document.querySelector("#passwordupdate")
let informationupdate = document.querySelector("#informationupdate")
let passwordupdatebutton = document.querySelector("#passwordupdatebutton")
let passwordupdateaccesbutton = document.querySelector("#passwordupdateaccesbutton")
let cancelpasswordupdatebutton = document.querySelector("#cancelpasswordupdatebutton")

let oldpassword = document.querySelector("#oldpassword")
let newpassword = document.querySelector("#newpassword")    
let newpasswordverify = document.querySelector("#newpasswordverify")

passwordupdateaccesbutton.addEventListener("click", async (e) => {
    e.preventDefault()
    passwordupdate.style.display = "block"
    informationupdate.style.display = "none"
    passwordupdateaccesbutton.style.display = "none"
    inputs.forEach(input => {
        input.removeAttribute('readonly')
    })
})


passwordupdatebutton.addEventListener("click", async (e) => {
    e.preventDefault()
    if(newpassword.value === newpasswordverify.value){
        updatePassword(oldpassword.value,newpassword.value)
    }else{
        alert("Les mots de passe ne correspondent pas")
    }

})
cancelpasswordupdatebutton.addEventListener("click", async (e) => {
    e.preventDefault()
    window.location.reload()
})









function updatePassword(oldpassword,newpassword){
    const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body:`{"oldpassword":"${oldpassword}","password":"${newpassword}"}`
      };
      
      fetch(baseurl+'/api/update-user-password/'+userid, options)
        .then(response => response.json())
        .then(response =>{
            backToGeneralProfile()
            alert("le mot de passe a été modifié")
            console.log(response)
        })
        .catch(err => {
            alert("L'ancien mot de passe est incorrect")
            console.error(err)
        });
}