interface User {
  readonly dbId: number
  email: string, 
  userId: number,
  googleId?: string,
  startTrail(): string,
  getCoupon(couponName: string, value: number): number 
}
// const elias: User = {
//   email: "elias@gmail.com",
//   userId: 2933,
//   dbId: 21,
//   startTrail: () => {
//     return "trail started";
//   },
//   getCoupon(name: "Elias", value: 9393) {
//       return 10
//   },
// }

// reopening interfaces
interface User {
  gitHubToken: string
}
const deen: User = {
  dbId: 22, 
  email: "deen@gmail.com",
  userId: 949383,
  gitHubToken: "github", 
  startTrail: () => {
    return "trail started"
  },
  getCoupon: () => {
    return 11
  }

}

// inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner"
}