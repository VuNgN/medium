const postsDb = require('../model/home.model');
const { post } = require('../router/home/home');

class controller {
    home = (req, res) => {
        postsDb.find()
          .then(function (post) {
            res.render('home', {
              post: post.map((p) => p.toObject()),
            })
          })
      } 
}

module.exports = new controller();
