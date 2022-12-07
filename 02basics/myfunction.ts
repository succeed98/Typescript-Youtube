function addTwo(num: number): number {
  return num + 2
}

function getUpper(val: string) {
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean) {
  
}

let logInUser = (name: string, email: string, paid: boolean = true) => {}

let myVal = addTwo(5)
getUpper("Elias")
signUpUser("Elias", "elias@gmail.com", "28384", true)
logInUser("elias", "elias@gmail.com")

function getValue(myVal: number) {
  if (myVal > 5) {
    return true
  }
  return "200 OK"
}

const gettHello = (s: string):string => {
  return ""
}

const heroes = ["thor", "spiderman", "ironman"]
// const heroes = [1, 2, 4]

heroes.map((hero): string => { return `hero is ${hero}` })


function consoleError(errmsg): void {
  console.log(errmsg)
}

function handleError(errmsg: string): never {
  throw new Error(errmsg)
}

export { }