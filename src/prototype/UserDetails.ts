interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

export class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}
