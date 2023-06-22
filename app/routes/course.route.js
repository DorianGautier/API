const {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
  } = require("../controllers/course.controller");
    
  /**
   * @swagger
   * components:
   *   schema:
   *     Course:
   *       type: array
   *       properties:
   *         country:
   *           type: string
   *           description: Pays ou ce deroule le grand prix
   *         city:
   *           type: string
   *           description: Ville ou ce deroule le grand prix
   *         circuit:
   *           type: string
   *           description: Nom du circuit ou ce deroule le grand prix
   *         circuitimage:
   *           type: string
   *           description: URL du trace du circuit ou ce deroule le grand prix
   *         countryflag:
   *           type: string
   *           description: URL du drapeau du pays ou ce deroule le grand prix
   *         last5winners:
   *           type: string
   *           description: Nom des 5 derniers vainqueurs du grand prix
   *         date:
   *           type: date
   *           description: Date du grand prix
   * 
   * /course:
   *   get:
   *     summary: Récupère la liste des dates des courses
   *     tags:
   *        - Courses
   *     responses:
   *       '200':
   *         description: Liste des courses
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Course'
   *   post:
   *     summary: Crée une nouvelle courses
   *     tags:
   *        - Courses
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Course'
   *     responses:
   *       '200':
   *         description: Course créé avec succès
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Course'
   *   delete:
   *     summary: Supprime toutes les courses
   *     tags:
   *        - Courses
   *     responses:
   *       '200':
   *         description: Course supprimés avec succès
   * 
    * swagger: "2.0"
   * info:
   *   version: "1.0.0"
   *   title: "API des Courses"
   * paths:
   *   /course/{id}:
   *     get:
   *       summary: Récupérer une course par son identifiant.
   *       description: Récupère une courses existante en utilisant son identifiant.
   *       tags:
   *         - Courses
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: Identifiant de la course à récupérer.
   *           type: string
   *       responses:
   *         200:
   *           description: Course récupéré avec succès.
   *           schema:
   *             $ref: "#/definitions/Course"
   *         404:
   *           description: Course non trouvé - L'identifiant fourni ne correspond à aucunne course existant.
   *         500:
   *           description: Erreur lors de la récupération de la course.
   *     patch:
   *       summary: Mettre à jour une course.
   *       description: Met à jour la course identifié par l'identifiant fourni.
   *       tags:
   *         - Courses
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: Identifiant de la course à mettre à jour.
   *           type: string
   *       requestBody:
   *         required: true
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Course"
   *       responses:
   *         200:
   *           description: Course mis à jour avec succès.
   *           schema:
   *             $ref: "#/definitions/Course"
   *         400:
   *           description: Requête invalide - Il y a une données manquante ou incorrecte dans le corps de la requête.
   *         404:
   *           description: Pilote non trouvé - L'identifiant fourni ne correspond à aucunne course existante.
   *         500:
   *           description: Erreur interne du serveur.
   *     delete:
   *       summary: Supprimer une course.
   *       description: Supprime la course identifié par l'identifiant fourni.
   *       tags:
   *         - Courses
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: Identifiant de la course à supprimer.
   *           type: string
   *       responses:
   *         200:
   *           description: Course supprimé avec succès.
   *         404:
   *           description: Course non trouvé - L'identifiant fourni ne correspond à aucunne course existant.
   *         500:
   *           description: Erreur interne du serveur.
   */
    
    
    module.exports = function (app) {
      app.get("/course", getCourses);
      app.get("/course/:id", getCourse);
      app.post("/course", createCourse);
      app.patch("/course/:id", updateCourse);
      app.delete("/course/:id", deleteCourse);
    };
    