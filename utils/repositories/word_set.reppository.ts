import {
  PostgrestError,
  PostgrestResponse,
} from "https://esm.sh/v94/@supabase/postgrest-js@0.37.4/dist/module/index.d.ts";
import SupabaseClient from "https://esm.sh/v94/@supabase/supabase-js@1.35.3/dist/module/SupabaseClient.d.ts";
import { WordSet } from "../database/models/word_set.ts";
import { AddWordSetDTO } from "../dto/add_word_set.dto.ts";
import errorHandler from "../error.handler.ts";

export class WordSetRepository {
  #client: SupabaseClient;

  constructor(client: SupabaseClient) {
    this.#client = client;
  }

  async getAllWordSets(): Promise<Array<WordSet>> {
    const { data, error }: PostgrestResponse<any> = await this.#client.from(
      "word_sets",
    )
      .select("*");

    errorHandler(error);

    return data ?? [];
  }

  async AddWordSet(wordSetData: AddWordSetDTO): Promise<PostgrestError | null> {
    const { error }: PostgrestResponse<any> = await this.#client.from(
      "word_sets",
    ).insert({
      name: wordSetData.name,
      comment: wordSetData.comment,
      user_id: this.#client.auth.session()?.user?.id,
    });

    return error;
  }
}
