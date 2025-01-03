let userid = localStorage.getItem("userid")
let token = localStorage.getItem("token")
let baseurl = "https://anatide.ulrichanani.com"


let firstname = document.querySelector("#Firstname")
let lastname = document.querySelector("#Lastname")
let email = document.querySelector("#Email")
let username = document.querySelector("#username")


let profileImage = document.querySelector("#profile-image")
let imageinput = document.querySelector("#imageinput")
let edit = document.querySelector("#edit")
let update = document.querySelector("#update")



let inputs = document.querySelectorAll("form input")

getProfilePic() 
updatePage()
    




imageinput.addEventListener("change", async (e) => {
    e.preventDefault()
    const form = new FormData();
    form.append("picture", imageinput.files[0]);
    updateProfilePic(form)
    
    //getProfilePic()
})

function updateProfilePic(form){

    const options = {
    method: 'PUT',
    headers: {
        Authorization: `Bearer ${token}`
    }
    };

    options.body = form;

    fetch(baseurl+'/api/update-user-picture/'+userid, options)
    .then(response => response.json())
    .then(response => {
        window.location.reload()
        console.log(response)
    })
    .catch(err => console.error(err));
}

function getProfilePic(){
    const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
      }
      };
      
      fetch(baseurl+'/api/get-user-picture/'+userid, options)
        .then(response => response.blob() )
        .then(blob => {
          const imageUrl = URL.createObjectURL(blob);
          profileImage.src = imageUrl
        })
        .catch(err => console.error('Erreur lors de la récupération de l\'image:', err));
      
      
      
}

function updatePage(){

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
            firstname.value= data.firstname
            lastname.value= data.lastname
            email.value = data.email 
            username.value = data.username
        })
        .catch(err => console.error(err));

}
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
