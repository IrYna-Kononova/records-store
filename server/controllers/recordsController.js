import Record from "../models/Record.js";

export const getAllRecords = async (req, res, next) => {
  try {
    const records = await Record.find();
    res.status(200).json(records);
  } catch (error) {
    next(error);
  }
};
