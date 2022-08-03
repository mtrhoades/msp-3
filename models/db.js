const Pool = require('pg').Pool; // dependency to use postgres(pg) module that helps connect to postgreSQL database.

const pool = new Pool ({
    user: 'postgres',
    password: 'Ruckus179',
    host: 'localhost',
    port: 5432,
    database: 'kulaLodgeApp'
});

module.exports = pool; // export to use in controller file.



// require('dotenv').config();


// // const devConfig = {
// //         user: process.env.PG_USER,
// //         password: process.env.PG_PASSWORD,
// //         host: process.env.PG_HOST,
// //         database: process.env.PG_DATABASE,
// //         port: process.env.PG_PORT
// // }

// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

// const proConfig = process.env.DATABASE_URL // heroku addons

// const pool = new Pool({
//     connectionString:
//         process.env.NODE_ENV === 'production' ? proConfig : devConfig
// });





// const pool = new Pool ({
//     host: "ec2-34-193-44-192.compute-1.amazonaws.com",
//     user: "wcbkbmkoxzutux",
//     password: "9b18493d40cef8edbd02e482a62a01e551e60af97613b4d4379bfccd14087c5a",
//     port: 5432,
//     database: "dfl7shtsg0hv9q"
// });





module.exports = pool;



