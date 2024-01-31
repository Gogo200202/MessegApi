const bcrypt = require("bcrypt");
const saltRounds = 10;
const database = require("../Database/db");
async function ValidateUser(
  userName: string,
  password: string
): Promise<boolean> {
  let result = await database.User.findOne({ username: userName });
  if (result == null) {
    return false;
  }
  let isValid = await bcrypt.compare(password, result._doc.hash);

  return isValid;
}
export { ValidateUser };
