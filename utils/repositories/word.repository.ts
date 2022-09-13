import * as supabase from "supabase";
import { AddWordDTO } from "../dto/add_word.dto.ts";

export class WordRepository {
  #client: supabase.SupabaseClient;

  constructor(client: supabase.SupabaseClient) {
    this.#client = client;
  }

  async getWords() {
    const result: supabase.PostgrestResponse<any> = await this.#client.from(
      "words",
    )
      .select();

    if (result.error) {
      console.error(result.error);
      throw new Error(result.error.message);
    }

    return result.data;
  }

  async addWord(wordData: AddWordDTO): Promise<void> {
    const { error } = await this.#client.from("words").insert([{
      english: wordData.english,
      mean: wordData.mean,
      hint: wordData.hint,
      user_id: this.#client.auth.session()?.user?.id,
    }], { returning: "minimal" });

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    return;
  }
}
