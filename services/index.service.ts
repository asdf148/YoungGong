import { client } from "@/utils/database/database.ts";
import { UserRepository } from "@/utils/repositories/user.repository.ts";
import { WordRepository } from "../utils/repositories/word.repository.ts";
import { WordSetRepository } from "../utils/repositories/word_set.reppository.ts";
import { AuthService } from "./auth.service.ts";
import { WordService } from "./word.service.ts";
import { WordSetService } from "./word_set.service.ts";

export const authService: AuthService = new AuthService(
  new UserRepository(client),
);

export const wordService: WordService = new WordService(
  new WordRepository(client),
);

export const wordSetService: WordSetService = new WordSetService(
  new WordSetRepository(client),
);
