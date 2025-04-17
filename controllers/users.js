import "dotenv/config";
import jwt from "jsonwebtoken";

export const signToken = (req, res) => {
  const user = {
    _id: 1,
    username: "rara",
    password: "rara",
  };

  const token = jwt.sign({ user }, process.env.JWT_SECRET);
  console.log(token);

  res.json({ token });
};

export const verifyToken = (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    res.json({ decode });
  } catch (error) {
    res.status(401).json({ err: "Invalid token." });
  }
};

export const signUp = (req, res) => {
  res.json({ message: "Sign up route" });
};
