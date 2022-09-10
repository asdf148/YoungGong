import { UserRepository } from "../utils/repositories/user.repository.ts";

export class AuthService {
  #userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.#userRepository = userRepository;
  }

  async joinUser(user: any) {
    return await this.#userRepository.join(user.email, user.password);
  }
}
