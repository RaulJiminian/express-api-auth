import "dotenv/config";
import User from "../models/user.js";
import bcrypt from "bcrypt";
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

export const signUp = async (req, res) => {
  try {
    // Check if the username is already taken
    const userInDatabase = await User.findOne({ username: req.body.username });

    if (userInDatabase) {
      return res.status(409).json({ err: "Username already taken." });
    }

    const user = await User.create({
      username: req.body.username,
      hashedPassword: bcrypt.hashSync(
        req.body.password,
        Number(process.env.SALT_ROUNDS)
      ),
    });

    const payload = { username: user.username, _id: user._id };

    const token = jwt.sign({ payload }, process.env.JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const signIn = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ err: "Invalid credentials." });
    }

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.hashedPassword
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ err: "Invalid credentials." });
    }

    // Construct the payload
    const payload = { username: user.username, _id: user._id };

    // Create the token, attaching the payload
    const token = jwt.sign({ payload }, process.env.JWT_SECRET);

    // Send the token instead of the message
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
