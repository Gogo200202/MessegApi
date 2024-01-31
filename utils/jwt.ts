const jwt = require("jsonwebtoken");
//
let key: string = "x+KNSX#Usdk*J`f!(fxPe*GNYV!JO/:M";

function generateJwt(userName: string) {
  const token = jwt.sign({ userName: userName }, key, {
    expiresIn: "1h",
  });

  return token;
}

function verifyToken(req, res, next) {
  console.log();
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, key);
    req.username = decoded.username;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

export { generateJwt, verifyToken };
