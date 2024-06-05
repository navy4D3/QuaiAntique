import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/connexion", "Connexion", "/pages/connexion.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/inscription", "Inscription", "/pages/inscription.html ", ["disconnected"], "/js/auth/signup.js"),
    new Route("/compte", "Mon compte", "/pages/compte.html", ["ROLE_USER", "admin"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/editPassword.html", ["ROLE_USER", "admin"]),
    new Route("/allResa", "Reservation", "/pages/reservation/allResa.html", ["ROLE_USER", "admin"]),
    new Route("/reserver", "Reserver", "/pages/reservation/reserver.html", ["ROLE_USER", "admin"])
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";