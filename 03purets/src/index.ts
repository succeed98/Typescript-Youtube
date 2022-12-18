class User {

  protected _courseCount = 1;
  readonly city: string = "";

  constructor(
    public email: string,
    public name: string,
    // private userId: string
  ) {

  }

  // email: string = "";
  // name: string = "";
  // constructor(email: string, name: string) {
  //   this.email = email;
  //   this.name = name;
  // }

  get getAppleEmail(): string {

    return `apple${this.email}`
  }

  get getCourseCount(): number {
    return this._courseCount
  }

  set setCourseCount(courseNumber: number) {
    if (courseNumber <= 1) {
      throw new Error("Course count should be more than 1");
    } else {
      this._courseCount = courseNumber;
    }
  }

  private deleteToken() {
    return 'Token deleted';
  }

}

class SubUser extends User {
  isFamily: boolean = true
  changeCourseCount() {
    this._courseCount = 4
  }
}

const elias = new User("elias@elias.com", "Elias");
