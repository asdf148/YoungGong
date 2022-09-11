import { JoinUserDTO } from "../utils/dto/join_user.dto.ts";
import { LoginUserDTO } from "../utils/dto/login_user.dto.ts";
import { UserRepository } from "../utils/repositories/user.repository.ts";

export class AuthService {
  #userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.#userRepository = userRepository;
  }

  async userJoin(user: JoinUserDTO) {
    return await this.#userRepository.insertDatabaseUser(
      user.name,
      user.email,
      user.password,
    );
  }

  async userLogin(user: LoginUserDTO) {
    return await this.#userRepository.login(user.email, user.password);
  }
}
