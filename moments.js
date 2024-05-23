function selectPhilippines () {
let philippinesTime = moment ()
.tz("Asia/Manila")
.format ("dddd, MMMM Do YYYY hh:mm a");
}

alert (`It is ${philippinesTime} in Philippines`);
