import { client } from "@/utils/database/database.ts";
import { UserRepository } from "@/utils/repositories/user.repository.ts";
import { WordRepository } from "../utils/repositories/word.repository.ts";
import { AuthService } from "./auth.service.ts";
import { WordService } from "./word.service.ts";

export const authService: AuthService = new AuthService(
  new UserRepository(client),
);

export const wordService: WordService = new WordService(
  new WordRepository(client),
);
