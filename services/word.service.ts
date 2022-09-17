import { PostgrestError } from "https://esm.sh/v94/@supabase/postgrest-js@0.37.4/dist/module/index";
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

  async addWord(word: AddWordDTO): Promise<PostgrestError | null> {
    return await this.#wordRepository.addWord(word);
  }
}
