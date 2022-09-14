export class WordSet {
  constructor(init?: Partial<WordSet>) {
    Object.assign(this, init);
  }

  id!: string;
  name!: string;
  comment?: string;
  created_at!: string;
  user_id!: string;
}
