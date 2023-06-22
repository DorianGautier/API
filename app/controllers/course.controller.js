const db = require("../models");

const Course = db.course;

exports.getCourses = async (req, res) => {
    let courses = await Course.find();
    res.json(courses);
}

exports.getCourse = async (req, res) => {
    let { id } = req.params;
    let course = await Course.findById(id);
    res.json(course);
}

exports.createCourse = async (req, res) => {
    const {country, city, circuit, circuitimage, countryflag, last5winners, date } = req.body;
    let course = await Course.create({
        country: country,
        city: city,
        circuit: circuit,
        circuitimage: circuitimage,
        countryflag: countryflag,
        last5winners: last5winners,
        date: date,
    });
    await course.save();
    res.json(course);
}

exports.updateCourse = async (req, res) => {
    let { id } = req.params;
    const { country, city, circuit, circuitimage, countryflag, last5winners, date } = req.body;
    let course = await Course.findByIdAndUpdate(id, {
        country: country,
        city: city,
        circuit: circuit,
        circuitimage: circuitimage,
        countryflag: countryflag,
        last5winners: last5winners,
        date: date,
    });
    course.updateOne();
    res.json(course);
}


exports.deleteCourse = async (req, res) => {
    let { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.sendStatus(204);
}

