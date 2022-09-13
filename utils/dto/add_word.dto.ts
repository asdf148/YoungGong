export class AddWordDTO {
  constructor(init?: Partial<AddWordDTO>) {
    Object.assign(this, init);
  }

  english!: string;
  mean!: string;
  hint!: string;
}
