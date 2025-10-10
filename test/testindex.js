const crypto = require('crypto');

function hash(mensaje) {
  const hash = crypto.createHash('sha256');
  hash.update(mensaje);
  return hash.digest('hex');
}

module.exports = hash;

import crypto from "crypto";

function hash(mensaje) {
    const hash = crypto.createHash('sha512');
    hash.update(mensaje);
    return hash.digest('hex');
}


module.exports = hash;
