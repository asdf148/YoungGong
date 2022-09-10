import { SupabaseAuthClient } from "https://esm.sh/v94/@supabase/supabase-js@1.35.3/dist/module/lib/SupabaseAuthClient.d.ts";
import * as supabase from "supabase";

export class UserRepository {
  #client: supabase.SupabaseClient;

  constructor(client: supabase.SupabaseClient) {
    this.#client = client;
  }

  async join(email: string, password: string) {
    let { user, error } = await this.#client.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    return user;
  }
}
