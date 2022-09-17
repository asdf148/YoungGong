import { PostgrestError } from "https://esm.sh/v94/@supabase/postgrest-js@0.37.4/dist/module/index";
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

  async addWordSet(wordSetData: AddWordSetDTO): Promise<PostgrestError | null> {
    return await this.#wordSetRepository.AddWordSet(wordSetData);
  }
}
