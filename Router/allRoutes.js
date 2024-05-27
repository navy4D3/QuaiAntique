import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", [], "/pages/galerie.html"),
    new Route("/connexion", "Connexion", "/pages/connexion.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/inscription", "Inscription", "/pages/inscription.html ", ["disconnected"], "/js/auth/signup.js"),
    new Route("/compte", "Mon compte", "/pages/compte.html", ["client", "admin"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Reservation", "/pages/reservation/allResa.html", ["client", "admin"]),
    new Route("/reserver", "Reserver", "/pages/reservation/reserver.html", ["client", "admin"])
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";