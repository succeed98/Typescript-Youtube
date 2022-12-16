var score = 33;
score = 44;
score = "33";
var elias = { name: "elias", id: 33 };
elias = { username: "fourteen98", id: 21 };
// function getDbId(id: number | string) {
//   console.log(`DB is is: ${id}`)
// }
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id + 2;
    }
}
var data = [1, 2, 3,];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, "3"];
var pi = 3.14;
pi = 3.14;
var seatAllotment;
// seatAllotment = "crew"
seatAllotment = "aisle";
