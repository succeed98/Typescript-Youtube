// const User = {
//   name: "Elias", 
//   email: "elias@gmail.com", 
//   isActive: true
// }

// function createUser({ name: string, isPaid: boolean }) {
  
// } 

// function createCourse({}): {name: string, price: number} {
//   return {name: "reactjs", price: 200}
// }

// createUser({ name: "elias", isPaid: false })

// let newUser = { name: "elias", price: 300, email: "elias@gmail.com" }

// createCourse(newUser);

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean
// }

// function createUser(user: User): User {
//   return user;
// }

// createUser({name: "", email: "", isActive: true})

type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  creditCardDetails?: number
}

let myUser: User = { 
  _id: "1234", 
  name: "elias", 
  email: "e@e.com", 
  isActive: false,
}

myUser.email = "elias@gmail.com"
// myUser._id = "3949"

myUser = {
  _id: "1234",
  name: "elias",
  email: "e@e.com",
  isActive: false
};

type cardNumber = {
  cardnumber: String
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}



export {}