const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  //ตรวจสอบ value ของ parameter เทียบกับค่าใน array
  //สร้าง 2 เงื่อนไข 1.ไม่ซ้ำให้เพิ่มใน array 2.ซ้ำ ให้แสดง value และตำแหน่งที่ซ้ำ
  // console.log(!carCollection.includes(carBrand));
  if (!carCollection.includes(carBrand)) {
    carCollection.push(carBrand);
    return `New car collection is: ${carCollection}.`;
  } else {
    // console.log(carCollection.indexOf(carBrand));
    return `${carBrand} already exists in position ${
      carCollection.indexOf(carBrand) + 1
    } of the car collection.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
