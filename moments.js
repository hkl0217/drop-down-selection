function chosenCounty(event) {
    let chosenCountry = event.target.value;
    let selectedCountry = moment()
      .tz(`${chosenCountry}`)
      .format("dddd, MMMM DD YYYY hh:mm a");
    alert(`It is ${selectedCountry} in ${chosenCountry}`);
  }

  let countries = document.querySelector("#selected-countries");
  countries.addEventListener ("click", chosenCountry);
