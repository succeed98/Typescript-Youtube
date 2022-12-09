let score: number | string = 33; 

score = 44; 
score = "33";

type User = {
  name: string;
  id: number
}

type Admin = {
  username: string;
  id: number
}

let elias: User | Admin = { name: "elias", id: 33 }
elias = { username: "fourteen98", id: 21 }

// function getDbId(id: number | string) {
//   console.log(`DB is is: ${id}`)
// }

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase()
  }
  if (typeof id === "number") {
    id + 2
  }
}

const data: number[] = [1, 2, 3,]
const data2: string[] = ["1", "2", "3"]
const data3: (number | string)[] = [1, 2, "3"]

let pi: 3.14 = 3.14
pi = 3.14

let seatAllotment: "aisle" | "middle" | "windo"
// seatAllotment = "crew"
seatAllotment = "aisle"


