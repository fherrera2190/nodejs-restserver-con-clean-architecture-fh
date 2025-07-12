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
      //2. Hacer el hash de la contraseña
      //3. Mapear la respuesta a nuestra entidad

      return new UserEntity("1", name, email, password, ["ADMIN_ROLE"]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalError();
    }
  }
}
