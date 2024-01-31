const express: any = require("express");
module.exports = express;
const app = express();
const port = process.env.PORT || 3000;

const home = require("../Controllers/Home");
const Db = require("../Database/db");
const validation = require("../utils/validator");
Db.main();
app.use(home.router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
