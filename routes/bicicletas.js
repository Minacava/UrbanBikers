var express = require('express');
var router = express.Router();
var BicicletaController = require('../controllers/bicicleta');

router.get('/', BicicletaController.bicicleta_list);

module.exports = router;
