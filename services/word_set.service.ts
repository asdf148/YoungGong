import { WordSet } from "../utils/database/models/word_set.ts";
import { AddWordSetDTO } from "../utils/dto/add_word_set.dto.ts";
import { WordSetRepository } from "../utils/repositories/word_set.reppository.ts";

export class WordSetService {
  #wordSetRepository: WordSetRepository;

  constructor(wordSetRepository: WordSetRepository) {
    this.#wordSetRepository = wordSetRepository;
  }

  async getWordSets(): Promise<Array<WordSet>> {
    return await this.#wordSetRepository.getAllWordSets();
  }

  async addWordSet(wordSetData: AddWordSetDTO): Promise<void> {
    await this.#wordSetRepository.AddWordSet(wordSetData);
    return;
  }
}
