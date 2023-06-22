const {
    getResultats,
    getResultat,
    createResultat,
    updateResultat,
    deleteResultat,
  } = require("../controllers/resultat.controller");
    
  /**
   * @swagger
   * components:
   *   schema:
   *     Resultat:
   *       type: array
   *       properties:
   *         circuit:
   *           type: string
   *           description: circuit ou ce deroule le grand prix
   *         pilote1:
   *           type: string
   *           description: Nom du pilote
   *         pilote1time:
   *           type: string
   *           description: Temps du pilote
   *         pilote2:
   *           type: string
   *           description: Nom du pilote
   *         pilote2time:
   *           type: string
   *           description: Temps du pilote
   *         pilote3:
   *           type: string
   *           description: Nom du pilote
   *         pilote3time:
   *           type: string
   *           description: Temps du pilote
   *         pilote4:
   *           type: string
   *           description: Nom du pilote
   *         pilote4time:
   *           type: string
   *           description: Temps du pilote
   *         pilote5:
   *           type: string
   *           description: Nom du pilote
   *         pilote5time:
   *           type: string
   *           description: Temps du pilote
   *         pilote6:
   *           type: string
   *           description: Nom du pilote
   *         pilote6time:
   *           type: string
   *           description: Temps du pilote
   *         pilote7:
   *           type: string
   *           description: Nom du pilote
   *         pilote7time:
   *           type: string
   *           description: Temps du pilote
   *         pilote8:
   *           type: string
   *           description: Nom du pilote
   *         pilote8time:
   *           type: string
   *           description: Temps du pilote
   *         pilote9:
   *           type: string
   *           description: Nom du pilote
   *         pilote9time:
   *           type: string
   *           description: Temps du pilote
   *         pilote10:
   *           type: string
   *           description: Nom du pilote
   *         pilote10time:
   *           type: string
   *           description: Temps du pilote
   *         pilote11:
   *           type: string
   *           description: Nom du pilote
   *         pilote11time:
   *           type: string
   *           description: Temps du pilote
   *         pilote12:
   *           type: string
   *           description: Nom du pilote
   *         pilote12time:
   *           type: string
   *           description: Temps du pilote
   *         pilote13:
   *           type: string
   *           description: Nom du pilote
   *         pilote13time:
   *           type: string
   *           description: Temps du pilote
   *         pilote14:
   *           type: string
   *           description: Nom du pilote
   *         pilote14time:
   *           type: string
   *           description: Temps du pilote
   *         pilote15:
   *           type: string
   *           description: Nom du pilote
   *         pilote15time:
   *           type: string
   *           description: Temps du pilote
   *         pilote16:
   *           type: string
   *           description: Nom du pilote
   *         pilote16time:
   *           type: string
   *           description: Temps du pilote
   *         pilote17:
   *           type: string
   *           description: Nom du pilote
   *         pilote17time:
   *           type: string
   *           description: Temps du pilote
   *         pilote18:
   *           type: string
   *           description: Nom du pilote
   *         pilote18time:
   *           type: string
   *           description: Temps du pilote
   *         pilote19:
   *           type: string
   *           description: Nom du pilote
   *         pilote19time:
   *           type: string
   *           description: Temps du pilote
   *         pilote20:
   *           type: string
   *           description: Nom du pilote
   *         pilote20time:
   *           type: string
   *           description: Temps du pilote
   * 
   * 
   * /resultat:
   *   get:
   *     summary: Récupère les resultats
   *     tags:
   *        - Resultats
   *     responses:
   *       '200':
   *         description: Liste des resultats
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Resultat'
   *   post:
   *     summary: Crée un nouveau resultats
   *     tags:
   *        - Resultats
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Resultat'
   *     responses:
   *       '200':
   *         description: Resultat créé avec succès
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Resultat'
   *   delete:
   *     summary: Supprime toutes les resultats
   *     tags:
   *        - Resultats
   *     responses:
   *       '200':
   *         description: Resultat supprimés avec succès
   * 
    * swagger: "2.0"
   * info:
   *   version: "1.0.0"
   *   title: "API des Resultats"
   * paths:
   *   /resultat/{id}:
   *     get:
   *       summary: Récupérer un resultat par son identifiant.
   *       description: Récupère un resultats existant en utilisant son identifiant.
   *       tags:
   *         - Resultats
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: Identifiant du resultat à récupérer.
   *           type: string
   *       responses:
   *         200:
   *           description: Resultat récupéré avec succès.
   *           schema:
   *             $ref: "#/definitions/Resultat"
   *         404:
   *           description: Resultat non trouvé - L'identifiant fourni ne correspond à aucun resultat existant.
   *         500:
   *           description: Erreur lors de la récupération du resultat.
   *     patch:
   *       summary: Mettre à jour un resultat.
   *       description: Mettre à jour le resultat identifié par l'identifiant fourni.
   *       tags:
   *         - Resultats
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: Identifiant du resultat à mettre à jour.
   *           type: string
   *       requestBody:
   *         required: true
   *         content:
   *           application/json:
   *             schema:
   *               $ref: "#/definitions/Resultat"
   *       responses:
   *         200:
   *           description: Resultat mis à jour avec succès.
   *           schema:
   *             $ref: "#/definitions/Resultat"
   *         400:
   *           description: Requête invalide - Il y a une données manquante ou incorrecte dans le corps de la requête.
   *         404:
   *           description: Pilote non trouvé - L'identifiant fourni ne correspond à aucun resultat existant.
   *         500:
   *           description: Erreur interne du serveur.
   *     delete:
   *       summary: Supprimer un resultat.
   *       description: Supprime le resultat identifié par l'identifiant fourni.
   *       tags:
   *         - Resultats
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: Identifiant du resultat à supprimer.
   *           type: string
   *       responses:
   *         200:
   *           description: Resultat supprimé avec succès.
   *         404:
   *           description: Resultat non trouvé - L'identifiant fourni ne correspond à aucun resultat existant.
   *         500:
   *           description: Erreur interne du serveur.
   */
    
    
    module.exports = function (app) {
      app.get("/resultat", getResultats);
      app.get("/resultat/:id", getResultat);
      app.post("/resultat", createResultat);
      app.patch("/resultat/:id", updateResultat);
      app.delete("/resultat/:id", deleteResultat);
    };
    


    // {
    //     "circuit": "Grand Prix de Miami",
    //     "pilote1": "Max Verstappen",
    //     "pilote1time": "1.27.38.241",
    //     "pilote2": "Sergio Perez",
    //     "pilote2time": "+5.384s",
    //     "pilote3": "Fernando Alonso",
    //     "pilote3time": "+26.305s",
    //     "pilote4": "George Russel",
    //     "pilote4time": "+33.229s",
    //     "pilote5": "Carlos Sainz JR.",
    //     "pilote5time": "+42.511s",
    //     "pilote6": "Lewis Hamilton",
    //     "pilote6time": "+51.249s",
    //     "pilote7": "Charles Leclerc",
    //     "pilote7time": "+52.288s",
    //     "pilote8": "Pierre Gasly",
    //     "pilote8time": "+55.670s",
    //     "pilote9": "Esteban Ocon",
    //     "pilote9time": "+58.123s",
    //     "pilote10": "Kevin Magnussen",
    //     "pilote10time": "+62.945s",
    //     "pilote11": "Yuki Tsunoda",
    //     "pilote11time": "+64.309s",
    //     "pilote12": "Lance Stroll",
    //     "pilote12time": "+64.754",
    //     "pilote13": "Valteri Bottas",
    //     "pilote13time": "+71.637s",
    //     "pilote14": "Alexander Albon",
    //     "pilote14time": "+72.861s",
    //     "pilote15": "Niko Hulkenberg",
    //     "pilote15time": "+74.950s",
    //     "pilote16": "Zhou Guanyu",
    //     "pilote16time": "+78.440s",
    //     "pilote17": "Lando Norris",
    //     "pilote17time": "+87.717s",
    //     "pilote18": "Nick de Vries",
    //     "pilote18time": "+88.949s",
    //     "pilote19": "Oscar Piastri",
    //     "pilote19time": "+ 1 tour",
    //     "pilote20": "Logan Sargeant",
    //     "pilote20time": "+ 1 tour"
    //   }