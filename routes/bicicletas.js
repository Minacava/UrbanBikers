var express = require('express');
var router = express.Router();
var BicicletaController = require('../controllers/bicicleta');

router.get('/', BicicletaController.bicicleta_list);
router.get('/create', BicicletaController.bicicleta_create_get);
router.post('/create', BicicletaController.bicicleta_create_post);
module.exports = router;
