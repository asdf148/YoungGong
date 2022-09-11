export class JoinUserDTO {
  constructor(init?: Partial<JoinUserDTO>) {
    Object.assign(this, init);
  }

  name!: string;
  email!: string;
  password!: string;
}
