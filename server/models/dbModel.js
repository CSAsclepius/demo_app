const { Pool } = require("pg");

//bring in the Elephant-SQL database url
const PG_URI =
  "postgres://hxxsnvxw:3Iu7LTwZCPLiNDmPze57MlCvFJ_EGNj-@snuffleupagus.db.elephantsql.com/hxxsnvxw";

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
