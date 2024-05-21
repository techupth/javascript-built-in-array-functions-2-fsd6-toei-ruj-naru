let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];

function searchCrimeRecord(name) {
  // Start coding here
  //เปรียบเทียบ name กับ value ใน array'crimeRecordNames'
  // console.log(crimeRecordNames.includes(name));
  //ส่งออกข้อความแบบมี 2 เงื่อนไข
  return crimeRecordNames.includes(name)
    ? `${name} has a crime record!!!`
    : `${name} has no crime record.`;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"
