const crypto = require("crypto");
const dotenv = require("dotenv");
dotenv.config();
const constants = require("../constants/constants")

const algorithm = constants.crypto.AES;
const key = crypto.scryptSync(process.env.CRYPTO_PRIVATE_KEY, constants.crypto.SALT, 32);
let iv = Buffer.from(process.env.CTYPTO_IV, constants.crypto.HEX);


// Encryption function
function encryptString(plainText) {
  try {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(plainText, constants.crypto.UTF8, constants.crypto.HEX);
    encrypted += cipher.final(constants.crypto.HEX);
    return encrypted;
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
}

// Decryption function
function decryptString(encryptedText) {
  try {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, constants.crypto.HEX, constants.crypto.UTF8);
    decrypted += decipher.final(constants.crypto.UTF8);
    return decrypted;
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
}

module.exports = {
  encryptString: encryptString,
  decryptString: decryptString,
};
