const { createHmac } = require("crypto");
const sharedSecret = process.env.HMAC_HASH_SECRET;
function getHmac(body) {
  const message = JSON.stringify(body);

  const hmac = createHmac("SHA256", sharedSecret)
    .update(message, "utf-8")
    .digest("base64");

  return hmac;
}

module.exports = { getHmac };
