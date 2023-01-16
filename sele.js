const summary = [{"status":"Uang Masuk","total":"241770"},{"status":"Uang Keluar","total":"410913"}];
const doubled = summary.map((number) => number.total);
console.log(parseInt(doubled[1]));