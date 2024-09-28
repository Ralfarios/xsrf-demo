const UsersModel = require('../models/users');
const verifyCsrf = require('../utils/csrf-protector');

const Model = new UsersModel();

class UserController {
  /**
   *
   * @param {never} req
   * @param {import('express').Response} res
   * @returns
   */
  static getAllUsers(_, res) {
    return Model.getAllUsers((error, data) => {
      if (error)
        return res
          .status(500)
          .json({ message: 'Unknown error occured', error });

      return res.json({ message: 'Get all users success', data });
    });
  }

  static createUser(req, res) {
    const body = req.body;

    return Model.createUser(body, (error, data) => {
      if (error)
        return res.status(400).json({ message: 'Error occured', error });

      return res.status(201).json({ message: 'Create user success', data });
    });
  }

  static createUserSafe(req, res) {
    const body = req.body;
    const verify = verifyCsrf(body?.token);

    if (!body?.token || !verify)
      return res.status(401).json({
        message: 'Your form has been tampered',
        error: 'XSRF Token is invalid',
      });

    return Model.createUser(body, (error, data) => {
      if (error)
        return res.status(400).json({ message: 'Error occured', error });

      return res.status(201).json({ message: 'Create user success', data });
    });
  }
}

module.exports = UserController;
