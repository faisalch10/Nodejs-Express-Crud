const middlewareFunc = (req, res, next) => {
  console.log("Auth middleware ran");

  const userExist = true;

  if (!userExist) {
    return res.status(401).json({ message: "User is not authorzied" });
  } else {
    next();
  }
};

const validatorMiddleware = (req, res, next) => {
  console.log("validation ran!");

  const validation = false;

  if (!validation) {
    return res.status(400).json({ message: "Validtion failed" });
  } else {
    next();
  }
};

module.exports = {
  middlewareFunc,
  validatorMiddleware,
};
