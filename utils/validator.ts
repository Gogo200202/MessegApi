const User = require("../Database/db");
const bcrypt = require("bcrypt");
async function ValidateUserPassword(
  userName: string,
  password: string
): Promise<boolean> {
  let oneUser = await User.findOne({ username: userName });

  await bcrypt
    .compare(password, oneUser.hash)
    .then((res: string) => {
      console.log(res);
      return res;
    })
    .catch((err: any) => console.error(err.message));
  return false;
}
export { ValidateUserPassword };
