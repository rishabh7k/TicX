import Users from "../useCases/users/models.js";
import jwt from "jsonwebtoken";

const secret: string | undefined = process.env.JWT_SECRET;

export default class AuthenticationService {
  static authorize(inputUser: Users, validUser: Users) {
    if (!secret) return { error: "secret not given" };

    if (!inputUser) {
      return { error: "user doesnt exist" };
    }
    const isPasswordValid = () => {
      return validUser.password === inputUser.password;
    };

    if (!isPasswordValid) {
      return { error: "wrong password" };
    }
    const token = jwt.sign(
      {
        user_name: inputUser.user_id,
      },
      secret,
      { expiresIn: "30m" }
    );

    return { token: token };
  }

  static validate(token: string): boolean {
    try {
      if (typeof secret === "string") return true; //jwt.verify(token, secret);
      return true;
    } catch (err) {
      return false;
    }
  }
}
