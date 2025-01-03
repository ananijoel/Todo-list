
let passwordupdate = document.querySelector("#passwordupdate")
let informationupdate = document.querySelector("#informationupdate")
let passwordupdatebutton = document.querySelector("#passwordupdatebutton")
let oldpassword = document.querySelector("#oldpassword")
let newpassword = document.querySelector("#newpassword")    
let newpasswordverify = document.querySelector("#newpasswordverify")

let baseurl = "https://anatide.ulrichanani.com"


passwordupdatebutton.addEventListener("click", async (e) => {
    e.preventDefault()
    if(newpassword.value === newpasswordverify.value){
        updatePassword(oldpassword.value,newpassword.value)
    }else{
        alert("Les mots de passe ne correspondent pas")
    }

})



let userid = localStorage.getItem("userid")
let token = localStorage.getItem("token")






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
function backToGeneralProfile(){
    window.location.href = "profil.html"
}