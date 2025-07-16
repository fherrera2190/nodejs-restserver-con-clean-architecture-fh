import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import {
  AuthDataSource,
  CustomError,
  RegisterUserDto,
  UserEntity,
} from "../../domain";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;

export class AuthDataSourceImpl implements AuthDataSource {
  constructor(
    private readonly hashFunction: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare
  ) {}

  login(email: string, password: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;

    try {
      //1. Verirficar si el email ya esta registrado

      const exist = await UserModel.findOne({ email });

      if (exist) throw CustomError.badRequest(`User already exists`);

      //2. Hacer el hash de la contraseña
      const user = await UserModel.create({
        name,
        email,
        password: this.hashFunction(password),
      });

      await user.save();

      //3. Mapear la respuesta a nuestra entidad

      return UserMapper.userEntityFromOBject(user);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalError();
    }
  }
}
