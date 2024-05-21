const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  const incomingCar = carBrand.toLowerCase()
  const allCars = carCollection.map((item) => {
    return item;
  });


  if (allCars.includes(incomingCar)) {
    return `${incomingCar} already exists in position ${carCollection.indexOf(
      incomingCar
    )} of the car collection`;
  }
  else if(incomingCar.length <= 0 ){
    return "Please enter new car"
  }
  else {
    allCars.push(incomingCar)
    return `New car collection is: ${allCars}`;
  }
}

console.log(updateCarCollection(""))
console.log(updateCarCollection("bmw"))

console.log(updateCarCollection("audi"))
console.log(updateCarCollection("Bat Mobile"))
