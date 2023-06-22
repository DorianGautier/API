const {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/team.controller");
  
/**
 * @swagger
 * components:
 *   schema:
 *     Team:
 *       type: array
 *       properties:
 *         Name:
 *           type: string
 *           description: Nom de l'equipe
 *         Description:
 *           type: string
 *           description: Description de l'equipe
 *         Teamlogo:
 *           type: string
 *           description: URL du logo de l'equipe
 *         firstpilote:
 *           type: string
 *           description: Nom du premier pilote de l'equipe
 *         secondpilote:
 *           type: string
 *           description: Nom du second pilote de l'equipe
 *         motormanufacturer:
 *           type: string
 *           description: Nom du constructeur moteur de l'equipe
 *         teamprincipal:
 *           type: string
 *           description: nom du team principal de l'equipe
 *         teamowner:
 *           type: string
 *           description: nom du team owner de l'equipe
 *         constructorchampionships:
 *           type: number
 *           description: Nombre de championnats constructeurs remportés par l'equipe
 *         yearinf1:
 *           type: number
 *           description: Nomber d'années en formule 1 de l'equipe
 * 
 * /team:
 *   get:
 *     summary: Récupère la liste des equipes
 *     tags:
 *      - Equipe
 *     responses:
 *       '200':
 *         description: Liste des equipes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Team'
 *   post:
 *     summary: Crée une nouvelle equipe
 *     tags:
 *       - Equipe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Team'
 *     responses:
 *       '200':
 *         description: Equipe créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Team'
 *   delete:
 *     summary: Supprime toutes les equipes
 *     tags:
 *     - Equipe
 *     responses:
 *       '200':
 *         description: Equipes supprimés avec succès
 * 
  * swagger: "2.0"
 * info:
 *   version: "1.0.0"
 *   title: "API des equipes"
 * paths:
 *   /team/{id}:
 *     get:
 *       summary: Récupérer une equipe par son identifiant.
 *       description: Récupère une equipe existante en utilisant son identifiant.
 *       tags:
 *         - Equipe
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Identifiant de l'equipe à récupérer.
 *           type: string
 *       responses:
 *         200:
 *           description: Equipe récupéré avec succès.
 *           schema:
 *             $ref: "#/definitions/Team"
 *         404:
 *           description: Equipe non trouvé - L'identifiant fourni ne correspond à aucunne equipe existant.
 *         500:
 *           description: Erreur lors de la récupération de l'equipe.
 *     patch:
 *       summary: Mettre à jour une equipe.
 *       description: Met à jour l'equipe identifié par l'identifiant fourni.
 *       tags:
 *         - Equipe
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Identifiant de l'equipe à mettre à jour.
 *           type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/definitions/Team"
 *       responses:
 *         200:
 *           description: Equipe mis à jour avec succès.
 *           schema:
 *             $ref: "#/definitions/Team"
 *         400:
 *           description: Requête invalide - Il y a une données manquante ou incorrecte dans le corps de la requête.
 *         404:
 *           description: Equipe non trouvé - L'identifiant fourni ne correspond à aucunne equipe existant.
 *         500:
 *           description: Erreur interne du serveur.
 *     delete:
 *       summary: Supprimer une equipe.
 *       description: Supprime l'equipe identifié par l'identifiant fourni.
 *       tags:
 *         - Equipe
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Identifiant de l'equipe à supprimer.
 *           type: string
 *       responses:
 *         200:
 *           description: Equipe supprimé avec succès.
 *         404:
 *           description: Equipe non trouvé - L'identifiant fourni ne correspond à aucunne Equipe existant.
 *         500:
 *           description: Erreur interne du serveur.
 */
  
  
  module.exports = function (app) {
    app.get("/team", getTeams);
    app.get("/team/:id", getTeam);
    app.post("/team", createTeam);
    app.patch("/team/:id", updateTeam);
    app.delete("/team/:id", deleteTeam);
  };
  