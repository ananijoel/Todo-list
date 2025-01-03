let userid = localStorage.getItem("userid")
let token = localStorage.getItem("token")
let baseurl = "https://anatide.ulrichanani.com"

let profileImage = document.querySelector("#profile-image")
let logoutbtn = document.querySelector("#logout")



getProfilePic()

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
            if(blob.size == 0){
                profileImage.src = "src/photo-5484713_1280.png"
            }else{
                const imageUrl = URL.createObjectURL(blob);
          profileImage.src = imageUrl
            }
          
        })
        .catch(err => console.error('Erreur lors de la récupération de l\'image:', err));
      
      
      
}

logoutbtn.addEventListener("click", (e) => {
    choix = confirm("Vous allez vous déconnecter de votre compte")
    if(choix){
        logout()
    }
})

function logout(){
    localStorage.removeItem("todolistuserid")
    localStorage.removeItem("todolisttoken")
    window.location.href = "../pages/login.html"
}
