import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";

export class AuthMiddleware {
  static validateJWT = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log("Paso por el mid");

    const authorization = req.header("Authorization");

    if (!authorization)
      return res.status(401).json({ error: "No token provided" });

    if (!authorization.startsWith("Bearer "))
      return res.status(401).json({ error: "Invalid Bearer Token" });

    const token = authorization.split(" ").at(1) || "";
    try {
      const payload = await JwtAdapter.validateToken<{ id: string }>(token);

      if (!payload) return res.status(401).json({ error: "Invalid token" });

      const user = await UserModel.findById(payload.id);

      if (!user)
        return res
          .status(401)
          .json({ error: "Invalid token - User not found" });
      //console.log(req);
      console.log(user);
      req.body = { user };

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server error" });
    }
  };
}
