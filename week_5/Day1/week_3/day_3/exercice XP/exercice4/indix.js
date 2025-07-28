function hotelCost(nights) {
  if (typeof nights !== "number" || nights <= 0) throw new Error("Invalid number of nights");
  return nights * 140;
}

function planeRideCost(destination) {
  if (typeof destination !== "string" || destination.trim() === "") throw new Error("Invalid destination");
  
  destination = destination.toLowerCase();
  
  if (destination === "london") return 183;
  if (destination === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  if (typeof days !== "number" || days <= 0) throw new Error("Invalid number of days");
  
  let cost = days * 40;
  if (days > 10) {
    cost *= 0.95;
  }
  return cost;
}

function totalVacationCost() {
  let nights, destination, days;
  
  do {
    nights = Number(prompt("How many nights would you like to stay at the hotel?"));
  } while (isNaN(nights) || nights <= 0);

  do {
    destination = prompt("Where is your destination?");
  } while (!destination || typeof destination !== "string" || destination.trim() === "");

  do {
    days = Number(prompt("How many days would you like to rent the car?"));
  } while (isNaN(days) || days <= 0);

  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
  return hotel + plane + car;
}

