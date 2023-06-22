const db = require("../models");

const Team = db.team;

exports.getTeams = async (req, res) => {
    let teams = await Team.find();
    res.json(teams);
}

exports.getTeam = async (req, res) => {
    let { id } = req.params;
    let team = await Team.findById(id);
    res.json(team);
}

exports.createTeam = async (req, res) => {
    const { name, description, teamlogo, firstpilote, secondpilote, motormanufacturer,teamprincipal, teamowner, constructorchampionships, yearinf1 } = req.body;
    let team = await Team.create({
        name: name,
        description: description,
        teamlogo: teamlogo,
        firstpilote: firstpilote,
        secondpilote: secondpilote,
        motormanufacturer: motormanufacturer,
        teamprincipal: teamprincipal,
        teamowner: teamowner,
        constructorchampionships: constructorchampionships,
        yearinf1: yearinf1,
    });
    await team.save();
    res.json(team);
}

exports.updateTeam = async (req, res) => {
    let { id } = req.params;
    const { name, description, teamlogo, firstpilote, secondpilote, motormanufacturer,teamprincipal, teamowner, constructorchampionships, yearinf1 } = req.body;
    let team = await Team.findByIdAndUpdate(id, {
        name: name,
        description: description,
        teamlogo: teamlogo,
        firstpilote: firstpilote,
        secondpilote: secondpilote,
        motormanufacturer: motormanufacturer,
        teamprincipal: teamprincipal,
        teamowner: teamowner,
        constructorchampionships: constructorchampionships,
        yearinf1: yearinf1,
    });
    team.updateOne();
    res.json(team);
}


exports.deleteTeam = async (req, res) => {
    let { id } = req.params;
    await Team.findByIdAndDelete(id);
    res.sendStatus(204);
}

