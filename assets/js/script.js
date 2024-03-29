const header = document.querySelector("header");
window.addEventListener("scroll",() => {
    header.classList.toggle("sticky",window.scrollY>0)
});
const headerMenu = document.querySelector(".header__menu"),
menuBtn = document.querySelector(".menu-btn"),
headerMenuItems = headerMenu.querySelectorAll("nav ul");

menuBtn.addEventListener("click",() => {
   headerMenu.classList.toggle("show") ;  
});

            document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
              event.preventDefault(); // Prevent the form from submitting traditionally
          
              // Get the user's email input
              var emailInput = document.getElementById("email").value;
          
              // Validate the email address (you may want to use a more robust validation)
              if (isValidEmail(emailInput)) {
                // For simplicity, you can use an alert as a confirmation
                alert("Subscription successful!");
          
                // Alternatively, you can update the DOM to display a confirmation message
                document.getElementById("confirmationMessage").innerHTML = "Subscription successful!";
              } else {
                // Handle invalid email address
                alert("Please enter a valid email address.");
              }
            });
          
            // Function to validate email address (basic validation)
            function isValidEmail(email) {
              var emailRegex = /\S+@\S+\.\S+/;
              return emailRegex.test(email);
            }
         