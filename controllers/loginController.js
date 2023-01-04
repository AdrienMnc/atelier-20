const jwt = require("jsonwebtoken");

module.exports = {
  login: (req, res) => {
    const { id, password } = req.body;
    const user = require(`../accounts/${id}`);
    if (user && user.password === password) {
      // générez le token JWT ici en utilisant la clef secrète "secret key"
      const token = jwt.sign({ id }, "secret key", {
        expiresIn: "24h",
      });
      res.status(200).send({ token });
    } else {
      res.status(401).send({ message: "Invalid user or password" });
    }
  },
};
