let searchBtn = document.getElementById("presshit");
let searchIpt = document.getElementById("country-inp");

function showhide() {
  document.getElementById("two-d").style.display = "flex";
}

searchBtn.addEventListener("click", () => {
  let countryName = searchIpt.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img">
      <h2>${data[0].name.common}</h2>
      <div class="wrapper">
  <div class="data-wrapper">
      <h4>Capital :</h4>
      <span>${data[0].capital[0]}</span>
  </div>
</div>
<div class="wrapper">
  <div class="data-wrapper">
      <h4>Continent :</h4>
      <span>${data[0].continents[0]} </span>
  </div>
</div>
<div class="wrapper">
  <div class="data-wrapper">
      <h4>Sub-Region :</h4>
      <span>${data[0].subregion} </span>
  </div>
</div>
<div class="wrapper">
  <div class="data-wrapper">
      <h4>Population :</h4>
      <span>${data[0].population}</span>
  </div>
</div>
<div class="wrapper">
  <div class="data-wrapper">
      <h4>Currency :</h4>
      <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${
        Object.keys(data[0].currencies)[0]
      }</span>
     </div>
    </div>
     <div class="wrapper">
     <div class="data-wrapper">
      <h4>Currency Symbol :</h4>
      <span>${data[0].currencies[Object.keys(data[0].currencies)].symbol}
    </span>
     </div>
     </div>
       <div class="wrapper">
       <div class="data-wrapper">
      <h4>Common Languages :</h4>
      <span>${Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(", ")}</span>
       </div>

      `;
    });
});
