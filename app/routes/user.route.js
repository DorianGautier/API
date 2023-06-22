const { login, register, deleteUser, getUser, updateUser, changePassword } = require("../controllers/user.controller");

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Connecte un utilisateur existant et renvoie un token JWT
 *     tags:
 *        - Utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Succès - renvoie un token JWT au format Bearer
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT au format Bearer
 *       401:
 *         description: Nom d'utilisateur ou mot de passe incorrect
 *
 * /register:
 *   post:
 *     summary: Crée un nouvel utilisateur dans la base de données
 *     tags:
 *        - Utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       500:
 *         description: Erreur interne du serveur
 * /user-password/{id}:
 *     patch:
 *       summary: Mettre à jour le mot de passe d'un utilisateur.
 *       description: Mettre à jour le mot de passe de l'utilisateur identifié par l'identifiant fourni.
 *       tags:
 *         - Utilisateur
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Identifiant de l'utilisateur à mettre à jour.
 *           type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *               newpassword:
 *                 type: string
 *       responses:
 *         200:
 *           description: Mot de passe de l'utilisateur mis à jour avec succès.
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *               newpassword:
 *                 type: string
 *         400:
 *           description: Requête invalide - Il y a une données manquante ou incorrecte dans le corps de la requête.
 *         404:
 *           description: Utilisateur non trouvé - L'identifiant fourni ne correspond à aucun utilisateur existant.
 *         500:
 *           description: Erreur interne du serveur.
 *      
 * /user/{id}:
 *     delete:
 *       summary: Supprimer un utilisateur.
 *       description: Supprime l'utilisateur identifié par l'identifiant fourni.
 *       tags:
 *         - Utilisateur
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Identifiant de l'utilisateur à supprimer.
 *           type: string
 *       responses:
 *         204:
 *           description: Utilisateur supprimé avec succès.
 *         404:
 *           description: Utilisateur non trouvé - L'identifiant fourni ne correspond à aucunne Utilisateur existant.
 *         500:
 *           description: Erreur interne du serveur.
 *     get:
 *       summary: Récupérer un utilisateur par son identifiant.
 *       description: Récupère un utilisateur existante en utilisant son identifiant.
 *       tags:
 *         - Utilisateur
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Identifiant de l'utilisateur à récupérer.
 *           type: string
 *       responses:
 *         200:
 *           description: Utilisateur récupéré avec succès.
 *           schema:
 *             $ref: "#/definitions/User"
 *         404:
 *           description: Utilisateur non trouvé - L'identifiant fourni ne correspond à aucun utilisateur existant.
 *         500:
 *           description: Erreur lors de la récupération de l'utilisateur.
 * 
 *     patch:
 *       summary: Mettre à jour un utilisateur.
 *       description: Mettre à jour l'utilisateur identifié par l'identifiant fourni.
 *       tags:
 *         - Utilisateur
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Identifiant de l'utilisateur à mettre à jour.
 *           type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/definitions/User"
 *       responses:
 *         200:
 *           description: Utilisateur mis à jour avec succès.
 *           schema:
 *             $ref: "#/definitions/User"
 *         400:
 *           description: Requête invalide - Il y a une données manquante ou incorrecte dans le corps de la requête.
 *         404:
 *           description: Utilisateur non trouvé - L'identifiant fourni ne correspond à aucun utilisateur existant.
 *         500:
 *           description: Erreur interne du serveur.
 */

module.exports = function (app) {
  app.post("/login", login);
  app.post("/register", register);
  app.delete("/user/:id", deleteUser)
  app.get("/user/:id", getUser)
  app.patch("/user/:id", updateUser)
  app.patch("/user-password/:id", changePassword)
};