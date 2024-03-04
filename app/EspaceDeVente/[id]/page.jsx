import React from "react";

export async function getCar(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/Cars/${id}`, {
      cache: "no-store",
    });
    return res.json();
  } catch (err) {
    console.log("Failed to get Car Data", err);
  }
}

async function page({ params }) {
  let carsData = {}
const response = await getCar(params.id);
carsData = response.foundCars;

  return (
    <div>
      
        <div>
          <p> oui:{carsData._id} </p>
          <p>  {carsData.name}</p>
          <p> no:{params.id} </p>
        </div>
      
    </div>
  );
}

export default page;
