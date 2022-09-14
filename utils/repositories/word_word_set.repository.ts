import SupabaseClient from "https://esm.sh/v94/@supabase/supabase-js@1.35.3/dist/module/SupabaseClient.d.ts";
import { AddWordWordSetDTO } from "../dto/add_word_word_set.dto.ts";
import errorHandler from "../error.handler.ts";

export class WordWordSetRepository {
  #client: SupabaseClient;
  constructor(client: SupabaseClient) {
    this.#client = client;
  }

  async addWordWordSet(wordWordSet: AddWordWordSetDTO): Promise<void> {
    const { error } = await this.#client.from("word_word_set").insert([{
      word_id: wordWordSet.word_id,
      word_set_id: wordWordSet.word_set_id,
    }]);

    errorHandler(error);

    return;
  }
}
