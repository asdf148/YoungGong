import { Word } from "../utils/database/models/word.ts";
import { AddWordDTO } from "../utils/dto/add_word.dto.ts";
import { WordRepository } from "../utils/repositories/word.repository.ts";

export class WordService {
  #wordRepository: WordRepository;

  constructor(wordRepository: WordRepository) {
    this.#wordRepository = wordRepository;
  }

  async getAllWord(): Promise<Array<Word>> {
    return await this.#wordRepository.getWords();
  }

  async addWord(word: AddWordDTO): Promise<void> {
    await this.#wordRepository.addWord(word);
    return;
  }
}
