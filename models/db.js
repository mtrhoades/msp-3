
const Pool = require('pg').Pool;

const pool = new Pool ({
    host: "ec2-34-193-44-192.compute-1.amazonaws.com",
    user: "wcbkbmkoxzutux",
    password: "9b18493d40cef8edbd02e482a62a01e551e60af97613b4d4379bfccd14087c5a",
    port: 5432,
    database: "dfl7shtsg0hv9q"
});



module.exports = pool;



