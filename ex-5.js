let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Theodora Milenko",
];

crimeRecordNames = crimeRecordNames.filter(
  (item, index) => crimeRecordNames.indexOf(item) === index
);

function searchCrimeRecord(name) {
  // Start coding here
  const isCrime = crimeRecordNames.filter((item) => {
    return item === name;
  });
  if (isCrime.length >= 1) {
    return `${isCrime} has a crime!!!`;
  } else {
    return `${name} has no crime`;
  }
}

console.log(searchCrimeRecord("Theodora Milenko"));
console.log(searchCrimeRecord("Mahalia Priyanka"));

console.log(searchCrimeRecord("Ruj"));
console.log(searchCrimeRecord("DF Bright"));
