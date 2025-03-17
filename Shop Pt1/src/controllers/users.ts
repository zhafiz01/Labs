import User from "../models/User";
import HTTPHandler from "../utils/HTTPHandler";

// CREATE
export const postUser: HTTPHandler = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send("Bad Request");
  }
};

// READ ONE
export const getUser: HTTPHandler = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new Error("404");
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send("User Not Found");
  }
};

// UPDATE
export const putUser: HTTPHandler = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) throw new Error("404");
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send("User Not Found");
  }
};

// DELETE
export const deleteUser: HTTPHandler = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) throw new Error("404");
    res.status(204).send();
  } catch (error) {
    res.status(404).send("User Not Found");
  }
};
