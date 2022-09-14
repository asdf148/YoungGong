export class Word {
  constructor(init?: Partial<Word>) {
    Object.assign(this, init);
  }

  id!: string;
  english!: string;
  mean!: string;
  hint?: string;
  created_at!: string;
  user_id!: string;
}
