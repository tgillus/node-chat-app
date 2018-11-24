const moment = require("moment");

const someTimestamp = moment().valueOf();
const date = moment(someTimestamp);

console.log(date.format("YYYY h:mm a"));