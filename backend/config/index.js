// module.exports = {
//   environment: process.env.NODE_ENV || 'development',
//   port: process.env.PORT || 8000,
//   dbFile: process.env.DB_FILE,
//   db: {
//       username: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_DATABASE,
//       schema: process.env.SCHEMA,
//       host: process.env.DB_HOST
//   },
//   jwtConfig: {
//       secret: process.env.JWT_SECRET,
//       expiresIn: process.env.JWT_EXPIRES_IN
//   }
// };
module.exports = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8000,
    dbFile: process.env.DB_FILE,
    jwtConfig: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN
    }
};
