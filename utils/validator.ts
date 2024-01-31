const User = require("../Database/db");
const bcrypt = require("bcrypt");
async function ValidateUserPassword(
  userName: string,
  password: string
): Promise<boolean> {
  console.log(User);
  let oneUser = await User.User.findOne({ username: userName });
  let result: boolean;
  await bcrypt
    .compare(password, oneUser.hash)
    .then((res: boolean) => {
      result = res;
    })
    .catch((err: any) => console.error(err.message));

  return result;
}
export { ValidateUserPassword };
