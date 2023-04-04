const sequelize = require("../models/index");
const initModels = require("../models/initModels");
const model = initModels(sequelize);
const { successCode, failCode, errorCode } = require("../config/respond");

const getAPI = async (req, res) => {
  try {
    let data = await model.user.findAll();

    successCode(res, data, "Successfully retrieves data");
  } catch (error) {
    errorCode(res, "Error Back end");
  }
};
module.exports = getAPI;
