//requires
const express = require('express');
const router = express.Router();
//globals
const plants = [{name: 'Basil', qty: 1, inStock: true, notes:''}];


router.get('/', (req, res) => {
    console.log('GET /plants');
    res.send(plants);
});//end get

router.post('/', (req, res) => {
    console.log('POST /plant', req.body);
    const dataFromClient = req.body;
    if(dataFromClient.qty > 0) {
        dataFromClient.inStock = true;
    } else {
        dataFromClient.inStock = false;
    }
    plants.push(dataFromClient);
    res.send(plants); // Respond to client
});

module.exports = router;