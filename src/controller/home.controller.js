class controller {
    home = (req, res) => {
        res.render('home')
      }
}

module.exports = new controller();
