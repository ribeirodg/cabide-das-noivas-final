module.exports = {
    index: (req, res) => {
        res.render('index', { title: 'Cabide das Noivas - Home' });
      },
      login: (req, res) => {
        res.render('login', { title: 'Cabide das Noivas - Login' });
      }
}