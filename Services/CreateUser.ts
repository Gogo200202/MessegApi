const Db = require("../Database/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function createUser(user): Promise<boolean> {
  async function makeUser(
    userName: string,
    email: string,
    password: string
  ): Promise<boolean> {
    let response = true;
    let hashPassword: string = "";
    await bcrypt
      .hash(password, saltRounds)
      .then((hash: string) => {
        hashPassword = hash;
        // console.log("Hash ", hash);
      })
      .catch((err: { message: string }) => console.error(err.message));
    let user = new Db.User({
      username: userName,
      email: email,
      hash: hashPassword,
    });
    try {
      await user.save();
    } catch (e: any) {
      response = false;
      console.log(e);
    }
    return response;
  }

  let response = await makeUser(user.username, user.email, user.password);
  return response;
}
export { createUser };
