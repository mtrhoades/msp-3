const router = require('express').Router();
const pool = require('../models/db');



router.get('/', async (req, res) => {
    try {
        // const { email, firstName, lastName } = req.body;
        const items = await pool.query("SELECT * FROM inventory");
        console.log(items)
        res.json(items.rows)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error!')
    }
});


router.post('/', async (req, res) => {
    try {
        const { item, category, supplier, uniteach, paronhand } = req.body;
        const items = await pool.query(
            "INSERT INTO inventory(item, category, supplier, uniteach, paronhand) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [item, category, supplier, uniteach, paronhand]
            );
        console.log(items)
        res.json(items.rows)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error!')
    }
});




module.exports = router;
