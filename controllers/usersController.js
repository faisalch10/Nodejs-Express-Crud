const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = [];

exports.registerUser = async (req, res) => {
  let newUser = req.body;

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(newUser.password, salt);
  newUser.password = hashedPassword;

  user.push(newUser);

  return res.status(201).json({ message: "User created successfully" });
};

exports.loginUser = async (req, res) => {
  let newUser = req.body;

  const filteredUser = user.find((user) => user.email === newUser.email);

  if (!filteredUser) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordMatch = await bcryptjs.compare(
    newUser.password,
    filteredUser.password
  );

  if (!isPasswordMatch) {
    return res.status(401).json({ message: "Invalid credentails" });
  }

  const token = jwt.sign({ email: filteredUser.email }, "jwtSecret", {
    expiresIn: "7d",
  });

  return res.status(200).json({ token });
};
