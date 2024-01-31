const express: any = require("express");
//module.exports = express;
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const home = require("../Controllers/Home");
const Users = require("../Controllers/Users");
const Db = require("../Database/db");
Db.main();
app.use(home.router);
app.use(Users.createUser);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
