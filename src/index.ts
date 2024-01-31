const express: any = require("express");
const app = express();
const port = process.env.PORT || 3000;

const home = require("../Controllers/Home");
const Users = require("../Controllers/Users");
const Db = require("../Database/db");

Db.main();
app.use(express.json());
app.use(home.router);
app.use(Users.register);
app.use(Users.login);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
