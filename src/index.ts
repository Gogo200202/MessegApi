const express: any = require("express");
module.exports = express;
const app = express();
const port = process.env.PORT || 3000;

const home = require("../Controllers/Home");
const Db = require("../Database/db");
Db.main();
app.use(home.router);

Db.makeUser("Georgi", "gogo@gmail.com", "123456");

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
