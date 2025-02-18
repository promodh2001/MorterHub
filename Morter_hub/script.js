//document.addEventListener("DOMContentLoaded", function () {
   // const searchBar = document.querySelector(".search-bar input");
   // const vehicleCards = document.querySelectorAll(".vehicle-card");

    //searchBar.addEventListener("keyup", function () {
       // let searchValue = searchBar.value.toLowerCase();

       // vehicleCards.forEach((card) => {
           // let category = card.getAttribute("data-category").toLowerCase();
            
           // if (category.includes(searchValue)) {
                //card.style.display = "block"; // Show matching vehicles
           // } else {
              //  card.style.display = "none"; // Hide non-matching vehicles
          //  }
        //});
   // });
//});


document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar input");
    const vehicleCards = document.querySelectorAll(".vehicle-card");
    const vehicleContainer = document.querySelector(".vehicle-showcase"); 

    // Create a "Not Found" message (hidden by default)
    let notFoundMessage = document.createElement("p");
    notFoundMessage.textContent = "No matching vehicles found.";
    notFoundMessage.style.display = "none";
    notFoundMessage.style.textAlign = "center";
    notFoundMessage.style.fontSize = "18px";
    notFoundMessage.style.color = "red";
    notFoundMessage.id = "not-found-message";
    vehicleContainer.appendChild(notFoundMessage);

    searchBar.addEventListener("keyup", function () {
        let searchValue = searchBar.value.toLowerCase();
        let hasMatch = false;

        vehicleCards.forEach((card) => {
            let category = card.getAttribute("data-category").toLowerCase();

            if (category.includes(searchValue)) {
                card.style.display = "block"; // Show matching vehicles
                hasMatch = true;
            } else {
                card.style.display = "none"; // Hide non-matching vehicles
            }
        });

        // Show "Not Found" message if no matches
        if (!hasMatch) {
            notFoundMessage.style.display = "block";
        } else {
            notFoundMessage.style.display = "none";
        }
    });
});



