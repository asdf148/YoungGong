export class AddWordWordSetDTO {
  constructor(init?: Partial<AddWordWordSetDTO>) {
    Object.assign(this, init);
  }

  word_id!: string;
  word_set_id!: string;
}
