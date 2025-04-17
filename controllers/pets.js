import Pet from "../models/pet.js";

export const getPets = async (req, res) => {
  try {
    const pets = await Pet.find({});
    res.json(pets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPet = async (req, res) => {
  try {
    const { petId } = req.params;
    const foundPet = await Pet.findById(petId);

    if (!foundPet) {
      res.status(404);
      throw new Error("Pet not found.");
    }

    res.status(200).json(foundPet);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

export const createPet = async (req, res) => {
  try {
    const createdPet = await Pet.create(req.body);
    res.status(201).json(createdPet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePet = async (req, res) => {
  try {
    const { petId } = req.params;

    const updatedPet = await Pet.findByIdAndUpdate(petId, req.body);

    if (!updatedPet) {
      res.status(404);
      throw new Error("Pet not found.");
    }

    res.status(200).json(updatedPet);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
};

export const deletePet = async (req, res) => {
  try {
    const { petId } = req.params;

    const deleted = await Pet.findByIdAndDelete(petId);

    if (!deleted) {
      res.status(404);
      throw new Error("Pet not found.");
    }

    res.status(200).json(deleted);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
};
