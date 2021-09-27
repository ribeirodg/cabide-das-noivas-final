const modelosJson = require('../database/modelos.json');

module.exports = {
    index: (req, res) => {
        res.render('index', { title: 'Cabide das Noivas - Home' });
      },
      login: (req, res) => {
        res.render('login', { title: 'Cabide das Noivas - Login' });
      },
      ajuda: (req, res) => {
        res.render('ajuda', { title: 'Cabide das Noivas - Ajuda' });
      },
      carrinho: (req, res) => {
        res.render('carrinho', { title: 'Cabide das Noivas - Carrinho' });
      },
      cadastroUsuario: (req, res) => {
        res.render('cadastroUsuario', { title: 'Cabide das Noivas - Cadastro Usuario' });
      },
      carrinhoVazio: (req, res) => {
        res.render('carrinhoVazio', { title: 'Cabide das Noivas - Carrinho Vazio' });
      },
      sobre: (req, res) => {
        res.render('sobre', {title: 'Cabide das Noivas - Sobre'});
      },
      colecao: (req, res) => {
        res.render('colecao', {title: 'Cabide das Noivas - Coleção'});
      },
      vestidos: (req, res) => {
        const {idColecao} = req.params;
        let vestidos;
        if (idColecao == 0) {
          vestidos = modelosJson;
        } else {

        vestidos = modelosJson.filter(function(vestido) {
          return vestido.colecao == idColecao;
        })
      }
        res.render('vestidos', { vestidos, title: 'Cabide das Noivas - vestidos' });
      },
}