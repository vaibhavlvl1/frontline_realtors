import allProperties from "../properties/properties.js";

const propertyList = document.getElementById("all-property-list");

// support function for generate card

function determineForRentSale(for_sale) {
  let result;
  if (for_sale == false) {
    result = "Rent";
  } else {
    result = "Sale";
  }
  return result;
}

// generates cards

function generateCard(property) {
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("col-md-6");

  let forRentorSale = determineForRentSale(property.for_sale);

  cardContainer.innerHTML = `<div class="all-properties-card">
                <div class="all-card-image">
                  <img src=${property.thumb_img} alt="" />
                </div>
                <div class="all-card-content-container">
                  <div class="all-card-content">
                    <p class="all-title">${property.property_name}</p>
                    <p class="all-type">${property.property_type}</p>
                    <p class="all-location">${property.location} Pune</p>
                    <p class="all-property-type">${forRentorSale} @ ${property.price} rs</p>
                    <p class="all-icons">
                      <i class="fa-solid fa-bed" style="color: #2a5298"></i> : ${property.bedrooms}
                      &nbsp;
                      <i class="fa-solid fa-bath" style="color: #2a5298"></i> : ${property.bathrooms}
                    </p>
                  </div>
                  <button id="click-for-details">Click For Details <i class="fa-solid fa-caret-right"></i></button>
                </div>
                
              </div>`;
  return cardContainer;
}

// displays all  properties

function displayAllProperties(allProps) {
  allProps.forEach((property) => {
    let propertyCard = generateCard(property);
    propertyList.appendChild(propertyCard);
  });
}

function displayFilteredProperties(
  filterPropType,
  filterlocation,
  filterBedrooms,
  filterRentSale
) {
  propertyList.innerHTML = "";

  const filteredProperties = allProperties.filter((prop) => {
    let rent_sale = prop.for_sale ? "sale" : "rent";
    return (
      (!filterPropType || filterPropType === prop.property_type) &&
      (!filterlocation || filterlocation === prop.location) &&
      (!filterBedrooms || filterBedrooms == prop.bedrooms) &&
      (!filterRentSale || filterRentSale === rent_sale)
    );
  });

  if (filteredProperties.length > 0) {
    filteredProperties.forEach((prop) => {
      let filteredCard = generateCard(prop);
      propertyList.appendChild(filteredCard);
    });
  } else {
    propertyList.innerHTML =
      "<p class='fs-3'>No properties found matching your criteria.</p>";
  }
}

// displayAllProperties(allProperties);

window.displayControl = function () {
  let filterPropType = document.getElementById("property_type").value;
  let filterlocation = document.getElementById("location").value;
  let filterBedrooms = document.getElementById("no-of-bedrooms").value;
  let filterRentSale = document.getElementById("rentorsale").value;

  if (
    filterBedrooms !== "" ||
    filterlocation !== "" ||
    filterPropType !== "" ||
    filterRentSale !== ""
  ) {
    displayFilteredProperties(
      filterPropType,
      filterlocation,
      filterBedrooms,
      filterRentSale
    );
  } else {
    displayAllProperties(allProperties);
  }
};

displayControl();
