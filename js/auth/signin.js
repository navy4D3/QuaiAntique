const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");

const btnSignin = document.getElementById("btnSignin");
const formConnexion = document.getElementById("formulaireConnexion");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    
    // if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
    //     //Il faudra récupérer le vrai token
    //     const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
    //     setToken(token);
    //     //placer ce token en cookie
    //     setCookie(RoleCookieName, "admin", 7);
    //     //alert("Vous êtes connecté");
    //     window.location.replace("/home");
    // }
    // else{
    //     mailInput.classList.add("is-invalid");
    //     passwordInput.classList.add("is-invalid");
    // }
    let dataForm = new FormData(formConnexion);
    
    let myHeaders = new Headers();
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