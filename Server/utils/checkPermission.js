const jwt = require('jsonwebtoken');
const pasportConfig = require('../config/pasportConfig.json');

const checkPermission = (token) => {
  var decodeToken = jwt.verify(token.replace('Bearer ', ''), pasportConfig.secret);
  if (decodeToken.role === 'admin') {
    return true;
  }
  return false;
}

module.exports = checkPermission;