export class DatabaseUser {
  constructor(init?: Partial<DatabaseUser>) {
    Object.assign(this, init);
  }

  userId!: number;
  userName!: string;
  avatarUrl?: string;
}
