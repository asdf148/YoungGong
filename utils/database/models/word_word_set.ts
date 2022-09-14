export class WordWordSet {
  constructor(init?: Partial<WordWordSet>) {
    Object.assign(this, init);
  }

  id!: string;
  word_id!: string;
  word_set_id!: string;
}
