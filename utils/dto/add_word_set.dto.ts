export class AddWordSetDTO {
  constructor(init?: Partial<AddWordSetDTO>) {
    Object.assign(this, init);
  }

  name!: string;
  comment?: string;
}
