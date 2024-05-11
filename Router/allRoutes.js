import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/home", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/connexion", "Connexio