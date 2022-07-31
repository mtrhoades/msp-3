const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "anuolcrzualnmb",
    password: "9d4f40ffc37975bdea0306dbcac747c5d3a2a3ebfee55486d925cfcedb0c3b5d",
    host: "ec2-44-206-197-71.compute-1.amazonaws.com",
    port: 5432,
    database: "d2lvnbf6ipvkib"
});

module.exports = pool;