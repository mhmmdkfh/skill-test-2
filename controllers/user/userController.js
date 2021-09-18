const { success, fail } = require("../../config/response");
const { User } = require("../../models");
const { genSaltSync, hashSync } = require("bcrypt");

exports.createUser = async ({ body }, res) => {
  try {
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      const data = await User.create(body);
      res.json(success({ msg: "data user berhasil ditambahkan", data }));
  } catch (error) {
      res.json(fail({ msg: error }));
  }
};



