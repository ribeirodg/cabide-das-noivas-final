var express = require('express');
const CabideController = require('../controllers/CabideController');
var router = express.Router();

/* GET home page. */
router.get('/', CabideController.index);
router.get('/login', CabideController.login);
router.get('/ajuda', CabideController.ajuda);
router.get('/carrinho/:id', CabideController.carrinho);
router.get('/carrinho', CabideController.carrinhoVazio);
router.get('/cadastroUsuario', CabideController.cadastroUsuario);
router.get('/sobre', CabideController.sobre);
router.get('/colecao', CabideController.colecao);

module.exports = router;
