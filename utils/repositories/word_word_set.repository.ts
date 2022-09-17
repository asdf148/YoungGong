import { PostgrestError } from "https://esm.sh/v94/@supabase/postgrest-js@0.37.4/dist/module/index";
import SupabaseClient from "https://esm.sh/v94/@supabase/supabase-js@1.35.3/dist/module/SupabaseClient.d.ts";
import { AddWordWordSetDTO } from "../dto/add_word_word_set.dto.ts";

export class WordWordSetRepository {
  #client: SupabaseClient;
  constructor(client: SupabaseClient) {
    this.#client = client;
  }

  async addWordWordSet(
    wordWordSet: AddWordWordSetDTO,
  ): Promise<PostgrestError | null> {
    const { error } = await this.#client.from("word_word_set").insert([{
      word_id: wordWordSet.word_id,
      word_set_id: wordWordSet.word_set_id,
    }]);

    return error;
  }
}
