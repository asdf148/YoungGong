import { UserRepository } from "../utils/repositories/user.repository.ts";

export class AuthService {
  #userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.#userRepository = userRepository;
  }

  async joinUser(user: any) {
    //이름도 추가 해야됨
    return await this.#userRepository.join(user.email, user.password);
  }
}
