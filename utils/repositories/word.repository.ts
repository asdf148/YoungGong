import * as supabase from "supabase";
import { Word } from "../database/models/word.ts";
import { AddWordDTO } from "../dto/add_word.dto.ts";
import errorHandler from "../error.handler.ts";

export class WordRepository {
  #client: supabase.SupabaseClient;

  constructor(client: supabase.SupabaseClient) {
    this.#client = client;
  }

  async getWords(): Promise<Array<Word>> {
    const { data, error }: supabase.PostgrestResponse<any> = await this.#client
      .from(
        "words",
      ).select("*");

    errorHandler(error);

    return data as Array<Word>;
  }

  async addWord(wordData: AddWordDTO): Promise<void> {
    const { error } = await this.#client.from("words").insert([{
      english: wordData.english,
      mean: wordData.mean,
      hint: wordData.hint,
      user_id: this.#client.auth.session()?.user?.id,
    }], { returning: "minimal" });

    errorHandler(error);

    return;
  }
}
