function bulgeBlock(block) {
    block.classList.add("bulged"); // Add the 'bulged' class to enlarge the block
}

function resetBlock(block) {
    block.classList.remove("bulged"); // Remove the 'bulged' class to reset the block
}
function resetForm() {
    document.getElementById("signupForm").reset();
    document.getElementById("defaultCity").selected = true;
}

// Password match check


function validateForm() {
    var city = document.getElementById("city").value;
    var signupButton = document.getElementById("signupButton");
    
    if (city === null || city === "") {
        alert("Please select your city.");
        signupButton.disabled = true;
        return false;
    }
    
    signupButton.disabled = false;
    return true;
}

    function filterAndRedirect() {
        var selectedService = document.getElementById("serviceSelect").value;

        // Create the URL with the selected service as a query parameter
        let url = "tr?service=" + selectedService;

        // Redirect to the service providers directory page
        window.location.href = url;
        
    }
    
    function selectService(service) {
        // Create the URL with the selected service as a query parameter
        let url = "tr?service=" + service;

        // Redirect to the service providers directory page
        window.location.href = url;
    }
    function getQueryParam(name) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        return urlSearchParams.get(name);
    }

    // Function to filter providers based on the selected service// Function to filter providers based on the selected service
    function filterProviders() {
        var selectedService = getQueryParam("service");
        var cards = document.querySelectorAll(".card");

        cards.forEach(function (card) {
            var services = card.getAttribute("data-services");
            console.log(selectedService);
            if (selectedService === "all" || services.includes(selectedService)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

  
    



