import * as supabase from "supabase";
export class UserRepository {
  #client: supabase.SupabaseClient;

  constructor(client: supabase.SupabaseClient) {
    this.#client = client;
  }

  async insertDatabaseUser(name: string, email: string, password: string) {
    const { user, error } = await this.#client.auth.signUp({
      email: email,
      password: password,
    }, {
      data: {
        name: name,
      },
    });

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    return user;
  }

  async login(email: string, password: string) {
    const { user, error } = await this.#client.auth.signIn({ email, password });

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    return user;
  }
}
