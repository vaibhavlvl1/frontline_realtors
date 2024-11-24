import featuredProperties from "../properties/propertiesFeatured.js";
// import properties from "../properties/propertiesFeatured.js";

// code to  generate card from object

let propertySlider = document.querySelector(".owl-carousel");

function generateCard(propertyObject) {
  let item = document.createElement("div");
  item.classList.add("item");

  let card = document.createElement("div");
  card.classList.add("card");

  let thumb_image = document.createElement("img");
  thumb_image.src = propertyObject.thumb_img;

  let property_price = document.createElement("p");
  property_price.classList.add("property-price", "property-card-overlay");
  property_price.innerHTML = propertyObject.price;

  let property_action;
  if (propertyObject.for_sale == true) {
    property_action = "sale";
  } else {
    property_action = "Rent";
  }

  let service_type = document.createElement("p");
  service_type.innerHTML = property_action;
  if (property_action == "sale") {
    service_type.style.backgroundColor = "#6a0e2e";
  }
  service_type.classList.add("property-status", "property-card-overlay");

  let featured = document.createElement("p");
  featured.innerHTML = "Featured";
  featured.classList.add("property-featured", "property-card-overlay");

  let card_content = document.createElement("div");
  card_content.classList.add("card-content");

  //   card content elements

  let property_title = document.createElement("h4");
  property_title.innerHTML = propertyObject.property_name;
  property_title.classList.add("property-title");

  let propertyIcons = document.createElement("p");
  propertyIcons.classList.add("property-icons");

  propertyIcons.innerHTML = `<i class="fa-solid fa-bed" style="color: #2a5298"></i> : ${propertyObject.bedrooms}
                    &nbsp;
                    <i class="fa-solid fa-bath" style="color: #2a5298"></i> :${propertyObject.bathrooms}
                    &nbsp;
                    <i class="fa-solid fa-maximize" style="color: #2a5298"></i>
                    :${propertyObject.area}`;

  let location = document.createElement("p");
  location.innerHTML = `<span style="color: #2a5298; font-weight: 600"
                      >LOCATION</span
                    >
                    : ${propertyObject.location}`;
  location.classList.add("text-center");

  let readMoreButton = document.createElement("button");
  readMoreButton.classList.add("card-read-more");
  readMoreButton.innerHTML = "<span>Read More</span>";

  card_content.appendChild(property_title);
  card_content.appendChild(propertyIcons);
  card_content.appendChild(location);
  card_content.appendChild(readMoreButton);

  card.appendChild(thumb_image);
  card.appendChild(property_price);
  card.appendChild(service_type);
  card.appendChild(featured);
  card.appendChild(card_content);

  item.appendChild(card);

  return item;
}

featuredProperties.forEach((featuredProperty) => {
  let propertyItem = generateCard(featuredProperty);
  propertySlider.appendChild(propertyItem);
});
