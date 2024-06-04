const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");

const btnSignin = document.getElementById("btnSignin");
const formConnexion = document.getElementById("formulaireConnexion");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    
   
    let dataForm = new FormData(formConnexion);
    
    let myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
    myHeaders.append("Access-Control-Allow-Origin", "https://formationstudiyr.alwaysdata.net/connexion");
    myHeaders.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    myHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "username": dataForm.get("Email"),
        "password": dataForm.get("Password")
    });
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch(apiUrl+"login", requestOptions)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
    })
    .then(result => {
        const token = result.apiToken;
        setToken(token);
        //placer ce token en cookie
        setCookie(RoleCookieName, result.roles[0], 7);
        window.location.replace("/");
    })
    .catch(error => console.log('error', error));
}