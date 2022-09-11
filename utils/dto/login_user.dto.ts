export class LoginUserDTO {
  constructor(init?: Partial<LoginUserDTO>) {
    Object.assign(this, init);
  }

  email!: string;
  password!: string;
}
