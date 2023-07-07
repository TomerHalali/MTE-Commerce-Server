const serverConstants = {
    PORT: 4000,
    CONNECTION_MESSAGE: "MTE-Commerce Server Application Listening on port",
  };

  const databaseConstants = {
    CONNECTED: "connected",
    CONNECTION_MESSAGE: "Database Connected Successfully",
  };

  const authConstants = {
    HELLO: "Welcome to MTE-Commerce!",
    EMAIL_ADDRESS: "emailAddress",
    AUTHORIZATION: "authorization"
  };

  const crypto = {
    HEX: "hex",
    UTF8: "utf8",
    SALT: "salt",
    AES: "aes-256-cbc"
  };

  
  module.exports = {
    serverConstants: serverConstants,
    authConstants: authConstants,
    databaseConstants: databaseConstants,
    crypto: crypto
  }
  