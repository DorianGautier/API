const db = require("../models");

const Pilote = db.pilote;

exports.getPilotes = async (req, res) => {
    let pilotes = await Pilote.find();
    res.json(pilotes);
}

exports.getPilote = async (req, res) => {
    let { id } = req.params;
    let pilote = await Pilote.findById(id);
    res.json(pilote);
}

exports.createPilote = async (req, res) => {
    const { firstname, lastname, age, yearinf1, worldchampionships, wins, podiums, polepositions, team, teamlogo, country, countryflag, image, description, active } = req.body;
    let pilote = await Pilote.create({
        firstname: firstname,
        lastname: lastname,
        age: age,
        yearinf1: yearinf1,
        worldchampionships: worldchampionships,
        wins: wins,
        podiums: podiums,
        polepositions: polepositions,
        team: team,
        teamlogo: teamlogo,
        country: country,
        countryflag: countryflag,
        image: image,
        description: description,
        active: active,
    });
    await pilote.save();
    res.json(pilote);
}

exports.updatePilote = async (req, res) => {
    let { id } = req.params;
    const { firstname, lastname, age, yearinf1, worldchampionships, wins, podiums, polepositions, team, teamlogo, country, countryflag, image, description, active } = req.body;
    let pilote = await Pilote.findByIdAndUpdate(id, {
        firstname: firstname,
        lastname: lastname,
        age: age,
        yearinf1: yearinf1,
        worldchampionships: worldchampionships,
        wins: wins,
        podiums: podiums,
        polepositions: polepositions,
        team: team,
        teamlogo: teamlogo,
        country: country,
        countryflag: countryflag,
        image: image,
        description: description,
        active: active,
    });
    pilote.updateOne();
    res.json(pilote);
}


exports.deletePilote = async (req, res) => {
    let { id } = req.params;
    await Pilote.findByIdAndDelete(id);
    res.sendStatus(204);
}

