const Csrf = require('csrf');

const tokens = new Csrf();
const secret = 'S3Cre3Tz_bw4ngh1t_lh0h!'; // .envにおいて！

/**
 *
 * @param {string} token
 * @returns {boolean}
 */
function verifyCsrf(token) {
  return tokens.verify(secret, token);
}

module.exports = verifyCsrf;
