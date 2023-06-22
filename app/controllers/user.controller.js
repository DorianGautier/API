const db = require("../models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = db.user;

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Trouver l'utilisateur correspondant au nom d'utilisateur donné
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).send("Nom d'utilisateur ou mot de passe incorrect");
  }

  // Vérifier si le mot de passe correspond au hash stocké
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).send("Nom d'utilisateur ou mot de passe incorrect");
  }

  // Si le nom d'utilisateur et le mot de passe sont corrects, générer un token JWT
  const token = jwt.sign({ userId: user._id }, "secretKey", {
    expiresIn: "1h",
  });

  // Envoyer le token JWT au format Bearer
  res.status(200).json({ token: token });
};

exports.register = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    password: hashedPassword,
  });

  await user.save();

  res.status(201).send("Utilisateur créé avec succès");
};

exports.deleteUser = async (req, res) => {
  let { id } = req.params;
  await User.findByIdAndDelete(id);
  res.sendStatus(204);
}

exports.getUser = async (req, res) => {
  let { id } = req.params;
  let user = await User.findById(id);
  res.json(user);
}

exports.updateUser = async (req, res) => {
  let { id } = req.params;
  const { username, role, password } = req.body;
  let user = await User.findByIdAndUpdate(id, {
    username: username,
    password: password,
    role: role,
  });
  user.updateOne();
  res.json(user);
}

exports.changePassword = async (req, res) => {
  let { id } = req.params;
  const { password, newpassword } = req.body;
  const user = await User.findById( id );
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).send("Mot de passe incorrect");
  }
  const hashedPassword = await bcrypt.hash(newpassword, 10);

  user.password = hashedPassword;
  await user.save();

  res.json(user);
}