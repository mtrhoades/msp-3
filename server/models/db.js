
const Pool = require('pg').Pool;

const pool = new Pool ({
    host: "ec2-34-193-44-192.compute-1.amazonaws.com",
    user: "wcbkbmkoxzutux",
    password: "9b18493d40cef8edbd02e482a62a01e551e60af97613b4d4379bfccd14087c5a",
    port: 5432,
    database: "dfl7shtsg0hv9q"
});



module.exports = pool;



// const Pool = require('pg').Pool;
// require("dotenv").config();

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DATABASE,
// };
// const proConfig = {
//   connectionString: process.env.DATABASE_URL, // HEROKU ADDON
//     ssl:{
//         rejectUnauthorized:false
//     }
// };


// const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);



// module.exports = pool;