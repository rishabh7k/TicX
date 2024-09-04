import Users from "../useCases/users/models.js";
import jwt from "jsonwebtoken";
import prisma from "../database/service.js";

const secret: string | undefined = process.env.JWT_SECRET;

export default class AuthenticationService {
  static async authorize(inputUser: Users) {
    const validUser = await prisma.tblusers.findUnique({
      where: {
        user_id: inputUser.user_id,
      },
    });

    if (!secret) return { error: "secret not given" };

    if (!validUser) {
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
