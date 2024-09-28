const fs = require('fs');
const { nanoid } = require('nanoid');

const usersDb = './db/users.json';

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} username
 * @property {string} password
 * @property {boolean} is_premium
 */

/**
 * @typedef {((error:unknown | null | undefined, data:User[] | null | undefined) => void) | null | undefined} Callback
 */

class UsersModel {
  constructor() {}

  /**
   *
   * @param {User[]} data
   * @private
   *
   */
  saveFile(data) {
    const toJson = JSON.stringify(data, null, 2);

    fs.writeFile(usersDb, toJson, (err) => {
      if (err) console.log('Error writing file');
    });
  }

  /**
   *
   * @param {Callback} cb
   * @private
   *
   */
  readFile(cb) {
    fs.readFile(usersDb, 'utf-8', (err, data) => {
      if (err) return cb?.(err);

      const parsedData = JSON.parse(data);
      cb?.(null, parsedData);
    });
  }

  /**
   *
   * @param {Omit<User,'id'>} user
   * @param {Callback} cb
   */
  createUser(user, cb) {
    this.readFile((err, data) => {
      if (err) return cb(err, null);

      user.id = nanoid();

      data.push(user);
      this.saveFile(data);
      cb(null, user);
    });
  }

  /**
   *
   * @param {Callback} cb
   */
  getAllUsers(cb) {
    this.readFile((err, data) => {
      if (err) return cb(err, null);

      cb(null, data);
    });
  }
}

module.exports = UsersModel;
