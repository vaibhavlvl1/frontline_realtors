import allProperties from "../properties/properties.js";

const urlParams = new URLSearchParams(window.location.search);
const property_id = urlParams.get("id");

let selected_property = allProperties.filter(
  (property) => property.id == property_id
);

const generatePage = function (selected_property) {
  const prop_title = selected_property[0].property_name;
  const prop_description = selected_property[0].description;
  const prop_id = selected_property[0].id;
  const prop_status = selected_property[0].for_sale ? "Sale" : "Rent";
  const prop_price = selected_property[0].price;
  const prop_type = selected_property[0].property_type;
  const prop_built_year = selected_property[0].year_built;
  const prop_bedrooms = selected_property[0].bedrooms;
  const prop_bathrooms = selected_property[0].bathrooms;
  const prop_area = selected_property[0].area;
  const prop_parking = selected_property[0].parking;
  const prop_furnishing = selected_property[0].furnished;
  const prop_address = selected_property[0].address;
  const imageList = selected_property[0].images;
  const amenitiesList = selected_property[0].amenities;
  const thumbnail = selected_property[0].thumb_img;

  document.querySelector(
    ".carousel-inner"
  ).innerHTML = `<div class="carousel-item active">
              <a href="${thumbnail}">
                <img
                  src="${thumbnail}"
                />
              </a>
            </div>`;

  imageList.forEach((image) => {
    let carouselImage = document.createElement("div");
    carouselImage.classList.add("carousel-item", "active");
    carouselImage.innerHTML = `<a href="${image}">
                <img
                  src="${image}"
                />
              </a>`;
    document.querySelector(".carousel-inner").appendChild(carouselImage);
  });

  document.getElementById("det-property-title").innerHTML = prop_title;
  document.getElementById("property-details-para").innerHTML = prop_description;
  document.getElementById("det-prop-id").innerHTML = prop_id;
  document.getElementById("det-prop-status").innerHTML = prop_status;
  document.getElementById("det-prop-price").innerHTML = prop_price;
  document.getElementById("det-prop-type").innerHTML = prop_type;
  document.getElementById("det-prop-built-year").innerHTML = prop_built_year;
  document.getElementById("det-prop-bedrooms").innerHTML = prop_bedrooms;
  document.getElementById("det-prop-bathrooms").innerHTML = prop_bathrooms;
  document.getElementById("det-prop-area").innerHTML = prop_area;
  document.getElementById("det-prop-parking").innerHTML = prop_parking;
  document.getElementById("det-prop-furnishing").innerHTML = prop_furnishing;
  document.getElementById("det-prop-address").innerHTML = prop_address;

  amenitiesList[0].forEach((amenity) => {
    console.log(amenity);
    let listItem = document.createElement("li");
    listItem.innerHTML = amenity;
    document.getElementById("det-prop-amenities").innerHTML = listItem;
  });
};

generatePage(selected_property);
