import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/home", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/connexion", "Connexion", "/pages/connexion.html", "/js/auth/signin.js"),
    new Route("/inscription", "Inscription", "/pages/inscription.html ", "/js/auth/signup.js"),
    new Route("/compte", "Mon compte", "/pages/compte.html"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/editPassword.html"),
    new Route("/allResa", "Reservation", "/pages/reservation/allResa.html"),
    new Route("/reserver", "Reserver", "/pages/reservation/reserver.html")
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";