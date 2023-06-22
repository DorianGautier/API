const {
  getPilotes,
  getPilote,
  createPilote,
  updatePilote,
  deletePilote,
} = require("../controllers/pilote.controller");

/**
 * @swagger
 * components:
 *   schema:
 *     Pilote:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           description: Prénom du pilote
 *         lastname:
 *           type: string
 *           description: Nom de famille du pilote
 *         age:
 *           type: number
 *           description: Âge du pilote
 *         yearinf1:
 *           type: number
 *           description: nombre d'année en Formule 1 du pilote
 *         worldchampionships:
 *           type: number
 *           description: Nombre de championnats du monde remportés par le pilote
 *         wins:
 *           type: number
 *           description: Nombre de victoires du pilote en Formule 1
 *         podiums:
 *           type: number
 *           description: Nombre de podiums du pilote en Formule 1
 *         polepositions:
 *           type: number
 *           description: Nombre de pole positions du pilote en Formule 1
 *         team:
 *           type: string
 *           description: Nom de l'équipe actuelle du pilote
 *         teamlogo:
 *           type: string
 *           description: URL du logo de l'équipe actuelle du pilote
 *         country:
 *           type: string
 *           description: Nom du pays d'origine du pilote
 *         countryflag:
 *           type: string
 *           description: URL du drapeau du pays d'origine du pilote
 *         image:
 *           type: string
 *           description: URL de la photo du pilote
 *         description:
 *           type: string
 *           description: Description du pilote
 *         active:
 *           type: boolean
 *           description: Indique si le pilote est toujours en activité
 *       required:
 *         - firstname
 *         - lastname
 *         - age
 *         - yearinf1
 *         - worldchampionships
 *         - wins
 *         - podiums
 *         - polepositions
 *         - team
 *         - teamlogo
 *         - country
 *         - countryflag
 *         - image
 *         - description
 *         - active
 * 
 * /pilote:
 *   get:
 *     summary: Récupère la liste des pilotes
 *     tags:
 *        - Pilote
 *     responses:
 *       '200':
 *         description: Liste des pilotes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pilote'
 *   post:
 *     summary: Crée un nouveau pilote
 *     tags:
 *        - Pilote
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pilote'
 *     responses:
 *       '200':
 *         description: Pilote créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pilote'
 *   delete:
 *     summary: Supprime tous les pilotes
 *     tags:
 *        - Pilote
 *     responses:
 *       '200':
 *         description: Pilotes supprimés avec succès
 * 
  * swagger: "2.0"
 * info:
 *   version: "1.0.0"
 *   title: "API de Pilote"
 * paths:
 *   /pilote/{id}:
 *     get:
 *       summary: Récupérer un pilote par son identifiant.
 *       description: Récupère un pilote existant en utilisant son identifiant.
 *       tags:
 *         - Pilote
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Identifiant de Pilote à récupérer.
 *           type: string
 *       responses:
 *         200:
 *           description: Pilote récupéré avec succès.
 *           schema:
 *             $ref: "#/definitions/Pilote"
 *         404:
 *           description: pilote non trouvé - L'identifiant fourni ne correspond à aucun pilote existant.
 *         500:
 *           description: Erreur lors de la récupération de l'pilote.
 *     patch:
 *       summary: Mettre à jour un pilote.
 *       description: Met à jour le nom de l'pilote identifié par l'identifiant fourni.
 *       tags:
 *         - Pilote
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Identifiant de l'pilote à mettre à jour.
 *           type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - name
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Nouveau nom de l'pilote.
 *       responses:
 *         200:
 *           description: Pilote mis à jour avec succès.
 *           schema:
 *             $ref: "#/definitions/Pilote"
 *         400:
 *           description: Requête invalide - Le nom du pilote est manquant ou n'est pas une chaîne de caractères valide.
 *         404:
 *           description: Pilote non trouvé - L'identifiant fourni ne correspond à aucun pilote existant.
 *         500:
 *           description: Erreur interne du serveur.
 *     delete:
 *       summary: Supprimer un pilote.
 *       description: Supprime l'pilote identifié par l'identifiant fourni.
 *       tags:
 *         - Pilote
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Identifiant du pilote à supprimer.
 *           type: string
 *       responses:
 *         200:
 *           description: Pilote supprimé avec succès.
 *         404:
 *           description: Pilote non trouvé - L'identifiant fourni ne correspond à aucun Pilote existant.
 *         500:
 *           description: Erreur interne du serveur.
 * definitions:
 *   Pilote:
 *     type: object
 *     properties:
 *       firstname:
 *         type: string
 *         description: Prénom du pilote
 *       lastname:
 *         type: string
 *         description: Nom de famille du pilote
 *       age:
*/


module.exports = function (app) {
  app.get("/pilote", getPilotes);
  app.get("/pilote/:id", getPilote);
  app.post("/pilote", createPilote);
  app.patch("/pilote/:id", updatePilote);
  app.delete("/pilote/:id", deletePilote);
};
