import { UserModel } from "../../data/mongodb";
import {
  AuthDataSource,
  CustomError,
  RegisterUserDto,
  UserEntity,
} from "../../domain";

export class AuthDataSourceImpl implements AuthDataSource {
  login(email: string, password: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;

    try {
      //1. Verirficar si el email ya esta registrado

      const exist = await UserModel.findOne({ email });

      if (exist) throw CustomError.badRequest(`Email ${email} already exists`);

      const user = await UserModel.create({
        name,
        email,
        password,
      });
      //2. Hacer el hash de la contraseña
      await user.save();
      //3. Mapear la respuesta a nuestra entidad

      return new UserEntity(user.id, name, email, password, user.roles);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalError();
    }
  }
}
