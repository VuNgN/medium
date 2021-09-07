const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
const router = require('./router/index');
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))

router(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});