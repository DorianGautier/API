const db = require("../models");

const Resultat = db.resultat;

exports.getResultats = async (req, res) => {
    let resultats = await Resultat.find();
    res.json(resultats);
}

exports.getResultat = async (req, res) => {
    let { id } = req.params;
    let resultat = await Resultat.findById(id);
    res.json(resultat);
}

exports.createResultat = async (req, res) => {
    const {circuit, pilote1, pilote1time, pilote2, pilote2time, pilote3, pilote3time, pilote4, pilote4time, pilote5, pilote5time, pilote6, pilote6time, pilote7, pilote7time, pilote8, pilote8time, pilote9, pilote9time, pilote10, pilote10time, pilote11, pilote11time, pilote12, pilote12time, pilote13, pilote13time, pilote14, pilote14time, pilote15, pilote15time, pilote16, pilote16time, pilote17, pilote17time, pilote18, pilote18time, pilote19, pilote19time, pilote20, pilote20time } = req.body;
    let resultat = await Resultat.create({
        circuit: circuit,
        pilote1: pilote1,
        pilote1time:pilote1time ,
        pilote2:pilote2 ,
        pilote2time:pilote2time ,
        pilote3:pilote3 ,
        pilote3time:pilote3time ,
        pilote4:pilote4 ,
        pilote4time:pilote4time ,
        pilote5:pilote5 ,
        pilote5time:pilote5time ,
        pilote6:pilote6 ,
        pilote6time:pilote6time ,
        pilote7:pilote7 ,
        pilote7time:pilote7time ,
        pilote8:pilote8 ,
        pilote8time:pilote8time ,
        pilote9:pilote9 ,
        pilote9time:pilote9time ,
        pilote10:pilote10 ,
        pilote10time:pilote10time ,
        pilote11:pilote11 ,
        pilote11time:pilote11time ,
        pilote12:pilote12 ,
        pilote12time:pilote12time ,
        pilote13:pilote13 ,
        pilote13time:pilote13time ,
        pilote14:pilote14 ,
        pilote14time:pilote14time ,
        pilote15:pilote15 ,
        pilote15time:pilote15time ,
        pilote16:pilote16 ,
        pilote16time:pilote16time ,
        pilote17:pilote17 ,
        pilote17time:pilote17time ,
        pilote18:pilote18 ,
        pilote18time:pilote18time ,
        pilote19:pilote19 ,
        pilote19time:pilote19time ,
        pilote20:pilote20 ,
        pilote20time:pilote20time ,
    });
    await resultat.save();
    res.json(resultat);
}

exports.updateResultat = async (req, res) => {
    let { id } = req.params;
    const { circuit, pilote1, pilote1time, pilote2, pilote2time, pilote3, pilote3time, pilote4, pilote4time, pilote5, pilote5time, pilote6, pilote6time, pilote7, pilote7time, pilote8, pilote8time, pilote9, pilote9time, pilote10, pilote10time, pilote11, pilote11time, pilote12, pilote12time, pilote13, pilote13time, pilote14, pilote14time, pilote15, pilote15time, pilote16, pilote16time, pilote17, pilote17time, pilote18, pilote18time, pilote19, pilote19time, pilote20, pilote20time } = req.body;
    let resultat = await Resultat.findByIdAndUpdate(id, {
        circuit: circuit,
        pilote1: pilote1,
        pilote1time:pilote1time ,
        pilote2:pilote2 ,
        pilote2time:pilote2time ,
        pilote3:pilote3 ,
        pilote3time:pilote3time ,
        pilote4:pilote4 ,
        pilote4time:pilote4time ,
        pilote5:pilote5 ,
        pilote5time:pilote5time ,
        pilote6:pilote6 ,
        pilote6time:pilote6time ,
        pilote7:pilote7 ,
        pilote7time:pilote7time ,
        pilote8:pilote8 ,
        pilote8time:pilote8time ,
        pilote9:pilote9 ,
        pilote9time:pilote9time ,
        pilote10:pilote10 ,
        pilote10time:pilote10time ,
        pilote11:pilote11 ,
        pilote11time:pilote11time ,
        pilote12:pilote12 ,
        pilote12time:pilote12time ,
        pilote13:pilote13 ,
        pilote13time:pilote13time ,
        pilote14:pilote14 ,
        pilote14time:pilote14time ,
        pilote15:pilote15 ,
        pilote15time:pilote15time ,
        pilote16:pilote16 ,
        pilote16time:pilote16time ,
        pilote17:pilote17 ,
        pilote17time:pilote17time ,
        pilote18:pilote18 ,
        pilote18time:pilote18time ,
        pilote19:pilote19 ,
        pilote19time:pilote19time ,
        pilote20:pilote20 ,
        pilote20time:pilote20time ,
    });
    resultat.updateOne();
    res.json(resultat);
}


exports.deleteResultat = async (req, res) => {
    let { id } = req.params;
    await Resultat.findByIdAndDelete(id);
    res.sendStatus(204);
}

