const jwt = require("jsonwebtoken");

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, "jwtSecret");

    if (decoded) {
      req.user = { id: 3, email: "jane@gmail.com", role: "admin" };
      next();
    } else {
      return res.status(401).json({ message: "Token not valid" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    next(new ErrorResponse("Admin Resource. Access denied!", 403));
  }
};
