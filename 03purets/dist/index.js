"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "";
    }
    // email: string = "";
    // name: string = "";
    // constructor(email: string, name: string) {
    //   this.email = email;
    //   this.name = name;
    // }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        else {
            this._courseCount = courseNumber;
        }
    }
    deleteToken() {
        return 'Token deleted';
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const elias = new User("elias@elias.com", "Elias");
